import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
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

export const Text = styled.Text`
  
`;