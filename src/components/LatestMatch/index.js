// Write your code here

import './index.css'
const LatestMatch = props => {
  const {latestMatch} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatch

  return (
    <div className="latest-match">
      <div>
        <h1>{competingTeam}</h1>
        <p>{venue}</p>
        <p></p>
      </div>
      <img className="img" src={competingTeamLogo} />
      <div>
        <h1>First Innings</h1>

        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>

        <h1>Man of the Match</h1>
        <p>{manOfTheMatch}</p>
      </div>
    </div>
  )
}

export default LatestMatch
