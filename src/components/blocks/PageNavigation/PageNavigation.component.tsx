import Icon from '../../elements/Icon';

import './PageNavigation.styles.scss';

const PageNavigation = (): JSX.Element => (
  <nav className="page-navigation">
    <h2>Board Name</h2>
    <ul className="nav-items">
      <li className="nav-item">Add new task</li>
      <li className="nav-item">
        <Icon name="ellipsis-vertical" type="fas" />
      </li>
    </ul>
  </nav>
);

export default PageNavigation;
