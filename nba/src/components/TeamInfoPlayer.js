import { playerPic } from "../assets/playerPic"


function TeamInfoPlayer(props) {
    const {stats, name} = props
    console.log(stats)
    console.log(name)
    // console.log(playerPic)
    const infoStyle = {width: "70px", textAlign: "center"}
    return <>
        <div id="game-info-player" style={{width: "1350px", fontSize: "13px"}}>
            <div id="game-info-player-pic">
                <img src={playerPic[name]} alt="PlayerPic"></img>
            </div>
            <div style={{width: "180px", paddingLeft: "10px", boxSizing: "border-box"}}>{name}</div>
            <div style={infoStyle}>{stats.min}</div>
            <div style={infoStyle}>{stats.pts}</div>
            <div style={infoStyle}>{stats.reb}</div>
            <div style={infoStyle}>{stats.ast}</div>
            <div style={infoStyle}>{stats.fgm}/{stats.fga}</div>
            <div style={infoStyle}>{(stats.fg_pct * 100).toFixed(2)}</div>
            <div style={infoStyle}>{stats.fg3m}/{stats.fg3a}</div>
            <div style={infoStyle}>{(stats.fg3_pct * 100).toFixed(2)}</div>
            <div style={infoStyle}>{stats.ftm}/{stats.fta}</div>
            <div style={infoStyle}>{(stats.ft_pct * 100).toFixed(2)}</div>
            <div style={infoStyle}>{stats.stl}</div>
            <div style={infoStyle}>{stats.turnover}</div>
            <div style={infoStyle}>{stats.blk}</div>
            <div style={infoStyle}>{stats.oreb}</div>
            <div style={infoStyle}>{stats.dreb}</div>
            <div style={infoStyle}>{stats.pf}</div>
        </div>
    </>
}
export default TeamInfoPlayer