import React from "react"
import { getGameInfo } from "../api/util"
import GameInfoTeam from "../components/GameInfoTeam";
import GameInfoScore from "../components/GameInfoScore";
import GameInfoTag from "../components/GameInfoTag";
import { teamPlayerMapping } from "../assets/teamPlayerMapping";
import GameInfoPlayerStats from "../components/GameInfoPlayerStats";

function getPlayersURL(game) {
    let base = "https://www.balldontlie.io/api/v1/season_averages?season=2023&per_page=100"
    for (let id of teamPlayerMapping[game.home_team.abbreviation]) {
        base += `&player_ids[]=${id[0]}`
    }
    for (let id of teamPlayerMapping[game.visitor_team.abbreviation]) {
        base += `&player_ids[]=${id[0]}`
    }
    return base
}

function getPlayerMap(playerData) {
    let playerMap = {}
    for (let player of playerData) {
        playerMap[player.player_id] = player
    }
    return playerMap
}

// playerid -> team, name mapping
function getPlayerInfo(game) {
    let playerInfoMap = {}
    for (let id of teamPlayerMapping[game.home_team.abbreviation]) {
        playerInfoMap[id[0]] = [game.home_team.abbreviation, id[1]]
    }
    for (let id of teamPlayerMapping[game.visitor_team.abbreviation]) {
        playerInfoMap[id[0]] = [game.visitor_team.abbreviation, id[1]]
    }
    return playerInfoMap
}

function GameInfo(props) {
    const {game} = props
    console.log(game.id)

    const [homeInfo, setHomeInfo] = React.useState([]);
    const [visitInfo, setVisitInfo] = React.useState([]);
    const [teamToShow, setTeamToShow] = React.useState("visit");
    const [playerToShow, setPlayerToShow] = React.useState(null)
    // const [playerToShow, setPlayerToShow] = React.useState(115)
    const [playerStats, setPlayerStats] = React.useState(null)
    // update game info
    const [newGameInfo, setNewGameInfo] = React.useState(null)

    React.useEffect(() => {
        const fetchGame = async(gameId) => {
            fetch(`https://www.balldontlie.io/api/v1/games/${gameId}`)
            .then(res => res.json())
            .then(res => setNewGameInfo(res))
        }
        fetchGame(game.id)
    }, [game.id])

    const playerInfoMap = getPlayerInfo(game)
    // console.log(getPlayersURL(game))
    React.useEffect(() => {
        const fetchData = async(gameId, home, visitor) => {
            getGameInfo(gameId, home, visitor)
            .then(res => {
                setHomeInfo(res.home)
                setVisitInfo(res.visitor)
            })
        }
        fetchData(game.id, game.home_team.abbreviation, game.visitor_team.abbreviation)
    }, [game.id, game.home_team.abbreviation, game.visitor_team.abbreviation])

    React.useEffect(() => {
        // setPlayerToShow(115)
        fetch(getPlayersURL(game))
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(res => res.data)
        .then(res => setPlayerStats(getPlayerMap(res)))
    }, [game])

    React.useEffect(() => {
        if (!playerToShow) return
        console.log(playerToShow)
        // console.log(playerStats[playerToShow])
        // console.log(playerInfoMap[playerToShow])
    }, [playerToShow])

    return (
        <>
            {newGameInfo && <GameInfoScore game={newGameInfo}/>}
            <div style={{display: "flex", flexDirection: "row"}}>
                <div onClick={() => setTeamToShow("visit")}>
                <GameInfoTag  team={game.visitor_team} style={{cursor: "pointer"}}/>
                </div>
                <div onClick={() => setTeamToShow("home")}>
                <GameInfoTag  team={game.home_team} style={{cursor: "pointer"}}/>
                </div>   
            </div>
            {teamToShow === "visit" ? <GameInfoTeam players={visitInfo} setPlayerToShow={setPlayerToShow} /> : ''}
            {teamToShow === "home" ? <GameInfoTeam players={homeInfo} setPlayerToShow={setPlayerToShow}/> : ''}
            {playerToShow && <GameInfoPlayerStats stats={playerStats[playerToShow]} info={playerInfoMap[playerToShow]}/>}
            
        </>
    )
}

// "games_played" "min" 
// "pts"          "ast",
// "fgm-fga"      "fg_pct",
// "fg3m-fg3a"    "fg3_pct",
// "ftm-fta"      "ft_pct",
// "oreb-dreb"    "reb",
// "stl"          "blk"
// "turnover"     "pf"

export default GameInfo