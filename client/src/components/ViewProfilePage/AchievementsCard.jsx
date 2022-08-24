import React from 'react'
import achievementIcon from './img/achievement-icon.svg'
const AchievementsCard = ({ achievements }) => {

    const achievementElements = achievements.map(achievement => {
        return (
            <li className="list-group-item justify-content-between align-items-center p-3">
                <img src={achievementIcon}></img>
                <p className="mb-0" style={{ display: 'inline', paddingLeft: '5px' }}>{achievement.title}</p>
            </li>
        )
    })

    return (
        <div className="card mb-4 p-0">

            <h4 className="card-header text-center" style={{ color: '#18164d' }}>Achievements</h4>
            <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                    {achievementElements}
                </ul>
            </div>
        </div>
    )
}

export default AchievementsCard;