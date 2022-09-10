import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';

import {useField} from '@unform/core';
import {Container, ErrorText, Icon, TextInput} from './styles';
import {colors} from '../../common/colors';
import {ActivityIndicator} from 'react-native';

const Input = ({name, icon, loading, ...rest}, ref) => {
  const inputElementRef = useRef(null);

  const {
    registerField,
    defaultValue = '',
    fieldName,
    error,
  } = useField(name || '');
  const inputValueRef = useRef({value: defaultValue});

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_ref, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container isFocused={isFocused} isErrored={!!error}>
        <Icon
          name={icon}
          size={20}
          color={isFocused || isFilled ? colors.blue : colors.placeholder}
        />
        <TextInput
          ref={inputElementRef}
          placeholderTextColor={colors.placeholder}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
        {loading ? (
          <ActivityIndicator size="small" color={colors.black} />
        ) : null}
      </Container>
      <ErrorText>{!isFocused && error}</ErrorText>
    </>
  );
};

export default forwardRef(Input);
