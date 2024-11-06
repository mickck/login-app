"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
  success?: boolean;
}

export default function FormButton({ text, success }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        disabled={pending || success === true}
        className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
      >
        {pending ? "Loading" : text}
      </button>
      {success === true ? (
        <div className="mt-5 bg-white rounded-md text-green-600 text-center font-bold text-lg py-3 transition-all">
          Welcome back!
        </div>
      ) : null}
    </>
  );
}
