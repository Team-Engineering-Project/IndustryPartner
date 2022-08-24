import React from 'react'

const ProfessionalSkills = ({ professionSkills }) => {

    let id = 0;

    const skillElements = professionSkills.map(skill => {
        return (
            <>
                <p>{skill.skill}</ p>
                <div className="progress rounded" style={{ height: '5px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: `${skill.progress}%` }} aria-valuenow={`${skill.progress}`}
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </>

        )
    })

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card mb-4">
                    <h4 className="card-header text-center" style={{ color: '#18164d' }}>
                        Professional Skills
                    </h4>
                    <div className="card-body">
                        {skillElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalSkills;