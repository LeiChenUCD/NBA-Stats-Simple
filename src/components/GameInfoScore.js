import { teamLogoURL } from "../assets/teamLogo"
import TeamSelectionScore from "./TeamSelectionScore"

function GameInfoScore(props) {
    const {game} = props
    // console.log(game)
    return <div className="game-display-single" style={{border: "0"}}>
        <a href="/Schedules">back</a>
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
}

export default GameInfoScore