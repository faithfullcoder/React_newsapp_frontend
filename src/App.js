import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pagesize = 10;
  constructor() {
    super();
    this.state = { progress: 0, apikey: process.env.REACT_APP_NEWS_API };
  }

  setprogress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setprogress={this.setprogress}
                  apikey={this.state.apikey}
                  pagesize={this.pagesize}
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setprogress={this.setprogress}
                  apikey={this.state.apikey}
                  pagesize={this.pagesize}
                  key="business"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setprogress={this.setprogress}
                  apikey={this.state.apikey}
                  pagesize={this.pagesize}
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setprogress={this.setprogress}
                  apikey={this.state.apikey}
                  pagesize={this.pagesize}
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setprogress={this.setprogress}
                  apikey={this.state.apikey}
                  pagesize={this.pagesize}
                  key="health"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setprogress={this.setprogress}
                  apikey={this.state.apikey}
                  pagesize={this.pagesize}
                  key="science"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setprogress={this.setprogress}
                  apikey={this.state.apikey}
                  pagesize={this.pagesize}
                  key="sports"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setprogress={this.setprogress}
                  apikey={this.state.apikey}
                  pagesize={this.pagesize}
                  key="technology"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
