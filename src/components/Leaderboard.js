import './Leaderboard.css';
import React from 'react';

function getLeaderboardFromLocalStorage() {
    const valuesToLocalStorage = []
    const leaderboard = localStorage.getItem("leaderboard")
    if (leaderboard !== null) {
        leaderboard.split(",").forEach(element => {
            valuesToLocalStorage.push(element)
        });
        
        let highscores = []
        while (valuesToLocalStorage.length > 0) {
            let temp = {
                date : valuesToLocalStorage.pop(),
                score : valuesToLocalStorage.pop(),
                player: valuesToLocalStorage.pop()
            }
            highscores.push(temp)
        }
        return highscores
    }
    return []
}

function getLeaderboardArrayFromLocalStorage() {
    const leaderboard = localStorage.getItem("leaderboard")
    if (leaderboard != null) {
        return leaderboard.split(",")
    }
    return []
}

export default class Leaderboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data : [],
            streak : 0
        }
    }

    componentDidMount() {
        // Get leaderboard from local storage upon loading the component
        let highscores = getLeaderboardFromLocalStorage()
        this.setState({
            data : highscores
        })

    }

    render () {
        const updateLeaderboard = () => {
            let highscores = getLeaderboardFromLocalStorage()
            this.setState({
                data : highscores
            })
        }   

        const insertToLeaderboard = () => {
            let newName=document.getElementById("leaderboardName").value
            let newScore = document.getElementById("streak").childNodes[1].data
            let newDate = new Date()
            newDate = newDate.getHours() + ":" + newDate.getMinutes() + " " + (newDate.getMonth()+1) + "/" + newDate.getDate() + "/" + newDate.getFullYear()

            let valuesToLocalStorage = getLeaderboardArrayFromLocalStorage()
            valuesToLocalStorage.push(newName)
            valuesToLocalStorage.push(newScore)
            valuesToLocalStorage.push(newDate)
            localStorage.setItem("leaderboard", valuesToLocalStorage)
            updateLeaderboard()
        }
        return (
            <div className="leaderboard">
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Score</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.player}</td>
                                <td>{entry.score}</td>
                                <td>{entry.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button onClick={insertToLeaderboard}>Insert to leaderboard</button>
                    <div><input type="text" placeholder='Enter your name here' id="leaderboardName"/></div>
                </div>
            </div>
        )
    }
}

