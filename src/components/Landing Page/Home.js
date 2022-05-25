// import { useState, useEffect } from "react";
import useFetch from "../../useFetch";
import BlogList from "../Blog/BlogList";
import React from 'react';

const Home = () => {

    // let name = 'mario';
//    const [name, setName] = useState('Mario');
//    const [age, setAge] = useState(22);

//output list of data
    //   const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ]);

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    //   const [name, setName] = useState('mario');

    //   const handleDelete = (id) => {
    //       const newBlogs = blogs.filter(blog => blog.id !== id);
    //       setBlogs(newBlogs);
    //   }

      

    //   useEffect(() => {
    //       console.log('use effect ran');
    //     //   console.log(blogs);
    //     console.log(name);
    //   }, [name]);

//     const handleClick = () => {
//         // console.log('Hello spoileez!', e);
//         // name = 'Luigi';
//         // console.log(name);
//         setName('Luigi');
//         setAge(25);
//     }

    // const handleClickAgain = (name, e) => {
    //     console.log("Hello " + name, e.target);
    // }

    return ( 
    <div className="home">
        {/* <h2>Homepage</h2> */}
        {/* {blogs && <BlogList blogs = {blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}

        {/* only if isPending is true then loading will be output to the browser */}
        {isPending && <div>Loading.....</div>} {/*view loading message*/}
        {blogs && <BlogList blogs = {blogs} title="All Blogs!"/>}
        {error && <div> { error }</div> }

        {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario' )} title="Mario's Blogs!"/>
        <button onClick={() => setName('Bwisa')}>Change Name</button>
        <p>{ name }</p> */}
           

        {/* <p>{ name } is { age } years old</p>
        <button onClick={handleClick}>Click me</button> */}
        {/* <button onClick={ (e) =>  handleClickAgain('Lynsey', e) }>Click me again</button> */}
    </div>
     );
}
 
export default Home;