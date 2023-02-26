import classNames from "classnames";
import React from "react";
import {ReactNode} from "react";


interface ColProps {
    span?: number,
    lg?: number,
    md?: number,
    xs?: number,
    sm?: number,
    className?: string,
    children?: ReactNode
}

export default function Col(props: ColProps) {
    const {span, lg, md, sm, xs, className, children} = props;
    return (
        <div className={classNames({[`col-${span}`]: span === 0 || span},
            {[`lg:col-${lg}`]: lg === 0 || lg},
            {[`md:col-${md}`]: md === 0 || md},
            {[`sm:col-${sm}`]: sm === 0 || sm},
            {[`xs:col-${xs}`]: xs === 0 || xs},
            className
        )}>
            {children}
        </div>
    )
}