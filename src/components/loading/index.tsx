import React, { useState } from "react";
import LottieView from "lottie-react-native";

import panda from "../../../assets/lottie/panda.json";
import worm from "../../../assets/lottie/worm.json";
import rocket from "../../../assets/lottie/rocket.json";
import rocket2 from "../../../assets/lottie/rocket2.json";
import dot from "../../../assets/lottie/dot.json";

import { Container, Text } from "./styles";
import { translate } from "../../i18n";

interface Props {
  animation?: "panda" | "worm" | "dot" | "rocket" | "rocket2";
  text?: string;
  tx?: string;
  size?: number;
}

export function Loading(props: Props) {
  const src =
    props.animation === "worm"
      ? worm
      : props.animation === "panda"
      ? panda
      : props.animation === "dot"
      ? dot
      : props.animation === "rocket"
      ? rocket
      : props.animation === "rocket2"
      ? rocket2
      : panda;

  return (
    <Container>
      <Text>{translate(props.tx) ?? props.text ?? "loading"}</Text>
      <LottieView
        source={src}
        autoPlay
        loop
        resizeMode="contain"
        style={{
          height: props.size || 280,
        }}
      />
    </Container>
  );
}
