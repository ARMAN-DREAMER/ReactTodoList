import "./layout.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Card from "../../components/card/card";

import { useGetTodosQuery } from "../../api/apiSlice";

const MainLayout = () => {
  const {
    data: todos,
    error,
    isFetching,
    isSuccess,
    isError,
  } = useGetTodosQuery();
  console.log(todos, isFetching, isSuccess, isError);

  const data = !todos ? (
    <span>Loading...</span>
  ) : (
    todos.map((card) => {
      return <Card key={card.id} card={card} />;
    })
  );
  return (
    <div className="layout-container">
      <Header />
      <div className="todos">{data}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
