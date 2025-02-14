import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Content.css';
import Home from '../../pages/Home/Home';
import Posts from '../../pages/Posts/Posts';
import BlogPost from '../../pages/BlogPost/BlogPost';
import Podcast from '../../pages/Podcast/Podcast';
import Books from '../../pages/Books/Books';

const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/blogpost/:id' element={<BlogPost />} />
        <Route path='/podcast' element={<Podcast />} />
        <Route path='/books' element={<Books />} />
      </Routes>
    </div>
  );
};

export default Content;