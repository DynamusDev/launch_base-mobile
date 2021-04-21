import React, { useState } from 'react';

import { Container, IconContainer, InputView, NullContainer, MaskeredInputView } from './styles';

import { translate } from '../../i18n';
import { Icon } from '../icon'

interface Props {
  value?: string,
  onChangeText?: (value) => void,
  mode?: 'userInput' | 'passwordInput' | 'phoneInput' | 'cpfInput',
  borderColor?: string,
  activeBorderColor?: string,
  placeholder?: string,
  placeholderTx?: string,
  multiline?: boolean,
  color?: string,
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters',
  numberOfLines?: number,
  keyboardType?: | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'name-phone-pad' | 'twitter'
  | 'web-search' | 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';

}

export function Input(props: Props) {
  const [borderColor, setBorderColor] = useState('#AEAEAE')
  const [showPass, setShowPass] = useState(false)
  return (
    <Container style={{ borderColor: props.borderColor || borderColor }} >
      {
        props.mode ?
          <IconContainer style={{ backgroundColor: props.color || '#1e111d' }}>
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
            placeholder={translate(props.placeholderTx) || props.placeholder}
            onChangeText={props.onChangeText}
            onFocus={() => setBorderColor(props.activeBorderColor || '#1e111d')}
            onBlur={() => setBorderColor(props.borderColor || '#AEAEAE')}
            value={props.value}
          />
          :
          <InputView
            placeholder={translate(props.placeholderTx) || props.placeholder}
            onChangeText={props.onChangeText}
            autoCapitalize={props.autoCapitalize || 'none'}
            value={props.value}
            onFocus={() => setBorderColor(props.activeBorderColor || '#1e111d')}
            onBlur={() => setBorderColor(props.borderColor || '#AEAEAE')}
            keyboardType={props.keyboardType || 'default'}
            secureTextEntry={props.mode === 'passwordInput' && !showPass}
          />
      }

      <NullContainer style={{ width: props.mode !== 'passwordInput' ? 10 : 48 }}>
        {
          props.mode === 'passwordInput' &&
          <Icon
            name={showPass ? 'eye-off' : 'eye'}
            color={props.color || '#1e111d'}
            onPress={() => setShowPass(!showPass)}
          />
        }
      </NullContainer>
    </Container>
  )
}