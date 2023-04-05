import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import './Icon.styles.scss';

interface IProps {
  name: IconName;
  type: IconPrefix;
  // eslint-disable-next-line
  [x: string]: any;
}

library.add(fas);

const Icon = ({ name, type, ...restProps }: IProps): JSX.Element => (
  <div className="icon">
    <FontAwesomeIcon icon={[type, name]} {...restProps} />
  </div>
);

export default Icon;
