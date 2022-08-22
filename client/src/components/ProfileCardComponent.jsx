
import logo from './logo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function ProfileCardComponent({ graduate }) {
    return (
        <Card style={{ width: '18rem', marginRight: '10px' }}>
            {/* <Card.Img variant="top" src={logo} style={{ width: '100px', padding: '10px', borderRadius: '200px' }} /> */}
            <Card.Body>
                <div className="img+title" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Card.Img variant="top" src={logo} style={{ width: '100px', padding: '10px', borderRadius: '200px' }} />
                    <Card.Title>{graduate.firstName} {graduate.lastName}<br />  <p style={{ color: 'lightgrey', fontSize: '15px' }}>{graduate.pronouns}</p> </Card.Title>

                </div>

                <Card.Text>
                    <div className="graduation">
                        <h5>Digital Futures graduation</h5>
                        <p>{graduate.dfGraduationDate}</p>
                        <br />
                        <br />
                    </div>
                    <div className='Education'>
                        <h5>{graduate.universityDegree}</h5>
                        <p>{graduate.university}</p>
                    </div>

                    <hr />

                </Card.Text>
                {/* <Button className='viewProfileButton' variant="primary" style={{ alignItems: 'centergit' }}>View profile</Button> */}
            </Card.Body>
        </Card >
    )
}

export default ProfileCardComponent;