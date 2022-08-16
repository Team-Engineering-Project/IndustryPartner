import CardsComponent from "./CardsComponent";
import ProfileCardComponent from "./ProfileCardComponent";
function Main()
{
    return (

        <div>
            <div className="header" style={{ margin: '30px' }}>

                <h1>Talent spotlight</h1>
                <p>At Digital Futures we're focused on improving diversity within the technology sector, helping organisations build high-performing technology teams representative of society. Below is a selection of our engineers who have recently graduated from the Digital Academy and are immediately available to join your organisation </p>

            </div>
            <br>
            </br>

            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', borderRadius: '5px', backgroundColor: "white" }}>
                {/* <FilterComponent/> */}
                <ProfileCardComponent />
                <ProfileCardComponent />
                <ProfileCardComponent />
                <ProfileCardComponent />
            </div>

        </div >


    );
}

export default Main;