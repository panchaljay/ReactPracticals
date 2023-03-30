import React, { useEffect, useState } from "react";

function Practical7() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (item) => {
    const newTodos = todos.filter((todo)=>{
      return todo !== item;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div>Practical7</div>
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="Enter ToDoS"
        onChange={(e) =>{ setTodo(e.target.value)}}
      />
      <button onClick={addTodo}>Add TODO</button>

      {todos && todos.map((item, id) => (
        <div>
          <li key={id}>{item} <button onClick={() =>{ deleteTodo(item)}}>&times;</button></li>

         

        </div>
      ))}
      {/* {console.log("todos",todos)} */}
    </>
  );
}

export default Practical7;
