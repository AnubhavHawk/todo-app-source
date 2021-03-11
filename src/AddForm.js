import React, { useState } from 'react';

const AddForm = (props) =>{

    const [input, setInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input !== ''){
            props.setTodos({title: input, status: "noncompleted", id:Math.round(Math.random()*500)})
        }
        setInput('')
    }

    return(
        <div className="add-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="New Todo!" value={input} onChange={e => setInput(e.target.value)} />
                <input type="submit" value="create" className="submit-btn" />
            </form>
        </div>
    )
}

export default AddForm;