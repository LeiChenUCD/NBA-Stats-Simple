import StandingTeam from "./StandingTeam"

function StandingTeams(props) {
    return <>
    <div>
        {props.teams.map((team, idx) => 
            <StandingTeam index = {idx + 1} key = {idx} item = {team}/>
        )}
    </div>
    </>
}

export default StandingTeams;