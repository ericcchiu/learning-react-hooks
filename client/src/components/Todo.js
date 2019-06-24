import React, { Fragment, useState, useEffect, useReducer } from "react";
import axios from "axios";

const Todo = props => {
  const [todoName, setTodoName] = useState("");
  const [submittedTodo, setSubmittedTodo] = useState(null);
  // const [todoList, setTodoList] = useState([]);

  // Function that removes and deletes a todo item
  const todoListReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state.concat(action.payload);
      case 'SET': 
        return action.payload; // expect to be an array of new items
      case "REMOVE":
        return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
  };

  const [todoList, dispatch] = useReducer(todoListReducer, []);

  // Hook that fetches a list of todos after the component mounts
  useEffect(() => {
    const asyncFetchTodos = async () => {
      try {
        const todoResponse = await axios.get("/todolist");
        const todosData = await todoResponse.data;
        const todos = [];

        for (let key in todosData) {
          todos.push({ id: key, name: todosData[key].name });
        }
        // setTodoList(todos);
        dispatch({type: 'SET', payload: todos})
      } catch (error) {
        console.error(error);
      }
    };
    asyncFetchTodos();
    return () => {
      console.log("Cleanup");
    };
  }, []);
  // Hook that adds a new item to the state
  useEffect(() => {
    if (submittedTodo) {
      dispatch({type: 'ADD', payload: submittedTodo});
    }
  }, [submittedTodo]);

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };

  const todoAddHandler = () => {
    axios.post("/todo", { name: todoName }).then(res => {
      // setTimeout(() => {
      // const todoItem = { id: res.data.name, name: todoName };
      // setTodoList(todoList.concat(todoItem));
      // }, 1000);
      const todoItem = { id: res.data.name, name: todoName };
      setSubmittedTodo(todoItem);
      // setTodoList(todoList.concat(todoItem));
    });

  };

  const todoRemoveHandler = todoId => {
    dispatch({type: 'REMOVE', payload: todoId});
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
        {todoList.map((todo) => (
          <li key={todo.id} onClick={todoRemoveHandler.bind(this, todo.id)}>{todo.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Todo;
