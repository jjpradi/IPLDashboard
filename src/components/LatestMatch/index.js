// Write your code here

import './index.css'
const LatestMatch = props => {
  const {latestMatch} = props
  console.log(latestMatch)
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
        <p>{competingTeam}</p>
        <p>{venue}</p>
        <p>{result}</p>
        <p>{date}</p>
      </div>
      <div>
        <img
          className="img"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
        <p>{matchStatus}</p>
      </div>
      <ul>
        <li>
          {' '}
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
        </li>
        <li>
          <h1>Second Innings</h1>
          <p>{secondInnings}</p>
        </li>

        <li>
          <h1>Man of the Match</h1>
          <p>{manOfTheMatch}</p>
        </li>

        <li>
          {' '}
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </li>
      </ul>
    </div>
  )
}

export default LatestMatch
