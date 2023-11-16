import { teamLogoURL } from "../assets/teamLogo"
import TeamSelectionScore from "./TeamSelectionScore"

const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

function TeamSelectionGame(props) {
    const { game } = props

    const date = game.date.substring(0, 10)
    const day = dayOfWeek[new Date(date).getDay()]

    return (
        <>
        <a href={game.id}>
        <div className="game-display-single">
            <div className="time">{date} {day}</div>

            <div className="visit">{game.visitor_team.name}
            <div className="logo-wrapper">
                <img src={teamLogoURL[game.visitor_team.abbreviation]} alt="TeamLogo"></img>
            </div>
            </div>

            <div className="score"><TeamSelectionScore home={game.home_team_score} visit={game.visitor_team_score}/></div>
            
            <div className="home">
            <div className="logo-wrapper">
                <img src={teamLogoURL[game.home_team.abbreviation]} alt="TeamLogo"></img>
            </div>
            {game.home_team.name}</div>
        </div>
        </a>
        </>
    )
}

export default TeamSelectionGame