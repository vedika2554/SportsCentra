import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Views/Home/Home'
import Sports from './Views/Sports/Sports';
import About  from './Views/About/About'
import Help from './Views/Help/Help'
import Ourservices from './Views/Ourservices/Ourservices'
import Login from './Views/Login/Login'
import Forgot from './Views/Forgot/Forgot';
import Hockey from './Views/Hockey/Hockey';
import Cricket from './Views/Cricket/Cricket';
import Carrom from './Views/Carrom/Carrom';
import Business from './Views/Business/Business';
import Sketing from './Views/Sketing/Sketing';
import Tennis from './Views/Tennis/Tennis';

import Football from './Views/Football/Football';
import Swimming from './Views/Swimming/Swimming';

import Teammember from './Views/Teammember/Teammember';


import News from './Views/News/News';


const router = createBrowserRouter([
  { 
    path: '/',
    element: <Home/>
  },
  { 
    path: '/Sports',
    element: <Sports/>
  },  { 
    path: '/Our services',
    element: <Ourservices/>
  },  { 
    path: '/About',
    element: <About/>
  },  { 
    path: '/Help',
    element: <Help/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/forgot',
    element: <Forgot/>
  },
  {
    path: '/hockey',
    element: <Hockey/>
  },
  {
    path: '/Cricket',
    element: <Cricket/>
  },
  {
    path: '/Carrom',
    element: <Carrom/>
  },
  {
    path: '/Sketing',
    element: <Sketing/>
  },
  {
    path: '/Business',
    element: <Business/>
  },
  {
    path: '/tennis',
    element: <Tennis/>
  },
  {

    path: '/Football',
    element: <Football/>
  },
  {
    path: '/News',
    element: <News/>

  },

  {
    path: '/Swimming',
    element:<Swimming/>
  },
  {
    path:'/Teammember',
    element:<Teammember/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={router}/>
  </>
);

