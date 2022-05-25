import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from '../../useFetch';

const BlogDetails = () => {
//create web hooks to fetch specific blog details for a specific user
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            {/* <h2>Blog Details - { id }</h2> */}
            {/* output a loading message if isPending is true */}
            { isPending && <div>Loading...</div> }
            {error && <div> { error }</div> }
            {/* output a blog template if no error and loading is true */}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;