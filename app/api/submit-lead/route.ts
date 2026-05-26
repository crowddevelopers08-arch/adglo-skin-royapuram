export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';

interface LeadInput {
  name: string;
  phone: string;
  location?: string;
  treatment?: string;
  source?: string;
  pageUrl?: string;
  liveUrl?: string;
}

function isValidIndianPhone(raw: string) {
  const digits = raw.replace(/[\s\-()\+]/g, '');
  const cleaned = digits.replace(/^(91|0)/, '');
  return /^[6-9]\d{9}$/.test(cleaned);
}

function isValidName(raw: string) {
  return raw.trim().length >= 2;
}

async function appendToGoogleSheet(data: LeadInput) {
  const endpoint = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!endpoint) throw new Error('GOOGLE_SHEETS_WEBHOOK_URL is not set');

  const payload = {
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    name: data.name.trim(),
    phone: data.phone.replace(/[\s\-()\+]/g, '').replace(/^(91|0)/, ''),
    location: data.location?.trim() || 'Not specified',
    treatment: data.treatment?.trim() || 'Not specified',
    source: data.source || 'AdGlo Skin - Website Form',
    liveUrl: data.liveUrl || data.pageUrl || '',
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10_000);

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timer);
    const text = await res.text();

    try {
      return text ? JSON.parse(text) : { success: true };
    } catch {
      return { success: true };
    }
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

async function sendToTeleCRM(data: LeadInput) {
  const endpoint = process.env.TELECRM_API_URL;
  if (!endpoint) throw new Error('TELECRM_API_URL is not set');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  const createdOn = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const payload = {
    fields: {
      Id: '',
      name: data.name.trim(),
      email: '',
      phone: data.phone.replace(/\D/g, ''),
      city_1: data.location?.trim() || 'Anna Nagar, Chennai',
      preferredtime: '',
      preferreddate: '',
      message: `Consultation enquiry - ${data.treatment || 'Skin Treatment'} at AdGlo Skin Clinic`,
      select_the_procedure: data.treatment || '',
      Country: 'India',
      LeadID: '',
      CreatedOn: createdOn,
      'Lead Stage': '',
      'Lead Status': 'new',
      'Lead Request Type': 'consultation',
      PageName: data.liveUrl || data.pageUrl || data.source || 'adglo-skin-royapuram',
      State: 'Tamil Nadu',
      Age: '',
    },
    actions: [
      { type: 'SYSTEM_NOTE', text: `Lead Source: ${data.source || 'adglo-skin-royapuram'}` },
      { type: 'SYSTEM_NOTE', text: `Live URL: ${data.liveUrl || data.pageUrl || 'Not provided'}` },
      { type: 'SYSTEM_NOTE', text: `Treatment: ${data.treatment || 'Not specified'}` },
      { type: 'SYSTEM_NOTE', text: `Location: ${data.location || 'Anna Nagar, Chennai'}` },
      { type: 'SYSTEM_NOTE', text: 'Consent Given: Yes' },
    ],
  };

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TELECRM_API_KEY}`,
        'X-Client-ID': 'adglo-skin-royapuram',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.status === 204) {
      return { status: 'success', message: 'Lead created (204)' };
    }

    const text = await res.text();

    if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
      throw new Error('TeleCRM returned an HTML response - check the API URL');
    }

    const json = text ? JSON.parse(text) : {};
    if (!res.ok) throw new Error(json.message || `TeleCRM HTTP ${res.status}`);
    return json;
  } catch (err) {
    clearTimeout(timeout);
    throw err instanceof Error ? err : new Error(String(err));
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const {
    name = '',
    phone = '',
    location = '',
    treatment = '',
    pageUrl = '',
  } = body;

  if (!name.trim()) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  }

  if (!isValidName(name)) {
    return NextResponse.json({ error: 'Name should contain at least 2 characters.' }, { status: 400 });
  }

  if (!phone.trim()) {
    return NextResponse.json({ error: 'Please enter your phone number.' }, { status: 400 });
  }

  if (!isValidIndianPhone(phone)) {
    return NextResponse.json(
      { error: 'Please enter a valid 10-digit Indian mobile number.' },
      { status: 400 }
    );
  }

  const leadData: LeadInput = {
    name,
    phone,
    location,
    treatment,
    source: 'adglo-skin-royapuram',
    pageUrl: pageUrl || undefined,
    liveUrl: pageUrl || undefined,
  };

  const [sheetResult, crmResult] = await Promise.allSettled([
    appendToGoogleSheet(leadData),
    sendToTeleCRM(leadData),
  ]);

  if (sheetResult.status === 'rejected') {
    console.error('[Google Sheets] Error:', sheetResult.reason?.message);
  }

  if (crmResult.status === 'rejected') {
    console.error('[TeleCRM] Error:', crmResult.reason?.message);
  }

  return NextResponse.json(
    {
      success: true,
      sheet: sheetResult.status === 'fulfilled' ? 'ok' : 'failed',
      crm: crmResult.status === 'fulfilled' ? 'ok' : 'failed',
      timestamp: new Date().toISOString(),
    },
    { status: 201 }
  );
}
