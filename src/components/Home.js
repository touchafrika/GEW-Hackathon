import React, { useState, useEffect } from 'react';

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Component
import HeroImage from './HeroImage'
// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch'
// Image 
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch;
  
  console.log(state);

  return (
    <HeroImage />
  )
};

export default Home;