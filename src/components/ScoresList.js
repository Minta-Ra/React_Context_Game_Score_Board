import React, {useContext} from 'react'
import ScoresListItem from './ScoresListItem'
import UserContext from '../context/UserContext'
import userEvent from '@testing-library/user-event'

const ScoresList = () => {
  
    // Use context when things does not change often
    // Instead of having consumers and Context.Provider
    // destructured value of user - {user}
    const {user} = useContext(UserContext)

    const scoreListNodes = user.scores.map((game, index) => {
        return <ScoresListItem key={index} game={game} />
    })


  return (
    <ul>
        {/* Consumer looks for the nearest provider, such as Context.Provider */}
          {/* Children with callback to call a function. Any of JSX has that destructured value of user */}

        {scoreListNodes}
    </ul>
  )
}

export default ScoresList