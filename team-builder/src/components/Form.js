import React from 'react'
import styled from 'styled-components';


const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    h2 {
        font-size: 3.5rem;
        text-align: center;
        width: 60%;
        margin: 3%;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
    }

    .inputs label {
        margin: 3%;
        width: 80%;
        font-size: 2rem;
    }

    button {
        width: 20%;
        margin: 3%;
        font-size: 2.5rem;
    }

`

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
        <StyledForm onSubmit={onSubmit} className='form'>
            <h2>Add a Team Member</h2>
            <div className='inputs'>
                <label>Name:&nbsp;
                    <input
                    id='nameInput'
                    name='name'
                    type='text'
                    placeholder='Name'
                    maxLength='20'
                    value={formValues.name}
                    onChange={onChange}>
                    </input>
                </label>
                <label>Age:&nbsp;
                    <input
                    id='ageInput'
                    name='age'
                    type='text'
                    placeholder='Age'
                    maxLength='3'
                    value={formValues.age}
                    onChange={onChange}>
                    </input>
                </label>
                <label>Location:&nbsp;
                    <input
                    id='locationInput'
                    name='location'
                    type='text'
                    placeholder='City'
                    maxLength='20'
                    value={formValues.location}
                    onChange={onChange}>
                    </input>
                </label>
            </div>
           <button className='submit-button'>Submit</button> 
        </StyledForm>
        

    )
}