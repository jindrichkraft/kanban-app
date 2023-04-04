import Button from '../../elements/Button';
import Icon from '../../elements/Icon';

import './PageNavigation.styles.scss';

const PageNavigation = (): JSX.Element => (
  <nav className="page-navigation">
    <h2 className="board-name-label">Board Name</h2>
    <ul className="nav-items">
      <li className="nav-item full-opacity">
        <Button
          text="Add a new task"
          variant="primary"
          icon={<Icon name="plus" type="fas" />}
        />
      </li>
      <li className="nav-item">
        <Icon name="ellipsis-vertical" type="fas" />
      </li>
    </ul>
  </nav>
);

export default PageNavigation;
