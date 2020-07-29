// ADD LOADING SPINNER
import React from "react";
import "./App.scss";
import Nav from "./Nav/Nav";
import HomePage from "./HomePage/HomePage";
import BlogPage from "./BlogPage/BlogPage";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  const darkModeButton = (
    <button
      className={
        props.darkMode
          ? `dark-mode-btn btn-dark-background`
          : `dark-mode-btn btn-light-background`
      }
      onClick={() => props.dispatch({ type: "TOGGLE_DARKMODE" })}
    >
      {props.darkMode ? `Light Mode` : `Dark Mode`}
    </button>
  );
  return (
    <BrowserRouter className="App">
      <Nav darkModeButton={darkModeButton} darkMode={props.darkMode} />
      <Route exact path="/" component={HomePage} darkMode={props.dakMode} />
      <Route path="/Blog" component={BlogPage} />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

export default connect(mapStateToProps)(App);

// <HomePage darkMode={props.dakMode} />
