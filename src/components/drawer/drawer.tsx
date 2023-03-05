import React, {ReactNode, useMemo} from "react";
import {useEffect, useRef} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import classNames from "classnames";


export type PlacementType = 'top' | 'bottom' | 'right' | 'left'

export enum Placement {
    TOP = 'top',
    RIGHT = 'right',
    LEFT = 'left',
    BOTTOM = 'bottom',
}

interface DrawerProps {
    placement: PlacementType,
    open: boolean,
    children: ReactNode,
    height?: string | number;
    width?: string | number;

    onClose(): void
}


const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
    const {placement, width, height, open, children, onClose} = props
    const ref: any = useRef("drawer-ref")
    useOutsideClick(ref, () => {
        onClose()
    })
    useEffect(() => {
        if (open) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [open])
    const style = useMemo(() => {
        if (placement === Placement.TOP || placement === Placement.BOTTOM) {
            if (height) return {
                display: 'block',
                width: '100%',
                height: height
            }
            else return {
                display: 'block',
                width: '100%',
                height: 'fit-content'
            }
        } else {
            if (width) return {
                display: 'block',
                width: width,
                height: "100%"
            }
            else return {
                display: 'block',
                width: 'fit-content',
                height: '100%'
            }
        }
    }, [placement, width, height])
    return (
        <>
            <div className={classNames({'drawer-back-drop-open': open, 'drawer-back-drop-close': !open})}></div>
            <div ref={ref}
                 className={classNames('drawer', {
                     [`drawer-${placement}-open`]: open,
                     [`drawer-${placement}-close`]: !open
                 })}>
                <div style={style}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Drawer