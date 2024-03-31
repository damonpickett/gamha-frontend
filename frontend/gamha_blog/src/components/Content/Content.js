import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Content.css';
import Home from '../../pages/Home/Home';
import BlogList from '../../pages/BlogList/BlogList';
import BlogPost from '../../pages/BlogPost/BlogPost';
import Support from '../../pages/Support/Support';

const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bloglist' element={<BlogList />} />
        <Route path='/blogpost/:id' element={<BlogPost />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </div>
  );
};

export default Content;