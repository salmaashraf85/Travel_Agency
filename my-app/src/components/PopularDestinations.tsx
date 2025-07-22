import { Box, Typography, Button } from "@mui/material";
import { DestinationList } from "../api/DestinationList";
import { DestinationCard } from "./DestinationCard";
import Grid from '@mui/material/Grid';
export const PopularDestinations = () => {
  return (
    <Box sx={{ mt: { sm: "200px", xs: "500px" }, textAlign: "left" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography  sx={{ fontWeight: "bold", color: "black" ,fontSize: { xs: "1.5rem", sm: "2rem" } }}>
            Plan your perfect trip
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "grey", mt: 1 }}>
            search Flights & Places Hire to our most popular destinations
          </Typography>
        </Box>
        <Button sx={{backgroundColor:'white',textTransform:'none',color:'black', border: "1px solid #8DD3BB"}}> See more places </Button>
      </Box>

      <Grid container spacing={4} sx={{ mt: 3}}>
        {DestinationList.map((destination, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DestinationCard
              city={destination.city}
              image={destination.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
