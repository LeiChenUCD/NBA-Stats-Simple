import PropTypes from 'prop-types'

const getPlayerByIdURL = 'https://www.balldontlie.io/api/v1/players/'
const getAllPlayersURL = 'https://www.balldontlie.io/api/v1/players'
const getTeamById = 'https://www.balldontlie.io/api/v1/teams/'
const getAllTeams = 'https://www.balldontlie.io/api/v1/teams'
const searchForPlayersURL = 'https://www.balldontlie.io/api/v1/players?search='
const GetDataFromURL = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    return(jsonData);
}

export function GetPlayerById(playerId) {
    return GetDataFromURL(getPlayerByIdURL+playerId)
}

export function GetTeamById(teamId) {
    return GetDataFromURL(getTeamById+teamId)
}

export async function GetAllTeams () {
    let var1 = await GetDataFromURL(getAllTeams)
    let var2 = await GetDataFromURL(getAllTeams+"?page=2")
    return [var1, var2]
}

export function GetAllPlayers() {
    return GetDataFromURL(getAllPlayersURL)
}

export function SearchForPlayers(text) {
    return GetDataFromURL(searchForPlayersURL+text)
}




GetPlayerById.propTypes = {
    playerId: PropTypes.number.isRequired
}
GetTeamById.propTypes = {
    playerId: PropTypes.number.isRequired
}
SearchForPlayers.propTypes = {
    playerId: PropTypes.text
}
