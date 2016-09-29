import React from 'react';

export function Todo(props) {
  const {todo} = props;

  if(todo.get('isDone')) {
    return <strike> {todo.get('text')} </strike>;
  } else {
    return <span> {todo.get('text')} </span>;
  }
}

export function TodoList(props) {
  const {todos, toggleTodo, addTodo} = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which === 13);
    const isLongEnough = text.leng > 0

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = id => event => toggleTodo(id);

  return (
      <div className= 'todo'>
        <input type='text'
               placeholder='Add todo'
               onKeyDown= {onSubmit} />
        <ul className= 'todo_list'>
          {todos.map(t => (
              <li key={t.get('id')} 
                  className= "todo_item"
                  onClick= {toggleClick(t.get('id'))}>
                <Todo todo= {t.toJS()} />
              </li>
          ))}
        </ul>
      </div>
    );
}