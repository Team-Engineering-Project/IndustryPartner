import React from 'react'
import greenTick from '../ViewProfilePage/img/check2-circle.svg';
import redReject from '../ViewProfilePage/img/redReject.svg';

const DueDiligenceCard = ({ diligence }) => {
    return (
        <div className="card mb-4">
            <div className="card-body p-0">
                <h5 className="text-center">Due Diligence Checks</h5>
                <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <p>{diligence.disclosure ? <img src={greenTick}></img> : <img src={redReject}></img>} Disclosure</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <p className="mb-0">{diligence.rightToWork ? <img src={greenTick}></img> : <img src={redReject}></img>} Right to work</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <p className="mb-0">{diligence.identity ? <img src={greenTick}></img> : <img src={redReject}></img>} Identity</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <p className="mb-0">{diligence.education ? <img src={greenTick}></img> : <img src={redReject}></img>} Education</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <p className="mb-0">{diligence.credit ? <img src={greenTick}></img> : <img src={redReject}></img>} Credit</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DueDiligenceCard;