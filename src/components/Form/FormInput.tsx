import { title } from "process";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

export default function FormInput({ title, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{title}</label>
      <input
        {...props}
        className="rounded-md border-2 border-black/5  hover:border-primary px-4 py-2 w-full"
      ></input>
    </div>
  );
}
