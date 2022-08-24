import React from 'react'

const TrainingProgressCard = ({ training }) => {

    let id = 0;

    const tpElements = training.map(train => {

        return (
            <div key={id++} >
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">{train.module}</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-muted nv-0">{train.challenge}</p>
                    </div>
                    <div className="col-sm-3">
                        <p className="text-muted nv-0">{train.result}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    })



    //create a map function to loop through and print instead
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h4>Training Progress</h4>
                {tpElements}

            </div>
        </div>
    )
}

export default TrainingProgressCard;