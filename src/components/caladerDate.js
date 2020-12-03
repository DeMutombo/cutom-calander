// import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import '../styles/CalanderDate.css'

function  CaladerDate ({day, id, toggleModalState, data}) {
    // const [appointmentTime , setAppTimes ] = useState('')
    // const [numOfAppointments, setNumOfAppointments] = useState()
    
    return (
        <div  className="CalanderDate">  
        <div style={{backgroundColor:'green', height:'15%', textAlign:'left', zIndex:5}} onClick={()=>toggleModalState(id)}>Add</div>
        <div className="bg">{day}</div>          
        {data.map((appT, index) =>  (appT.dayId === id) 
                ?   <div className="single" key={index}>
                      <Link to={`/user/${appT.name}`}> <p className="info">Name: {appT.name}</p>
                      <p className="info">Time:{appT.time}</p>
                      {/* {setNumOfAppointments(numOfAppointments + 1)} */}
                      </Link>
                    </div>
                : ''
            )}

        </div>
    )
}

export default CaladerDate