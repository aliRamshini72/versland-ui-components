import {useEffect, useRef} from "react";

export default function useStickyHeader() {
    const headerRef: any = useRef(0)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    /* Method that will fix header after a specific scrollable */
    const isSticky = (event: Event) => {
        const scrollTop = window.scrollY;
        scrollTop >= 20 ? headerRef.current?.classList.add('header-sticky') : headerRef.current?.classList.remove('header-sticky');
    };
    return headerRef
}