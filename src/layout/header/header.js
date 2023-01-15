import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <footer className="header">
        <div className="nav">
          <nav>
            <Link to="/addtodo">AddTodo</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Header;
