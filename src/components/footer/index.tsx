import React from "react";
import { Linking } from "react-native";

import { Container, Text } from "./styles";

interface CardProps {
  text: string;
  linkTo?: string;
}

export function Footer(props: CardProps) {
  return (
    <Container>
      <Text
        onPress={() => {
          props.linkTo ? Linking.openURL(props.linkTo) : null;
        }}
      >
        {props.text}
      </Text>
    </Container>
  );
}
