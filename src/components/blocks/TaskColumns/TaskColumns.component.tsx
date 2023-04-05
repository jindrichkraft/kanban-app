import TaskBox from '../TaskBox';

import type { ITask } from '../../../typings/task';

interface IProps {
  tasks: ITask[];
}

import './TaskColumns.styles.scss';

const TaskColumns = ({ tasks }: IProps): JSX.Element => {
  const todoTasks = tasks.filter((task) => task.type === 'todo');
  const doingTasks = tasks.filter((task) => task.type === 'doing');
  const doneTasks = tasks.filter((task) => task.type === 'done');

  return (
    <div className="task-columns">
      <div className="column column--todo">
        <h3 className="column-title">Todo ({todoTasks?.length ?? 0})</h3>
        <div className="tasks">
          {todoTasks
            ? todoTasks.map((task, index) => (
                <TaskBox key={index} task={task} />
              ))
            : null}
        </div>
      </div>
      <div className="column column--doing">
        <h3 className="column-title">Doing ({doingTasks?.length ?? 0})</h3>
        <div className="tasks">
          {doingTasks
            ? doingTasks.map((task, index) => (
                <TaskBox key={index} task={task} />
              ))
            : null}
        </div>
      </div>
      <div className="column column--done">
        <h3 className="column-title">Done ({doneTasks?.length ?? 0})</h3>
        <div className="tasks">
          {doneTasks
            ? doneTasks.map((task, index) => (
                <TaskBox key={index} task={task} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default TaskColumns;
