import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { faker } from "@faker-js/faker";
import Footer from "./components/Footer";
import { LABELS } from "./constants";
import routes from "./routes/routes";
import { RouteProps } from "./types/PropsData";
import Header from "./components/Header";
import useHiddenSearch from "./hooks/contexts/useHiddenSearch";
import { StyledAppContainer } from "./styles/styles";

function App() {
  const { hiddenSearch } = useHiddenSearch();
  const avatar = faker.image.avatar();
  return (
    <Router>
      <StyledAppContainer>
        <Header
          srcAvatar={avatar}
          altAvatar={LABELS.ALT_AVATAR}
          type="text"
          placeholder={`${LABELS.SEARCH}...`}
          hiddenSearch={hiddenSearch}
        />
        <Routes>
          {routes.map((route: RouteProps) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={React.createElement(route.Component)}
              />
            );
          })}
        </Routes>
        <Footer
          key="footer"
          label={LABELS.FOOTER}
          version={LABELS.VERSION}
          showCopyRight
        />
      </StyledAppContainer>
    </Router>
  );
}

export default App;
