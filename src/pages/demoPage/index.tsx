import React, { useEffect, useRef, useState } from "react";
import { Alert, Animated } from "react-native";
import { Container, Text } from "./styles";
import {
  Screen,
  Header,
  Input,
  Content,
  Button,
  Icon,
  Loading,
  Modal,
} from "../../components";
import { Form } from "../../components/form";

export function DemoPage() {
  const [modal, setModal] = useState(false);

  return (
    <Screen hiddeStatusbar={false} barStyle="light-content" bgColor="#27046de4">
      <Header
        leftIcon="arrow-left"
        title="Demo Page 🚀 "
        bgColor="#27046d8e"
        color="#FFF"
      />
      <Content scrollable bgColor="#DADADA" style={{ padding: 8 }}>
        <Content flexDirection="row" style={{ justifyContent: "center" }}>
          <Icon name="link" color="red" />
          <Icon name="activity" color="red" />
          <Icon name="alert-circle" color="red" />
          <Icon name="camera-off" color="red" />
          <Icon name="anchor" color="red" />
          <Icon name="archive" color="red" />
          <Icon name="award" color="red" />
          <Icon name="cloud-snow" color="red" />
          <Icon name="chevron-right" color="red" />
          <Icon name="plus-circle" color="red" />
          <Icon name="hexagon" color="red" />
        </Content>
        <Content flexDirection="row" style={{ justifyContent: "center" }}>
          <Icon name="link" color="green" />
          <Icon name="activity" color="green" />
          <Icon name="alert-circle" color="green" />
          <Icon name="camera-off" color="green" />
          <Icon name="anchor" color="green" />
          <Icon name="archive" color="green" />
          <Icon name="award" color="green" />
          <Icon name="cloud-snow" color="green" />
          <Icon name="chevron-right" color="green" />
          <Icon name="plus-circle" color="green" />
          <Icon name="hexagon" color="green" />
        </Content>
        <Content flexDirection="row" style={{ justifyContent: "center" }}>
          <Icon name="link" color="blue" />
          <Icon name="activity" color="blue" />
          <Icon name="alert-circle" color="blue" />
          <Icon name="camera-off" color="blue" />
          <Icon name="anchor" color="blue" />
          <Icon name="archive" color="blue" />
          <Icon name="award" color="blue" />
          <Icon name="cloud-snow" color="blue" />
          <Icon name="chevron-right" color="blue" />
          <Icon name="plus-circle" color="blue" />
          <Icon name="hexagon" color="blue" />
        </Content>
        <Content flexDirection="row" style={{ justifyContent: "center" }}>
          <Icon name="link" color="#eb6726" />
          <Icon name="activity" color="#eb6726" />
          <Icon name="alert-circle" color="#eb6726" />
          <Icon name="camera-off" color="#eb6726" />
          <Icon name="anchor" color="#eb6726" />
          <Icon name="archive" color="#eb6726" />
          <Icon name="award" color="#eb6726" />
          <Icon name="cloud-snow" color="#eb6726" />
          <Icon name="chevron-right" color="#eb6726" />
          <Icon name="plus-circle" color="#eb6726" />
          <Icon name="hexagon" color="#eb6726" />
        </Content>
        <Content flexDirection="row" style={{ marginTop: 8, marginBottom: 8 }}>
          <Button
            type="menuButton"
            bgColor="red"
            icon="anchor"
            onPress={() => Alert.alert("🚀 ")}
            tx="menuButton"
          />
          <Button
            type="menuButton"
            color="#333"
            bgColor="yellow"
            icon="anchor"
            onPress={() => setModal(true)}
            text="Abrir Modal"
            vibrate
          />
        </Content>
        <Content flexDirection="row" style={{ marginBottom: 8 }}>
          <Button
            bgColor="blue"
            onPress={() => setModal(true)}
            text="Abrir Modal"
          />
          <Button onPress={() => Alert.alert("🚀 ")} tx="commonButton" />
        </Content>

        <Content style={{ marginTop: 100 }}>
          <Loading
            animation="panda"
            size={180}
            text="Loading animation example"
          />
        </Content>
      </Content>
      <Modal
        show={modal}
        close={(data) => setModal(data)}
        headerTitle="Form no modal"
        height={"28%"}
      >
        <Form />
      </Modal>
    </Screen>
  );
}
