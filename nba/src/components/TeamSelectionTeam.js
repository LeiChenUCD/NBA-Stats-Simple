function TeamSelectionTeam(props) {
    const { team, url, onClick, curList } = props
    let className = "team-selection-team"
    if (curList.includes(team)) {
        className += " selected"
    }
    return (
        <>
        <div className={className} onClick={onClick}>
            <img src={url} alt={""} />
        {team}
        </div>
            
        </>
    )
}
export default TeamSelectionTeam;