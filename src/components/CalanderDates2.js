import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'
import CaladerDate from './caladerDate';
import AppointmentForm from './AppointmentForm';
import '../styles/Calander.css';
import '../styles/FormModal.css'

CalanderDates2.defaultProps = {
    days: [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
}

function  CalanderDates2(props){
    // Hooks
    const [modalState, setModalState] = useState(false)
    const [currentDay, setCurrentDay] = useState()
    const [appTime, setAppTime] =  useState([]);
   
   //Loading data from loacal Storage
   useEffect(() => {
    const localData = localStorage.getItem('Appointment')
    return localData ? setAppTime(JSON.parse(localData)) : [];    
   }, [])
   
   
   // appointment is a values being returned from the form
   const addAppointment = (appointment)=>{
        const times = {...appointment, booked:true, counter:1, id:uuidv4()} // adding other properties to the appointment before sending it to main component from the form
        const newtime= [...appTime, times, ];
        setAppTime(newtime)
    }

    // Store appointment to local storage everytime apptime changes
    useEffect(() => {
        localStorage.setItem('Appointment', JSON.stringify(appTime))
    }, [appTime])

    const toggleModalState = (id)=>{        
        if(id) setCurrentDay(id)
        setModalState(!modalState)
    }

        return (
            <div className="Calander-container">
                    <h1>Calanders</h1>
                    <div className={`modalBackground modalBackgroundShow-${modalState}`}>
                        <AppointmentForm  addAppointment={addAppointment} toggleModalState={toggleModalState} id={currentDay}/>
                    </div>
                    <div className="Calander">                
                        {props.days.map(day=> (
                            <CaladerDate 
                            key={day}
                            day={day} 
                            id={day}
                            count={day.counter}
                            data={appTime}
                            toggleModalState={toggleModalState}
                            
                            />
                            )
                            )
                        }
                    </div>
                              
            </div>
            
        )
    }

export default CalanderDates2;
