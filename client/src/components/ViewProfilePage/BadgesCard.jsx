import React from 'react'
import badge from '../ViewProfilePage/img/badge.svg';
import redReject from '../ViewProfilePage/img/redReject.svg';

const BadgesCard = ({ badges }) => {

    return (
        <div className="card mb-4">
            <div className="card-body p-0">
                <h5 className="text-center">Badges</h5>
                <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <p>{badges.java8 ? <img src={badge} alt="badge icon"></img> : <img src={redReject} alt="no badge icon"></img>} Oracle Java SE 8 Associate</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BadgesCard;