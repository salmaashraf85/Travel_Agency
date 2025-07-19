import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import KingBedIcon from "@mui/icons-material/KingBed";

export const TopTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const sx = {
    fontWeight: "bold",
    textTransform: "none",
    px: 3,
    "&:hover": {
      backgroundColor: "transparent",
      color: "black",
    },
  };

  return (
    <Box>
      <Tabs
        sx={{ pl: 2, pb: 2 }}
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#8DD3BB", 
            height: "3px", 
          },
        }}
      >
        <Tab
          label="Flights"
          icon={
            <AirplanemodeActiveIcon sx={{ width: "16px", height: "16px" }} />
          }
          iconPosition="start"
          sx={sx}
        />
        <Tab
          label="Stays"
          icon={<KingBedIcon sx={{ width: "16px", height: "16px" }} />}
          iconPosition="start"
          sx={sx}
        />
      </Tabs>
    </Box>
  );
};


