import React, {useState, useEffect} from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';

import { Container, Mod, Text, Indicator } from './styles';

interface Props {
  children?: any,
  show?: boolean,
  close?: any,
}

const { height } = Dimensions.get('window')

export function Modal(props: Props) {
  const show = props.show
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start()
  }

    const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true })
    ]).start()
  }

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  return (
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}>
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}>
        <Indicator onPress={closeModal}/>
        {props.children}
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute'
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '50%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5
  },
  text: {
    marginTop: 50,
    textAlign: 'center'
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
})
