import React from 'react';
import { HandleInputChange } from '../../handlers/HandleInputChange';
import InputBase from './Base';


export default function _rootInput (config = {}, children,...props) {

    const [value, setValue] = React.useState("");

    const { Type, PlaceHolder } = config;

    const handleInputChange = function(event){
        let target = event.target, value = target.value, name= target.name;
        setValue(value)
        const eventData = {
            value: target.value,
            element: target.root,

        }

        // LOG THE EXECUTING INPUT TO THE CONSOLE
        console.log('Input change event in input - ' +  name);
        return HandleInputChange(value, setValue, eventData);
    };

    return <InputBase value={value} {...props} type={Type} placeholder={PlaceHolder || ""} onChange={handleInputChange}>
        
    </InputBase>
}