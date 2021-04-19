import React, { useState } from 'react';

import { Container, IconContainer, InputView, NullContainer, MaskeredInputView } from './styles';
import { Icon } from '../icon'

interface Props {
  value?: string,
  onChangeText?: (value) => void,
  mode?: 'userInput' | 'passwordInput' | 'phoneInput' | 'cpfInput',
  placeholder?: string,
  placeholderTx?: string,
  multiline?: boolean,
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters',
  numberOfLines?: number,
  keyboardType?: | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'name-phone-pad' | 'twitter'
  | 'web-search' | 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';

}

export function Input(props: Props) {
  const [borderColor, setBorderColor] = useState('#AEAEAE')
  const [showPass, setShowPass] = useState(false)
  return (
    <Container style={{ borderColor: borderColor }} >
      {
        props.mode ?
          <IconContainer>
            <Icon
              name={props.mode === 'userInput' || props.mode === 'cpfInput' ?
                'user' : props.mode === 'passwordInput' ?
                  'lock' : props.mode === 'phoneInput' && 'phone'
              }
              color='#fff'
            />
          </IconContainer>
          :
          <NullContainer />
      }

      {
        props.mode === 'cpfInput' ?
          <MaskeredInputView
            maskered={'cpf'}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            onFocus={() => setBorderColor('#008AD0')}
            value={props.value}
          />
          :
          <InputView
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            autoCapitalize={props.autoCapitalize || 'none'}
            value={props.value}
            onFocus={() => setBorderColor('#008AD0')}
            keyboardType={props.keyboardType || 'default'}
            secureTextEntry={props.mode === 'passwordInput' && !showPass}
          />
      }

      <NullContainer style={{width: props.mode !== 'passwordInput' && 10 }}>
        {
          props.mode === 'passwordInput' &&
          <Icon
            name={showPass ? 'eye-off' : 'eye'}
            color='#008AD0'
            onPress={() => setShowPass(!showPass)}
          />
        }
      </NullContainer>
    </Container>
  )
}