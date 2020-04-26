import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import Experiments from './pages/Experiments.1'
// import Sandbox from './pages/Sandbox'
import Text from "./components/Text";
import Box from "./components/Box";
import Button from "./components/Button";
import lightTheme, { darkTheme } from "./theme";

const navItems = [
  { path: "/", label: "home", component: Home, exact: true },
  { path: "/projects", label: "projects", component: Projects },
  { path: "/jobs", label: "jobs", component: Jobs },
  { path: "/contact", label: "contact", component: Contact },
  // { path: '/experiments', component: Experiments },
  // { path: '/sandbox', component: Sandbox },
];

const NavItems = withRouter((props) => (
  <React.Fragment>
    {navItems.map((x) => (
      <Text key={x.path} marginRight={2}>
        <Link
          style={{
            textDecorationStyle:
              props.location.pathname === x.path ? "wavy" : "solid",
          }}
          to={x.path}
          key={x.path}
        >
          {x.label}
        </Link>
      </Text>
    ))}
  </React.Fragment>
));

const App = (props) => {
  const initialTheme = () => window.localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Box as="main" maxWidth="800px" padding={3}>
          <GlobalStyle />
          <Box as="header">
            <Box as="nav" mb={3}>
              <NavItems />
              <Button onClick={toggleTheme}>theme</Button>
            </Box>
          </Box>
          <Box>
            {navItems.map((x) => (
              <Route {...x} key={x.path} />
            ))}
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
