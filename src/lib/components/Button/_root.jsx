import React from 'react'
import { ButtonBaseWrapper } from './styles'

export default function _rootButton ({config = {}, type, children, OnClick,...props}) {
    console.log("type from bottom", type)
    const handleClick = function (e) {

        // SIMPLY INVOKE CALLBACK WITH EVENT OBJECT PASSED
        return OnClick(e);
    }
    return <ButtonBaseWrapper onClick={handleClick} type={type} {...props}>
        {children}
    </ButtonBaseWrapper>
}