import Login from './Login';
import Footer from './Footer';
import df from './df.jpg';
import './test.css';
import Main from './Main';

const StartComponent = ({ setUser }) => {
    return (

        <div className="container">
            <div className="main"></div>
            <div className="main1">
                <article>
                    <Login setUser={setUser} />
                </article>
            </div>
            <div className="main2"></div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default StartComponent;