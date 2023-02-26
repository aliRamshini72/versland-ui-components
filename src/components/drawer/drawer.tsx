import React from "react";
import {useEffect, useRef} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

export enum Placement {
    TOP = 'top',
    RIGHT = 'right',
    LEFT = 'left',
    BOTTOM = 'bottom',
}

const setPlacement = (placement: Placement) => {
    switch (placement) {
        case Placement.BOTTOM :
            return {
                close: 'fixed bottom-0 z-50 bg-white right-0 left-0 w-full h-0 transition-all ease-out duration-500',
                open: 'fixed z-50 bg-white rounded-t bottom-0 right-0 left-0 w-full h-fit transition-all ease-out duration-500',
                backdropOpen: ' z-30 fixed h-screen  right-0 left-0 bottom-0 app-back-drop-open',
                backdropClose: 'hidden h-0 w-0 overflow-hidden  app-back-drop-close'
            }
        case Placement.TOP :
            return {
                close: 'fixed z-50 bg-white top-0 right-0 left-0 w-full h-0 transition-all ease-out duration-500',
                open: 'fixed z-50 bg-white rounded-b top-0 right-0 left-0 w-full h-fit transition-all ease-out duration-500 ',
                backdropOpen: 'z-30 fixed h-screen top-0 right-0 left-0 bottom-0 app-back-drop-open',
                backdropClose: 'hidden h-0 w-0 overflow-hidden  app-back-drop-close'
            }
        case Placement.LEFT :
            return {
                close: 'fixed z-50 bg-white top-0 bottom-0 left-0 h-full w-0 max-w-0 overflow-hidden transition-all ease-out duration-500 ',
                open: 'fixed z-50 bg-white rounded-r top-0 bottom-0 left-0 h-full w-4/5  transition-all ease-out duration-500',
                backdropOpen: 'z-30 fixed w-screen top-0 bottom-0 left-0 app-back-drop-open',
                backdropClose: 'hidden h-0 w-0 overflow-hidden  app-back-drop-close'
            }
        case Placement.RIGHT :
            return {
                close: 'fixed z-50 bg-white top-0 bottom-0 right-0 h-full w-0 max-w-0 overflow-hidden transition-all ease-out duration-500',
                open: 'fixed z-50 bg-white rounded-l top-0 bottom-0 right-0 h-full w-4/5 transition-all ease-out duration-500',
                backdropOpen: 'z-30 fixed w-screen top-0 right-0 bottom-0 app-back-drop-open',
                backdropClose: 'hidden overflow-hidden  app-back-drop-close'
            }
        default:
            return {
                close: 'fixed z-50 bg-white top-0 bottom-0 right-0 h-full w-0 transition-all ease-out duration-500',
                open: 'fixed z-50 bg-white top-0 bottom-0 right-0 h-full w-fit transition-all ease-out duration-500',
                backdropOpen: 'z-30 fixed h-screen top-0 right-0 left-0 bottom-0 bg-backdrop transition-all ease-out duration-500',
                backdropClose: 'hidden h-0 w-0 overflow-hidden  app-modal-container-close'
            }
    }
}


export default function AppDarwer(
    {placement, open, children, onClose}
        : { placement: Placement, open: boolean, children?: JSX.Element, onClose: any }) {

    const ref: any = useRef("drop-down-btn")
    useOutsideClick(ref, () => {
        onClose()
    })
    useEffect(() => {
        if (open) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [open])
    return (
        <div>
            <div className={open ? setPlacement(placement).backdropOpen : setPlacement(placement).backdropClose}></div>
            <div ref={ref} className={open ? setPlacement(placement).open : setPlacement(placement).close}>
                <div className={'w-100 h-100 block'}>
                    {children}
                </div>
            </div>
        </div>
    )
}