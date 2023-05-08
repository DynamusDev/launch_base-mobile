import React from "react";

import { Container, Scroll } from "./styles";

interface Props {
  bgColor?: string;
  scrollable?: boolean;
  flexDirection?: "row" | "column" | "column-reverse" | "row-reverse";
  children?: any;
  style?: React.CSSProperties;
}

export function Content(props: Props) {
  return (
    <>
      {props.scrollable ? (
        <Scroll
          contentContainerStyle={{
            ...props.style,
            flexDirection: props.flexDirection || "column",
          }}
          style={{
            backgroundColor: props.bgColor || "transparent",
          }}
        >
          {props.children}
        </Scroll>
      ) : (
        <Container
          style={{
            ...props.style,
            backgroundColor: props.bgColor || "transparent",
            flexDirection: props.flexDirection || "column",
          }}
        >
          {props.children}
        </Container>
      )}
    </>
  );
}
