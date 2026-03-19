"use server";

import { headers } from "next/headers";

const sanitize = (str: string) => {
  if (!str) return "";
  // Heavy-duty strip: remove HTML tags & trim
  return str.replace(/<[^>]*>?/gm, '').trim();
};

export async function sendMissionSignal(formData: FormData) {
  const formspreeId = process.env.FORMSPREE_ID;
  const headerList = await headers();
  const ip = headerList.get('x-forwarded-for') || '0.0.0.0';
  
  // Tactical Uplink Logging (Audit Trail)
  console.log(`[UPLINK_ACTIVITY] SIGNAL_FROM: ${ip} | TIME: ${new Date().toISOString()} | MONITORING_ACTIVE`);

  if (!formspreeId) {
    console.error("MISSION_SIGNAL_ERROR: FORMSPREE_ID_NOT_FOUND_IN_VAULT.");
    return { success: false, error: "TECHNICAL_FAILURE: UPLINK_CONFIG_MISSING." };
  }

  // Industrial Sanitization Sequence
  const sanitizedData = new FormData();
  formData.forEach((value, key) => {
    if (typeof value === 'string') {
      sanitizedData.append(key, sanitize(value));
    } else {
      sanitizedData.append(key, value);
    }
  });

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      body: sanitizedData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      console.log(`[UPLINK_SUCCESS] DISPATCH_COMPLETED_FOR_NODE: ${ip}`);
      return { success: true };
    } else {
      const data = await response.json();
      console.warn(`[UPLINK_REJECTION] SIGNAL_FAILED: ${ip} | STATUS: ${response.status}`);
      return { success: false, error: data.error || "TRANSMISSION_FAILED." };
    }
  } catch (err) {
    console.error(`[UPLINK_CRITICAL_FAILURE] GRID_TIMEOUT: ${ip} | ${err}`);
    return { success: false, error: "UPLINK_TIMEOUT: NETWORK_CONGESTION." };
  }
}
