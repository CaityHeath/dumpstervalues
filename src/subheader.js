import React, { Component } from 'react';
import gallery from './gallery.js';
import sell from './sell.js';
import events from './events.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class SubHeader extends Component{

  render(){
    return(
      <Router>
        <div className="nav-bar">
         <ul >
   
          <li>
            <Link to="/gallery"> Gallery </Link>
          </li>
          <li>
            <Link to="/sell"> Sell Clothes </Link>
          </li>
          <li>
            <Link to="/events"> Events </Link>

          </li>
         </ul>


         <Route path="/gallery" component={gallery}/>
         <Route path="/sell" component={sell}/>
         <Route path="/events" component={events}/>

      </div>
      </Router>

    );
  }
}

export default SubHeader
