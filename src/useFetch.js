// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";

//create a custome hook useFetch
const useFetch = (url) => {  //pass url of the endpoint of the data trying to be fetched

    const [data, setData] = useState(null);
    //create state for loading message
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null); //store error so as to output to browser
    
    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null); //store error so as to output to browser

    useEffect(() => {
        // associate it with a feych then use it to abort that fetch
        const abortCont = new AbortController();

        setTimeout(() => {
            //  fetch('http://localhost:8000/blogs')
                 fetch(url, { signal: abortCont.signal })
                .then(res => {
                    // console.log(res);
                     if(!res.ok){
                         throw Error('Could not fetch the data for that resource');
                     }
                 return res.json();
                })
                .then(data => {
                //    console.log(data);
                setIsPending(false); //view loading message
                 setData(data);
                 setError(null);
                 
                })
                .catch(err => {  //handling errors
                    // console.log(err.message); //catch error (connection error)
                    if (err.name === 'AbortError'){
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false);
                    setError(err.message); //display error to user
                    }
                    
                })
        }, 1000);

        return () => abortCont.abort();

      }, [url]);

      //data return individual blog
      return{ data, isPending, error };
}

export default useFetch;