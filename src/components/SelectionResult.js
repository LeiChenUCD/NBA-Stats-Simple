function SelectionResult(props) {
    const { team, url } = props

    return (
        <>
        <div className="team-selection-res">
            <img src={url} alt={""} />
        {team}
        </div>
        </>
    )
}

export default SelectionResult;