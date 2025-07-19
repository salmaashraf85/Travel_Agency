import React from 'react';
import { Box } from '@mui/material';
import {HeroSection} from '../components/HeroSection'
import { PopularDestinations } from '../components/PopularDestinations';
export const LandingPage = () => {
  return (
    <Box>
       <HeroSection></HeroSection>
        <PopularDestinations></PopularDestinations> 

    </Box>
  );
};
