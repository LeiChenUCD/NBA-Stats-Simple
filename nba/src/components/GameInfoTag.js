import { teamLogoURL } from "../assets/teamLogo"

function GameInfoTag(props) {
    const {team} = props
    // console.log(team)
    return <>
    <div className="game-display-single" style={{width: "180px", display: "flex"}}>
        <div>
        <div className="home">
            <div className="logo-wrapper">
                <img src={teamLogoURL[team.abbreviation]} alt="TeamLogo"></img>
            </div>
                {team.name}
            </div>
        </div>
    </div>
    </>
}
export default GameInfoTag