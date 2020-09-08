// dependencies
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h2>3D Printing at UCLA</h2>
            <p>
                3D Printing is a combination of art, engineering, and problem-solving.
                At 3D4E, we strive to inspire people through the power of computer-aided 
                design, and leave our own mark by building practical solutions to 
                real-world problems through 3D-printed products.
            </p>

            <h2>Our Projects</h2>
            <p>
                Our club's main focus is on group projects, in which we design, manufacture, 
                and test using CAD software and 3D printing. These projects range from 
                recreational, like hydroponics, to technical, like our flight team. In addition 
                to our group efforts, 3D4E also supports members with the resources and expertise 
                they might need to pursue their own individual ideas, like our RC car team.
            </p>
            <p>
                Project Hours: 7PM - 8PM Thursdays at Boelter Library SEL Learning Commons
            </p>
            <Link to='/projects'>View Projects</Link>

            <h2>Workshops</h2>
            <p>
                Regardless of your background, major, or design experience, we are committed to 
                teaching all our general members how to 3D print from the ground up. During the 
                Fall Quarter, we host weekly workshops to train everyone how to use CAD tools 
                like Fusion360, and translate your design into manufacturable prints.
            </p>
            <p>
                Workshop Hours: 6PM - 7PM Thursdays at Boelter Library SEL Learning Commons
            </p>
            <Link to='/workshops'>View Workshops</Link>

            <h2>Events</h2>
            <p>
                From showcases to tech fairs, retreats to social outreach events, follow 
                our adventures by browsing our media gallery.
            </p>
            <Link to='/events'>View Gallery</Link>

            <h2>Officers</h2>
            <p>
                Meet the board members!
            </p>
            <Link to='/officers'>View Officers</Link>
        </div>
    )
}

export default Home