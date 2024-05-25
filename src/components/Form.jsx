import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, updateTodo } from "../features/todo/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { edit } = useSelector((state) => state.todos);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(edit.todo.title)
    setDescription(edit.todo.description)
  },[edit])

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      edit.isEdit
        ? dispatch(updateTodo({_id:edit.todo._id, title, description }))
        : dispatch(createTodo({ title: title, description: description }));
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div className="card my-2 p-3 rounded-0">
      <form className="my-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="my-2 rounded-0 form-control"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Tittle here..."
        />
        <input
          type="text"
          className="my-2 rounded-0 form-control"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Description here..."
        />
        <button className="btn btn-success rounded-0 w-100">Submit</button>
      </form>
    </div>
  );
};

export default Form;
