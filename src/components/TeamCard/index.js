import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeamDetails} = this.props
    const {name, teamImageUrl, id} = eachTeamDetails
    return (
      <Link to={`/team-matches/:${id}`}>
        <li className="listItem">
          <img src={teamImageUrl} alt={name} className="teamLogo" />
          <h1 className="teamHeading">{name}</h1>
        </li>
      </Link>
    )
  }
}

export default TeamCard
