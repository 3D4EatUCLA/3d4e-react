// dependencies
import React from 'react'

// components
import CardBio from 'components/CardBio'

// includes
import boardData from '../data/boardData'
import './Officers.css'

function Officers() {
    const officerComponents = boardData.map(officer => {
        return (
            <CardBio 
                key={officer.id}
                position={officer.position}
                name={officer.name}
                text={officer.text}
                photo={officer.photo}
            />
        )
    })

    return (
        <div className='pageWrapper'>
            <div className='parallaxOfficers'>
            </div>
            <div className='boardCollage'>
                {officerComponents}
            </div>
        </div>
    )

    /*
    return (
        <div className='gridContainer'>
            {officerComponents}
        </div>
    )
    */

    /*
    return (
        <div>
            <CardBio 
                name={boardData[0].name} 
                photo={boardData[0].photo}
            />
        </div>
        
    )
    */
    
}

export default Officers;
