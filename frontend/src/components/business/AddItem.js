import React, {  } from 'react'
import AddForm from './AddForm'
import Cookies from 'universal-cookie';
import axios from 'axios';
export default function AddItem() {
    const addItem = async (name, cost, stock, manufacturer, file, description) =>{
        const cookies = new Cookies();
        const formData = new FormData();
        formData.append("file", file);
        try {
         await axios.post(
            `http://localhost:5000/upload/addFile?username=${cookies.get("username")}&name=${name}&stock=${stock}&cost=${cost}&manufacturer=${manufacturer}&description=${description}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          alert('Successfully added item');
        } catch (err) {
          console.log("there was error in server");
        }
    }
    return (
        <div className='add-item'>
            <AddForm addItem={addItem}/>
        </div>
    )
}
