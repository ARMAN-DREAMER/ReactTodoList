import "./addTodo.css";
import { usePostTodosMutation } from "../../api/apiSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetTodosQuery, usePatchTodosMutation } from "../../api/apiSlice";
const EditTodo = () => {
  ///////////////////////////states area
  const [patchTodos] = usePatchTodosMutation();
  const { data: getTodos } = useGetTodosQuery();
  const { postEditId } = useParams();

  console.log(postEditId);
  console.log(getTodos);

  const [task, setTask] = useState("");
  const [discription, setDiscription] = useState("");

  /////////////////////hndle input changes and submit
  const onTaskChange = (e) => setTask(e.target.value);
  const onDicriptionChange = (e) => setDiscription(e.target.value);
  const navigate = useNavigate();

  let editTargetTask;
  useEffect(() => {
    editTargetTask = !getTodos
      ? null
      : getTodos.filter((task) => task.id === Number(postEditId));
    console.log(editTargetTask);

    if (editTargetTask !== null) {
      setTask(editTargetTask[0].task);
      setDiscription(editTargetTask[0].discription);
    }
  }, [getTodos, editTargetTask]);

  const submitEdit = (e) => {
    e.preventDefault();
    getTodos.forEach((tasko) => {
      if (tasko.id === Number(postEditId)) {
        console.log(tasko);
        console.log(task);
        patchTodos({ id: tasko.id, task: task, discription: discription });
        window.location.replace("/");
      }
    });
    //console.log(editTarget[0].id);
  };

  //////////////////////////////////////////////////////////////
  return (
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={submitEdit} className="addTodo-container">
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
        <input type="submit" value={"Edit"} />
      </form>
    </div>
  );
};

export default EditTodo;
