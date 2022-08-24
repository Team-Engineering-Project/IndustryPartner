import React from 'react'
//import redReject from '../ViewProfilePage/img/redReject.svg';
import testData from '../../utils/testData/testData.js'
import ProfileCard from './ProfileCard';
import DueDiligenceCard from './DueDiligenceCard';
import PersonalityType from './PersonalityType';
import TrainingProgressCard from './TrainingProgressCard';
import TechnicalSkills from './TechnicalSkills';
import QualificationsCard from './QualificationsCard';
import AchievementsCard from './AchievementsCard';
import FeedbackCard from './FeedbackCard';
const graduate = testData.graduate;


const ViewProfile = () => {

  return (
    <>
      <div className="container py-5">
        <div className="row">
          {/* left column */}
          <div className="col-lg-3" >
            <ProfileCard graduate={graduate} />
            <DueDiligenceCard graduate={graduate} />
          </div>

          {/* middle column */}
          <div className="col-lg-6" style={{ paddingLeft: "0px" }}>
            <PersonalityType />
            <TrainingProgressCard training={graduate.trainingProgress} />
            <TechnicalSkills />
          </div>

          {/* Third column */}
          <div className="col-lg-3">
            <div className="row">
              <QualificationsCard qualifications={graduate.qualifications} />
            </div>
            <div className="row">
              <AchievementsCard />
            </div>
            <div className='row'>
              <FeedbackCard />
            </div>
          </div>

        </div >
      </div >
    </>
  )
}

export default ViewProfile;