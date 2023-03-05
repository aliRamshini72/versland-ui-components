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

const Col: React.FC<ColProps> = (props: ColProps) => {
    const {span, lg, md, sm, xs, className, children} = props;
    return (
        <div className={classNames({[`col-${span}`]: span === 0 || span},
            {[`col-2xl-${lg}`]: lg === 0 || lg},
            {[`col-xl-${lg}`]: lg === 0 || lg},
            {[`col-lg-${lg}`]: lg === 0 || lg},
            {[`col-md-${md}`]: md === 0 || md},
            {[`col-sm${sm}`]: sm === 0 || sm},
            {[`col-xs${xs}`]: xs === 0 || xs},
            className
        )}>
            {children}
        </div>
    )
}
export default Col