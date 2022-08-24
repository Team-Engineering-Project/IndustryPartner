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
        <div className="card mb-4 p-0">
            <h4 className="card-header text-center" style={{ color: '#18164d', margin: '0px', paddingLeft: "0px", paddingRight: "0px" }}>
                Qualifications
            </h4>
            <div className="card-body">
                {qualificationElements}
            </div>
        </div >
    )
}

export default QualificationsCard