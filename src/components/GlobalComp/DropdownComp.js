import React from 'react'
import styled from 'styled-components'
import DropDownPicker from 'react-native-dropdown-picker'

const DropdownContainer = styled.View`
    align-items: center;
    height: 50px;
`

const DropdownComp = (props) => {
    const { items, placeholder, selectHandler, toggleHandler, visible, zIndex } = props

    const changeVisibility = (boolean) => {
        if (toggleHandler) {
            toggleHandler(boolean)
        }
    }

    return (
        <DropdownContainer>
            <DropDownPicker
                items={items}
                placeholder={placeholder || 'Select'}
                defaultValue={null}
                style={{
                    ...styles.container
                }}
                dropDownStyle={styles.dropdown}
                itemStyle={{
                    justifyContent: 'flex-start',
                    marginLeft: 5
                }}
                onChangeItem={item => {
                    selectHandler(item.value)
                }}
                onOpen={() => changeVisibility(true)}
                onClose={() => changeVisibility(false)}
                isVisible={visible}
                zIndex={zIndex}
            />
        </DropdownContainer>
    )
}

export default DropdownComp

const styles = {
    container: {
        height: 50,
        width: '88%',
    },
    dropdown: {
        width: '88%'
    }
}