import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Header, Indicator, Overlay, Space, Text, styles } from "./styles";
import { Icon } from "../icon";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  children?: any;
  show: boolean;
  close: (data) => void;
  height?: number | string;
  bg?: string;
  headerTitle?: string;
  headetTitleSize?: number | string;
}

const { height } = Dimensions.get("window");

export function Modal(props: Props) {
  const [showModal, setShowModal] = useState(props.show);
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    props.close(false);
    Keyboard.dismiss;
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (props.show) {
      openModal();
    } else {
      closeModal();
    }
  }, [props.show]);

  if (!props.show) return;

  return (
    <TouchableWithoutFeedback
      style={{
        flex: 1,
      }}
      onPress={() => Keyboard.dismiss}
    >
      <Animated.View
        style={[
          styles.container,
          {
            opacity: state.opacity,
            transform: [{ translateY: state.container }],
          },
        ]}
      >
        <Overlay onPress={closeModal} />
        <Animated.View
          style={[
            styles.modal,
            {
              transform: [{ translateY: state.modal }],
              height: props.height || "40%",
              backgroundColor: props.bg || "#FFF",
            },
          ]}
        >
          {props.headerTitle ? (
            <Header>
              <Space style={{ width: 25 }} />
              <Text size={Number(props.headetTitleSize)}>
                {props.headerTitle}
              </Text>
              <TouchableOpacity onPress={closeModal}>
                <Icon name="x" />
              </TouchableOpacity>
            </Header>
          ) : (
            <Indicator onPress={closeModal} />
          )}
          <Animated.ScrollView
            style={styles.scrollview}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
          >
            {props.children}
          </Animated.ScrollView>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
