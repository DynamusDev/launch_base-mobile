import React from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Container, SafeArea } from "./styles";
import { Copyright } from "../copyright";

interface Props {
  barStyle?: "light-content" | "dark-content";
  barColor?: string;
  bgColor?: string;
  style?: React.CSSProperties;
  children?: any;
  hiddeStatusbar?: boolean;
}

export function Screen(props: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      style={{
        flex: 1,
        backgroundColor: props.bgColor || "#1e111d",
      }}
    >
      {!props.hiddeStatusbar ? (
        <SafeArea
          style={{
            ...props.style,
            backgroundColor: props.bgColor || "#1e111d",
          }}
        >
          <StatusBar
            barStyle={props.barStyle || "dark-content"}
            backgroundColor={props.barColor || "#1e111d"}
            hidden={props.hiddeStatusbar}
          />
          {props.children}
        </SafeArea>
      ) : (
        <Container
          style={{
            ...props.style,
            backgroundColor: props.bgColor || "#1e111d",
          }}
        >
          <StatusBar
            barStyle={props.barStyle || "dark-content"}
            backgroundColor={props.barColor || "transparent"}
            hidden={props.hiddeStatusbar}
          />
          {props.children}
        </Container>
      )}
      <Copyright
        text="Proudly created by @Dynamusdev 🦖"
        linkTo="https://github.com/DynamusDev"
      />
    </KeyboardAvoidingView>
  );
}
