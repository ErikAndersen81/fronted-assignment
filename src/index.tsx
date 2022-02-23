import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* TODO: verify email, phone, etc. are valid not just strings */
type GeoRecord = {lat:number,lon:number};
type AddressRecord = {city:string, geo:GeoRecord, street:string, suite:string, zipcode:string};
type CompanyRecord = {name:string, catchPhrase:string, bs:string};
type UserRecord = {address:AddressRecord, company:CompanyRecord,
		   email:string,
		   id: string,
		   name: string,
		   phone: string,
		   username: string,
		   website: string,
		  }



type UserProps = {
    user:UserRecord
}

const User = (props:UserProps) => {
    const avatar = <img src='https://via.placeholder.com/150/1F83B3'/>;
    const user = {...props.user};
    return <li>{avatar}<span className="username">{user.name}</span><span className="usercompany">({user.company.name})</span></li>;
}


const List = () => {
    const [users, setUsers] = useState<Array<UserRecord>>([]);
    useEffect(() => {
	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
	    .then(data => setUsers(users => data as Array<UserRecord>));
    }, []);
    return <ul>{users.map(user => <User key={user.id} user={user}/>)}</ul>;
}

ReactDOM.render(
    <React.StrictMode>
	<h1>Users</h1>
    <List/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
