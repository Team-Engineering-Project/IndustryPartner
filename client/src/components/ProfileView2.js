//import React from 'react'
import logo from './img/ProfileImg.png';
import greenTick from './img/greenTick.svg';
import redReject from './img/redReject.svg';

import testData from '../utils/testData/testData.js'
const graduate = testData.graduate;


const ProfileView2 = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">

            {/* Profile card */}
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src={logo} alt="avatar"
                  class="rounded-circle img-fluid" style={{ width: '150px' }} />
                <h5 class="my-3">{`${graduate.firstName} ${graduate.lastName}`}</h5>
                <p class="text-muted mb-1">{`${graduate.pronouns}`}</p>
                <p class="text-muted mb-4">{`${graduate.headline}`} </p>

                <div class="d-flex justify-content-center mb-2">
                  <form action={graduate.socialMedia.linkedIn}>
                    <button type="submit" class="btn btn-primary">LinkedIn</button>
                  </form>
                  <form action={graduate.socialMedia.github}>
                    <button type="submit" class="btn btn-outline-primary ms-1">Github</button>
                  </form>
                </div>
              </div>
            </div>

            {/* About me Card  */}
            {/* <div className="card mb-4">
              <div className="card-body p-0">
                <h4 className="text-center">About me card</h4>
                <p className="text-center">I suffer from Imposter Syndrome</p>
              </div>
            </div> */}

            {/* Due Diligence Checks Card */}
            <div className="card mb-4">
              <div className="card-body p-0">
                <h5 className="text-center">Due Diligence Checks</h5>
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p >Disclosure {graduate.diligence.disclosure ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>

                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">Right to work {graduate.diligence.rightToWork ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">Identity {graduate.diligence.identity ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">Education {graduate.diligence.education ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">Credit {graduate.diligence.credit ? <img src={greenTick}></img> : <img src={redReject}></img>}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>




          {/* middle column */}
          <div className="col-lg-6">


            {/* <div className="col-lg-6"> */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="text-center">Personality type</h4>
                <p className="text-center">I have no personality other than that of a person that sits in front of his monitor and holds his gamepad with greasy hands</p>
              </div>
            </div>
            {/* </div> */}

            {/* Training Progress card */}
            <div className="card mb-4">
              <div className="card-body">
                <h4>Training Progress</h4>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Fundamentals</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted nv-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Software Design</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted nv-0">example@example.com</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Software Development 1</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted nv-0">example@example.com</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Software Development 2</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted nv-0">example@example.com</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Team Engineering</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted nv-0">example@example.com</p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Competency Interview</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted nv-0">example@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* technical skills information */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Technical Skills</span>Project Status</p>
                  </div>
                  <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                  <div className="progress rounded" style={{ height: '5px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                  <div className="progress rounded" style={{ height: '5px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                  <div className="progress rounded" style={{ height: '5px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                  <div className="progress rounded" style={{ height: '5px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                  <div className="progress rounded" style={{ height: '5px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* qualifications */}
          <div className="col-lg-3">
            <div className="row">
              <div className="card mb-4">
                <div className="card-body p-0">
                  <h4 className="text-center">Qualifications</h4>
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0">{graduate.qualifications[0].level}</p>
                      <p className="mb-0">{graduate.qualifications[0].subject}</p>
                      <p className="mb-0">{graduate.qualifications[0].establishment}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0"> <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">{graduate.qualifications[1].level}</p>
                        <p className="mb-0">{graduate.qualifications[1].subject}</p>
                        <p className="mb-0">{graduate.qualifications[1].establishment}</p></p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0">
                        <p className="mb-0">{graduate.qualifications[2].level}</p>
                        <p className="mb-0">{graduate.qualifications[2].subject}</p>
                        <p className="mb-0">{graduate.qualifications[2].establishment}</p></p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0">
                        <p className="mb-0">{graduate.qualifications[3].level}</p>
                        <p className="mb-0">{graduate.qualifications[3].subject}</p>
                        <p className="mb-0">{graduate.qualifications[3].establishment}</p></p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0"></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="card mb-4">
                <div className="card-body p-0">
                  <h4 className="text-center">Achievements</h4>
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0"></p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0"></p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0"></p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0"></p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0"></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div >
      </div >
    </>
  )
}

export default ProfileView2;