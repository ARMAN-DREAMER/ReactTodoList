import "./App.css";
import MainLayout from "./layout/mainLayout/mainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./components/addTodoPanel/addTodo";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/addtodo" element={<AddTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
