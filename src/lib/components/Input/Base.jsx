import React from 'react'
import { InputBaseWrapper } from './style_index'

export default function InputBase ({children, placeholder,type,value,HandleChange,...props}) {
    const handleInputChange = function(event) {
        const value = event?.target?.value
        return HandleChange(value, event);
    }
    return <InputBaseWrapper value={value} {...props} placeholder={placeholder} type={type} onChange={handleInputChange}>
    </InputBaseWrapper>
}