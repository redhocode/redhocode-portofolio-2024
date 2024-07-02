import React, { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";
import { Button as ButtonUI } from "../ui/button";

interface ButtonReProps {
  children: ReactNode;
  variant?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonReProps> = ({
  children,
  variant = "outline",
  className = "",
  onClick,
  type = "button",
  href,
  target = "_blank",
}) => {
  const buttonContent = (
    <ButtonUI
      className={` py-4 ${variant} ${className}`}
      onClick={onClick}
      type={type}
    
    >
      {children}
    </ButtonUI>
  );

  return href ? (
    <Link href={href} target={target}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default Button;
