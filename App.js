import React, { Component } from 'react';
import logo from './logo.svg';
import OlaMundo from './OlaMundo';
import './App.css';
  const dados= {
				  	partida:{
				  		estadio:"Maracana  / RJ",
				  		data: "01/06/2016",
				  		horario: "19h00"
				  	},

				  	casa:{
				  		nome: "Palmeiras"
				  	},

				  	visitante:{
				  		nome: "Gremio"
				  	}
  }



class App extends Component {



  render()
   {
    return (
      <div>
        <OlaMundo partida={dados.partida}
        			casa={dados.casa}
        			visitante={dados.visitante}

        />
      </div>
    );
  }
}

export default App;
