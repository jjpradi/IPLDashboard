import {Component} from 'react'
import './index.css'

class Live extends Component {
  state = {
    matches: [],
    isLoading: true,
    error: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  convertToImg = imgId =>
    `https://static.cricbuzz.com/a/img/v1/192x192/i1/${imgId}/image.jpg`

  getDetails = async () => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4668c942ecmshee3785fb0217015p104bb4jsn6106c87cb2e5',
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
      },
    }

    try {
      const res = await fetch(
        'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
        options,
      )
      console.log(res)
      const data = await res.json()
      console.log(data)
      const matches =
        data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches
      console.log(matches)
      this.setState({
        matches: matches.slice(0, 3), // ✅ TOP 3 MATCHES
        isLoading: false,
      })
    } catch (e) {
      this.setState({error: true, isLoading: false})
    }
  }

  renderMatchCard = (match, index) => {
    const matchInfo = match.matchInfo
    const matchScore = match.matchScore

    const team1 = matchInfo.team1
    const team2 = matchInfo.team2

    const score =
     matchScore?.team2Score?.inngs1 ?? {}

    return (
      <div key={matchInfo.matchId} className="match-card">
        {/* HEADER */}
        <div className="match-header">
          <div className="team">
            <img
              src={this.convertToImg(team1.teamImageId)}
              alt={team1.teamName}
            />
            <p>{team1.teamSName}</p>
          </div>

          <div className="match-status">
            {index === 0 && <p className="live">LIVE</p>}
            <p>{matchInfo.matchDesc}</p>



          </div>

          <div className="team">
            <img
              src={this.convertToImg(team2.teamImageId)}
              alt={team2.teamName}
            />
            <p>{team2.teamSName}</p>
          </div>
        </div>

        {/* SCORE */}
        <div className="score-card">
          {score.runs !== undefined ? (
            <>
              <h2>
                {score.runs}/{score.wickets}
              </h2>
              <p>Overs: {score.overs}</p>
            </>
          ) : (
            <p>Score not available</p>
          )}
        </div>

        {/* INFO */}
        <div className="match-info">
          <p>Venue: {matchInfo.venueInfo?.ground}</p>
          <p>Status: {matchInfo.status}</p>
        </div>
      </div>
    )
  }

  render() {
    const {matches, isLoading, error} = this.state

    if (isLoading) return <p>Loading live matches...</p>
    if (error) return <p>Something went wrong</p>

    return (
      <div className="live-container">
        {matches.map((match, index) => this.renderMatchCard(match, index))}
      </div>
    )
  }
}

export default Live
