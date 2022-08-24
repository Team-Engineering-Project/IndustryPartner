import React from 'react'
import achievementIcon from './img/achievement-icon.svg'
const AchievementsCard = ({ achievements }) => {

    const achievementElements = achievements.map(achievement => {
        return (
            <div className='row p-2'>
                <p className="mb-0" stt><img src={achievementIcon}></img>{achievement.title}</p>
            </div>
        )
    })

    return (
        <div className="card mb-4 p-0">
            <h4 className="card-header text-center" style={{ color: '#18164d' }}>Achievements</h4>
            <div className="card-body p-0">
                {achievementElements}
            </div>
        </div>
    )
}

// const BadgesCard = ({ diligence }) => {
//     return (
//         <div className="card mb-4">

//             <h5 className="card-header text-center" style={{ color: '#18164d' }}>Due Diligence Checks</h5>
//             <div className="card-body p-0">
//                 <div className='row p-2'>
//                     <p className='mb-0'>{diligence.disclosure ? <img src={greenTick}></img> : <img src={redReject}></img>} Disclosure</p>
//                 </div>
//                 <div className='row p-2'>
//                     <p className="mb-0">{diligence.rightToWork ? <img src={greenTick}></img> : <img src={redReject}></img>} Right to work</p>
//                 </div>
//                 <div className='row p-2'>
//                     <p className="mb-0">{diligence.identity ? <img src={greenTick}></img> : <img src={redReject}></img>} Identity</p>
//                 </div>
//                 <div className='row p-2'>
//                     <p className="mb-0">{diligence.education ? <img src={greenTick}></img> : <img src={redReject}></img>} Education</p>
//                 </div>
//                 <div className='row p-2'>
//                     <p className="mb-0">{diligence.credit ? <img src={greenTick}></img> : <img src={redReject}></img>} Credit</p>
//                 </div>
//             </div>
//         </div >
//     )
// }

export default AchievementsCard;