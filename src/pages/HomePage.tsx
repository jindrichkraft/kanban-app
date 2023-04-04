import DefaultLayout from '../layouts/DefaultLayout';
import TaskColumns from '../components/blocks/TaskColumns';

const HomePage = (): JSX.Element => (
  <DefaultLayout>
    <TaskColumns />
  </DefaultLayout>
);

export default HomePage;
