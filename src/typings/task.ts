export interface ITask {
  id: number;
  type: 'todo' | 'doing' | 'done';
  title: string;
}
