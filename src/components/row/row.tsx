import classNames from "classnames";
import React from "react";
import {ReactNode} from "react";

type JustifyTypes = 'center' |
    'start' |
    'end' |
    'between' |
    'around';


type AlignTypes = 'center' | 'start' | 'end';


interface RowProps {
    gap?: string
    className?: string
    children: ReactNode,
    justify?: JustifyTypes,
    align?: AlignTypes
}

export default function Row(props: RowProps) {
    const {gap, children, className, align, justify} = props;
    return (
        <div className={classNames('rtl flex flex-row flex-row', gap, className,
            {[`justify-${justify}`]: justify},
            {[`items-${align}`]: align},
        )}>
            {children}
        </div>
    )
}