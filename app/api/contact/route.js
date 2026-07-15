import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = ["info@monetacloud.com"];
const BCC = ["websiteformoneta@gmail.com"];
const FROM = "moneta <noreply@monetacloud.com>";

const EMAIL_RE = /.+@.+\..+/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, company, message } = body || {};

  if (!name || !email || !company || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Missing or invalid required fields" }, { status: 400 });
  }

  const text = `New inquiry

Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message || "— none —"}`;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      bcc: BCC,
      replyTo: email,
      subject: `New inquiry - ${name} with ${company}`,
      text,
    });

    if (error) {
      console.error("Resend send error:", error);
      return Response.json({ error: "Failed to send message" }, { status: 500 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form send exception:", err);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
