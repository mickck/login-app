"use server";

import { redirect } from "next/navigation";

import { z } from "zod";
//need to create schema to validate to z

const emailValidate = (email: string) => email.endsWith("@zod.com");

const formSchema = z.object({
  username: z.string().trim().min(5),
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(emailValidate, "Need zod.com domain to register"),
  password: z
    .string()
    .min(10)
    .regex(/\d/, "Password must include at least 1 number."),

  // Allow success to be string, null, or undefined
  success: z.boolean().optional().nullable(),
});

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (formData.get("password") === "12345") {
    return {
      success: true,
    };
  } else {
    return {
      errors: { password: ["Wrong password."] }, // Modify error message format
    };
  }
}

export async function checkAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors };
  } else {
    // When the fonm submits success, return the success property to make the client aware of the status.
    return { success: true };
  }
}
