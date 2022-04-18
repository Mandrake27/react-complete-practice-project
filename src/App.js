import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (newUser) => setUsers(prevState => [newUser, ...prevState]);

  return (
    <div>
      <AddUser onAddNewUser={ addNewUserHandler }/>
      <UsersList users={ users }/>
    </div>
  );
}

export default App;
