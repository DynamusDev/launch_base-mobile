import React, {useState} from 'react';
import { Alert } from 'react-native'
import { shade } from 'polished'
import { Modalize } from 'react-native-modalize';

import { Container, Text } from './styles';
import { Loading, Screen, Header, Icon, Content, Button, Modal } from '../../components';

export function DemoPage() {
  const [modal, setModal] = useState(false)

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
              onPress={() => setModal(true)} text='Press for open modal 🚀 ' 
            />
          </Content>
          <Modal
            show={modal}
            close={() => setModal(false)}
          >
            <Button 
              type='common' 
              bgColor='red' 
              icon='smile'
              onPress={()=>{}} text='Press for open modal 🚀 ' 
            />
          </Modal>
        </Content>
        {/* <Loading text='loading 🚀 ' animation='rocket'/> */}
      </Screen>
  );
}