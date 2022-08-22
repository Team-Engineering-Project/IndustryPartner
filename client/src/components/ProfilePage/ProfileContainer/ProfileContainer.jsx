import Headline from "../Headline/Headline";
import Diligence from "../Diligence/Diligence";
import Qualifications from "../Qualifications/Qualifications";
import Achievements from "../Achievements/Achievements";
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills";
import TrainingProgress from "../TrainingProgress/TrainingProgress";
import Feedback from "../Feedback/Feedback";
import Flair from "../Flair/Flair";
import PersonalityType from "../PersonalityType/PersonalityType";

import testData from '../../../utils/testData/testData.js'
const graduate = testData.graduate;

const ProfileContainer = () => {

    return (
        <div className="container-fluid" >
            <div className="row justify-content-center">
                <div className="col-10">
                    <Headline />
                    <PersonalityType personality={graduate.personalityType} />
                    <Diligence diligence={graduate.diligence} />
                    <Qualifications qualifications={graduate.qualifications} />
                    <Achievements achievements={graduate.achievements} />
                    <TechnicalSkills technicalSkills={graduate.technicalSkills} />
                    <TrainingProgress trainingProgess={graduate.trainingProgress} />
                    <Feedback feedback={graduate.feedback} />
                    <Flair flair={graduate.flair} />
                </div>
            </div>
        </div>
    )

}

export default ProfileContainer;