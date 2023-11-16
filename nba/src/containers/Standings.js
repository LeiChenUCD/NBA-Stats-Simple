import {getAllGames} from "../api/util"
import {getRankings} from "../api/games"
import React from "react"
import StandingTeams from "../components/StandingTeams"

function Standings() {

    const [data, setData] = React.useState(null)
    const [westBorderStyle, setWestBorderStyle] = React.useState("1px #e2e2e2 solid")
    const [eastBorderStyle, setEastBorderStyle] = React.useState("1px #e2e2e2 solid")
    
    React.useEffect(() => {
        const fetchData = async() => {
            getAllGames()
            .then(res => getRankings(res))
            .then(rankings => {
                setData(rankings.western)
            })
        }
        fetchData()
        setWestBorderStyle("2px black solid")
    }, [])

    const setEastern = () => {
        const fetchData = async() => {
            getAllGames()
            .then(res => getRankings(res))
            .then(rankings => {
                setData(rankings.eastern)
            })
        }
        fetchData()
        setEastBorderStyle("2px black solid")
        setWestBorderStyle("1px #e2e2e2 solid")
    }

    const setWestern = () => {
        const fetchData = async() => {
            getAllGames()
            .then(res => getRankings(res))
            .then(rankings => {
                setData(rankings.western)
            })
        }
        fetchData()
        setEastBorderStyle("1px #e2e2e2 solid")
        setWestBorderStyle("2px black solid")
    }

    return (
        <>
        <div id="standing-main">
            <div id="standing">
                <div className="standing-conference-header">
                    <div style={{ borderBottom: westBorderStyle}} className="standing-conference-sub-header" onClick={setWestern}>Western</div>
                    <div style={{ borderBottom: eastBorderStyle}} className="standing-conference-sub-header" onClick={setEastern}>Eastern</div>
                </div>
                <div className="standing-header">
                    <div className="standing-header-team">Team</div>
                    <div className="standing-header-blank"></div>
                    <div className="standing-header-res">W</div>
                    <div className="standing-header-res">L</div>
                    <div className="standing-header-res">Pct</div>
                </div>
                <div>
                {
                    data ? (<StandingTeams teams={data}/>) : (<p></p>)
                }
                </div>

                {/* <div className="standing-team"></div>
                <div className="standing-team"></div>
                <div className="standing-team"></div> */}
            </div>
        </div>
        </>
    )
}

export default Standings