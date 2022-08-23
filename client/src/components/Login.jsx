//import bootstrap from 'bootstrap';
// import dfLogo from './logo3.png';
import dfLogo from './df.jpg'
const Login = () => {
    return (
        <>
            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100" >
                    <div class="col col-xl-10" >
                        <div class="card" style={{borderRadius: '25px'}} >
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                            <img src={dfLogo} alt="login form" class="img-fluid" style={{height: '100%', width: '100%', objectFit: 'cover'}} />
                            </div>
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                            <div class="card-body p-4 p-lg-5 text-black">

                            <form>

                                <div class="d-flex align-items-center mb-3 pb-1">
                                    <i class="fas fa-cubes fa-2x me-3" ></i>
                                    <span class="h1 fw-bold mb-0">DFX</span>
                                </div>

                                <h5 class="fw-normal mb-3 pb-3" >Sign into your account</h5>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example17" class="form-control form-control-lg" placeholder='email address'/>
                                    {/* <label class="form-label" for="form2Example17">Email address</label> */}
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example27" class="form-control form-control-lg" placeholder='password'/>
                                    {/* <label class="form-label" for="form2Example27">Password</label> */}
                                </div>

                                <div class="pt-1 mb-4">
                                    <button class="btn btn-dark btn-lg btn-block" type="button" style={{width: '100%'}}>Login</button>
                                </div>

                                <a class="small text-muted" href="#!">Forgot password?</a>
                                <p class="mb-5 pb-lg-2" >Don't have an account? <a href="#!">Register here</a></p>
                                <a href="#!" class="small text-muted">Terms of use.</a>
                                <a href="#!" class="small text-muted">Privacy policy</a>
                            </form>

                            </div>
                            </div>
                        </div>
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