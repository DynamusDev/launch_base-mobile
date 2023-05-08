import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  height: 110%;
  width: 110%;
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
`;
