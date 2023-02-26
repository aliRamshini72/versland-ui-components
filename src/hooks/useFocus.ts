import {useRef} from "react";

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {
        if (htmlElRef.current) {
            return (htmlElRef?.current as any).focus()
        }

    }

    return {htmlElRef, setFocus}
}

export default useFocus
