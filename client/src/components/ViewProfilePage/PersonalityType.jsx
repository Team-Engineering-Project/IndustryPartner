import React from 'react'


const PersonalityType = ({ personalityType }) => {

  return (
    <div className="card mb-4">
      {/* <div className="card-body"> */}
      <h5 className="card-header text-center" style={{ color: 'white', backgroundColor:'#3B8BC9' }}>Personality Type</h5>
      <div className="card-body text-justified-center">
        <div className="row">
          <div className="col-sm-2">
            {personalityType.type}
          </div>
          <div className="col-sm text-muted">
            {personalityType.description}
          </div>
        </div>
      </div>

    </div >
  )
}

export default PersonalityType;