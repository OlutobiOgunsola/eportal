import React from 'react'
import ButtonBase from './Base';
import { Assets } from '../../../settings/connections';

export default function RegicButton ({config = {}, children, OnClick,...props}) {
    const { type, withIcon } = config;

    console.log('config from button', config)

    return <ButtonBase type={type} {...config} {...props}>
        {children}
        {
            withIcon 
            && <img src={Assets.utilityIcons[withIcon]} alt="" />
        }
    </ButtonBase>
}