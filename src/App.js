import React from 'react';
import './style.css';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Email from './components/Email';
import Tweets from './components/Tweets';
import APICardGroup from './components/APICardGroup';
export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/emails" element={<Email />} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<APICardGroup />} />
      </Routes>
    </div>
  );
}
