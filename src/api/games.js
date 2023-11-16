export const getRankings = (games) => {
    let teamInfo = {}
    games = games.filter(game => game.status === "Final")
    for (let game of games) {
        let curHome = game.home_team.abbreviation
        let homeScore = game.home_team_score
        let homeConference = game.home_team.conference
        let homeId = game.home_team.id
        let homeName = game.home_team.name
        
        let visitor = game.visitor_team.abbreviation
        let visitorScore = game.visitor_team_score
        let visitorConference = game.visitor_team.conference
        let visitorId = game.visitor_team.id
        let visitorName = game.visitor_team.name

        if (teamInfo[curHome] === undefined) {
            teamInfo[curHome] = [0, 0, homeConference, homeId, homeName]
        }

        if (teamInfo[visitor] === undefined) {
            teamInfo[visitor] = [0, 0, visitorConference, visitorId, visitorName]
        }

        if (homeScore > visitorScore) {
            teamInfo[curHome][0] += 1
            teamInfo[visitor][1] += 1
        } else {
            teamInfo[curHome][1] += 1
            teamInfo[visitor][0] += 1
        }
    }

    let easternTeams = [];
    let westernTeams = [];
    for (const key in teamInfo) {
        if (teamInfo[key][2] === "East") {
            easternTeams.push([key, ...teamInfo[key]])
        } else {
            westernTeams.push([key, ...teamInfo[key]])
        }
    }

    easternTeams.sort((a, b) => b[1] / (b[1] + b[2]) - a[1] / (a[1] + a[2]));
    westernTeams.sort((a, b) => b[1] / (b[1] + b[2]) - a[1] / (a[1] + a[2]));

    const records = {
        "western": westernTeams,
        "eastern": easternTeams
    }
    return records
}

export const getGames = (games, curList, date) => {

    if (curList.length === 0) {
        games = games.filter(game => {
            return game.date.substr(0, 10) >= date
        })
    } else {

        games = games.filter(game => {
            return curList.includes(game.home_team.abbreviation) || curList.includes(game.visitor_team.abbreviation)
        }).filter(game => {
            return game.date.substr(0, 10) >= date
        })
    }

    
    games.sort((a, b) => {
        if (a.date < b.date) return -1
        if (a.date > b.date) return 1

        if (a.home_team.name < b.home_team.name) return -1
        return 1
    })
    return games
}

export const getHistoryGames = (games, curList, date) => {

    if (curList.length === 0) {
        games = games.filter(game => {
            return game.date.substr(0, 10) >= date
        })
    } else {

        games = games.filter(game => {
            return curList.includes(game.home_team.abbreviation) || curList.includes(game.visitor_team.abbreviation)
        }).filter(game => {
            return game.date.substr(0, 10) < date
        })
    }

    
    games.sort((a, b) => {
        if (a.date < b.date) return -1
        if (a.date > b.date) return 1

        if (a.home_team.name < b.home_team.name) return -1
        return 1
    })
    return games
}