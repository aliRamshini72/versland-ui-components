import React from "react";

interface TooltipProps {
    children: JSX.Element | JSX.Element[];
    placement?: string;
    text: JSX.Element | string
}

export default function Tooltip(props: TooltipProps) {
    const {children,text} = props;
    return (
        <div className={'group relative inline-block w-fit'}>
            <div style={{maxWidth : '220px'}} className={"absolute hidden text-right rtl w-max my-auto whitespace-normal  z-50 bg-primary text-white rounded p-2 top-0 right-1/2 -translate-y-full translate-x-1/2 group-hover:inline-block" }>
                {text}
            </div>
            <div className={'inline-block'}>
                {children}
            </div>
        </div>
    )
}