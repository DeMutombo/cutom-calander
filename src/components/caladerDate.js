// import React, { useState } from 'react'
import '../styles/CalanderDate.css'

function  CaladerDate ({day, id, toggleModalState, data}) {
    // const [appointmentTime , setAppTimes ] = useState('')
    // const [numOfAppointments, setNumOfAppointments] = useState()
    
    return (
        <div  className="CalanderDate" onClick={()=>toggleModalState(id)}>  
        <div className="bg">{day}</div>          
        {data.map((appT, index) =>  (appT.dayId === id) 
                ?   <div className="single" key={index}>
                      <p className="info">Name: {appT.name}</p>
                      <p className="info">Time:{appT.time}</p>
                      {/* {setNumOfAppointments(numOfAppointments + 1)} */}
                    </div>
                : ''
            )}

        </div>
    )
}

export default CaladerDate