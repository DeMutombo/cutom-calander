import React from 'react';
import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import '../styles/Users.css'

export default function User(props) {
    const {name} = props.match.params
    const [userInfo, setuserInfo] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem('Appointment');
        return user ? setuserInfo(JSON.parse(user)) : {};
       
    }, [])

    const user = userInfo.filter(user => user.name === name)

    return (
        <div className='Userstyles'>
             
            {user.map(user => 
            <div className='User-style-card' key={uuidv4()}>
                <p className=' user-name userInfo'>Name: {user.name}</p>
                <p className='userInfo'>Number: {user.number}</p>
                <p className='userInfo'>Reason: {user.reason}</p>
                <p className='userInfo'>Time: {user.time}</p>
                <p className='userInfo'>Day: {user.dayId}</p>
                <span><button>Done</button></span>
                <span><button>Reschedule</button></span>
                <span><button>Remove</button></span>
            </div>  )}
            
        </div>
    )
}
