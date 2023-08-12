import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  color?: "white" | "blue";
  rounded?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  rounded = true,
  color = "blue",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`transition all w-full px-4 font-semibold whitespace-nowrap py-2 ${
        rounded ? "rounded-full " : " rounded-md "
      }  ${
        variant === "primary"
          ? color === "blue"
            ? "bg-primary border-2 border-primary hover:border-transparent text-white hover:bg-primary/75 hover:scale-105"
            : "bg-white border-2 border-white hover:border-transparent hover:bg-white/50 text-primary hover:scale-105"
          : color === "blue"
          ? "bg-transparent border-primary text-primary border-2 hover:border-primary/75 hover:scale-105"
          : "bg-transparent border-white border-2 hover:borer-white/75 hover:scale-105"
      } `}
      {...props}
    >
      {children}
    </button>
  );
}
