import React from 'react'

const QualificationsCard = ({ qualifications }) => {

    let id = 0;

    const qualificationElements = qualifications.map(qualification => {
        return (

            <div key={id++}>


                < div className="row" >
                    <div className="col-sm">
                        <p className="mb-0">{qualification.level} </p>
                    </div>
                    <div className="col-sm">
                        <p className="mb-0 text-muted">{qualification.subject} </p>
                    </div>
                    <div className="col-sm">
                        <p className="mb-0 text-muted">{qualification.establishment} </p>
                    </div>

                </div >
                <hr />
            </div>

        )

    })

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h4 className="text-center">Qualifications</h4>
                <ul className="list-group list-group-flush rounded-3">
                    {qualificationElements}
                </ul>
            </div>
        </div>
    )
}

export default QualificationsCard