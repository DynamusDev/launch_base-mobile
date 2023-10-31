import { Controller, Control } from "react-hook-form";
import { Input, InputProps } from "../input";

interface InputFormProps extends InputProps {
  name: string;
  required?: boolean;
  control: Control;
}
export function FormInput({
  name,
  required,
  control,
  ...rest
}: InputFormProps) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input
          mode="userInput"
          value={value}
          onChangeText={onChange}
          {...rest}
        />
      )}
      name={name}
      rules={required && { required: "Campo obrigatório" }}
      defaultValue=""
    />
  );
}
