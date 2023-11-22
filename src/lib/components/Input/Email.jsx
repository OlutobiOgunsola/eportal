import React from 'react'
import InputBase from './Base'
import { INPUT_TYPES } from '../../config';
import { INPUT_PLACEHOLDERS } from '../../literature';

export default function EmailInput ({config, ...props}) {


    return <InputBase config={{type: 'email', Placeholder: config.placeHolder || INPUT_PLACEHOLDERS.EMAIL}} />
}