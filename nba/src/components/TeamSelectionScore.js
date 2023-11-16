function TeamSelectionScore(props) {
    const { home, visit } = props
    if (home === 0 && visit === 0) {
        return (
            <>
             vs 
            </>
        )
    } else if (home > visit) {
        return (
            <>
            {visit} : <b>{home}</b>
            </>
        )
    } else {
        return (
            <>
            <b>{visit}</b> : {home}
            </>
        )
    }

}

export default TeamSelectionScore