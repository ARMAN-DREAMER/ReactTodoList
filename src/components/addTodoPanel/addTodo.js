import "./addTodo.css";
import { usePostTodosMutation } from "../../api/apiSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddTodo = () => {
  const [postTodos] = usePostTodosMutation();
  const [task, setTask] = useState("");
  const [discription, setDiscription] = useState("");
  const onTaskChange = (e) => setTask(e.target.value);
  const onDicriptionChange = (e) => setDiscription(e.target.value);
  const navigate = useNavigate();
  const hndleSubmit = (e) => {
    e.preventDefault();
    postTodos({ task: task, discription: discription });
    setTask("");
    setDiscription("");
    navigate("/");
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={hndleSubmit} className="addTodo-container">
        <label htmlFor="task">task:</label>
        <input
          id="task"
          className="task-input"
          value={task}
          onChange={onTaskChange}
        />
        <label htmlFor="discription">discription:</label>
        <input
          id="discription"
          className="task-input"
          value={discription}
          onChange={onDicriptionChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddTodo;
