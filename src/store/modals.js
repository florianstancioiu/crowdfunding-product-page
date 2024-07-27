import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos = [action.payload.todo, ...state.todos];
    },
  },
});

export const modalsActions = modalsSlice.actions;

export default modalsSlice;
