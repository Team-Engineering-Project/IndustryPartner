import React from 'react'
import flairIcon from './img/book-half.svg'
const FlairCard = ({ flairs }) => {

    const flairElements = flairs.map(flair => {
        return (
            <li className="list-group-item justify-content-between align-items-center p-3">
                <img src={flairIcon}></img>
                <h6 className="mb-0" style={{ display: 'inline', paddingLeft: '5px' }}>{flair.type}</h6>
                <p className="mb-0" style={{ display: 'block', paddingLeft: '1.3em' }}>{flair.description}</p>
            </li>
        )
    })

    return (
        <div className="card mb-4 p-0">
            <h4 className="card-header text-center" style={{ color: '#18164d' }}>Flair</h4>
            <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                    {flairElements}
                </ul>
            </div>
        </div>
    )
}

export default FlairCard;