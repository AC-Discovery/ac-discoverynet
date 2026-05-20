import { Resend } from "resend";

let resend;

function getResend() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not set");
    resend = new Resend(apiKey);
  }
  return resend;
}

function getFrom() {
  const from = process.env.RESEND_FROM_EMAIL;
  if (!from) throw new Error("RESEND_FROM_EMAIL is not set");
  return from;
}

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(fields) {
  const rows = fields
    .filter(([, value]) => value != null && String(value).trim() !== "")
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:8px 0">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `<table style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;color:#111">${rows}</table>`;
}

export async function sendFormEmail({ to, subject, replyTo, fields }) {
  const { data, error } = await getResend().emails.send({
    from: getFrom(),
    to,
    subject,
    replyTo,
    html: buildHtml(fields),
  });

  if (error) throw new Error(error.message);
  return data;
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value ?? "").trim());
}
