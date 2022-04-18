import Card from '../UI/Card';

import styles from './UsersList.module.css';

const UsersList = (props) => {
  const { users } = props;

  return (
    <Card className={ styles.users }>
      <ul>
        { users.map(({ id, name, age }) => <li key={ id }>{ name } ({ age } years old)</li>) }
      </ul>
    </Card>
  );
};

export default UsersList;
