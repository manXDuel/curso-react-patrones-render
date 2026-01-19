import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


//Utilizando react context
// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }


//Utilizando composición de componentes
function App() {
  return (
    <React.Fragment>
      <TodoHeader/> 
      <TodoList/>
    </React.Fragment>
  );
}


function TodoHeader(){
  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
    </React.Fragment>
  );
}

function TodoList(){
  return (
    <React.Fragment>
      <TodoItem></TodoItem>
    </React.Fragment>
  );
}

function TodoCounter(){
  return <p>TodoCounter</p>;
}

function TodoSearch(){
  return <p>TodoSearch</p>;
}

function TodoItem(){
  return <p>TodoItem</p>;
}

export default App;
