// import { fakeGames } from "../assets/fakeGames";
// import { fakeGameInfo } from "../assets/fakeGameInfo";

const getGamesPage = async(page) => {
    return fetch(`https://www.balldontlie.io/api/v1/games?seasons[]=2023&page=${page}&per_page=100`)
    .then(
        (res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
          }
    )
    .then(res => {
        return res
    })
}

let games = [];

// let games = fakeGames

const getAllGamesHelper = async() => {
    let data = await getGamesPage(1)
    games = [...games, ...data.data]
    
    while (data.meta.next_page !== null) {
        data = await getGamesPage(data.meta.next_page)
        games = [...games, ...data.data]
    }
}

export const getAllGames = () => {
    if (games.length !== 0) {
        // console.log("no api call!!")
        return Promise.resolve(games); // Return the existing data as a resolved Promise
      }
    
      return getAllGamesHelper()
        .then(() => games); //
}

const splitGameInfo = (gameInfo, home, visitor) => {
    let infoByTeam = {
        "home": [],
        "visitor": []
    }
    for (let info of gameInfo) {
        if (info.min === "00") continue
        if (info.team.abbreviation === home) {
            infoByTeam.home.push(info)
        } else {
            infoByTeam.visitor.push(info)
        }
    }
    infoByTeam.home.sort((a, b) => {
        if (a.pts < b.pts) return 1
        return -1
    })
    infoByTeam.visitor.sort((a, b) => {
        if (a.pts < b.pts) return 1
        return -1
    })
    return infoByTeam
}

export const getGameInfo = async(gameId, home, visitor) => {
    // return fakeGameInfo
    return fetch(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}&per_page=100`)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(res => {
        return splitGameInfo(res.data, home, visitor)
    })
}