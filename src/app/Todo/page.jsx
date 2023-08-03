"use client";
import React, { useEffect, useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodo } from "../redux/slices/todoSlice";
import "../styles.css";

const Todo = () => {
  const [inp, setInp] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodos(inp));
    setInp("");
  };
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  // const handleChange = (e) => {
  //   setInp(e.target.value);
  // };

  // const handleKeyDown = () => {
  //   if (e.key === 'Enter') {
  //     console.log('do validate');
  //   }
  // };



  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      handleAdd();
    }
  };


  return (
    <div>
      <div className="flex justify-center mt-10 mb-5">
        <div className="form-control ">
          <input
            className="input input-alt"
            placeholder="Add A Todo"
            value={inp}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setInp(e.target.value);
            }}
            required=""
            type="text"
          />
          <span className="input-border input-border-alt"></span>
        </div>
          <button
          className="m-3 bg-red-300 py-2 px-4 rounded-lg"
          onClick={handleAdd}
        >
          Add
        </button>

        {/* <input
         
         
        /> */}
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {todos &&
          todos.map((t, index) => (
            <div key={index}>
              <div className="flex justify-between py-5 bg-white text-black p-1 rounded-lg m-3">
                <div className="text-xl font-semibold ">{t}</div>
                <button
                  className=" bg-slate-400 mr-5 p-1 rounded-lg"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Del
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
