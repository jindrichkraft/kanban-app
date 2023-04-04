import type { ITask } from '../../../typings/task';

interface IProps {
  task: ITask;
}

const TaskBox = ({ task }: IProps): JSX.Element => (
  <div className="task-box">
    <h4 className="box-title">{task.title}</h4>
  </div>
);

export default TaskBox;
