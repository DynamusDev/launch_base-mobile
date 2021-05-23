import React, {useState} from 'react';
import { Alert } from 'react-native'

import { Screen, Header, Content, Modal, Map } from '../../components';

export function MapScreen() {
  const coords = [
    {
      id: 1,
      latitude: -23.5950896,
      longitude: -46.5730314,
      latitudeDelta: 0.0922, 
      longitudeDelta: 0.0421 
    },
    {
      id: 2,
      latitude: -23.5950896,
      longitude: -46.5730315,
      latitudeDelta: 0.0922, 
      longitudeDelta: 0.0421 
    },
    {
      id: 3,
      latitude: -23.5950893,
      longitude: -46.5730311,
      latitudeDelta: 0.0922, 
      longitudeDelta: 0.0421 
    },
  ]
  return (
      <Screen 
        hiddeStatusbar={false}
        barStyle='light-content'
        bgColor='rgba(0, 0, 0, 0.8)'
      >
        <Header 
          leftIcon='arrow-left' 
          title='Map Page 🚀 ' 
          bgColor='rgba(0, 0, 0, 0.01)'
          color='#FFF' 
          onLeftPress={() => Alert.alert('clicou no esquerdo')}
        />
        <Content bgColor='#FFF' >
          <Map 
            markers={coords}
           />
        </Content>
      </Screen>
  );
}