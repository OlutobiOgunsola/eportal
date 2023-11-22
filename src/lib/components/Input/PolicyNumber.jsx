import React from 'react'
import InputBase from './Base'
import { COLORS } from '../../styles'

export default function PolicyNumberInput({HandleChange, value}){
    return <InputBase name="drawer_input" padding="4px 16px" margin="16px 0px" color={COLORS.primaryNavyBlue} fontFamily="Montserrat" fontWeight="bold" fontSize="16px" borderRadius="8px" border="none" placeholder="Enter Your Policy Number" height="40px" width="100%" value={value} HandleChange={HandleChange} type="text" data-input_id="policy_input"/>
}