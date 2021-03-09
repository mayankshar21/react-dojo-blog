import { useState, useEffect } from 'react';

// custom hook
const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //    const newBlogs = blogs.filter(blog => blog.id !== id);
    //    setBlogs(newBlogs);
    //}

    // used to run code at every render
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })    
        }, 1000);
        // console.log('use effect ran');
        // console.log(name);
    }, [url] // dependency array enforces the function hook to run after the first initial render
    // this function will only run now if the name mario changes to luigi after clicking the button
    // it will not run when we delete the list
    );

    return {data, isPending, error}
}

export default useFetch;