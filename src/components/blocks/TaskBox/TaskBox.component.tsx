import { useDispatch } from 'react-redux';

import Icon from '../../elements/Icon';
import { removeTask } from '../../../redux/slices/task';

import type { ITask } from '../../../typings/task';

import './TaskBox.styles.scss';

interface IProps {
  task: ITask;
}

const TaskBox = ({ task }: IProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleMoveBack = () => {
    alert('a');
  };

  const handleMoveForward = () => {
    alert('a');
  };

  const handleDelete = (id: ITask['id']) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="task-box">
      <h4 className="box-text">{task.title}</h4>
      <div className="box-icons">
        {task.type !== 'todo' ? (
          <div className="move-back-icon" onClick={handleMoveBack}>
            <Icon name="arrow-left" type="fas" />
          </div>
        ) : null}
        {task.type !== 'done' ? (
          <div className="move-forward-icon" onClick={handleMoveForward}>
            <Icon name="arrow-right" type="fas" />
          </div>
        ) : null}
        <div className="delete-icon" onClick={() => handleDelete(task.id)}>
          <Icon name="trash" type="fas" />
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
