// Write your code here
import './index.css'
const MatchCard = props => {
  const {item} = props

  console.log(item)
  const {matchStatus, competingTeam, competingTeamLogo, result} = item
  return (
    <li className="match-card">
      <img
        className="logo-img"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p>{competingTeam}</p>

      <p>{result}</p>

      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
