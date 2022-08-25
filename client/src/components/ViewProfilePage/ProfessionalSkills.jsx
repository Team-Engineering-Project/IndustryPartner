import React from 'react'

const ProfessionalSkills = ({ professionSkills }) => {

    //let id = 0;

    const skillElements = professionSkills.map(skill => {
        return (
            <>
                <p className='m-0'>{skill.skill}</ p>
                <div className="progress rounded" style={{ height: '20px', marginBottom:'auto' }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: `${skill.progress}%` }} aria-valuenow={`${skill.progress}`}
                        aria-valuemin="0" aria-valuemax="100">{`${skill.progress}%`}</div>
                </div>
            </>

        )
    })

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card mb-4">
                    <h4 className="card-header text-center" style={{ color: 'white', backgroundColor:'#3B8BC9' }}>
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