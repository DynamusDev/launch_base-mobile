import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
`;

export const Mod = styled.View`
  bottom: 0;
  position: absolute;
  height: 60%;
  background-color: #fff;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Indicator = styled.TouchableOpacity`
  width: 50px;
  height: 8px;
  background-color: #aaa;
  border-radius: 50px;
  align-self: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Overlay = styled.TouchableOpacity`
  background: transparent;
  height: 300%;
  width: 100%;
`;

type TextProps = {
  size?: number;
};

export const Text = styled.Text<TextProps>`
  text-align: center;
  font-size: ${(props) => props.size || 16}px;
  font-weight: 500;
`;

export const Header = styled.View`
  width: 100%;
  padding: 8px 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Space = styled.View`
  width: 25px;
`;

export const styles = StyleSheet.create({
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
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
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
