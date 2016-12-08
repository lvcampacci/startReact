import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Time from './Time';
import Partida from './Partida';
class OlaMundo extends Component {                   
  render() {
    return (
     <div>

			     	<div style={{float: "left", "marginRight": "10px"}}>
			     	
			     		<Time/>
			     	</div>


					<div style={{float: "left", "marginRight": "10px"}}>
					    <Partida/>
					 </div>
					     	

			     	<div style={{float: "left", "marginRight": "10px"}}>
			     		<Time/>
			     	</div>
			     	<div style={{clear:"both"}}> </div>
			     	

   
      </div>
    );
  }
}

export default OlaMundo;
