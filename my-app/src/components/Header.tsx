import { Box,Button,Typography} from "@mui/material";
import bedImg from "../assets/ion_bed.png";
import airPlane from "../assets/airplane.png";
import Logo from "../assets/Logo.png";
export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: { xs: "center", sm: "center" },
        pt: 4,
        justifyContent: "space-between",
        gap: { xs: 2, sm: 0 },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            src={airPlane}
            alt="img"
            sx={{ width: "24px", height: "24px" }}
          />
          <Typography sx={{ pl: 1 }}>Find Flights</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            src={bedImg}
            alt="img"
            sx={{ width: "24px", height: "24px" }}
          />
          <Typography sx={{ pl: 1 }}>Find Stays</Typography>
        </Box>
      </Box>
      <Box
        component="img"
        src={Logo}
        alt="img"
        sx={{
          width: "110px",
          height: "36px",
          mx: { sm: 0 },
          my: { xs: 2, sm: 0 },
          pr: { xs: 0, sm: 18 },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography>Login</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "fit-content",
            height: "40px",
            color: "black",
            textTransform: "lowercase",
            "&:hover": { backgroundColor: "white" },
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
};
