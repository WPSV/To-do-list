import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.title !== "" && !state?.some((todo) => todo.title.toLowerCase() === action.payload.title.toLowerCase())) {
        const newTodo = {
          id: Date.now(),
          title: action.payload.title,
          completed: false,
        }
        state.push(newTodo);
      } else {
        alert("Todo already exists or is empty!");
      }
    },
    completeTodo: (state, action) => {
      const index = state?.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    updateTodo: (state, action) => {
      if (action.payload.title !== "" && !state?.some((todo) => todo.title.toLowerCase() === action.payload.title.toLowerCase())) {
        const index = state?.findIndex((todo) => todo.id === action.payload.id);
        state[index].title = action.payload.title;
      } else {
        alert("Todo already exists or is empty!");
      }
    },
    deleteTodo: (state, action) => {
      return state?.filter((todo) => todo.id !== action.payload.id);
    }
  }
});

export const { addTodo, completeTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;