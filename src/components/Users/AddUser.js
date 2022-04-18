import { useState } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';

const AddUser = (props) => {
  const { onAddNewUser } = props;
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState({ title: '', message: '' });

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setIsValid(false);
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (not an empty values).'
      });
      return;
    }
    if (+userAge < 1) {
      setIsValid(false);
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      });
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      name: userName,
      age: +userAge,
    }
    onAddNewUser(newUser);
    setUserName('');
    setUserAge('');
  };

  const userNameChangeHandler = ({ target }) => {
    setUserName(target.value);
  };

  const userAgeChangeHandler = ({ target }) => {
    setUserAge(target.value);
  }

  const onCloseModalHandler = () => setIsValid(true);

  return (
    <Card className={ styles.input }>
      <form onSubmit={ addUserHandler }>
        <label htmlFor="userName">Username</label>
        <input id="userName" type="text" value={ userName } onChange={ userNameChangeHandler }/>
        <label htmlFor="userAge">Age (Years)</label>
        <input id="userAge" type="number" value={ userAge } onChange={ userAgeChangeHandler }/>
        <Button type="submit" action={ addUserHandler }>Add User</Button>
      </form>
      { !isValid &&
        <ErrorModal
          title={ error.title }
          message={ error.message }
          onCloseModal={ onCloseModalHandler }
        /> }
    </Card>
  )
};

export default AddUser;
