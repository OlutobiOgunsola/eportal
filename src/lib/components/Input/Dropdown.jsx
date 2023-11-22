import React from 'react'
import { SelectWrapper } from './style_index'

export default function Dropdown ({HandleChange, children, ...props}) {
    const handleChange = (e) => {
        let value = e?.target?.value;

        return HandleChange(value)
    }
    return <SelectWrapper {...props} onChange={handleChange}>
        {children}
    </SelectWrapper>
}