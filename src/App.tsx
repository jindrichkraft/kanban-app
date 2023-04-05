import { Routes, Route } from 'react-router-dom';

import BoardPage from './pages/BoardPage';

import './styles/reset.scss';
import './styles/main.scss';
import './styles/layout.scss';

const App = (): JSX.Element => (
  <Routes>
    <Route path="/board/:id" element={<BoardPage />} />
  </Routes>
);

export default App;
