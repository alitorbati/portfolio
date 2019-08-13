import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import baseStyles from './base-styles'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
// import Experiments from './pages/Experiments.1'
// import Sandbox from './pages/Sandbox'
import Url from './components/Url'

const Main = styled.main`
  max-width: 800px;
  padding: 30px;
`

const Nav = styled.nav`
  margin-bottom: 30px;
`

const NavUrl = styled(Url)`
  margin-right: 15px;
  display: inline-block;
`

class App extends Component {
  render() {
    const navUrls = [
      '/',
      '/jobs',
      '/projects',
      '/contact',
      // '/experiments',
      // '/sandbox',
    ]

    baseStyles()
    return (
      <BrowserRouter>
        <Main>
          <header>
            <Nav>
              {
                navUrls.map(link => (
                  <NavUrl to={ link } key={ link }>
                    { link }
                  </NavUrl>
                ))
              }
            </Nav>
          </header>

          <div>
            <Route path='/' exact component={ Home } />
            <Route path='/jobs' component={ Jobs } />
            <Route path='/projects' component={ Projects } />
            <Route path='/contact' component={ Contact } />
            {/* <Route path='/experiments' component={ Experiments } /> */}
            {/* <Route path='/sandbox' component={ Sandbox } /> */}
          </div>
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
