import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import baseStyles from './base-styles'

import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Photography from './pages/Photography'
import Elsewhere from './pages/Elsewhere'

import './App.css';

const Main = styled.main`
  max-width: 800px;
  padding: 10px;
`

const Nav = styled.nav`
  margin-bottom: 32px;
`

const NavLink = styled(Link)`
  margin-right: 16px;
  display: inline-block;
`

class App extends Component {
  render() {
    const navLinks = [
      '/',
      '/experiences',
      '/projects',
      '/photography',
      '/elsewhere',
    ]

    baseStyles()
    return (
      <BrowserRouter>
        <Main>
          <header>
            <Nav>
              {
                navLinks.map(link => (
                  <NavLink
                    to={ link }
                    key={ link }
                    // className={ this.props.history.location.pathname }
                  >
                    { link }
                  </NavLink>
                ))
              }
            </Nav>
          </header>

          <div>
            <Route path='/' exact component={ Home } />
            <Route path='/experiences' component={ Experiences } />
            <Route path='/projects' component={ Projects } />
            <Route path='/photography' component={ Photography } />
            <Route path='/elsewhere' component={ Elsewhere } />
          </div>
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
