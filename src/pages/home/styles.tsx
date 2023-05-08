import styled from "styled-components/native";
import wallpaper from "../../../assets/wallpaper.png";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  gap: 4px;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  font-size: 16px;
  text-align: center;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 12px;
`;

export const Background = styled.ImageBackground.attrs({
  source: wallpaper,
})`
  flex: 1;
  padding: 20px;
`;
