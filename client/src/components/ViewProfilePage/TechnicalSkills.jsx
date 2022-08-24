import React from 'react'

const TechnicalSkills = ({ technicalSkills }) => {

    let id = 0;

    const skillElements = technicalSkills.map(skill => {
        return (
            <>
                <p>{skill.skill}</ p>
                <div className="progress rounded" style={{ height: '20px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: `${skill.progress}%` }} aria-valuenow={`${skill.progress}`}
                        aria-valuemin="0" aria-valuemax="100">{`${skill.progress}%`}</div>
                </div>
            </>

        )
    })

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card mb-4">
                    <h4 className="card-header text-center" style={{ color: '#18164d' }}>
                        Technical Skills
                    </h4>
                    <div className="card-body">
                        {skillElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalSkills;