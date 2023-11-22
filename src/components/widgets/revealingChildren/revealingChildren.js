import React from 'react'
import { TextWrapper } from './styles'

export default function RevealChildren ({revealTime = 1000, children}) {
    let [childState, setChildState] = React.useState("closed");
    React.useLayoutEffect(()=>{
        const revealTimeout = setTimeout(()=>{
            console.log("revealedEverything");

            clearTimeout(revealTimeout);

            setChildState("open");
        }, revealTime);

        return undefined;
    }, [])

    return <TextWrapper status={childState}>
        {children}
    </TextWrapper>
}