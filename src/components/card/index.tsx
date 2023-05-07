import React from "react";
import { StyleSheetProperties, StyleProp, ViewStyle } from "react-native";

import { Container } from "./styles";

interface CardProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

export function Card(props: CardProps) {
  return <Container style={{ ...props.styles }}>{props.children}</Container>;
}
