import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/Users.css'

export default function User(props) {
    const {name} = props.match.params
    const [userInfo, setuserInfo] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem('Appointment');
        return user ? setuserInfo(JSON.parse(user)) : {};
       
    }, [])

    const user = userInfo.filter(user => user.name === name)
     console.log(user, name)

    return (
        <div className='Userstyles'>
             
            {user.map(user => <div>
            <p className='userInfo'>Name: {user.name}</p>
            <p className='userInfo'>Number: {user.number}</p>
            <p className='userInfo'>Reason: {user.reason}</p>
            </div>  )}
            
        </div>
    )
}
