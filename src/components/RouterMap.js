// dependencies
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Workshops from '../pages/Workshops'
import Officers from '../pages/Officers'
import Events from '../pages/Events'

function RouterMap() {
    return (
        <Router>
            <Switch>
                <Route path="/projects">
                <Projects />
                </Route>

                <Route path="/workshops">
                <Workshops />
                </Route>

                <Route path="/events">
                <Events />
                </Route>

                <Route path="/officers">
                <Officers />
                </Route>

                <Route path="/">
                <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterMap