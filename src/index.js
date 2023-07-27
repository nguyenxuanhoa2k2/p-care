import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Map from './Components/gps/main';
import BMI from './Components/BMI/Bmi';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "GPS",
    element: <Map/>
  },

  {
    path: "BMI",
    element: <BMI/>
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


