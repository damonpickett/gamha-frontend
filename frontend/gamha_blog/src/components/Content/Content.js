import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Content.css';
import Home from '../../pages/Home/Home';
import BlogList from '../../pages/BlogList/BlogList';
import BlogPost from '../../pages/BlogPost/BlogPost';
import Podcast from '../../pages/Podcast/Podcast';
import Support from '../../pages/Support/Support';
import Books from '../../pages/Books/Books';

const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bloglist' element={<BlogList />} />
        <Route path='/blogpost/:id' element={<BlogPost />} />
        <Route path='/podcast' element={<Podcast />} />
        <Route path='/support' element={<Support />} />
        <Route path='/books' element={<Books />} />
      </Routes>
    </div>
  );
};

export default Content;