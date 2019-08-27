import React, { Component } from 'react';
import Logo from './assets/nofuzzdvheader.png'


class Header extends Component{
  state = {
    condition: null
  }


  clickHandler = () => {
    this.setState({condition: true});
  }


  render(){
    return(
      <>
      <div className="header-container">
           <a href="./App.js" ><img src={Logo} alt="logo" className="logo"/></a>
      </div>
      </>
    );
  }
}

export default Header;