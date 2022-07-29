import React, { FC } from "react";
import { getAllJSDocTagsOfKind } from "typescript";
import { Todo } from "../Types";

type Props = {
  todo: Todo;
  handleDone: (todo: Todo) => void;
  handleDelete: (todo: Todo) => void;
};

const TodoItem: FC<Props> = ({ todo, handleDone, handleDelete }) => {
  return (
    <tr key={todo.id} className={todo.done ? "done" : ""}>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <input
          type="checkbox"
          className={"checkbox-input"}
          onClick={() => handleDone(todo)}
          defaultChecked={todo.done}
        />
      </td>
    </tr>
  );
};

export default TodoItem;
