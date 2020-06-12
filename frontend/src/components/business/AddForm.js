import React, {useState } from 'react'



export default function AddForm(props) {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [manufacturer, setManufacturer] = useState('');

    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
    

    const handleSubmit = (e) =>{
  
        e.preventDefault();
        if(!name || !cost || !stock || !manufacturer || !fileName || !description) 
            alert('Please fill all fields');
        else if( isNaN(cost) || isNaN(stock))
            alert('Please enter a valid number');
        else 
            props.addItem(name, cost, stock, manufacturer, file, description);
    }
  

    return (
        <form className = 'add-item-form'>
            <input type='text' value={name} placeholder='Enter Name of product' onChange={(e)=> setName(e.target.value)} />
            <input type='text' placeholder='Enter Stock amount'  name='setStock'  onChange={(e)=> setStock(e.target.value)}/>
            <input type='text' placeholder='Enter Cost of product' nane='setCost'  onChange={(e)=> setCost(e.target.value)}/>
            <input type='text' placeholder='Enter Manufacturer of product' name='setManufacturer'  onChange={(e)=> setManufacturer(e.target.value)}/>
            <textarea placeholder='Add a short description' onChange={(e)=> setDescription(e.target.value)} />
            <label htmlFor='add-file'>Select image for Product</label>
            <input type="file" id="add-file" onChange={onChange}></input>
                        <button onClick={handleSubmit}>SUBMIT</button>
        </form>
    )
}
