import { useSelector } from 'react-redux';

import DefaultLayout from '../layouts/DefaultLayout';
import TaskColumns from '../components/blocks/TaskColumns';

import type { RootState } from '../redux/store';

const BoardPage = (): JSX.Element => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  return (
    <DefaultLayout>
      <TaskColumns tasks={tasks || []} />
    </DefaultLayout>
  );
};

export default BoardPage;
