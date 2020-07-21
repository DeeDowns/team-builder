import React from 'react'

export default function Form(props) {
    const { formValues, updateForm, submitForm } = props

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        updateForm(name, value)
    }
    
    const onSubmit = event => {
        event.preventDefault();
        submitForm()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Add a Team Member</h2>
            <div>
                <label>Name:&nbsp;
                    <input
                    id='nameInput'
                    name='name'
                    type='text'
                    placeholder='First Name'
                    maxLength='20'
                    value={formValues.name}
                    onChange={onChange}>
                    </input>
                </label>
            </div>
           <button>Submit</button> 
        </form>
        

    )
}