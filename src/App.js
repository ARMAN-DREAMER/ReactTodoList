import "./App.css";
import MainLayout from "./layout/mainLayout/mainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./components/addTodoPanel/addTodo";
import SingleTodos from "./components/singlePageComponent/singlePage";
import EditTodo from "./components/addTodoPanel/editTodo";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/todos/:postId" element={<SingleTodos />} />
          <Route path="/todos/edit/:postEditId" element={<EditTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
