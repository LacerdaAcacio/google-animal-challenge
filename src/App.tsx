// import Footer from "./components/Footer";
// import { LABELS } from "./constants";
// import HomePage from "./pages/HomePage";

// function App() {
//   return (
//     <>
//       <HomePage />
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { faker } from "@faker-js/faker";
import Footer from "./components/Footer";
import LABELS from "./constants";
import routes from "./routes/routes";
import { RouteProps } from "./types/PropsData";
import Header from "./components/Header";
import useHiddenSearch from "./hooks/contexts/useHiddenSearch";
// import {
//   HiddenSearchProvider,
//   useHiddenSearch,
// } from "./contexts/HiddenSearchContext";

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         {/* <Route path="/another" component={AnotherPage} /> */}
//       </Switch>
//       <Footer
//         key="footer"
//         label={LABELS.FOOTER}
//         version={LABELS.VERSION}
//         showCopyRight
//       />
//     <Router/>
//   );
// }
// function App() {
//   return (
//     <Router>
//       <Switch>
//         {routes.map((route: RouteProps) => {
//           return (
//             <Route
//               key={route.path}
//               path={route.path}
//               Component={route.Component}
//             />
//           );
//         })}
//         {/* <Route path="/another" component={AnotherPage} /> */}
//       </Switch>
//       <Footer
//         key="footer"
//         label={LABELS.FOOTER}
//         version={LABELS.VERSION}
//         showCopyRight
//       />
//     </Router>
//   );
// }
function App() {
  const { hiddenSearch } = useHiddenSearch();
  const avatar = faker.image.avatar();
  return (
    <Router>
      {/* <HiddenSearchProvider> */}
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
              // handle={}
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
      {/* </HiddenSearchProvider> */}
    </Router>
  );
}

export default App;
