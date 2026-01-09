// Write your code here

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import {Component} from 'react'
class TeamMatches extends Component {
  state = {recentMatch: [], latestMatch: {}, bannerImg: ''}
  componentDidMount() {
    this.getTeamMatches()
  }



  getTeamMatches = async () => {
    const {params} = this.props.match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    console.log(data)
console.log(data.recent_matches)
console.log(data.latest_match_details)
    const recentMatches = data.recent_matches (e=>({
      umpires: e.umpires,

      result: e.result,

      manOfTheMatch: e.man_of_the_match,
      id: e.id,
      date: e.date,
      venue: e.venue,
      competingTeamLogo: e.competing_team_logo,

      firstInnings: e.first_innings,
      secondInnings: e.second_innings,
      matchStatus: e.match_status,
    }))

    const latestMatches = data.latest_match_details.map(e => ({
      umpires: e.umpires,
      result: e.result,

      manOfTheMatch: e.man_of_the_match,
      id: e.id,
      date: e.date,
      venue: e.venue,
      competingTeam: e.competing_team,
      competingTeamLogo: e.competing_team_logo,
      firstInnings: e.first_innings,
      secondInnings: e.second_innings,
      matchStatus: e.match_status,
    }))



console.log(data.latest_match_details)

    const bannerImage = data.team_banner_url

    this.setState({
      recentMatch:recentMatches,
      latestMatch:latestMatches,
      bannerImg:bannerImage,
    })
  }

  render() {
    const {recentMatch,latestMatch,bannerImg} = this.state
   
  console.log(recentMatch)
  console.log(latestMatch)
    return (
      <div>
        <img src={bannerImg} />
        <div>
          <LatestMatch latestMatch={latestMatch} />
        </div>

        <div>
          <ul>
            {recentMatch.map(e => (
              <MatchCard />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
