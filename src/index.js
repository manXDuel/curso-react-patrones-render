import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index.js';
import './index.css';

function App(props) {
  return(
    <h1>{props.saludo}, {props.nombre}</h1>
  );
}

function withSaludo(WrappedComponent){ //Función de orden superior
  return function WrappedComponentWithSaludo(saludo) {
    return function componenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo}/>
          <p>Acompañando al WrappedComponent</p>
        </React.Fragment>
      );
    }
  }
}

const AppWithAlgo = withSaludo(App)('Wenas');


ReactDOM.render(
  <AppWithAlgo nombre="Juan"/>,
  document.getElementById('root')
);
