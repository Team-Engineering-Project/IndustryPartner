import React from 'react'
import greenTick from '../ViewProfilePage/img/greenTick.svg';
import redReject from '../ViewProfilePage/img/redReject.svg';
const DueDiligenceCard = ({graduate}) => {
  return (
    <div className="card mb-4">
        <div className="card-body p-0">
            <h5 className="text-center">Due Diligence Checks</h5>
            <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p >Disclosure {graduate.diligence.disclosure ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">Right to work {graduate.diligence.rightToWork ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">Identity {graduate.diligence.identity ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">Education {graduate.diligence.education ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">Credit {graduate.diligence.credit ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DueDiligenceCard;