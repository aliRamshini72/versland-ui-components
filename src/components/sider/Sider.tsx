import classNames from "classnames";
import React from "react";


interface SliderProps {
    children: JSX.Element | JSX.Element[]
    collapse: boolean;
}

export default function Sider(props: SliderProps) {
    const {collapse, children} = props;
    return (
        <aside className={classNames('transition-all',
            'duration-500',
            'ease-in-out',
            'h-screen',
            'sider-shadow',
            {'sider-collapsed': collapse},
            {'sider': !collapse})}>
            {children}
        </aside>
    )
}