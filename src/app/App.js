import React from 'react';
import {
  BrowserRouter, Routes,
  Route,
} from 'react-router-dom';

import SignUp from '../screens/signUp';
import Profile from '../screens/profile';
import { UiRoute } from './constants/uiRoutes';
import Sidebar from './Sidebar';
import Discovery from '../screens/Discovery';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path={UiRoute.signup} element={<SignUp />} />
        <Route path={UiRoute.profile} element={<Profile />} />
        <Route path={UiRoute.discovery} element={<Discovery />} />

        {/* <SignUp /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
