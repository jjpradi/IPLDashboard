// Write your code here
import Recharts from '../Recharts'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import {Component} from 'react'
class TeamMatches extends Component {
  state = {
    recentMatch: [],
    bgColor: '',
    latestMatch: {},
    bannerImg: '',
    isLoading: true,
  }
  componentDidMount() {
    this.getTeamMatches()
  }

  onBack = () => {
    const {history} = this.props

    history.replace('/')
  }
  getColor = id => {
    switch (id) {
      case 'RCB':
        return 'red'
      case 'KKR':
        return 'violet'
      case 'CSK':
        return 'yellow'
      case 'RR':
        return 'blue'
      case 'MI':
        return 'blue'
    }
  }

  getTeamMatches = async () => {
    const {params} = this.props.match
    const {id} = params
    console.log(id)

    const newColor = this.getColor(id)

    console.log(newColor)
    this.setState({
      bgColor: newColor,
    })
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    console.log(data)
    console.log(data.recent_matches)
    console.log(data.latest_match_details)
    const recentMatches = data.recent_matches.map(e => ({
      umpires: e.umpires,

      result: e.result,

      manOfTheMatch: e.man_of_the_match,
      id: e.id,
      date: e.date,
      venue: e.venue,
      competingTeamLogo: e.competing_team_logo,
      competingTeam: e.competing_team,
      firstInnings: e.first_innings,
      secondInnings: e.second_innings,
      matchStatus: e.match_status,
    }))

    const e = data.latest_match_details

    const latestMatches = {
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
    }

    console.log(data.latest_match_details)

    console.log(recentMatches)
    console.log(latestMatches)

    const bannerImage = data.team_banner_url

    this.setState({
      recentMatch: recentMatches,
      latestMatch: latestMatches,
      bannerImg: bannerImage,

      isLoading: false,
    })
  }

  renderLoader = () => {
    return (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" />
      </div>
    )
  }

  renderSuccess = () => {
    const {bannerImg, bgColor, latestMatch, recentMatch} = this.state
    return (
      <div style={{backgroundColor: bgColor}}>
        <img alt="team banner" src={bannerImg} />

        <div className="latest">
          <LatestMatch latestMatch={latestMatch} />

          <div className="chart">
            {' '}
            <Recharts dataStat={recentMatch} />
          </div>
        </div>

        <div>
          <ul className="match-list">
            {recentMatch.map(e => (
              <MatchCard key={e.id} item={e} />
            ))}
          </ul>
        </div>

        <button onClick={this.onBack}> Back</button>
      </div>
    )
  }

  render() {
    const {recentMatch, latestMatch, bannerImg, isLoading} = this.state

    console.log(recentMatch)

    console.log(latestMatch)

    return <div>{isLoading ? this.renderLoader() : this.renderSuccess()}</div>
  }
}

export default TeamMatches
