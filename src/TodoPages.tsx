import React, { FC, useState } from "react";
import Title from "./components/Title";
import InputForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {Todo} from './Types'

const initialState: Todo[] = [
  {
    id: "111-111",
    title: 'Todo1',
    done: false
  },
  {
    id: "222-222",
    title: 'Todo2',
    done: false
  },
  {
    id: "333-333",
    title: 'Todo3',
    done: false
  },
]
const TodoPages: FC = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Title />
      <InputForm todos={todos} setTodos={setTodos}  />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoPages;
