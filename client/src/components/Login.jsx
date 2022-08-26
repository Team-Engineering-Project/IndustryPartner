import React, { useState, useEffect } from "react";
import './test.css';
import Footer from './Footer';
import dfLogo from './logo3.png';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(

        "https://cors.eu.org/http://localhost:4000/login",

        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="container1">
      <div className="main"></div>
      <div className="main1">
        <article>
          {/* {loggedIn && <Navigate to="/" />} */}
          <section>
            <div className="container1-fluid">
              <div className="row">
                <div className="col text-black">
                  {/* <h1>Digital Futures</h1> */}
                  <div className="px-4 ms-xl-4">
                    <img src={dfLogo} alt="" />
                    <i
                      className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                      style={{ color: "#709085" }}
                    ></i>
                    <span className="h1 fw-bold mb-0">Digital Futures</span>
                  </div>
                  <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">


                    <form onSubmit={(e) => handleSubmit(e)} style={{ width: '35rem' }}>

                      <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" name="email"
                          placeholder="Email"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" name="password"
                          placeholder="Password"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="pt-1 mb-4">
                        <input type="submit" className="btn-colour btn btn-lg btn-block" value="Login" />
                      </div>
                    </form>
                    <ToastContainer />

                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
      <div className="main2"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>

  );
  <ToastContainer />
}

export default Login;



