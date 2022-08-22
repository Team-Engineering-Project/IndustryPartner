import Login from './Login';
import Footer from './Footer';
import df from './df.jpg';
import './test.css';

const StartComponent = () => {
    return (

        <div class="container">
            <div class="main"></div>
            <div class="main1">
                <Login />
            </div>
            <div class="main2"></div>
            <div class="footer">
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default StartComponent;