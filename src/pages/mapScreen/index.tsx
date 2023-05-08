import React, { useState } from "react";
import { Alert } from "react-native";

import { Screen, Header, Content, Map, Footer } from "../../components";

export function MapScreen() {
  const coords = [
    {
      id: 1,
      latitude: -23.5950896,
      longitude: -46.5730314,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      id: 2,
      latitude: -23.5950896,
      longitude: -46.5730315,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      id: 3,
      latitude: -23.5950893,
      longitude: -46.5730311,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  ];
  return (
    <Screen barStyle="light-content" bgColor="#4d0035">
      <Header
        leftIcon="arrow-left"
        title="Map Page"
        bgColor="#4d003599"
        color="#FFF"
      />
      <Content bgColor="#FFF">
        <Map markers={coords} />
      </Content>
    </Screen>
  );
}
