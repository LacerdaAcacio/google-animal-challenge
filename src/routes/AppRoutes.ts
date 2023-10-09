// import React from 'react';
// import { Route, BrowserRouter as Switch } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import AboutPage from '../pages/AboutPage';
// import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import routes from './routes';
// import { RouteType } from '../types/RoutesData';

// // function AppRoutes() {
// //   return (
// //     <Switch>
// //     routes.map((route: RouteType ) => (
// //       <Route key={route.path} path={route.path} />
// //         // <route.component />
// //         // </Route>
// //         ))
// //     </Switch>
// //   );
// // }
// function AppRoutes() {
//     return (
//       <Switch>
//         {routes.map((route: RouteType ) => (
//           <Route key={route.path} path={route.path}>
//             <route.component />
//           </Route>
//         ))}
//       </Switch>
//     );
//   }

// export default AppRoutes;
// import { Route, BrowserRouter as Switch } from 'react-router-dom';
// import routes from './routes';
// import { RouteType } from '../types/RoutesData';

// function AppRoutes() {
//     return (
//       <Switch>
//         {routes.map((route: RouteType ) => (
//           <Route key={route.path} path={route.path}>
//             <route.component />
//           </Route>
//         ))}
//       </Switch>
//     );
//   }

// export default AppRoutes;
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import routes from './routes';
// import { RouteType } from '../types/RoutesData';

// // interface RouteType {
// //   path: string;
// //   component: React.ComponentType;
// // }

// function AppRoutes() {
//     return (
//       <Router>
//         <Routes>
//           {routes.map((route: RouteType ) => (
//             <Route key={route.path} path={route.path} element={<route.component />} />
//           ))}
//         </Routes>
//       </Router>
//     );
// }

// export default AppRoutes;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import routes from './routes';
// import { RouteType } from '../types/RoutesData';

// // type RouteType = {
// //   path: string;
// //   element: React.ReactElement;
// // };

// function AppRoutes() {
//     return (
//       <Router>
//         <Routes>
//           {routes.map((route: RouteType) => (
//             <Route key={route.path} path={Route.path} Element={Route.element} />
//           ))}
//         </Routes>
//       </Router>
//     );
// }

// export default AppRoutes;
