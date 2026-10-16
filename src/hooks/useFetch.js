import { useEffect, useState } from "react";


export default function useFetch(url, initialState, transform = data => data) {
    const [data, setData] = useState(initialState);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.text);
                }
                return response.json();
            })
            .then(result => {
                setData(transform(result));
            })
            .catch(err => {
                // console.log('error');
                setError(err.message);
            })
            .finally(() => {
                setIsPending(false);
            });

        return () => {
            abortController.abort();
        }
    }, [url]);

    return { data, setData, isPending, error };
}
