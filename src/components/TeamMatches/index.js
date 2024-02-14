import {Component} from 'react'

import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="teamBg">
        <h1>Demo</h1>
      </div>
    )
  }
}

export default TeamMatches
