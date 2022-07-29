import react, { FC } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import { Todo } from "../Types";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: FC<Props> = ({ todos, setTodos }) => {
  const handleDone = (todo: Todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...todo, done: !todo.done } : t))
    );
  };

  const handleDelete = (task: Todo) => {
    setTodos((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>進捗</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
