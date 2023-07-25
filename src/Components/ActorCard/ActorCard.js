import React from 'react'
import './ActorCard.css'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/fontawesome-free-solid'
const APIKey = process.env.REACT_APP_API_KEY


const ActorCard = (props) => {
    return (
        <div className='container'>
            {/* <Card style={{ width: '18rem' }}> */}
            <Card.Img className="actor-image" variant="top" src={props.profilePicture} />
            <Card.Body>
                <Card.Title className='title'>{props.name}</Card.Title>
                <Card.Title className='character-name'>Card Title awsedrfud</Card.Title>
                {/* <Card.Text className='popularity'>{props.popularity}</Card.Text> */}
                <Card.Text className='popularity'>
                    <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up-icon" />
                    {props.popularity}
                </Card.Text>
                {/* <Button className='button' variant="primary">Details</Button> */}
            </Card.Body>
            {/* </Card> */}

        </div>
    )
}

export default ActorCard
