import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { todosApi } from "./api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={todosApi}>
    <App />
  </ApiProvider>
);
