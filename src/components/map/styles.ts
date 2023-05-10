import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled(MapView).attrs({})`
  height: 100%;
  width: 100%;
  min-height: 300px;
  min-width: 350px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CustomMarker = styled(Marker).attrs({})`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  border-width: 0.5px;
`;
