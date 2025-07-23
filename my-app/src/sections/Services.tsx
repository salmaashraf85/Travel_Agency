import { Box } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import vectorIcon from "../assets/vector.png";
import flightImage from "../assets/flights.jpg";
import hotelImage from "../assets/hotel.jpg";

const Services = () => {
  return (
    <Box px={4} py={8}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        flexWrap="wrap"
      >
        <Box flex={1} minWidth="300px">
          <ServiceCard
            title="Flights"
            description="Search Flights & Places Hire to our most popular "            
            buttonText="Show Flights"
            image={flightImage}
            icon={<img src={vectorIcon} alt="icon" style={{ width: 20, height: 20 }} />}
          />
        </Box>

        <Box flex={1} minWidth="300px">
          <ServiceCard
            title="Hotels"
            description="Search hotels & Places Hire to our most popular "
            buttonText="Show Hotels"
            image={hotelImage}
            icon={<img src={vectorIcon} alt="icon" style={{ width: 20, height: 20 }} />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
