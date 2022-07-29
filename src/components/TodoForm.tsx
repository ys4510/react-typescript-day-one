import React, { FC, useState } from "react";
import "./TodoForm.css";
import { Todo } from "../Types";
import { v4 as uuidv4 } from "uuid";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const InputForm: FC<Props> = ({ todos, setTodos }) => {
  const [inputTitle, setInputTitle] = useState("");
  // const [count, setCount] = useState(todos.length + 1);
  const [count, setCount] = useState(uuidv4());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const onSubmit = () => {
    setCount(count + 1);

    const newTodo: Todo = {
      id: count.toString(),
      // id: uuidv4(),
      title: inputTitle,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInputTitle("");

    const todosJson = JSON.stringify(todos);
    console.log(todosJson);
    localStorage.setItem('ToDos', todosJson);
   };

  return (
    <>
      <div id="inputForm">
        <div className="container">
          <label>タイトル : </label>
          <input
            type="text"
            id="inputTitle"
            value={inputTitle}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" id="btnCreate" value={"作成"} onClick={onSubmit} />
      </div>
    </>
  );
};

export default InputForm;
