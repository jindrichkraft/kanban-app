import './Button.styles.scss';

interface IProps {
  text: string;
  variant?: 'primary';
  icon?: JSX.Element;
}

const Button = ({ text, variant, icon }: IProps): JSX.Element => (
  <button className={`button${variant ? ` button--${variant}` : ''}`}>
    {icon ?? null}
    {text}
  </button>
);

export default Button;
