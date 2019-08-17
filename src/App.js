import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
// import Experiments from './pages/Experiments.1'
// import Sandbox from './pages/Sandbox'
import Text from './components/Text'
import Box from './components/Box'
import theme from './theme'

const navItems = [
  { path: '/', component: Home, exact: true },
  { path: '/jobs', component: Jobs },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  // { path: '/experiments', component: Experiments },
  // { path: '/sandbox', component: Sandbox },
]

const App = (props) => (
  <ThemeProvider theme={ theme }>
    <BrowserRouter>
      <Box as='main' maxWidth='800px' padding={ 3 }>
        <GlobalStyle />
        <Box as='header'>
          <Box as='nav' mb={ 3 }>
            {
              navItems.map(x => (
                <Text marginRight={ 2 }>
                  <Link to={ x.path } key={ x.path }>{ x.path }</Link>
                </Text>
              ))
            }
          </Box>
        </Box>
        <Box>
          { navItems.map(x => <Route { ...x } />) }
        </Box>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
