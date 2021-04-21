import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 45px;
  width: 50%;

  align-items: center;
  justify-content: center;

  border-radius: 5px;
  margin: 1px;
`;

export const MenuContainer = styled.TouchableOpacity`
  height: 160px;
  width: 50%;

  align-items: center;
  justify-content: space-around;

  border-radius: 5px;
  border-width: 0.3px;
  border-color: #333;
  margin: 1px;
`;

export const Text = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const MenuText = styled.Text`
  font-size: 20px;
  text-align: center;
`;
