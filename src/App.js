import React from "react";
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import LandingPage from "./entities/pages/landing";
import ExplorePage from "./entities/pages/explore";
import AuthPage from "./entities/pages/auth";
import ErrorPage from "./entities/pages/error";
import ClaimsPage from "./entities/pages/claims";
import RenewPage from "./entities/pages/renew";

import { Paths } from "./settings/connections";

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path={Paths.HOME} element={<LandingPage />}></Route>
          <Route path={Paths.EXPLORE} element={<ExplorePage />}></Route>
          <Route path={Paths.AUTH} element={<AuthPage />}></Route>
          <Route path={Paths.CLAIMS} element={<ClaimsPage />}></Route>
          <Route path={Paths.RENEW} element={<RenewPage />}></Route>
          <Route path={Paths.WILDCARD} element={<ErrorPage type={404} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
