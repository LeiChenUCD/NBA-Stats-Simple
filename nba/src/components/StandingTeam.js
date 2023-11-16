import { teamLogoURL } from "../assets/teamLogo"

function StandingTeam(props) {
    const { index, item } = props;
    return <>
    <div className="standing-team">
        <div className="standing-team-ranking">{index}</div>
        <img className="standing-team-img" src={teamLogoURL[item[0]]} alt={props.item[5]} />
        {/* <a href={teamLogoURL[props.item[0]]}></a> */}
        <div className="standing-team-name"><a href={item[0]}>{item[5]}</a></div>
        <div className="standing-team-win">{item[1]}</div>
        <div className="standing-team-loss">{item[2]}</div>
        <div className="standing-team-loss">{(item[1] / (item[1] + item[2])).toFixed(2)}</div>
    </div>
    </>
}
export default StandingTeam