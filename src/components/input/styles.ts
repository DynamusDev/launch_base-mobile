import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.View`
  width: 300px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #aeaeae;
  border-radius: 5px;
  margin: 0 auto 14px;

  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  height: 100%;
  width: 48px;

  background: #008ad0;

  align-items: center;
  justify-content: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const InputView = styled.TextInput`
  width: 200px;
  height: 100%;
  padding: 5px;
  font-size: 14px;
  text-align: center;
`;

interface MaskeredInputViewProps {
  maskered?: string;
  typeMask?: string;
  edit?: boolean;
}

export const MaskeredInputView = styled(TextInputMask).attrs(
  (props: MaskeredInputViewProps) => ({
    type: props.maskered || "custom",
    options: {
      mask:
        props.typeMask ||
        "******************************************************************************************************",
    },
    editable: props.edit || true,
  })
)`
  flex: 1;
  font-size: 14px;
  text-align: center;
`;

export const NullContainer = styled.View`
  height: 100%;
  min-width: 10px;

  background: #fff;

  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
