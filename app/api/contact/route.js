import { isValidEmail, sendFormEmail } from "@/lib/email";

const LABELS = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email Address",
  phone: "Phone",
  company: "Company Name",
  comments: "Comments",
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, comments } = body;

    if (!firstName?.trim() || !lastName?.trim()) {
      return Response.json(
        { error: "First name and last name are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      console.error("CONTACT_TO_EMAIL is not set");
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
      subject: `Contact form: ${firstName.trim()} ${lastName.trim()}`,
      replyTo: email.trim(),
      fields,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form email error:", err);
    return Response.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}
