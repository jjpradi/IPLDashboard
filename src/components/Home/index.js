// Write your code here
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeamList: []}

  componentDidMount() {
    this.getIpl()
  }

  getIpl = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    console.log(response)

    console.log(data)

    const filteredData = data.teams.map(e => ({
      name: e.name,

      id: e.id,
      teamImageUrl: e.team_image_url,
    }))

    this.setState({
      iplTeamList: filteredData,
    })
  }

  render() {
    const {iplTeamList} = this.state

    return (
      <div className="bg">
        <h1>IPL Dashboard</h1>

        <div>
          <ul className="list">
            {iplTeamList.map(e => (
              <TeamCard item={e} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
