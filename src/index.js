import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './register';
import Home from './home';
import Login from './Login';
import Add from './add';
import Edit from './edit';
import Myblogs from './myblogs';
import More from './moredetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>}></Route>
   <Route path="/blogs" element={<Home />}></Route>
   <Route path="/register" element={<Register />}></Route>
   <Route path="/blogs/add" element={<Add />}></Route>
   <Route path="/blogs/myblogs" element={<Myblogs/>}></Route>
   <Route path="/blogs/myblogs/edit/:id" element={<Edit />}></Route>
   <Route path="/blogs/:id/moredetails" element={<More/>}></Route>
   </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
