import React from 'react';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Bwisa Blog</h1>
            <div className="links">
                <a href="/" className="href">Home</a>
                <a href="/create" className="href" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Create Blog</a>
                <a href="/" className="href">Exit</a>
            </div>
        </nav>
     );
}
 
export default Navbar;