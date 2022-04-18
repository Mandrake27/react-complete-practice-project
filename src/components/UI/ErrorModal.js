import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css';

const Backdrop = ({ onCloseModal }) => {
  return <div className={ styles.backdrop } onClick={ onCloseModal }/>
};

const ModalOverlay = ({ title, message, onCloseModal }) => {
  return <Card className={ styles.modal }>
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
};

const ErrorModal = (props) => {
  const { title, message, onCloseModal } = props;

  return (
    <>
      { ReactDOM.createPortal(
        <Backdrop onCloseModal={ onCloseModal }/>,
        document.getElementById('backdrop-root')
      ) }
      { ReactDOM.createPortal(
        <ModalOverlay
          title={ title }
          message={ message }
          onCloseModal={ onCloseModal }/>,
        document.getElementById('overlay-root')
      ) }
    </>
  )
};

export default ErrorModal;
