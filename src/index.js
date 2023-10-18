import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './views/Home/Home'
import Sports from './views/Sports/Sports';
import About  from './views/About/About'
import Help from './views/Help/Help'
import Ourservices from './views/Ourservices/Ourservices'
import Login from './views/Login/Login'
import Forgot from './views/Forgot/Forgot';
import Hockey from './views/Hocky/Hocky';
import Cricket from './views/Cricket/Cricket';
import Carrom from './views/Carrom/Carrom';
import Business from './views/Business/Business';
import Sketing from './views/Sketing/Sketing';
import Tennis from './views/Tennis/Tennis';
import Teammember from './views/Teammember/Teammember';
import Football from './views/Football/Football';
import Swimming from './views/Swimming/Swimming';
import Faq from './views/Faq/Faq';

import News from './views/News/News';

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
    path: '/Faq',
    element: <Faq/>

  },
  {
    path: '/Teammember',
    element: <Teammember/>

  },

  {
    path: '/Swimming',
    element:<Swimming/>
  }
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={router}/>
  </>
);

