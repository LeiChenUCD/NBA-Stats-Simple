import { teamLogoURL } from "../assets/teamLogo";
import React from 'react'
import { GetAllTeams } from "./API.js"
import './Quiz.css';
import NavBar from "./NavBar";


export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            correct : null,
            allTeams : null,
            alt1 : null,
            alt2 : null,
            answer : null,
            teamName : null,
            streak : 0
        }
    }

    componentDidMount() {
        GetAllTeams().then(result1 => {        
            let random1 = Math.round(Math.random()*29)
            let random2 = Math.round(Math.random()*29)
            let correctAnswer = Math.random()
        
            while (random2 === random1)
                random2 = Math.round(Math.random()*29)
    
            let var1 = result1[0].data
            let var2 = result1[1].data
            var2.forEach(element => {
                var1.push(element)
            });
            let result = result1[0]
            result.data = var1
            console.log(result)
            this.setState({
                allTeams: result,
                alt1 : result.data[random1].abbreviation,
                alt2 : result.data[random2].abbreviation,
                answer : correctAnswer > 0.5 ? result.data[random1].abbreviation : result.data[random2].abbreviation,
                teamName : correctAnswer > 0.5 ? result.data[random1].full_name : result.data[random2].full_name
                })
        })
    }

    render () {
        const checkAnswer = (e) => {
            if (e.target.id === this.state.answer)
                this.setState({
                    correct : 1,
                    streak : this.state.streak + 1
                    });
            else {
                if (this.state.streak > 0) {
                    // Ask to enter into leaderboard
                }
                this.setState({
                    correct : -1,
                    streak : 0
                });
            }
                
        };

        const updateQuestion = () => {
            let random1 = Math.round(Math.random()*29)
            let random2 = Math.round(Math.random()*29)
            let correctAnswer = Math.random()
        
            while (random2 === random1)
                random2 = Math.round(Math.random()*29)
        
            const result = this.state.allTeams
            this.setState({
                alt1 : result.data[random1].abbreviation,
                alt2 : result.data[random2].abbreviation,
                answer : correctAnswer > 0.5 ? result.data[random1].abbreviation : result.data[random2].abbreviation,
                teamName : correctAnswer > 0.5 ? result.data[random1].full_name : result.data[random2].full_name,
                correct : null
                })
            }


        return (
            <>
            <NavBar/>
            <div className="quizContainer">
                <div className="alternativesContainer">
                    <div className="alternativesBox">
                        <img src={teamLogoURL[this.state.alt1]} alt='image1' id={this.state.alt1} onClick={(e) => checkAnswer(e)}/>
                    </div>
                    <div className="alternativesBox">
                        <img src={teamLogoURL[this.state.alt2]} alt='image2' id={this.state.alt2} onClick={(e) => checkAnswer(e)}/>
                    </div>
                </div>
                <div className="questionBox">
                    <p>Which of these logos belong to the {this.state.teamName}? (Click on logo to check answer)</p>
                    { this.state.correct === 1 && <p>You are correct!</p> }
                    { this.state.correct === -1 && <p>You are wrong!</p> }
                </div>
                <div className="questionBox">
                    <button onClick={updateQuestion}>Gimme another question!</button>
                </div>
                <div id="streak" value={this.state.streak}>You have {this.state.streak} correct answers in a row</div>
            </div>
            </>
        );
        };
}
