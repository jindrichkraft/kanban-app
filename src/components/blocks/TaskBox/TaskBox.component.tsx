import type { ITask } from '../../../typings/task';

import './TaskBox.styles.scss';

interface IProps {
  task: ITask;
}

const TaskBox = ({ task }: IProps): JSX.Element => (
  <div className="task-box">
    <h4 className="box-title">{task.title}</h4>
    <p className="box-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae
      dignissimos praesentium?
    </p>
  </div>
);

export default TaskBox;
