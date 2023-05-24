import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Indicator, Overlay } from "./styles";

interface Props {
  children?: any;
  show: boolean;
  close: (data) => void;
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
    if (showModal) {
      openModal();
    } else {
      closeModal();
    }
  }, [showModal]);

  useEffect(() => {
    setShowModal(props.show);
  }, [props.show]);

  if (!showModal) return;

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
            },
          ]}
        >
          <Indicator onPress={closeModal} />
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "150%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    bottom: 0,
  },
  modal: {
    bottom: 0,
    position: "absolute",
    height: "40%",
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 3,
    paddingRight: 3,
  },
  scrollview: {
    width: "100%",
    paddingTop: 5,
  },
  contentContainerStyle: {
    alignItems: "center",
    width: "100%",
  },
});
