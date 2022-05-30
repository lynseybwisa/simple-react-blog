import React, { useState } from 'react';

const Create = () => {

    // create a state to track the title
    // associate this value with the value of the input for blog title
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Mario')

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title: </label>
                <input 
                      type="text"  
                      required
                      value = {title}
                    //   create an onChange to help you chage the value in the textbox
                      onChange = {(e) => setTitle(e.target.value)} />
                <label>Blog Body: </label>
                <textarea 
                    value={body}
                    required
                    onChange = {(e) => setBody(e.target.value)}
                    /> 
                <label>Blog author: </label>
                <select
                   value={author}
                   onChange = {(e) => setAuthor(e.target.value)}
                    >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
                <p> {title} </p>
                <p> {body} </p>
                <p> {author} </p>
            </form>
        </div>
     );
}
 
export default Create;