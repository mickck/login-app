"use server";

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (formData.get("password") === "12345") {
    return {
      success: "Welcome Back!",
    };
  } else {
    return {
      errors: ["wrong password"],
    };
  }
}
