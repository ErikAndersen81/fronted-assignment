type UserProps = {
    user:UserRecord
}

const User = (props:UserProps) => {
    const user = {...props.user};
    console.log(user);
    const avatar = <img src='https://via.placeholder.com/150/1F83B3' className="useravatar" alt={user.name}/>;
    const name = user.website !== "" ? <a className="username" href={user.website}>{user.name}</a> : <span className="username">{user.name}</span>;
    const company = user.company ? <span className="usercompany">({user.company.name})</span> : null;
    return <li className="user">{avatar}{name}{company}</li>;
}

/* TODO: verify email, phone, etc. are valid not just strings */
type GeoRecord = {lat:number,lon:number};
type AddressRecord = {city:string, geo:GeoRecord, street:string, suite:string, zipcode:string};
type CompanyRecord = {name:string, catchPhrase:string, bs:string};

export type UserRecord = {address:AddressRecord, company:CompanyRecord,
		   email:string,
		   id: string,
		   name: string,
		   phone: string,
		   username: string,
		   website: string,
		  }

export default User;
