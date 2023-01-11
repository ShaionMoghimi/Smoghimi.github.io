import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Home } from "../pages/home";
import { Resume } from "../pages/resume";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedSwitch = (() => (
  <TransitionGroup>
    <CSSTransition
      key={useLocation().key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={useLocation()}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
