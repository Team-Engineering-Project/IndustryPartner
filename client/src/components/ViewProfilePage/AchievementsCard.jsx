import React from 'react'
import achievementIcon from './img/achievement-icon.svg'
const AchievementsCard = ({ achievements }) => {

    const achievementElements = achievements.map(achievement => {
        //let id = 0;

        return (
            <div style={{display:'block', paddingBottom: '10px'}}>
                <img src={achievementIcon} alt="achievement icon"></img>
                <h6 className="mb-0" style={{display:'inline', paddingLeft:'5px'}}>{achievement.title}</h6>
            </div>
        )
    })

    return (
        <div className="card mb-4 p-0">
            <h5 className="card-header text-center" style={{ color: 'white', backgroundColor:'#3B8BC9' }}>Achievements</h5>
            <div className="card-body p-3">
                {achievementElements}
            </div>
        </div>
    )
}

export default AchievementsCard;