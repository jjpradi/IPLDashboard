// Write your code here

import {Link} from 'react-router-dom'
import './index.css'
const TeamCard = props => {
  const {item, teamMatches} = props
  const {id, name, teamImageUrl} = item

  const onTeamMatches = () => {}

  return (
    <Link

    
      className="team-item"
      to={`/team-matches/${id}`}
      onClick={onTeamMatches}
    >
      <li className="list-item">
        <img alt={name} className="img" src={teamImageUrl} />

        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
