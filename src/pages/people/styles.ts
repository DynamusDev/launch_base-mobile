import styled from "styled-components/native";

export const Text = styled.Text`
  font-size: 16px;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 12px;
`;

export interface RowProps {
  gap?: number;
  align?: string;
}

export interface RowProps {
  gap?: number;
  align?: string;
}

export const Row = styled.View<RowProps>`
  flex-direction: row;
  align-items: ${(props) =>
    props.align === "left"
      ? "flex-start"
      : props.align === "right"
      ? "flex-end"
      : "center"};
  gap: ${(props) => props.gap ?? 2}px;
`;
