import React, { useState } from 'react';
// import styled from 'styled-components';
import './App.css';
import Form from './components/Form'
import TeamMember from './components/TeamMember';


const initialTeamMemberList = [
  {
    name: 'Mardo',
    age: '26',
    location: 'Boston'
  },
  {
    name: 'Chanel',
    age: '28',
    location: 'Ocala'
  },
  {
    name: 'Ebony',
    age: '26',
    location: 'D.C.'
  },
]

const initialFormValues = {
  name: '',
  age: '',
  location: ''
}



function App() {
  const [teamMember, setTeamMember] = useState(initialTeamMemberList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newTeamMember = { 
      name: formValues.name.trim(),
      age: formValues.age.trim(),
      location: formValues.location.trim()

    }
    setTeamMember([newTeamMember, ...teamMember])
    setFormValues(initialFormValues)
    if(!newTeamMember.name || !newTeamMember.age || !newTeamMember.location) return
  }

  console.log(teamMember)
  return (
    <div className="App container">
      <h1>My Team</h1>
      <Form 
      formValues={formValues}
      updateForm={updateForm}
      submitForm={submitForm}
      />

    {
      teamMember.map(member => {
        return (
          <TeamMember info={member} />
        )
      })
    } 
      
    </div>
  );
}

export default App;
