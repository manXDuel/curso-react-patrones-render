import React from 'react';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo, addTodo,
    openModal, setOpenModal,
    totalTodos, completedTodos,
    searchValue, setSearchValue
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={()=> <TodosError />}
        onLoading={()=> <TodosLoading />}
        onEmptyTodos={()=> <EmptyTodos />}
        onEmptySearch={
          () => <p>No hay resultados para {searchValue}</p>
        }
        // render={todo => 
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // }
      >
        {todo => 
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        }
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}


//Utilizando composición de componentes
// function App() {
//   const [state, setState] = React.useState('Estado compartido');

//   return (
//     <React.Fragment>
//       <TodoHeader>
//         <TodoCounter />
//         <TodoSearch />
//       </TodoHeader>

//       <TodoList>
//         <TodoItem state={state}/>
//       </TodoList>
//     </React.Fragment>
//   );
// }

// function TodoHeader({children}){
//   return(
//     <header>
//       {children}
//     </header>
//   );
// }

// function TodoList({children}){
//   return (
//     <section>
//       {children}
//     </section>
//   );
// }

// function TodoCounter(){
//   return <p>TodoCounter</p>;
// }

// function TodoSearch(){
//   return <p>TodoSearch</p>;
// }

// function TodoItem({state}){
//   return <p>TodoItem: {state}</p>;
// }

export default App;
