import React from "react";
import { Button } from "./ui/button";

interface ButtonClickProps {
  label?: string;
  onClick?: () => void;
  variant?:
    | "outline"
    | "ghost"
    | "link"
    | "default"
    | "destructive"
    | "secondary";
  className?: string;
  icon: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "default" | "sm" | "lg" | "icon";
}

const ButtonClick: React.FC<ButtonClickProps> = ({
  label,
  onClick,
  variant,
  className,
  icon,
  iconPosition,
  size,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      className={`${className}`}
    >
      {iconPosition === "left" && icon}
      {label}
      {iconPosition === "right" && icon}
    </Button>
  );
};

export default ButtonClick;
