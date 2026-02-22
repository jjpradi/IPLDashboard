// Write your code here
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
const apiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {iplTeamList: [], apiStatus: apiConstant.initial}

  componentDidMount() {
    this.getIpl()
  }

  successView = data => {
    const filteredData = data.teams.map(e => ({
      name: e.name,

      id: e.id,
      teamImageUrl: e.team_image_url,
    }))

    this.setState({
      iplTeamList: filteredData,
      apiStatus: apiConstant.success,
    })
  }

  failureView = () => {
    this.setState({
      apiStatus: apiConstant.failure,
    })
  }

  getIpl = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    console.log(response)

    console.log(data)

    if (response.ok === true) {
      this.successView(data)
    } else {
      this.failureView()
    }
  }

  loaderView = () => {
    return (
      <div data-testid="loader"  className="loader">
        <Loader type="threeDots" color="#000000" height={30} />
      </div>
    )
  }

  renderFailure = () => {
    return <div></div>
  }
  renderSuccess = () => {
    const {iplTeamList} = this.state
    return (
      <div>
        <Header />

        <div className="bg">
          <h1>
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            IPL Dashboard
          </h1>

          <div>
            <ul className="list">
              {iplTeamList.map(e => (
                <TeamCard key={e.id} item={e} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {iplTeamList, apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case 'INITIAL':
        return this.loaderView()

      case 'SUCCESS':
        return this.renderSuccess()

      case 'FAILURE':
        return this.renderFailure()
    }
  }
}

export default Home
