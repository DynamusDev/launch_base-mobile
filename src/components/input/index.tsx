import React from 'react';

import { Container } from './styles';
import { translate } from '../../i18n';

interface Props {
  label?: string,
  labelTx?: string,
  value?: string,
  onChangeText?: any,
  mode?: 'flat' | 'outlined',
  left?: React.ReactNode,
  right?: React.ReactNode,
  disabled?: boolean,
  placeholder?: string,
  placeholderTx?: string,
  selectionColor?: string,
  underlineColor?: string,
  error?: boolean,
  multiline?: boolean,
  numberOfLines?: number,
  onFocus?: any
}

export function Input(props: Props) {
  return (
    <Container
      label={translate(props.labelTx) || props.label}
      value={props.value}
      onChangeText={props.onChangeText}
      mode={props.mode || 'flat'}
      left={props.left}
      right={props.right}
      disabled={props.disabled}
      placeholder={translate(props.placeholderTx) || props.placeholder}
      selectionColor={props.selectionColor}
      underlineColor={props.underlineColor}
      error={props.error}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
      onFocus={props.onFocus}
    />
  )
}