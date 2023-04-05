import Icon from '../../elements/Icon';

import type { ITask } from '../../../typings/task';

import './TaskBox.styles.scss';

interface IProps {
  task: ITask;
}

const TaskBox = ({ task }: IProps): JSX.Element => {
  const handleDelete = () => {
    alert('a');
  };

  return (
    <div className="task-box">
      <h4 className="box-text">{task.title}</h4>
      <Icon name="trash" type="fas" onClick={handleDelete} />
    </div>
  );
}

export default TaskBox;
