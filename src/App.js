import React, {Component} from 'react';
import Game from './game';
import {When} from './conditionals.js';
import Information from './information.js'
import Logo from './assets/nofuzzdvheader.png'

class App extends Component{
  state = {
    condition:null,
    gameCondition: true
  }

  handleClick = () => {
    this.setState({condition: true, gameCondition: null});
  }

  render(){
    return (
      <>
        <When condition={this.state.gameCondition}>
          <img className="logo" src={Logo} alt="logo"/>
          <Game/> 
          <button onClick={this.handleClick}> Enter </button>  
        </When>
        
       
        <When condition={this.state.condition}>
          <Information/>
        </When>

      </>
    )
  }
}

export default App;