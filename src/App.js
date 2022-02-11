import * as React from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Writing from "./pages/Writing";
import Contact from "./pages/Contact";
import Text from "./components/Text";
import Box from "./components/Box";
import Flexbox from "./components/Flexbox";
import lightTheme, { darkTheme } from "./theme";

const navItems = [
  { path: "/", label: "home", component: Home, exact: true },
  { path: "/projects", label: "projects", component: Projects },
  { path: "/writing", label: "writing", component: Writing },
  { path: "/work", label: "work", component: Work },
  { path: "/contact", label: "contact", component: Contact },
];

const NavItems = withRouter((props) => (
  <React.Fragment>
    {navItems.map((x) => {
      const active = props.location.pathname === x.path;
      return (
        <Text key={x.path}>
          <Link
            style={{
              display: "inline-block",
              transform: active ? "scaleX(-1)" : null,
            }}
            to={x.path}
          >
            {x.label}
          </Link>
        </Text>
      );
    })}
  </React.Fragment>
));

const App = (props) => {
  const initialTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkTheme
      : lightTheme;

  const [theme, setTheme] = React.useState(initialTheme);

  React.useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        event.matches ? setTheme(darkTheme) : setTheme(lightTheme);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box as="main" maxWidth="800px" padding={[3, 4]}>
          <GlobalStyle />
          <Box as="header">
            <Box as="nav" marginBottom={4}>
              <Flexbox alignItems="center" gap="2">
                <NavItems />
              </Flexbox>
            </Box>
          </Box>
          <Box>
            {navItems.map((props) => {
              return (
                <Route
                  path={props.path}
                  exact={props.exact}
                  component={props.component}
                  key={props.path}
                />
              );
            })}
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
