'use client'
import Text from "../atoms/text";
import {Button as ButtonHeroUI} from "@heroui/react";

type ButtonProps = {
  onClick: () => void;
  label: string;
  color?: "primary" | "secondary" | "default" | "success" | "warning" | "danger";
};

const getTextColor = (color: string) => {
  switch (color) {
    case "primary":
      return "black";
    case "secondary":
      return "white";
    case "default":
      return "white";
    case "success":
      return "white";
    default:
      return "black";
  }
}

const Button = ({ onClick, label, color="primary" }: ButtonProps) => {
  return (
    <ButtonHeroUI color={color} onPress={onClick} className="py-2 px-2">
      <Text variant="label" color={getTextColor(color)}>
        {label}
      </Text>
    </ButtonHeroUI>
  )
}

export default Button