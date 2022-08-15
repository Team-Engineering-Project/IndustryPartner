import CardsComponent from "./CardsComponent";
import ProfileCardComponent from "./ProfileCardComponent";
function Main() {
    return (

        <div>
            <div className="header" style={{ margin: '30px' }}>

                <h1>Talent spotlight</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam perspiciatis quod eligendi provident eos molestias nam ea, nostrum, facilis eum rem. Cupiditate quaerat modi beatae incidunt laudantium officiis nobis!</p>

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