import React from 'react'
import Section from './section'
import Error from './error'
import SectionFlag from './sectionflag'
import Navbar from './navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
       <Navbar/>
          <Switch>
              <Route exact path='/'>
             
              <Section/>
              </Route>
              <Route exact path='/section'>
              <Navbar/>
              <Section/>
              </Route>
              {/* <Route exact path='/section/sectionflag' >
              <Navbar/>
              <SectionFlag />
              </Route> */}
              <Route path='/section/sectionflag/:name' children={<SectionFlag/>}>
              <Navbar/>
              <SectionFlag />
              </Route>
              {/* <Route  path='*'>
                <Error />
              </Route>   */}
            </Switch>
    </Router>
  )
}

export default App
