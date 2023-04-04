import Icon from '../../elements/Icon';

import './PageSidebar.styles.scss';

const PageSidebar = (): JSX.Element => (
  <nav className="page-sidebar">
    <div className="sidebar-logo-placeholder" />
    <p className="board-count-label">All Boards (5)</p>
    <ul className="sidebar-items">
      <li className="sidebar-item active">
        <div className="board-icon">
          <Icon name="chess-board" type="fas" />
        </div>
        <a href="#" className="sidebar-link">
          Board Name
        </a>
      </li>
      <li className="sidebar-item">
        <div className="board-icon">
          <Icon name="chess-board" type="fas" />
        </div>
        <a href="#" className="sidebar-link">
          Board Name
        </a>
      </li>
      <li className="sidebar-item">
        <div className="board-icon">
          <Icon name="chess-board" type="fas" />
        </div>
        <a href="#" className="sidebar-link">
          Board Name
        </a>
      </li>
      <li className="sidebar-item">
        <div className="board-icon">
          <Icon name="chess-board" type="fas" />
        </div>
        <a href="#" className="sidebar-link">
          Board Name
        </a>
      </li>
      <li className="sidebar-item">
        <div className="board-icon">
          <Icon name="chess-board" type="fas" />
        </div>
        <a href="#" className="sidebar-link">
          Board Name
        </a>
      </li>
      <li className="sidebar-item new-board">
        <div className="board-icon">
          <Icon name="plus" type="fas" />
        </div>
        <a href="#" className="sidebar-link">
          Create new board
        </a>
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

export default PageSidebar;
