import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Bwisa Blog</h1>
            <div className="links">
                <Link to="/" className="href">Home</Link>
                <Link to="/create" className="href" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Create Blog</Link>
                <Link to="/exit" className="href">Exit</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;