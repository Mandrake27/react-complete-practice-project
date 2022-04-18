import styles from './Card.module.css';

const Card = ({ className, children }) => <div className={ `${ styles.card } ${ className }` }>{ children }</div>

export default Card;
