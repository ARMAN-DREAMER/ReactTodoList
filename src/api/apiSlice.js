import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500" }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({ query: () => "/todos", providesTags: ["Todos"] }),
    postTodos: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["todos"],
      // invalidatesTags: ["Todos"],
    }),
    deleteTodos: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
    patchTodos: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodosMutation,
  useDeleteTodosMutation,
  usePatchTodosMutation,
} = todosApi;
