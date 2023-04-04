import TaskBox from '../TaskBox';

import type { ITask } from '../../../typings/task';

interface IProps {
  todoTasks?: ITask[];
  doingTasks?: ITask[];
  doneTasks?: ITask[];
}

import './TaskColumns.styles.scss';

const TaskColumns = ({
  todoTasks,
  doingTasks,
  doneTasks,
}: IProps): JSX.Element => (
  <div className="task-columns">
    <div className="column column--todo">
      <h3 className="column-title">Todo</h3>
      {todoTasks
        ? todoTasks.map((task, index) => <TaskBox key={index} task={task} />)
        : null}
    </div>
    <div className="column column--doing">
      <h3 className="column-title">Doing</h3>
      {doingTasks
        ? doingTasks.map((task, index) => <TaskBox key={index} task={task} />)
        : null}
    </div>
    <div className="column column--done">
      <h3 className="column-title">Done</h3>
      {doneTasks
        ? doneTasks.map((task, index) => <TaskBox key={index} task={task} />)
        : null}
    </div>
  </div>
);

export default TaskColumns;
