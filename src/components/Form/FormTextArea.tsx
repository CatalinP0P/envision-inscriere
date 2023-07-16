import { title } from "process";
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
}

export default function FormTextArea({ title, ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{title}</label>
      <textarea
        {...props}
        className="rounded-md border-2 border-black/5 px-4 py-2 w-full min-h-[10em] hover:border-primary "
      ></textarea>
    </div>
  );
}
