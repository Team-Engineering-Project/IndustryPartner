import React from 'react'

const TrainingProgressCard = () => {
    //create a map function to loop through and print instead
  return (
    <div className="card mb-4">
        <div className="card-body">
            <h4>Training Progress</h4>
            <div className="row">
            <div className="col-sm-3">
                <p className="mb-0">Fundamentals</p>
            </div>
            <div className="col-sm-9">
                <p className="text-muted nv-0">Johnatan Smith</p>
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col-sm-3">
                <p className="mb-0">Software Design</p>
            </div>
            <div className="col-sm-9">
                <p className="text-muted nv-0">example@example.com</p>
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col-sm-3">
                <p className="mb-0">Software Development 1</p>
            </div>
            <div className="col-sm-9">
                <p className="text-muted nv-0">example@example.com</p>
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col-sm-3">
                <p className="mb-0">Software Development 2</p>
            </div>
            <div className="col-sm-9">
                <p className="text-muted nv-0">example@example.com</p>
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col-sm-3">
                <p className="mb-0">Team Engineering</p>
            </div>
            <div className="col-sm-9">
                <p className="text-muted nv-0">example@example.com</p>
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col-sm-3">
                <p className="mb-0">Competency Interview</p>
            </div>
            <div className="col-sm-9">
                <p className="text-muted nv-0">example@example.com</p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default TrainingProgressCard;