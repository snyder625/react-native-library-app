import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `'https://hapi-books.p.rapidapi.com/week/${endpoint}/5'`,
        headers: {
            'X-RapidAPI-Key': '53dcfa252cmshe91917651ea6cfcp181524jsn36aa4d353531',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        },
      };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
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