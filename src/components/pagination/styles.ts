import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;

  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 0;
`;

export const Button = styled.TouchableOpacity`
  height: 16px;
  width: 20px;
`;

interface TextButtonProps {
  isActive?: boolean;
  activeTextButtonColor?: string;
  inactiveTextButtonColor?: string;
}

export const Text = styled.Text<TextButtonProps>`
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  color: ${(props) =>
    props.isActive
      ? props.activeTextButtonColor ?? "red"
      : props.inactiveTextButtonColor ?? "#1e111d"};
`;

export const IconContainer = styled.View`
  width: 25px;
  height: 20px;
`;

export const ScrollBar = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  alwaysBounceHorizontal: true,
  bounces: true,
  decelerationRate: "fast",
  scrollEventThrottle: 200,
  pagingEnable: true,
  nestedScrollEnabled: true,
})`
  max-width: 130px;
`;
