import { InputHTMLAttributes } from "react";

interface FormInputProps {
  name: string;
  errors?: string[];
}

export default function FormInput({
  name,
  errors,
  ...rest
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full h-8 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-green-500 border-none placeholder:text-neutral-400 px-4"
        {...rest}
      />
      {errors?.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
