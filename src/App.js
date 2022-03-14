import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Button } from "antd";
// pages
import MainPage from "./pages/MainPage";
import Success from "./pages/Success";
import ErrorPage from "./pages/ErrorPage";

const { Header } = Layout;

function App() {
  return (
    <>
      <BrowserRouter>
        <Header className="header">
          {" "}
          <div className="navbar">
            <div className="navContent">
              <div style={{ color: "#000" }} className="logo">ATools</div>
            </div>
            <div className="navContent btn-container">
              <Button
                type="primary"
                className="mr-2"
                style={{ height: "2.5rem", padding: "0 1.4rem" }}>
                Start New Trial
              </Button>
              <Button
                className="btn-sec"
                style={{ height: "2.5rem", padding: "0 1.4rem" }}>
                Login
              </Button>
            </div>
          </div>
        </Header>
        <div className="h-3"></div>
        <Routes> 
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/success" element={<Success />}></Route>
            <Route path={"*"} element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
