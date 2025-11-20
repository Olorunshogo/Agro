
"use server";

import { z } from "zod";

// Combined Zod schema
const subscribeFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type SubscribeFormInput = z.infer<typeof subscribeFormSchema>

// Footer Subscribe 
export async function handleSubscribe(formData: FormData): Promise<{ success: boolean; message: string }> {

  try {
    const rawData =  { email: formData.get("email") };
    const validatedData = subscribeFormSchema.parse(rawData);

    // FormSubmit endpoint to send email
    const response = await fetch(`https://formsubmit.co/${process.env.FORMSUBMIT_EMAIL}`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: validatedData.email,
        _subject: "New AgroBridge Subscriber",
        _captcha: "false",
        _template: "table",
      }),
    });

    if (!response.ok) {
      console.error(await response.text());
      throw new Error(`FormSubmit request failed: ${response.status}`);
    }

    return {
      success: true,
      message: "Subscription successful"
    };

  } catch (error) {
    console.error("Subscription error: ", error);
    return {
      success: false,
      message: "Failed to subscribe"
    };
  }
}

