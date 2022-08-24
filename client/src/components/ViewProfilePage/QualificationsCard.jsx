import React from 'react'

const QualificationsCard = ({graduate}) => {
  return (
    <div className="card mb-4">
        <div className="card-body p-0">
            <h4 className="text-center">Qualifications</h4>
            <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">{graduate.qualifications[0].level}</p>
                        <p className="mb-0">{graduate.qualifications[0].subject}</p>
                        <p className="mb-0">{graduate.qualifications[0].establishment}</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0"> <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">{graduate.qualifications[1].level}</p>
                        <p className="mb-0">{graduate.qualifications[1].subject}</p>
                        <p className="mb-0">{graduate.qualifications[1].establishment}</p></p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">
                        <p className="mb-0">{graduate.qualifications[2].level}</p>
                        <p className="mb-0">{graduate.qualifications[2].subject}</p>
                        <p className="mb-0">{graduate.qualifications[2].establishment}</p></p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">
                        <p className="mb-0">{graduate.qualifications[3].level}</p>
                        <p className="mb-0">{graduate.qualifications[3].subject}</p>
                        <p className="mb-0">{graduate.qualifications[3].establishment}</p></p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0"></p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default QualificationsCard