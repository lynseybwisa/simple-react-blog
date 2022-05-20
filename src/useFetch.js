import { useEffect, useState } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null); //store error so as to output to browser
    
    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null); //store error so as to output to browser

    useEffect(() => {
        setTimeout(() => {
            //  fetch('http://localhost:8000/blogs')
                 fetch(url)
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
                    setIsPending(false);
                    setError(err.message); //display error to user
                })
        }, 1000);
      }, [url]);

      return{ data, isPending, error };
}

export default useFetch;