import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index.js';
import './index.css';

function App(props) {
  return(
    <h1>{props.saludo}, {props.nombre}</h1>
  );
}

function withAlgo(WrappedComponent){ //Función de orden superior
  return function ComponenteDeVerdad(props){
    //La función que retorna siempre debe ser un componente de React
    return (
      <React.Fragment>
        <WrappedComponent {...props}/> 
        <p>Acompañando al Wrapped Component</p>
      </React.Fragment>
    );
  }
}

const AppWithAlgo = withAlgo(App);


ReactDOM.render(
  <AppWithAlgo saludo="Hey" nombre="Juan"/>,
  document.getElementById('root')
);
