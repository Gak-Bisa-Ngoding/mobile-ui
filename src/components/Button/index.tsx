import React from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

type ButtonProps = {
  text: string;
  type?: ButtonType;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`bg-primary w-fit text-white font-bold px-10 py-3 rounded-lg transition-all text-xl ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
