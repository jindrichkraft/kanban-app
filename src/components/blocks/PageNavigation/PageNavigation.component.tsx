import { Link } from 'react-router-dom';

import './PageNavigation.styles.scss';

const PageNavigation = (): JSX.Element => (
  <nav className="page-navigation">
    <h2>Page Navigation</h2>
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
);

export default PageNavigation;
