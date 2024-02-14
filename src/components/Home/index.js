import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: updatedData})
  }

  render() {
    const {teamsList} = this.state

    return (
      <div className="homeBgCon">
        <div className="logoCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logoImg"
          />
          <h1 className="mainHeading">IPL DASHBOARD</h1>
        </div>
        <ul className="ulListCon">
          {teamsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} eachTeamDetails={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
