// dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// includes 
import './Pitch.css'

function Pitch(props) {
    return (
        <div className={props.item.id}>
            <h2>{props.item.title}</h2>
            <p>{props.item.text}</p>
            <p style={{display: !props.item.schedule && "none"}}>{props.item.schedule}</p>
            <Link style={{display: !props.item.redirect && "none"}} to={props.item.redirect}>{props.item.title}</Link>
        </div>
    )
}

export default Pitch