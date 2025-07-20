import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import PaperPlane from "../assets/Paper Plane.png";

export const Buttons = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row", 
        alignItems: "flex-end", 
        justifyContent: "flex-end",
        gap: 2,
        mt: 4,
        width: "100%",
      }}
    >
      <Button
        fullWidth={isSmallScreen} 
        sx={{
          backgroundColor: "white",
          textTransform: "none",
          color: "black",
        }}
      >
        + Add Promo Code
      </Button>

      <Button
        fullWidth={isSmallScreen}
        variant="contained"
        startIcon={
          <img src={PaperPlane} style={{ width: 16, height: 16 }} />
        }
        sx={{
          backgroundColor: "#8DD3BB",
          textTransform: "none",
          color: "black",
        }}
      >
        Show Flights
      </Button>
    </Box>
  );
};
