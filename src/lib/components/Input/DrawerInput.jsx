import React from 'react'
import InputBase from './Base'
import { COLORS } from '../../styles'

export default function DrawerInput({HandleChange, InputPlaceholder, value}){
    return <InputBase name="drawer_input" padding="4px 16px" color={COLORS.primaryNavyBlue} fontFamily="Montserrat" fontWeight="bold" fontSize="16px" borderRadius="8px" border="none" placeholder={InputPlaceholder} height="40px" width="98%" value={value} HandleChange={HandleChange} type="text"/>
}