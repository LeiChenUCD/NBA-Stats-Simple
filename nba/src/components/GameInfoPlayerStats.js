import { playerPic } from "../assets/playerPic"
import { teamLogoURL } from "../assets/teamLogo"
import { teamInfo } from "../assets/teamInfo"
import GameInfoPlayerStatsRow from "./GameInfoPlayerStatsRow"
function GameInfoPlayerStats(props) {
    const {stats, info} = props
    console.log("stats shown!")

    const height = "40px"

    const frameStype = {
        position: "fixed",
        width: "500px",
        background: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid black",
        display: "flex", 
        flexDirection: "column"
    }

    const rowStyle = {
        height: height, 
        display: "flex", 
        flexDirection: "row"
    }

    return <>
    <div id="game-info-player-stats-frame" style={frameStype}>
        <div style={{height: height, alignSelf: "center", display: "flex", alignItems: "center"}}>
            Overall Stats
        </div>
        <div style={rowStyle}>
            <div style={{display: "flex", alignItems: "flex-end", width: "10%"}}>
                <img src={playerPic[info[1]]} alt="PlayerPic" style={{width: "50px"}}></img>
            </div>
            <div style={{width: "40%", alignSelf: "center", textAlign: "center"}}>
                {info[1]}
            </div>
            <div style={{width: "10%"}}>
                <img src={teamLogoURL[info[0]]} alt="TeamLogo" style={{maxWidth: height, maxHeight: height, textAlign: "center"}}></img>
            </div>
            <div style={{width: "40%", alignSelf: "center", textAlign: "center"}}>
                {teamInfo[info[0]].full_name}
            </div>
        </div>
        <GameInfoPlayerStatsRow key1={"Games Played"} val1={stats.games_played} key2={"Minutes"} val2={stats.min} />
        <GameInfoPlayerStatsRow key1={"Points"} val1={stats.pts} key2={"Assists"} val2={stats.ast} />
        <GameInfoPlayerStatsRow key1={"Field Goal"} val1={`${stats.fgm}/${stats.fga}`} key2={"Field Goal %"} val2={(stats.fg_pct * 100).toFixed(2)} />
        <GameInfoPlayerStatsRow key1={"Three Points"} val1={`${stats.fg3m}/${stats.fg3a}`} key2={"Three Points %"} val2={(stats.fg3_pct * 100).toFixed(2)} />
        <GameInfoPlayerStatsRow key1={"Free Throw"} val1={`${stats.ftm}/${stats.fta}`} key2={"Free Throw %"} val2={(stats.ft_pct * 100).toFixed(2)} />
        <GameInfoPlayerStatsRow key1={"Rebounds (O/D)"} val1={`${stats.oreb}/${stats.dreb}`} key2={"Rebounds"} val2={stats.reb} />
        <GameInfoPlayerStatsRow key1={"Steals"} val1={stats.stl} key2={"Blocks"} val2={stats.blk} />
        <GameInfoPlayerStatsRow key1={"Turnovers"} val1={stats.turnover} key2={"Personal Fouls"} val2={stats.pf} />
    </div>
        
    </>

}

// "games_played" "min" 
// "pts"          "ast",
// "fgm-fga"      "fg_pct",
// "fg3m-fg3a"    "fg3_pct",
// "ftm-fta"      "ft_pct",
// "oreb-dreb"    "reb",
// "stl"          "blk"
// "turnover"     "pf"
export default GameInfoPlayerStats