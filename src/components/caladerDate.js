// import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import '../styles/CalanderDate.css'

function  CaladerDate ({day, id, toggleModalState, data}) {
    // const [appointmentTime , setAppTimes ] = useState('')
    // const [numOfAppointments, setNumOfAppointments] = useState()
    
    return (
        <div  className="CalanderDate">  
        <button className='add' onClick={()=>toggleModalState(id)}>+</button>
        <div className="bg">{day}</div>          
        {data.map((appT, index) =>  (appT.dayId === id) 
                ?   <div className="single" key={index}>
                      <Link to={`/user/${appT.name}`}> 
                      <span className="info">{appT.name}</span>
                      <span className="info">{appT.time}</span>
                      {/* {setNumOfAppointments(numOfAppointments + 1)} */}
                      </Link>
                    </div>
                : ''
            )}

        </div>
    )
}

export default CaladerDate