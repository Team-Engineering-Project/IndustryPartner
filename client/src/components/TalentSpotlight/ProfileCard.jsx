
import logo from './img/ProfileImg.png'
import graduationIcon from './img/mortarboard-fill.svg';
import degreeIcon from './img/briefcase-fill.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function ProfileCard({ graduate }) {
    return (
        <Card style={{ minHeight: '25rem' ,width: '18rem', marginRight: 'auto'}}>
            {/* <Card.Img variant="top" src={logo} style={{ width: '100px', padding: '10px', borderRadius: '200px' }} /> */}
            <Card.Body style={{ paddingLeft:'3px', paddingRight:'3px'}}>
                <div className="img+title" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Card.Img variant="top" src={logo} style={{ width: '78px', padding: '0px 10px 10px 0px', borderRadius: '200px' }} />
                    <Card.Title>{graduate.firstName} {graduate.lastName}<br />  <p style={{ color: 'grey', fontSize: '15px' }}>{graduate.pronouns}</p> </Card.Title>
                </div>
                <Card.Text>
                    <div className="graduation">
                        <Card.Img src={graduationIcon} style={{ width: '10%', height: 'auto'}}/>
                        <h5 style={{display: 'inline', paddingLeft:'10px', fontSize: '1rem'}}>Digital Futures graduation</h5>
                        <p style={{paddingLeft: '2.2em', color:'grey', fontSize: '1rem'}}>{graduate.dfGraduationDate}</p>
                    </div>
                    <div className='Education'>
                        <Card.Img src={degreeIcon} style={{ width: '8%', height: 'auto'}}/>
                        <h5 style={{display: 'inline', paddingLeft:'12px', fontSize: '1rem'}} >{graduate.universityDegree}</h5>
                        <p style={{paddingLeft: '2.05em', color:'grey', fontSize: '1rem'}}>{graduate.university}</p>
                    </div>
                    {/* { graduate.OracleCertifiedAssociateScore />} */}
                    <hr className='footer' style={{width:'16em'}}/>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className='viewProfileButton' variant="primary" style={{ alignItems: 'centergit', width: '100%' }}>View profile</Button>
               
            </Card.Footer>
        </Card >
    )
}

export default ProfileCard;