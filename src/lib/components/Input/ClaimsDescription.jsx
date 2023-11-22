import React from 'react'
import InputBase from './Base'
import { COLORS } from '../../styles'

export default function ClaimsDescription ({HandleChange, value}){
    return <InputBase name="claims_description" padding="4px 16px" margin="16px 0px" color={COLORS.primaryNavyBlue} fontFamily="Montserrat" fontWeight="bold" fontSize="16px" borderRadius="8px" border="none" placeholder="Describe Your Claim" height="150px" width="100%" value={value} HandleChange={HandleChange} type="textarea" data-input_id="claims_description"/>
}