// Write your code here

import {Link} from 'react-router-dom'
import './index.css'
const TeamCard = props => {
  const {item, teamMatches} = props
  const {id, name, teamImageUrl} = item

  const onTeamMatches = () => {}

  return (
    <Link className="" to={`/team/${id}`} onClick={onTeamMatches}>
      <li className="list-item">
        <img className="img" src={teamImageUrl} />

        <h1>{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
