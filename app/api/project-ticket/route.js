import { isValidEmail, sendFormEmail } from "@/lib/email";

const LABELS = {
  requestType: "Request Type",
  requestorName: "Requestor Name",
  requestorPhone: "Requestor Phone",
  requestorEmail: "Requestor Email",
  clientMatterInfo: "Client Matter Information",
  urgency: "Urgency",
  billingPartner: "Billing Partner",
  clientNameTitle: "Client Name & Title",
  clientCompanyAddress: "Client Company Address",
  clientContactEmail: "Client Contact Email",
  clientContactPhone: "Client Contact Phone",
  caseDescription: "Brief Case Description",
  caseCaptionShort: "Case Caption Short Description",
  estimatedCustodians: "Estimated Number of Custodians",
  hostingDuration: "Expected Duration for Data Hosting",
  platformPreferred: "Platform Preferred",
  otherPlatform: "Other Platform",
};

const REQUIRED = [
  "requestType",
  "requestorName",
  "requestorPhone",
  "requestorEmail",
  "clientMatterInfo",
];

export async function POST(request) {
  try {
    const body = await request.json();

    for (const key of REQUIRED) {
      if (!String(body[key] ?? "").trim()) {
        return Response.json(
          { error: `${LABELS[key]} is required.` },
          { status: 400 }
        );
      }
    }

    if (!isValidEmail(body.requestorEmail)) {
      return Response.json(
        { error: "A valid requestor email is required." },
        { status: 400 }
      );
    }

    if (body.clientContactEmail?.trim() && !isValidEmail(body.clientContactEmail)) {
      return Response.json(
        { error: "Client contact email is invalid." },
        { status: 400 }
      );
    }

    const to = process.env.PROJECT_TICKET_TO_EMAIL;
    if (!to) {
      console.error("PROJECT_TICKET_TO_EMAIL is not set");
      return Response.json(
        { error: "Email is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const fields = Object.entries(LABELS).map(([key, label]) => [
      label,
      body[key],
    ]);

    await sendFormEmail({
      to,
      subject: `Project ticket: ${body.requestorName.trim()}`,
      replyTo: body.requestorEmail.trim(),
      fields,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Project ticket email error:", err);
    return Response.json(
      { error: "Failed to submit your ticket. Please try again." },
      { status: 500 }
    );
  }
}
