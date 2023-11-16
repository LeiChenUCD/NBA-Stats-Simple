function GameInfoPlayerStatsRow(props) {
    const {key1, val1, key2, val2} = props
    
    const height = "40px"

    const rowStyle = {
        height: height, 
        display: "flex", 
        flexDirection: "row"
    }

    const keyStyle = {
        width: "30%", 
        alignSelf: "center", 
        textAlign: "center"
    }

    const valStyle = {
        width: "20%", 
        alignSelf: "center", 
        textAlign: "center"
    }
    return <div style={rowStyle}>
        <div style={keyStyle}>
            {key1}
        </div>
        <div style={valStyle}>
            {val1}
        </div>
        <div style={keyStyle}>
            {key2}
        </div>
        <div style={valStyle}>
            {val2}
        </div>
    </div>
}
export default GameInfoPlayerStatsRow