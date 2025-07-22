import { Box } from "@mui/material";
import { HeroSection } from "../components/HeroSection";
import { PopularDestinations } from "../components/PopularDestinations";
export const LandingPage = () => {
  return (
    <Box sx={{ width:"95%", margin: '0 auto' }}>
        <HeroSection></HeroSection>
        <PopularDestinations></PopularDestinations> 
    </Box>
  );
};
