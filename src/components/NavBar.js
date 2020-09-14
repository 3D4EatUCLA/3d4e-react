import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

// https://react-bootstrap.github.io/components/navbar/
/*
    About / Home
        Blurb about 3D4E as a whole
        Blurb about club's goal
        Blurb about club's workshops
    Projects
        Different Panels about each project
        Long list of boxes
    Workshops
        Links to lesson
            Has google presentation slides link (button?) at top
            Video underneath
            Time stamps and descriptions underneath
                Ex: 00:00 - 01:07 Introductions
    Officers
        Different Panels about board members
        Do not order based on position
    Events
        React Photo Gallery
        Justified Layout like Google Photos UI

*/

function NavBar() {
    return (
        <Navbar className="navbar" expand="md">
            <Navbar.Brand href="/" className="navbar-brand">
                <svg id="main-icon" xmlns="http://www.w2.org/2000/svg" viewBox="0 0 500 500" className="brand">
                    <path id="Three" className="logostyle" d="M139 102c9.1-7.9 23.6-18.8 43.9-26.6 15.6-6 29.6-8.4 40.1-9.4v152H57"/>
                    <path id="ThreeStroke" className="logostyle" d="M221 145h-79"/>
                    <path id="D" className="logostyle" d="M275 66v152h150c-1.5-13.7-8.8-66.3-54-108-38-35.1-80.8-42.2-96-44z"/>
                    <path id="FourR" className="logostyle" d="M223 250v184"/>
                    <path id="FourL" className="logostyle" d="M71 250c.1 12.6 1.7 30.2 8 50 5.2 16.4 12 29.4 18 39h126"/>
                    <path id="E" className="logostyle" d="M443 265H275v154c11.4-1.3 28.8-4.6 48-14 19.5-9.6 33-21.6 41-30"/>
                    <path id="EStroke" className="logostyle" d="M275 339h84"/>
                </svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/projects" className="navbar-items">Projects</Nav.Link>
                    <Nav.Link href="/workshops" className="navbar-items">Workshops</Nav.Link>
                    <Nav.Link href="/officers" className="navbar-items">Officers</Nav.Link>
                    <Nav.Link href="/events" className="navbar-items">Gallery</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar