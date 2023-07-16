import React from "react";

export default function Container({
  children,
  className,
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div className={"w-[95%] mx-auto max-w-[1280px] " + className} id={id}>
      {children}
    </div>
  );
}
