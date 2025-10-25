// components/Browse.jsx (or Browser.jsx)
import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies.js'
import { MainContainer } from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';

const Browser = () => {
  useNowPlayingMovies();
 return (
   <>
     <Header />
     <MainContainer />
     <SecondaryContainer />
   </>
  )
}

export default Browser
