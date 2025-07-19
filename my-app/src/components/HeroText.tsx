import { Box, Button, Typography } from "@mui/material";
import React from "react";
export const HeroText = () => {
  return (
          <Box sx={{ textAlign: "center", mb: 4, pt: 12 }}>
            <Typography  sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                },
              }}>Helping Others</Typography>
            <Typography
              variant="h1" 
              sx={{
                fontSize: {
                  xs: "3rem",
                  sm: "5rem",
                },
                py:2
              }}
              fontWeight="bold"
            >
              LIVE & TRAVEL
            </Typography>
            <Typography variant="subtitle1">
              Special offers to suit your plan
            </Typography>
          </Box>
       
  );
};
