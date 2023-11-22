import React from 'react'
import { COLORS } from '../../styles'
import InputBase from './Base'

export default function FileInput({HandleChange, value}){
    return <InputBase name="file_input" padding="4px 0px" color={COLORS.primaryNavyBlue} fontFamily="Montserrat" fontWeight="bold" fontSize="16px" borderRadius="8px" border="none" placeholder="Please Select A File" width="100%" value={value} HandleChange={HandleChange} type="file" data-input_id="file_input"/>
}