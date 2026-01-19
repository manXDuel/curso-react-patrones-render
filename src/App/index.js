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
  const [state, setState] = React.useState('Estado compartido');

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>

      <TodoList>
        <TodoItem state={state}/>
      </TodoList>
    </React.Fragment>
  );
}


function TodoHeader({children}){
  return(
    <header>
      {children}
    </header>
  );
}

function TodoList({children}){
  return (
    <section>
      {children}
    </section>
  );
}

function TodoCounter(){
  return <p>TodoCounter</p>;
}

function TodoSearch(){
  return <p>TodoSearch</p>;
}

function TodoItem({state}){
  return <p>TodoItem: {state}</p>;
}

export default App;
