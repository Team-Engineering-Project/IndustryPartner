import React from 'react'
import badge from '../ViewProfilePage/img/badge.svg';
import redReject from '../ViewProfilePage/img/redReject.svg';

const BadgesCard = ({ badges }) => {

    return (
        <div className="card mb-4">
            <h5 className="card-header text-center" style={{ color: 'white', backgroundColor: '#3B8BC9' }}>Badges</h5>
            <div className="card-body p-3">
                <p>{badges.java8 ? <img src={badge} alt="badge icon"></img> : <img src={redReject} alt="no badge icon"></img>} Oracle Java SE 8 Associate</p>
                <p>{badges.agileExplorer ? <img src={badge} alt="badge icon"></img> : <img src={redReject} alt="no badge icon"></img>} IBM Agile Explorer</p>
            </div>
        </div>
    )
}

export default BadgesCard;