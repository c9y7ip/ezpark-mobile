import React from 'react'
import { TouchableOpacity, Text } from 'react-native'


const CustomButton = (props) => {
    const { text, handler, customStyle, disabled } = props

    const style = { ...defaultStyle, ...customStyle }

    return (
        <TouchableOpacity style={style} onPress={handler} disabled={disabled} >
            <Text
                style={{
                    fontSize: style.fontSize,
                    color: style.fontColor,
                    fontWeight: style.fontWeight
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const defaultStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    backgroundColor: "#35b2e8",
    fontSize: 20,
    fontWeight: "400",
    fontColor: "white",
    marginBottom: 0,
    borderWidth: 0,
}