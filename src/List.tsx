import React, {useEffect, useState} from 'react';
import User, {UserRecord} from './User';

const List = () => {
    const [users, setUsers] = useState<Array<UserRecord>>([]);
    useEffect(() => {
	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
	    .then(data => setUsers(users => data as Array<UserRecord>));
    }, []);
    return <div className="list">	<h1>Users</h1>
<ul>{users.map(user => <User key={user.id} user={user}/>)}</ul></div>;
}

export default List;
