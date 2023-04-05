import { createSlice, current } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { ITask } from '../../typings/task';

interface InitialStateDefaultObject {
  tasks: ITask[];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  tasks: [
    { id: 0, status: 1, title: 'Task ' },
    { id: 1, status: 1, title: 'Task ' },
    { id: 2, status: 1, title: 'Task ' },
    { id: 3, status: 2, title: 'Task ' },
    { id: 4, status: 2, title: 'Task ' },
    { id: 5, status: 2, title: 'Task ' },
    { id: 6, status: 2, title: 'Task ' },
    { id: 7, status: 2, title: 'Task ' },
    { id: 8, status: 3, title: 'Task ' },
    { id: 9, status: 3, title: 'Task ' },
    { id: 10, status: 3, title: 'Task ' },
    { id: 11, status: 3, title: 'Task ' },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    moveBack: (state, action: PayloadAction<ITask['id']>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload && task.status !== 1
          ? {
              ...task,
              status: task.status - 1,
            }
          : task
      );
    },
    moveForward: (state, action: PayloadAction<ITask['id']>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload && task.status !== 3
          ? {
              ...task,
              status: task.status + 1,
            }
          : task
      );
    },
    removeTask: (state, action: PayloadAction<ITask['id']>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { moveBack, moveForward, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
