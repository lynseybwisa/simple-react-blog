import Navbar from './components/Navbar/Navbar';
import Home from './components/Landing Page/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Create from './components/Blog/Create';

function App() {

  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const link = "https://www.google.com";
  

  return (
    <Router>
    <div className="App">
      <Navbar />
     <div className="content">
       {/* <Home /> */}
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route exact path="/create">
           <Create />
         </Route>
       </Switch>
       
       {/* <h1> { title }</h1>
       <p> Liked { likes } times</p>
       <p> { 10 }</p>
       <p> { "hello, Bwisa!" }</p>
       <p> { [1,2,3,4,5,6,7,8] }</p>
       <p> { Math.random() * 10 }</p>

       <a href={ link } className="href">Google Site</a> */}
     </div>
    </div>
    </Router>
  );
}

export default App;
