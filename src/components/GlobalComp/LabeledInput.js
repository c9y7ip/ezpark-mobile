import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
    width: 100%;
    flex-direction: column;
`

const StyledInput = styled.TextInput`
    border: 1px solid rgb(194, 194, 194);
    width: 99%;
    height: 48px;
    padding-left: 20px;
    border-radius: 6px;
    margin-top: 10px;
    margin-bottom: ${(props) => props.style.marginBottom}px;
`

export default function LabeledInput(props) {
    const { label, placeholder, handler, value, maxLength, inputRef } = props
    const style = { ...defaultStyle, ...props.style }

    return (
        <StyledView>
            <Text>{label}</Text>
            <StyledInput
                placeholder={placeholder}
                onChangeText={(text) => handler(text)}
                value={value}
                style={style}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                maxLength={maxLength}
                ref={inputRef}
            />
        </StyledView>
    )
}

const defaultStyle = {
    marginBottom: 10,
}
