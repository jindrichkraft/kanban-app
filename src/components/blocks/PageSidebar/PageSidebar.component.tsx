import './PageSidebar.styles.scss';

const PageSidebar = (): JSX.Element => (
  <nav className="page-sidebar">
    <h2>Sidebar</h2>
    <p className="board-count-label">All Boards (5)</p>
    <ul className="sidebar-items">
      <li className="nav-item">
        <a href="#" className="nav-link">
          Board Name
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Board Name
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Board Name
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Board Name
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Board Name
        </a>
      </li>
    </ul>
  </nav>
);

export default PageSidebar;
