import { playerPic } from "../assets/playerPic"

function GameInfoPlayer(props) {
    const {player, setPlayerToShow} = props
    const name = player.player.first_name + ' ' + player.player.last_name
    const infoStyle = {width: "70px", textAlign: "center"}
    return (
        <div id="game-info-player">
            <div id="game-info-player-pic">
                <img src={playerPic[name]} alt="PlayerPic"></img>
            </div>
            <div onMouseEnter={() => setPlayerToShow(player.player.id)} 
            onMouseLeave={() => setPlayerToShow(null)} 
            style={{width: "180px", paddingLeft: "10px", boxSizing: "border-box"}}>{name}</div>
            <div style={infoStyle}>{player.min}</div>
            <div style={infoStyle}>{player.pts}</div>
            <div style={infoStyle}>{player.reb}</div>
            <div style={infoStyle}>{player.ast}</div>
            <div style={infoStyle}>{player.fgm}-{player.fga}</div>
            <div style={infoStyle}>{(player.fg_pct * 100).toFixed(2)}</div>
            <div style={infoStyle}>{player.fg3m}-{player.fg3a}</div>
            <div style={infoStyle}>{(player.fg3_pct * 100).toFixed(2)}</div>
            <div style={infoStyle}>{player.ftm}-{player.fta}</div>
            <div style={infoStyle}>{(player.ft_pct * 100).toFixed(2)}</div>
            <div style={infoStyle}>{player.stl}</div>
            <div style={infoStyle}>{player.turnover}</div>
            <div style={infoStyle}>{player.blk}</div>
            <div style={infoStyle}>{player.oreb}</div>
            <div style={infoStyle}>{player.dreb}</div>
            <div style={infoStyle}>{player.pf}</div>
        </div>
    )
}

// 时间 min
// 得分 pts
// 篮板 reb
// 助攻 ast
// 投篮 fgm-fga
// 投篮% fg_pct
// 三分 fg3m-fg3a
// 三分% fg3_pct
// 罚球 ftm-fta
// 罚球% ft_pct
// 抢断 stl
// 失误 turnover
// 盖帽 blk
// 前板 oreb
// 后板 dreb
// 犯规 pf
export default GameInfoPlayer