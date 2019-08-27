import React, {Component} from 'react';
import Game from './game';
import {When} from './conditionals.js';
import Information from './information.js'
import Header from './header.js'


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
        <Header/>
        <When condition={this.state.gameCondition} >
          <Game/> 
          <div className="btn-container">
            <button onClick={this.handleClick}> Enter </button>   
          </div>
         
        </When>
       
        <When condition={this.state.condition}>
          <Information/>
        </When>

      </>
    )
  }
}

export default App;