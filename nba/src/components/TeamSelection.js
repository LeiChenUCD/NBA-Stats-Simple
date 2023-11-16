import { useState } from "react";
import plus from "../assets/plus.png"
import { teamLogoURL } from "../assets/teamLogo";
import TeamSelectionTeam from "./TeamSelectionTeam";
import SelectionResult from "./SelectionResult";
import TeamSelectionGames from "./TeamSelectionGames";
import TeamSelectionGamesHistory from "./TeamSelectionGamesHistory";

function TeamSelection() {

    const storedValue = localStorage.getItem('teamTracked');
    if (storedValue == null) {
        localStorage.setItem("teamTracked", JSON.stringify([]))
    }
    const curList = JSON.parse(localStorage.getItem('teamTracked'))
    const [teamList, setTeamList] = useState(curList)
    const [history, setHistory] = useState("Show History")
    
    const toggleSelection = (e) => {
        let target;
        if (e.target.className === '') {
            target = e.target.parentNode
        } else {
            target = e.target
        }
        target.classList.toggle("selected")

        let selectedTeams = []
        for (let team of target.parentNode.children) {
            if (team.classList.contains("selected")) {
                selectedTeams.push(team.textContent)
            }
        }
        localStorage.setItem("teamTracked", JSON.stringify(selectedTeams))
        setTeamList(selectedTeams)
    }

    const toggleTeamBoard = () => {
        const teamBoard = document.querySelector("#team-selection-board")
        teamBoard.classList.toggle("hide")
    }

    const toggleHistory = () => {
        if (history === "Show History") {
            setHistory("Show Schedule")
        } else {
            setHistory("Show History")
        }
    }

    return (
        <>
        <div id="team-selection-nav">
            <div id="team-selection-history" onClick={toggleHistory}>{history}</div>
            <div id="team-selection-result">
                {teamList.map((team, idx) =>
                    <SelectionResult key = {idx} team = {team} url = {teamLogoURL[team]}/>
                )}
            </div>
            <div id="team-selection-button" onClick={toggleTeamBoard}>
                <img alt="plus" src={plus}></img>
            </div>
        </div>
        <div id="team-selection-board" className="hide">
            {Object.keys(teamLogoURL).map((key) => 
                <TeamSelectionTeam onClick={(e) => toggleSelection(e)} key = {key} team = {key} url = {teamLogoURL[key]} curList = {curList}/>
            )}
        </div>
        <div id="game-display-wrap">
            <div id="game-display">
                {history === "Show Schedule" ? <TeamSelectionGamesHistory curList = {curList}/> : ''}
                {history === "Show History" ? <TeamSelectionGames curList = {curList}/> : ''}
            </div>
        </div>
        </>
    )
}

export default TeamSelection;