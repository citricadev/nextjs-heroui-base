import React from "react";
import {Input} from "@nextui-org/react";

export default function InputEmail() {
  const [value, setValue] = React.useState("");

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <Input
      value={value}
      type="email"
      label="Email"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && "Porfavor ingrese un email valido"}
      onValueChange={setValue}
      className="max-w-xs"
      placeholder="Ingresa el correo electrónico"
    />
  );
}
