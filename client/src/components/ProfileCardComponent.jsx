import logo from './logo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function ProfileCardComponent() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>John Maybe</Card.Title>
                <Card.Text>
                    <p className='Graduation'>march 2020</p>
                    <p className='Education'>masters</p>
                </Card.Text>
                <Button variant="primary">View profile</Button>
            </Card.Body>
        </Card >
    );
}

export default ProfileCardComponent;