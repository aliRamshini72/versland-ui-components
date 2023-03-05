import {useEffect, useRef} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import {ArrowLeftOutlined} from '@ant-design/icons'
import classNames from "classnames";
import React from "react";

export default function Modal(props: any) {
    const {open, onClose, children} = props;
    const ref: any = useRef("drop-down-btn")

    useEffect(() => {
        if (open) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [open])
    useOutsideClick(ref, () => {
        onClose()
    })
    useEffect(() => {
        const closeOnEscapeKey = (e: any) => e.key === "Escape" ? onClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [onClose]);
    // const openClass = 'fixed z-50 h-fit w-fit top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4   transition-all ease-out duration-1000';
    // const closeClass = 'fixed z-50 h-0 w-0 overflow-hidden top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4   transition-all ease-out duration-1000';
    return (
        <div className={'app-modal'}>
            <div
                className={classNames({
                    'fixed z-50  top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 h-screen w-screen back-drop-open': open,
                    'hidden h-0 w-0 overflow-hidden  back-drop-close': !open
                })}>
                <div ref={ref}
                     className={classNames({'app-modal-content-open': open, 'app-modal-content-close': !open})}>
                    <div
                        className={'bg-white md:py-2 sm:py-10 xs:py-10 px-2 md:rounded-md md:w-96 md:h-fit  sm:h-screen sm:w-screen sm:rounded-0 xs:h-screen xs:rounded-0 xs:w-screen'}>
                        <div className={'text-left md:hidden sm:block xs:block'}>
                            <ArrowLeftOutlined onClick={onClose} className={'text-primary-light'}/>
                        </div>
                        <div className={'p-2'}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}