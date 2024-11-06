"use client";

import { useFormState } from "react-dom";
import { checkAccount } from "./action";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";

export default function Login() {
  const [state, dispatch] = useFormState(checkAccount, null);
  console.log(state);
  return (
    <div className="flex flex-col gap-10 py-8 px6 w-[85%] max-w-md">
      <div className="flex flex-col gap-2 font-medium">
        <h1 className="text-2xl">Hello! 🥑</h1>
        <h2 className="text-xl">Login in with email and password.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-4">
        <FormInput
          name="username"
          type="text"
          placeholder="Name"
          required
          errors={state?.fieldErrors?.username}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors?.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors?.password}
        />

        <FormButton text="Log in" success={!!state?.success} />
      </form>
    </div>
  );
}
