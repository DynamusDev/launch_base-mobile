import React, {useState} from 'react';
import { Alert } from 'react-native'
import { api } from '../../services/api'

import { Container, Text } from './styles';
import { Loading, Screen, Header, Input, Content, Button, Modal, Map } from '../../components';

export function DemoPage() {
  const [modal, setModal] = useState(false)

  async function getPersons() {
    const response = await api.get('planets')
  }

  function openModal() {
    setModal(true)
  }

  return (
      <Screen 
        hiddeStatusbar={false}
        barStyle='light-content'
        bgColor='rgba(0, 0, 0, 0.8)'
      >
        <Header 
          leftIcon='arrow-left' 
          title='Demo Page 🚀 ' 
          bgColor='rgba(0, 0, 0, 0.01)'
          color='#FFF' 
          onLeftPress={() => Alert.alert('clicou no esquerdo')}
        />
        <Content bgColor='#FFF' >
          <Content style={{alignItems: 'center', justifyContent: 'center'}} flexDirection='row'>
            <Button 
              type='common' 
              bgColor='red' 
              icon='smile'
              onPress={openModal} text='Open Modal' 
            />
          </Content>
          <Modal
            show={modal}
            close={(data) => setModal(data)}
          >
            <Map />
          </Modal>
        </Content>
        {/* <Loading text='loading 🚀 ' animation='panda'/> */}
      </Screen>
  );
}