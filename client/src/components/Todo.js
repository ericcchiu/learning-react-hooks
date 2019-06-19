import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Todo = props => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const asyncFetchTodos = async () => {
      try {
        const todoResponse = await axios.get("/todolist");
        const todosData = await todoResponse.data;
        const todos = [];

        for (let key in todosData) {
          todos.push({ id: key, name: todosData[key].name });
        }
        setTodoList(todos);
      } catch (error) {
        console.error(error);
      }
    };
    asyncFetchTodos();
    return () => {
      console.log("Cleanup");
    };
  }, []);

  // const mouseMoveHandler = event => {
  //   console.log(event.clientX, event.clientY);
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", mouseMoveHandler);
  //   return () => {
  //     document.removeEventListener("mousemove", mouseMoveHandler);
  //   };
  // });

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
      setTodoList(todoList.concat(todoItem));
    });

    // setTodoList(todoList.concat(todoName));
    // const postToFirebase = async (res) => {
    //   try {
    //     await axios.post("/todo", { name: todoName });
    //   } catch (error) {
    //     console.log("Error saving todo to database", error);
    //   }
    // };
    // postToFirebase();
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
          <li key={index}>{todo.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Todo;