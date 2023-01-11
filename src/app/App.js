import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";

function ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <ScrollToTop>
          <Headermain />
          <AppRoutes />
        </ScrollToTop>
      </div>
    </Router>
  );
}
