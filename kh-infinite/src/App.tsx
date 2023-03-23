import React from 'react';

import { Container } from '@mui/material';

import './App.css';
import ResponsiveAppBar from './components/appbar';
import { ExploreKh } from './components/exploreKh';
import { SolutionAndServices } from './components/solutionAndServices';
import { AboutUs } from './components/aboutUs';
import { ServicesProvided } from './components/servicesProvided';
import { Footer } from './components/footer';

import  Home_BG from './assets/media/Home_BG.png'

function App() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Container maxWidth='lg' sx={{background:`${'Home_BG'}`}}>
          <ExploreKh />
          <SolutionAndServices />  
          <AboutUs />
          <ServicesProvided />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
