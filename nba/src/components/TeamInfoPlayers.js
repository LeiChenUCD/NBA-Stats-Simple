import {teamPlayerMapping} from "../assets/teamPlayerMapping"
import React from "react"
import TeamInfoPlayer from "./TeamInfoPlayer"

function getPlayersURL(players) {
    let base = "https://www.balldontlie.io/api/v1/season_averages?season=2023&per_page=100"
    for (let player of players) {
        base += `&player_ids[]=${player[0]}`
    }
    return base
}

function getIdNameMapping(players) {
    let idNameMapping = {}
    for (let player of players) {
        idNameMapping[player[0]] = player[1]
    }
    return idNameMapping
}

function TeamInfoPlayers(props) {
    const {team} = props
    const [playerStats, setPlayerStats] = React.useState(null)
    const idNameMapping = getIdNameMapping(teamPlayerMapping[team])
    const infoStyle = {width: "70px", textAlign: "center"}

    React.useEffect(() => {
        fetch(getPlayersURL(teamPlayerMapping[team]))
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(res => res.data)
        .then(res => res.sort(function(a, b) {return b.pts - a.pts}))
        .then(res => setPlayerStats(res))
    }, [team])
    return <>
    <div style={{width: "1350px", fontSize: "13px", height: "50px", border: "1px black solid", display: "flex", flexDirection: "row", alignItems: "center"}}>
        <div style={{width: "230px", paddingLeft: "10px", boxSizing: "border-box"}}>players</div>
        <div style={infoStyle}>minutes</div>
        <div style={infoStyle}>points</div>
        <div style={infoStyle}>rebounds</div>
        <div style={infoStyle}>assists</div>
        <div style={infoStyle}>field goal</div>
        <div style={infoStyle}>field goal %</div>
        <div style={infoStyle}>three points</div>
        <div style={infoStyle}>three points %</div>
        <div style={infoStyle}>free throw</div>
        <div style={infoStyle}>free throw %</div>
        <div style={infoStyle}>steals</div>
        <div style={infoStyle}>turnover</div>
        <div style={infoStyle}>block</div>
        <div style={infoStyle}>offensive rebound</div>
        <div style={infoStyle}>defensive rebound</div>
        <div style={infoStyle}>personal foul</div>
    </div>
    {playerStats && playerStats.map((player, idx) => 
    <TeamInfoPlayer key={idx} stats={player} name={idNameMapping[player.player_id]} />
    )}
    </>
}

export default TeamInfoPlayers