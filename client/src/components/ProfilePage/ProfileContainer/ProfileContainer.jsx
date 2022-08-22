import Headline from "../Headline/Headline";
import Diligence from "../Diligence/Diligence";

const ProfileContainer = () => {

    return (
        <div className="container-fluid" >
            <div className="row justify-content-center">
                <div className="col-10">
                    <Headline />
                    <Diligence />
                </div>
            </div>
        </div>
    )

}

export default ProfileContainer;