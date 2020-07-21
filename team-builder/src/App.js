import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import TeamMember from './components/TeamMember';

const initialTeamMemberList = [
  {name: 'Mardo'},
  {name: 'Chanel'},
  {name: 'Ebony'},
]

const initialFormValues = {
  name: ''
}



function App() {
  const [teamMember, setTeamMember] = useState(initialTeamMemberList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newTeamMember = { name: formValues.name.trim()}
    setTeamMember([newTeamMember, ...teamMember])
    if(!newTeamMember.name) return
  }

  console.log(teamMember)
  return (
    <div className="App">
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
