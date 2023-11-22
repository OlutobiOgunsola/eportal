import React from 'react'
import _rootButton from './_root'

export default function ButtonBase ({config = {}, children, OnClick, ...props}) {
    const { type, width, height, overideBackground } = props;
    return <_rootButton OnClick={OnClick} type={type} width={width} height={height} {...props}>
        {children}
    </_rootButton>
}