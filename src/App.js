
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import Main from './Components/Main.js';
import Login from './Components/Login.js';

const clientId = process.env.REACT_APP_CLIENT_ID;
const App = () => {

    return (
        <BrowserRouter>
        {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Main endpoint="" component={Main} />} />
            <Route path="/class" element={< Main endpoint="class" component={Main} />} />
            <Route path="/test" element={< Main endpoint="test" component={Main} />} />
            <Route path="/muppet" element={< Main endpoint="muppet" component={Main} />} />
            <Route path="/*" render={() => (  <Login.js /> )} />
            </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
    );
  };

export default App;