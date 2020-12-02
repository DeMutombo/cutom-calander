import React from 'react'
import CaladerDate from './caladerDate';
import '../styles/Calander.css'

export default function Calander(props) {
    return (
        <div className="Calander">
            {props.calanderDays.map(day => (<CaladerDate/>))}
            <p>Calander Grid</p>
        </div>
    )
}

Calander.defaultProps = {
    calanderDays : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,]
}



