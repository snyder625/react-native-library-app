import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`https://library-app-backend-six.vercel.app/${endpoint}`);
            const jsonData = await response.json();
            setData(jsonData)
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, isLoading, error };
}

export default useFetch;