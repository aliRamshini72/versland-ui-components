import {useEffect} from "react";

const useOutsideClick = (ref : any , callback: any) => {

    useEffect(() => {
        const handleClick = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [ref , callback]);

    return ref;
};
export default useOutsideClick