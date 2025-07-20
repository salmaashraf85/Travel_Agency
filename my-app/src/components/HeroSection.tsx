import { Box} from "@mui/material";
import backgroundImg from "../assets/background.png";
import { BookForm } from "./BookForm";
import { Header } from "./Header";
import {HeroText} from "./HeroText";
export const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
        px: 4,
        display: "flex",
        flexDirection: "column",
        width: "90vw",
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

      <Box sx={{ zIndex: 2, maxWidth: "1200px", mx: "auto", width: "100%" }}>
        <Box sx={{ zIndex: 2 }}>
          <Header />
          </Box>
            <HeroText />
          <Box
            sx={{
              width: "100%",
              height: "280px",
              backgroundColor: "white",
              borderRadius: 6,
              transform: { xs: "translateY(80%)", sm: "translateY(60%)" },
            }}
          >
            <BookForm></BookForm>
          </Box>
        </Box>
      </Box>
  
  );
};
