import React, { useState } from 'react';

import './App.css';
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

  return (
    <div className="App">
      <h1>My Team</h1>
      {/* <Form /> */}

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
