import React from 'react'
import './20.1 card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}&size=180*180`} />
        <h2> {props.monster.name} </h2>
        <p>{props.monster.email}</p>
    </div>
)