import { Box} from "@mui/material";
import backgroundImg from "../assets/background.png";
import { BookForm } from "./BookForm";
import { Header } from "./Header";
import {HeroText} from "./HeroText";
export const HeroSection = () => {
  return (
     <Box sx={{width:'100%' , margin: '0 auto'}}>
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderRadius: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
          borderRadius: 10,
        }}
      />

      <Box sx={{ zIndex: 2, m: "auto 0"}}>
        <Box sx={{ zIndex: 2 }}>
          <Header />
          </Box>
            <HeroText />
          <Box
            sx={{
              height: "280px",
              backgroundColor: "white",
              borderRadius: 6,
              transform: { xs: "translateY(80%)", sm: "translateY(60%)" },
              px: 2,
              width: { xs: "85%", sm: "90%" },
              m: "auto",
            }}
          >
            <BookForm></BookForm>
          </Box>
        </Box>
      </Box>
     </Box> 
  
  );
};
