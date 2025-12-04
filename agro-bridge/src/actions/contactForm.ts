
"use server";

import { MailtrapClient } from "mailtrap";

const token = process.env.MAILTRAP_API_TOKEN;
const senderEmail = process.env.MAILTRAP_SENDER_EMAIL;

export async function submitContactForm(formData: {
  fullName: string;
  email: string;
  message: string;
}) {
  if (!token || !senderEmail) {
    return { ok: false, error: "Mailtrap env missing" };
  }

  const mailtrap = new MailtrapClient({ token });

  try {
    await mailtrap.send({
      from: { name: formData.fullName, email: senderEmail },
      to: [{ email: senderEmail }],
      subject: `New Contact From ${formData.fullName}`,
      text: `
        Name: ${formData.fullName}
        Email: ${formData.email}

        Message:
        ${formData.message}
      `.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    return { ok: true };
  } catch (error: any) {
    return { 
      ok: false, 
      error: error.message 
    };
  }
}

