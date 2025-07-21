import { Box } from "@mui/material";
import { ReviewsSection } from "../sections/ReviewsSection";    
import SubscribeSection from "../sections/SubscribeSection";
import FooterSection from "../sections/FooterSection";

const LandingPage = () => {
  return (
    <Box bgcolor="#F9F9F9">
      <ReviewsSection />


      <Box
        sx={{
          position: "relative",
          maxWidth: 1000,
          mx: "auto",
          transform: "translateY(50%)",
          zIndex: 2,
          mt: -10, 
        }}
      >
        <SubscribeSection />
      </Box>

      <Box
        sx={{
          bgcolor: "#8DD3BB",      
          pt: 20,
          zIndex: 1,
          position: "relative",
        }}
      >
        <FooterSection />
      </Box>
    </Box>
  );
};

export default LandingPage;
