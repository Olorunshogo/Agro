
"use server";

import { z } from "zod";
import { MailtrapClient } from "mailtrap";

export interface SubscribeResult {
  success: boolean;
  message: string;
}

const MAILTRAP_SENDER_EMAIL = process.env.MAILTRAP_SENDER_EMAIL;
const MAILTRAP_API_TOKEN = process.env.MAILTRAP_API_TOKEN;

if (!MAILTRAP_SENDER_EMAIL) {
  throw new Error("Missing MAILTRAP_SENDER_EMAIL env variable")
};
if (!MAILTRAP_API_TOKEN) {
  throw new Error("Missing MAILTRAP_API_TOKEN env variable")
};

const mailtrap = new MailtrapClient({ token: MAILTRAP_API_TOKEN });

const MAILTRAP_SENDER = {
  name: "Debridger Newsletter",
  email: MAILTRAP_SENDER_EMAIL,
};


// Combined Zod schema
const subscribeFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type SubscribeFormInput = z.infer<typeof subscribeFormSchema>

// Footer Subscribe 
export async function handleSubscribe(formData: FormData): Promise<{ success: boolean; message: string }> {

  try {
    const rawData =  { email: formData.get("email") };
    const validatedData: SubscribeFormInput = subscribeFormSchema.parse(rawData);

    // Send Mailtrap email
    await mailtrap.send({
      from: MAILTRAP_SENDER,
      to: [{ email: MAILTRAP_SENDER.email }], // send to yourself/admin email
      subject: "New Newsletter Subscription",
      text: `A new subscriber has joined: ${validatedData.email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
      `,
    });
    
    return {
      success: true,
      message: "Subscription successful",
    };
  } catch (error: any) {
    console.error("Mailtrap subscription error:", error);

    let msg = "Failed to subscribe.";

    if (error?.errors?.[0]?.message) {
      // Zod validation error
      msg = error.errors[0].message;
    }

    return {
      success: false,
      message: msg,
    };
  }
}

