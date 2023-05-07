import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
`;
