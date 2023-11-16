import { teamLogoURL } from "../assets/teamLogo"
import { teamInfo } from "../assets/teamInfo"
import TeamInfoPlayers from "../components/TeamInfoPlayers"
import TeamInfoIntro from "../components/TeamInfoIntro"
import React from "react"

// "ATL": {
//     "id": 1,
//     "abbreviation": "ATL",
//     "city": "Atlanta",
//     "conference": "East",
//     "division": "Southeast",
//     "full_name": "Atlanta Hawks",
//     "name": "Hawks"
// }

function changeText(bool) {
    return bool ? "Hide" : "Show"
}

function TeamInfo(props) {
    const {team} = props
    const [showTeamInfo, setShowTeamInfo] = React.useState(false)
    return (
        <><div style={{display: "flex", flexDirection: "row"}}>
            <a href="/">back</a>
            <div onClick={() => setShowTeamInfo(!showTeamInfo)} style={{border: "1px black solid", marginLeft: "20px", padding: "0 10px"}}>{changeText(showTeamInfo)} Team Info</div>
        </div>
            {showTeamInfo && <TeamInfoIntro team={team}/>}
            <TeamInfoPlayers team={team}/>
        </>
    )
}

export default TeamInfo