import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const AddScoreForm = () => {

  // Controlled component
  const [inputGame, setInputGame] = useState("")
  const [inputScore, setInputScore] = useState("")

  // destructured {user, setUser} from useContext() and passed UserContext as an argument, so would have an ability to change the user
  const {user, setUser} = useContext(UserContext)

  const handleInputGame = (event) => {
    setInputGame(event.target.value)
  }

  const handleInputScore = (event) => {
    setInputScore(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const newScore = {}
    newScore[inputGame] = inputScore
    // Make a copy of it and the push it up, ...user - deep copy of what is in state
    const copyUser = {...user}
    copyUser.scores.push(newScore)
    // Set to state to make it exist
    setUser(copyUser)
    setInputGame("")
    setInputScore("")
  }
  
  return (
  <div>
    <form onSubmit={handleFormSubmit}>
        <label htmlFor='game'>Game:</label>
        {/* Value will change */}
        <input type="text" id="game" value={inputGame} onChange={handleInputGame} required/>
        <label htmlFor='score'>Score:</label>
        <input type="number" id="score" value={inputScore} onChange={handleInputScore} required/>
        <input type="submit" value="Save" />
    </form>
  </div>
  );
}

export default AddScoreForm