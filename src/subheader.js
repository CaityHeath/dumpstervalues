import React, { Component } from 'react';
import Gallery from './gallery.js'
import Sell from './sell.js';
import Events from './events.js';

class SubHeader extends Component{
  render(){
    return(
      <div className="nav-bar">
        <ul >

          <li><a href={Gallery}>Gallery</a></li>
          <li><a href={Sell}>Sell Clothes</a></li>
          <li><a href={Events}>Events</a></li>
        </ul>  
      </div>

    )
  }
}

export default SubHeader
