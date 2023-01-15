import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500" }),
  endpoints: (builder) => ({
    getTodos: builder.query({ query: () => "/todos" }),
    postTodos: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      // invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, usePostTodosMutation } = todosApi;
