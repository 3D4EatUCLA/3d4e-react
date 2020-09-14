// dependencies
import React from 'react'

// components
import LinkButton from '../components/LinkButton'

// includes
import './Home.css'

function Home() {
    return (
        <div>
            <div className='parallax-1'>
                <div className='parallaxContainer'>
                    <div className='text'>
                        <div className='grid introWrapper-1'>
                            <div></div>
                            <div className='text'>
                                <h4 style={{textAlign: 'center'}}>3D Printing at UCLA</h4>
                                <br></br>
                                <p style={{textAlign: 'center'}}>
                                    3D Printing is a combination of art, engineering, and 
                                    problem-solving. At 3D4E, we strive to inspire people through the 
                                    power of computer-aided design, and leave our own mark by building 
                                    practical solutions to real-world problems through 3D-printed products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-side'>
                <h4>Projects</h4>
                <p>
                    Our club's main focus is on group projects, in which we design, 
                    manufacture, and test using CAD software and 3D printing. These projects 
                    range from recreational, like hydroponics, to technical, like our flight 
                    team. In addition to our group efforts, 3D4E also supports members with 
                    the resources and expertise they might need to pursue their own individual 
                    ideas, like our RC car team.
                </p>
                <p>
                    Project Hours: 7PM - 8PM Thursdays at Boelter Library SEL Learning Commons
                </p>
                <LinkButton to='/projects' message='View Projects' />
            </div>
            <div>
                <h4>Workshops</h4>
                <p>
                    Regardless of your background, major, or design experience, we 
                    are committed to teaching all our general members how to 3D print from 
                    the ground up. During the Fall Quarter, we host weekly workshops to 
                    train everyone how to use CAD tools like Fusion360, and translate your 
                    design into manufacturable prints.
                </p>
                <p>
                    Workshop Hours: 6PM - 7PM Thursdays at Boelter Library SEL Learning Commons
                </p>
                <LinkButton to='/workshops' message='View Workshops' />
            </div>
            <div>
                <h4>Events</h4>
                <p>
                    From showcases to tech fairs, retreats to social outreach events,
                    follow our adventures by browsing our media gallery.
                </p>
                <LinkButton to='/events' message='View Gallery' />
            </div>
            <div>
                <h4>Officers</h4>
                <p>
                    Meet the board members!
                </p>
                <LinkButton to='/officers' message='View Board' />
            </div>
        </div>
    )
}

export default Home