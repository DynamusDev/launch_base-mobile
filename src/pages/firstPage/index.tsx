import React from 'react';
import { Alert } from 'react-native'
import { shade } from 'polished'
import * as Localization from "expo-localization"

import { Container, Text } from './styles';
import { Translate, Screen, Header, Icon, Content, Button, Input } from '../../components';

export function FirstPage() {
  return (
    <Screen
      hiddeStatusbar={false}
      barStyle='light-content'
    >
      <Header
        leftIcon='menu'
        // tx='helloJs' 
        title='Launch Base 🚀 '
        bgColor='rgba(0, 0, 0, 0.01)'
        rightIcon='airplay'
        onLeftPress={() => Alert.alert('clicou no esquerdo')}
        onRightPress={() => Alert.alert('clicou no direito')}
      />
      <Content scroolable bgColor='#FFF' >
        <Content flexDirection='row'>
          <Icon name='link' color='red' />
          <Icon name='activity' color='red' />
          <Icon name='alert-circle' color='red' />
          <Icon name='camera-off' color='red' />
          <Icon name='anchor' color='red' />
          <Icon name='archive' color='red' />
          <Icon name='award' color='red' />
          <Icon name='cloud-snow' color='red' />
          <Icon name='chevron-right' color='red' />
          <Icon name='plus-circle' color='red' />
          <Icon name='hexagon' color='red' />
        </Content>
        <Content flexDirection='row'>
          <Icon name='link' color='green' />
          <Icon name='activity' color='green' />
          <Icon name='alert-circle' color='green' />
          <Icon name='camera-off' color='green' />
          <Icon name='anchor' color='green' />
          <Icon name='archive' color='green' />
          <Icon name='award' color='green' />
          <Icon name='cloud-snow' color='green' />
          <Icon name='chevron-right' color='green' />
          <Icon name='plus-circle' color='green' />
          <Icon name='hexagon' color='green' />
        </Content>
        <Content flexDirection='row'>
          <Icon name='link' color='blue' />
          <Icon name='activity' color='blue' />
          <Icon name='alert-circle' color='blue' />
          <Icon name='camera-off' color='blue' />
          <Icon name='anchor' color='blue' />
          <Icon name='archive' color='blue' />
          <Icon name='award' color='blue' />
          <Icon name='cloud-snow' color='blue' />
          <Icon name='chevron-right' color='blue' />
          <Icon name='plus-circle' color='blue' />
          <Icon name='hexagon' color='blue' />
        </Content>
        <Content flexDirection='row'>
          <Icon name='link' color='#eb6726' />
          <Icon name='activity' color='#eb6726' />
          <Icon name='alert-circle' color='#eb6726' />
          <Icon name='camera-off' color='#eb6726' />
          <Icon name='anchor' color='#eb6726' />
          <Icon name='archive' color='#eb6726' />
          <Icon name='award' color='#eb6726' />
          <Icon name='cloud-snow' color='#eb6726' />
          <Icon name='chevron-right' color='#eb6726' />
          <Icon name='plus-circle' color='#eb6726' />
          <Icon name='hexagon' color='#eb6726' />
        </Content>
        <Content flexDirection='row'>
          <Button
            type='menuButton'
            bgColor='red'
            icon='anchor'
            onPress={() => Alert.alert('🚀 ')} tx='menuButton'
          />
          <Button
            type='menuButton'
            color='#333'
            bgColor='yellow'
            icon='anchor'
            onPress={() => Alert.alert('🚀 ')} text='Menu Button 🚀 '
          />
        </Content>
        <Content flexDirection='row'>
          <Button
            bgColor='blue'
            onPress={() => Alert.alert('🚀 ')} text='Common Button 🚀 '
          />
          <Button
            onPress={() => Alert.alert('🚀 ')} tx='commonButton'
          />
        </Content>
        <Content >
          <Input
            mode='passwordInput'
            placeholderTx='helloJs'
          />
          <Input
            mode='userInput'
          />
        </Content>
        {/* <Translate /> */}
      </Content>
    </Screen>
  );
}