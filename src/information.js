import React, {Component} from 'react';
import Footer from './footer.js'


class Information extends Component{
  render(){
    return(
      <>
      <div className="information-container">
        <p className="bio"> 
          Dumpster Values is a Vintage shop in Downtown Olympia Washington. Cooperatively owned and managed by Lexxi, Raven and Guiliana. Dumpster Values focuses on unique and playful fashions from the past, present and future. We have been apart of the Olympia community for 24 years and currently share our space with artists, organizers, printmakers, seamstresses, builders and writers. 
        </p>

      </div>

      <Footer/>
      </>
    )
  }
}

export default Information;