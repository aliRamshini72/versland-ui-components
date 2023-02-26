import {useEffect, useState} from "react";


export default function useLoading(callback: any, dependencies: any[]) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch()
    }, dependencies);


    const fetch = async () => {
        setLoading(true);
        await callback();
        setLoading(false);
    }

    return loading
}
