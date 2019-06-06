import React, { Fragment, useState } from 'react';
import axios from 'axios'
import '@babel/polyfill';

const Todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);

  // const [todoState, setTodoState] = useState({ userInput: "", todoList: [] });

  const inputChangeHandler = event => {
    /* setTodoState({
         userInput: event.target.value,
         todoList: todoState.todoList
       });
    */

    setTodoName(event.target.value)
  };

  const todoAddHandler = () => {
    // setTodoState({
    //   userInput: todoState.userInput,
    //   todoList: todoState.todoList.concat(todoState.userInput)
    // });
    setTodoList(todoList.concat(todoName));
    async function postToFirebase () {
      try {
        await axios.post('/savetodo', {name: todoName});
      } catch (error) {
        console.log('Error saving todo to database', error);
      }
    }
    postToFirebase();
  };

  return (
    <Fragment>
      <input
        type="text"
        placceholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Todo;
