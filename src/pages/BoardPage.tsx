import DefaultLayout from '../layouts/DefaultLayout';
import TaskColumns from '../components/blocks/TaskColumns';

const BoardPage = (): JSX.Element => (
  <DefaultLayout>
    <TaskColumns
      todoTasks={[{ title: 'Task ' }, { title: 'Task ' }, { title: 'Task ' }]}
      doingTasks={[
        { title: 'Task ' },
        { title: 'Task ' },
        { title: 'Task ' },
        { title: 'Task ' },
        { title: 'Task ' },
      ]}
      doneTasks={[
        { title: 'Task ' },
        { title: 'Task ' },
        { title: 'Task ' },
        { title: 'Task ' },
      ]}
    />
  </DefaultLayout>
);

export default BoardPage;
