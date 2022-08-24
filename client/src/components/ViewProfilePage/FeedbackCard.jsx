import React from 'react'
import openQuoteIcon from './img/open-quote.svg';
import closeQuoteIcon from './img/close-quote.svg';

const FeedbackCard = ({feedback}) => {

    const feedbackElements = feedback.map(feedback => {
        return (
            <li className="list-group-item justify-content-between align-items-center p-3">
                <img src={openQuoteIcon} alt="open quote icon"></img>
                <i><p className="mb-0" style={{display: 'inline', textOverflow:'ellipsis'}}>{feedback.description}</p></i>
                <img src={closeQuoteIcon} alt="close quote icon"></img>
                <p className='mb-0'>{feedback.person}</p>
            </li>
        )
    })

  return (
    <div className="card mb-4">
        <div className="card-body p-0">
            <h4 className="text-center">Feedback</h4>
            <ul className="list-group list-group-flush rounded-3">
                {feedbackElements}
            </ul>
        </div>
    </div>
  )
}

export default FeedbackCard;