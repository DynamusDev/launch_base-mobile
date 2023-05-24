import styled from "styled-components/native";
import { Animated } from "react-native";

interface ContainerProps {
  headerHeight?: number;
}

export const Container = styled(Animated.View)<ContainerProps>`
  height: ${(props) => props.headerHeight ?? 60}px;
  width: 100%;

  padding-left: 8px;
  padding-right: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.3px;
  border-color: #333;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const Space = styled.View`
  height: 25px;
  width: 25px;
`;
