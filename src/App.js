// dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Workshops from './pages/Workshops'
import Officers from './pages/Officers'
import Events from './pages/Events'

// includes
import './App.css'

function App() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/workshops" component={Workshops} />
            <Route path="/events" component={Events} />
            <Route path="/officers" component={Officers} />
            <Route path="/" component={Home} />
        </Switch>
      </div>
    )
}

export default App