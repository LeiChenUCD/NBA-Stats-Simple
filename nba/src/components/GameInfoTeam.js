import GameInfoPlayer from "./GameInfoPlayer"
function GameInfoTeam(props) {
    const {players, setPlayerToShow} = props
    const infoStyle = {width: "70px", textAlign: "center"}
    return <>
    <div style={{display: "flex", flexDirection: "column", width: "1350px"}}>
        <div >
            <div style={{fontSize: "13px", height: "50px", border: "1px black solid", display: "flex", flexDirection: "row", alignItems: "center"}}>
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
            {players.map((player, idx) => 
            <GameInfoPlayer key={idx} player={player} setPlayerToShow={setPlayerToShow}/>
            )}
        </div>
    </div>
        
    </>
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

export default GameInfoTeam