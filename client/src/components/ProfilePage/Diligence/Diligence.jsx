import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import testData from '../../../utils/testData/testData.js'
const graduate = testData.graduate;

function Diligence() {



    return (

        <div className='row'>

            <Card >

                <Card.Body style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                    <div className="dDC" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Card.Title>Due Diligence Checks</Card.Title>
                    </div>
                    <Card.Text>
                        {graduate.diligence.disclosure && <p> disclosure passed <p /></p>}
                    </Card.Text>

                    <Card.Text>
                        {graduate.diligence.credit && <p> credit passed </p>}
                    </Card.Text>

                    <Card.Text>
                        {graduate.diligence.rightToWork && <p> right to work passed </p>}
                    </Card.Text>

                </Card.Body>
            </Card>






        </div>

    )
}



export default Diligence;