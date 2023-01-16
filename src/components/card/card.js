import { Link } from "react-router-dom";
import "./card.css";
import { useDeleteTodosMutation } from "../../api/apiSlice";
import { useState } from "react";
const Card = ({ card }) => {
  const [deleteTodos] = useDeleteTodosMutation();
  const [onChange, setOnChange] = useState(true);

  const deleteItem = () => {
    deleteTodos({ id: card.id });
    window.location.reload();
  };
  return (
    <div className="card-container">
      <div className="img-container">
        <img src="" />
      </div>
      <div className="card-panel">
        <h4>{card.task}</h4>
        <p>{card.discription} </p>
        <span key={`${onChange}`}>12.00</span>
      </div>
      <Link to={`/todos/${card.id}`}>view more ...</Link>
      <Link to={`/todos/edit/${card.id}`}>Edit</Link>
      <button onClick={() => deleteItem()}>delete</button>
    </div>
  );
};

export default Card;
