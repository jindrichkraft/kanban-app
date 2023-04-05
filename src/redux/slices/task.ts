import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { ITask } from '../../typings/task';

interface InitialStateDefaultObject {
  tasks: ITask[];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  tasks: [
    { id: 0, type: 'todo', title: 'Task ' },
    { id: 1, type: 'todo', title: 'Task ' },
    { id: 2, type: 'todo', title: 'Task ' },
    { id: 3, type: 'doing', title: 'Task ' },
    { id: 4, type: 'doing', title: 'Task ' },
    { id: 5, type: 'doing', title: 'Task ' },
    { id: 6, type: 'doing', title: 'Task ' },
    { id: 7, type: 'doing', title: 'Task ' },
    { id: 8, type: 'done', title: 'Task ' },
    { id: 9, type: 'done', title: 'Task ' },
    { id: 10, type: 'done', title: 'Task ' },
    { id: 11, type: 'done', title: 'Task ' },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    removeTask: (state, action: PayloadAction<ITask['id']>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { removeTask } = taskSlice.actions;
export default taskSlice.reducer;
