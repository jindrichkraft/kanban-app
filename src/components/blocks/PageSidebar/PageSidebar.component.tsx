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
    </ul>
    <div className="theme-switch-box">
      <Icon name="sun" type="fas" />
      <Icon name="moon" type="fas" />
    </div>
  </nav>
);

export default PageSidebar;
