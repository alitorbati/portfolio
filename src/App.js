import * as React from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Text from "./components/Text";
import Box from "./components/Box";
import Flexbox from "./components/Flexbox";
import lightTheme, { darkTheme } from "./theme";

const navItems = [
  { path: "/", label: "home", component: Home, exact: true },
  { path: "/projects", label: "projects", component: Projects },
  { path: "/jobs", label: "jobs", component: Jobs },
  { path: "/contact", label: "contact", component: Contact },
];

const NavItems = withRouter((props) => (
  <React.Fragment>
    {navItems.map((x) => (
      <Text key={x.path}>
        <Link
          style={{
            textDecoration:
              props.location.pathname === x.path ? "line-through" : null,
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
  // const initialTheme = () => window.localStorage.getItem("theme") || "light";
  // const [theme, setTheme] = useState(initialTheme);
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   window.localStorage.setItem("theme", newTheme);
  // };
  const theme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkTheme
      : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box as="main" maxWidth="800px" padding={[3, 4]}>
          <GlobalStyle />
          <Box as="header">
            <Box as="nav" marginBottom={4}>
              <Flexbox display="flex" alignItems="center" gap="3">
                <NavItems />
              </Flexbox>
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
