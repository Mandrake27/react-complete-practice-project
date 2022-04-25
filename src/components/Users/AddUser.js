import { useState, useRef } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';

import styles from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const { onAddNewUser } = props;
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState({ title: '', message: '' });

  const addUserHandler = (event) => {
    event.preventDefault();

    const { value: enteredName } = nameInputRef.current;
    const { value: enteredAge } = ageInputRef.current;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (not an empty values).'
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsValid(false);
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      });
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    }
    onAddNewUser(newUser);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const onCloseModalHandler = () => setIsValid(true);

  return (
    <Wrapper>
      <Card className={ styles.input }>
        <form onSubmit={ addUserHandler }>
          <label htmlFor="userName">Username</label>
          <input id="userName" type="text" ref={ nameInputRef } />
          <label htmlFor="userAge">Age (Years)</label>
          <input id="userAge" type="number" ref={ ageInputRef } />
          <Button type="submit" action={ addUserHandler }>Add User</Button>
        </form>
      </Card>
      { !isValid &&
        <ErrorModal
          title={ error.title }
          message={ error.message }
          onCloseModal={ onCloseModalHandler }
        /> }
    </Wrapper>
  )
};

export default AddUser;
