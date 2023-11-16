import { teamLogoURL } from "../assets/teamLogo"
import { teamInfo } from "../assets/teamInfo"

function TeamInfoIntro(props) {
    const {team} = props
    const rowStyle = {height: "30px"}
    return <div id="team-info-wrapper">
    
        <div id="team-info-main" style={{height: "210px"}}>
            <div id="team-info-header" style={rowStyle}>
                <div id="team-info-img">
                    <img src={teamLogoURL[team]} alt="TeamLogo"></img>
                </div>
                <div id="team-info-header-name">
                    {teamInfo[team].full_name}
                </div>
            </div>

            <div className="team-info-entry" style={rowStyle}>
                <div className="team-info-key">City</div>
                <div className="team-info-value">{teamInfo[team]["city"]}</div>
            </div>

            <div className="team-info-entry" style={rowStyle}>
                <div className="team-info-key">Division</div>
                <div className="team-info-value">{teamInfo[team]["division"]}</div>
            </div>

            <div className="team-info-entry" style={rowStyle}>
                <div className="team-info-key">Conference</div>
                <div className="team-info-value">{teamInfo[team]["conference"]}</div>
            </div>
            
            <div className="team-info-entry" style={rowStyle}>
                <div className="team-info-key">Abbreviation</div>
                <div className="team-info-value">{teamInfo[team]["abbreviation"]}</div>
            </div>

            <div className="team-info-entry" style={rowStyle}>
                <div className="team-info-key">Name</div>
                <div className="team-info-value">{teamInfo[team]["name"]}</div>
            </div>

            <div className="team-info-entry" style={rowStyle}>
                <div className="team-info-key">Full Name</div>
                <div className="team-info-value">{teamInfo[team]["full_name"]}</div>
            </div>

        </div>
    </div>
}
export default TeamInfoIntro