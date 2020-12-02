// import React, { useState } from 'react'
import '../styles/CalanderDate.css'

function  CaladerDate ({day, id, toggleModalState, data}) {
    // const [appointmentTime , setAppTimes ] = useState('')
    
    return (
        <div  className="CalanderDate" onClick={()=>toggleModalState(id)}>  
        <div className="bg">{day}</div>          
        {data.map((appT, index) =>  (appT.dayId === id) ? <div key={index}><p className="info">Patient Name: {appT.name}</p><p className="info">App Time:{appT.time}</p></div>: '')}
    
        </div>
    )
}

export default CaladerDate