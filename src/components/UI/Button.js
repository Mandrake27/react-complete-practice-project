import styles from './Button.module.css';

const Button = (props) => {
  const { type, children, action } = props;

  return (
    <button className={ styles.button } type={ type || 'button' } onClick={ action }>{ children }</button>
  )
};

export default Button;
