import React from "react";
import {useState} from "react";

export default function Accordion(props: any) {
    const {icon, title, children} = props;
    const [open, setOpen] = useState(false);
    return (
        <li>
            {/*title*/}
            <div className={'rtl pointer flex flex-wrap flex-grow gap-x-2 items-center'}
                 onClick={() => setOpen((open: boolean) => !open)}>
                {icon}
                <div className={'flex-auto'}>
                    {title}
                </div>
            </div>
            {/*wrapper*/}
            <div
                className={'w-full overflow-hidden transition-all duration-1000 ease-out pr-4 f-small ' + (open ? 'max-h-fit ' : 'max-h-0')}>
                {children}
            </div>
        </li>
    )
}