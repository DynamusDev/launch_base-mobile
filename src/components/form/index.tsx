import { useForm, Controller } from "react-hook-form";
import { Content } from "../content";
import { Input } from "../input";
import { Button } from "../button";
import { useCallback } from "react";
import { styles } from "../modal/styles";

export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <Content>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input mode="userInput" value={value} onChangeText={onChange} />
        )}
        name="username"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            mode="passwordInput"
            placeholderTx="helloJs"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            mode="cpfInput"
            placeholderTx="CPF"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="document"
        rules={{ required: "Campo obrigatório" }}
        defaultValue=""
      />
      <Button
        bgColor="blue"
        icon="anchor"
        onPress={handleSubmit(handleSubmitForm)}
        text="Enviar"
        vibrate
      />
    </Content>
  );
}
