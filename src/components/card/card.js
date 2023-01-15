import "./card.css";

const Card = ({ card }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src="" />
      </div>
      <div className="card-panel">
        <h4>{card.task}</h4>
        <p>{card.discription} </p>
        <span>12.00</span>
        <a>view more ...</a>
      </div>
    </div>
  );
};

export default Card;
