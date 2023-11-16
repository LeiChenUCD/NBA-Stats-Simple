import React from "react"
import { getGames } from "../api/games"
import { getAllGames } from "../api/util"
import TeamSelectionGame from "./TeamSelectionGame";

function getCurDate() {
    let date = new Date();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month
    }
    let day = date.getDate()
    if (day < 10) {
        day = '0' + day
    }
    return date.getFullYear() + "-" + month + '-' + day
}

function TeamSelectionGames(props) {
    const { curList } = props

    const [games, setGames] = React.useState([])

    React.useEffect(() => {
        const fetchData = async() => {
            getAllGames()
            .then(games => getGames(games, curList, getCurDate()))
            .then(games => setGames(games))
        }
        fetchData()
    }, [curList])
    
    return (
        <>
        {games.map((game, idx) => {
            return <TeamSelectionGame key={idx} game={game}/>
        })}
        </>
    )
}

export default TeamSelectionGames