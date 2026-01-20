import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className='TodoList-Container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearch()}

      <ul>
        {props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList };
