import { useParams, Link } from 'react-router-dom';

import Icon from '../../elements/Icon';

import './PageSidebar.styles.scss';

const PageSidebar = (): JSX.Element => {
  const { id } = useParams();

  return (
    <nav className="page-sidebar">
      <div className="sidebar-logo-placeholder" />
      <p className="board-count-label">All Boards (5)</p>
      <ul className="sidebar-items">
        <li className="sidebar-item">
          <Link
            className={`sidebar-link${id && id === '1' ? ' active' : ''}`}
            to="/board/1"
          >
            <div className="board-icon">
              <Icon name="chess-board" type="fas" />
            </div>
            <p>Board Name</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            className={`sidebar-link${id && id === '2' ? ' active' : ''}`}
            to="/board/2"
          >
            <div className="board-icon">
              <Icon name="chess-board" type="fas" />
            </div>
            <p>Board Name</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            className={`sidebar-link${id && id === '3' ? ' active' : ''}`}
            to="/board/3"
          >
            <div className="board-icon">
              <Icon name="chess-board" type="fas" />
            </div>
            <p>Board Name</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            className={`sidebar-link${id && id === '4' ? ' active' : ''}`}
            to="/board/4"
          >
            <div className="board-icon">
              <Icon name="chess-board" type="fas" />
            </div>
            <p>Board Name</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link
            className={`sidebar-link${id && id === '5' ? ' active' : ''}`}
            to="/board/5"
          >
            <div className="board-icon">
              <Icon name="chess-board" type="fas" />
            </div>
            <p>Board Name</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <div className="sidebar-link new-board">
            <div className="board-icon">
              <Icon name="plus" type="fas" />
            </div>
            <p>Create new board</p>
          </div>
        </li>
      </ul>
      <div className="theme-switch-box">
        <Icon name="sun" type="fas" />
        <div className="toggle">
          <input type="checkbox" id="theme-toggle" />
          <label htmlFor="theme-toggle">
            <span className="sr-only">Toggle Switch</span>
          </label>
        </div>
        <Icon name="moon" type="fas" />
      </div>
    </nav>
  );
};

export default PageSidebar;
