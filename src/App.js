import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { teamLogoURL } from "./assets/teamLogo";
import Landing from "./containers/Landing";
import TeamInfo from "./containers/TeamInfo";
import Schedules from "./containers/Schedules";
import Quiz from "./components/Quiz";
import GameInfo from "./containers/GameInfo";
import { fakeGames } from "./assets/fakeGames";

function App() {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         let jsonData =  await GetPlayerById(237)
    //         console.log("From App.js: ")
    //         console.log(jsonData)
    //         console.log("Accessing .first_name variable in data fetched from API: ")
    //         console.log(jsonData.first_name)
    //     };
    
    //     fetchData();
    // }, []);

    return (
        <>
        <BrowserRouter>
            <Routes>
                {Object.keys(teamLogoURL).map((key) => {
                    return <Route key={key} path={key} element={<TeamInfo team={key} />}/>
                })}
                {fakeGames.map((game, idx) => {
                    const path = '/' + game.id
                    return <Route key={idx} path={path} element={<GameInfo game={game}/>}/>
                })}
                <Route path="/" element={<Landing />} />
                <Route path="/Schedules" element={<Schedules />} />
                <Route path="/Quiz" element={<Quiz />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App