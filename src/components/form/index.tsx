import { Content } from "../content";
import { Button } from "../button";
import { useCallback } from "react";

type FormProps = {
  children: React.ReactNode | React.ReactNode[];
  onSubmit: (data: any) => void;
  handleSubmit: any;
};

export function Form(props: FormProps) {
  const handleSubmitForm = useCallback((data: any) => {
    props.onSubmit(data);
  }, []);

  return (
    <Content>
      {props.children}
      <Button
        bgColor="blue"
        icon="anchor"
        onPress={props.handleSubmit(handleSubmitForm as any)}
        text="Enviar"
        vibrate
      />
    </Content>
  );
}
