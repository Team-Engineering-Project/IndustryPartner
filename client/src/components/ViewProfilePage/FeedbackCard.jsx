import React from 'react'
import openQuoteIcon from './img/open-quote.svg';
import closeQuoteIcon from './img/close-quote.svg';

const FeedbackCard = ({ feedback }) => {

    let id = 0;

    const feedbackElements = feedback.map(feedback => {
        return (
            <li className="list-group-item justify-content-between align-items-center p-3" key={id++}>
                <img src={openQuoteIcon} alt="open quote icon"></img>
                <i><p className="mb-0" style={{ display: 'inline', textOverflow: 'ellipsis' }}>{feedback.description}</p></i>
                <img src={closeQuoteIcon} alt="close quote icon"></img>
                <p className='mb-0'>{feedback.person}</p>
            </li>
        )
    })

    return (
        <div className='col-lg-12' >
            <div className="card mb-4">
                <h4 className="card-header text-center" style={{ color: '#18164d' }}>Feedback</h4>
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                        {feedbackElements}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default FeedbackCard;