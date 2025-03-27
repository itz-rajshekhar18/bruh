import React from 'react'
import Greetings from './Greetings'
import ClassGreeting from './ClassGreetting'
import Card from './Card'

const App = (props) => {
  return (
    <div>
      <Card children="raj"/>
      <br/>
      <Card children="asdf">      
        <ClassGreeting name="Aditya"/>
        <ClassGreeting/>
      </Card>
        <ClassGreeting/>

      <Card>
        <Greetings name="Polarois"/>
        <Greetings/>
      </Card>
        <Greetings/>
    </div>
  )
}

export default App