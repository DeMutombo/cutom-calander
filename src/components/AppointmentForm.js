import {useForm} from '../Hooks/UseForm';


function AppointmentForm({addAppointment, toggleModalState, id}) {
    const [values, handleChange] = useForm([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!values.time) return alert('select time')
        if(!values.name)  return alert('enter name')
        if(!values.cellNum)  return alert('enter number')
        if(!values.reason)  return alert('Please state reason for your Visit')
        const appointment = {...values, dayId: id};
        addAppointment(appointment)
        toggleModalState()
    }
    return (    
        <div className="AppointmentInner">
                <div onClick={()=>toggleModalState()} className="FormClose">x</div>
                <h3> Add Your Details</h3>
            
            <form onSubmit={handleSubmit} >
                <div className="AppointmenElement">
                    <label htmlFor="time">Select a Time slot</label>
                    <select value={values.time} name="time" onChange={handleChange}>
                        <option > Select your time</option>
                        <option value="9-10 AM"> 09:00 - 10:00</option>
                        <option value="10-11 AM"> 10:00 - 11:00</option>
                        <option value="11-12 AM"> 11:00 - 12:00</option>
                        <option value="13-14 PM"> 13:00 - 14:00</option>
                        <option value="14-15 PM"> 14:00 - 15:00</option>
                    </select>
                </div>
                <div className="AppointmenElement">
                    <label htmlFor="name">Enter name</label>
                    <input type="text" value={values.name} name="name" onChange={handleChange}/>
                </div>
                <div className="AppointmenElement">
                    <label htmlFor="cellNum">Cell number</label>
                    <input type="text" value={values.cellNum} name="cellNum" onChange={handleChange}/>
                </div>
                <div className="AppointmenElement">
                    <label htmlFor="reason">Reason for visit</label>
                    <input type="textarea" value={values.reason} name="reason" onChange={handleChange} />
                </div>
                <button type="submit">Make an appointment</button>
            </form>
        </div>
    )
}

export default AppointmentForm;

