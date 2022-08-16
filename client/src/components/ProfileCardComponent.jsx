import logo from './logo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function ProfileCardComponent() {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={logo} style={{ width: '100px', padding: '10px', borderRadius: '200px' }} /> */}
            <Card.Body>
                <div className="img+title" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Card.Img variant="top" src={logo} style={{ width: '100px', padding: '10px', borderRadius: '200px' }} />
                    <Card.Title>John Maybe <br />  <p style={{ color: 'lightgrey', fontSize: '15px' }}>he/him</p> </Card.Title>

                </div>

                <Card.Text>
                    <div className="graduation">
                        <h5>Digital Futures graduation</h5>
                        <p>Sept 2022</p>
                        <br />
                        <br />
                    </div>
                    <div className='Education'>
                        <h5>Degree</h5>
                        <p>University</p>
                    </div>

                    <hr />

                </Card.Text>
                <Button className='viewProfileButton' variant="primary" style={{ alignItems: 'centergit' }}>View profile</Button>
            </Card.Body>
        </Card >
    );
}

export default ProfileCardComponent;