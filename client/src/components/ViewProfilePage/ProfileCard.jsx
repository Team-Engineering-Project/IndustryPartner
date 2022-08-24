import React from 'react';
import logo from './img/ProfileImg.png'

const ProfileCard = ({graduate}) => {
  return (
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
  )
}

export default ProfileCard;