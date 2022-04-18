import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const { title, message, onCloseModal } = props;

  return (
    <div>
      <div className={ styles.backdrop } onClick={ onCloseModal }/>
      <Card className={ styles.modal }>
        <header className={ styles.header }>
          <h2>{ title }</h2>
        </header>
        <div className={ styles.content }>
          <p>{ message }</p>
        </div>
        <footer className={ styles.actions }>
          <Button action={ onCloseModal }>Ok</Button>
        </footer>
      </Card>
    </div>
  )
};

export default ErrorModal;
