
import ProfileCardComponent from "../ProfileCard/ProfileCardComponent";
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Col from 'react-bootstrap/Col';

function ProfileCardsComponent({ graduates }) {
    const graduateCard = graduates.map((graduate) => {
        return <ProfileCardComponent key={graduate._id} graduate={graduate} />
    })

    return (


        // <Container fluid>
        //     <Row>
        <div id="content-wrap" className="container" >
            <div className="row row-cols-1 row-cols-md-2 g-4 m-3" >
                {graduateCard}
            </div>
        </div>
        //     </Row>
        // </Container>


    );
}

export default ProfileCardsComponent;