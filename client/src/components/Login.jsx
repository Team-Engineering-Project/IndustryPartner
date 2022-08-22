import bootstrap from 'bootstrap';
import dfLogo from './logo3.png';
const Login = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-black">
                            {/* <h1>Digital Futures</h1> */}
                            <div className="px-4 ms-xl-4">
                                <img src={dfLogo} alt="" />
                                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
                                <span className="h1 fw-bold mb-0">Digital Futures</span>
                            </div>
                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{ width: '35rem' }}>
                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


        // <section className="vh-100">
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-sm-6 text-black">

        //                 <div className="px-5 ms-xl-4">
        //                     <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
        //                     <span className="h1 fw-bold mb-0">Logo</span>
        //                 </div>

        //                 <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

        //                     <form style={{ width: '35rem' }}>

        //                         <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

        //                         <div className="form-outline mb-4">
        //                             <input style={{ width: '100%' }} type="email" id="form2Example18" className="form-control form-control-lg" />
        //                             <label className="form-label" htmlFor="form2Example18">Email address</label>
        //                         </div>

        //                         <div className="form-outline mb-4">
        //                             <input type="password" id="form2Example28" className="form-control form-control-lg" />
        //                             <label className="form-label" htmlFor="form2Example28">Password</label>
        //                         </div>

        //                         <div className="pt-1 mb-4">
        //                             <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
        //                         </div>

        //                         <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
        //                         <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>

        //                     </form>

        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </section>

    )
}

export default Login;