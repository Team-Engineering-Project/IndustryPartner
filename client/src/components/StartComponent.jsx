import Login from './Login';
import Footer from './Footer';
import df from './df.jpg';

const StartComponent = () =>
{
    return (
        <>
            <h2>Digital Futures</h2>
            <p>Create your account</p>
            <img src={df} alt=""></img>
            <Login />
            {/* <Footer /> */}
        </>
    )
}

export default StartComponent;