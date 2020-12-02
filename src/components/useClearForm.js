// Form logic hook
import {useState} from 'react';

 export const useClearForm = (initialValues) =>{
    const [valuesClear, setClearForm ] = useState(initialValues);

    return[
      valuesClear, ()=>{
        setClearForm({ ...valuesClear,
             [valuesClear.name]: ''
          })

       }
    ];
    
 }