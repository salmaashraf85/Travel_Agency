import { Box, Typography } from "@mui/material";
import EmailInput from "../components/EmailInput";
import mailbox from "../assets/mailbox.png";

const SubscribeSection = () => {
  return (
    <Box
      px={{ xs: 3, md: 4 }}
      maxWidth={1000}
      mx="auto"
      borderRadius={4}
      bgcolor="#CDEAE1"
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Subscribe
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Newsletter
          </Typography>
          <Typography variant="h6" color="text.secondary">
            The Travel
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Get inspired! Receive travel discounts, tips, and behind the scenes stories.
          </Typography>

          <EmailInput />
        </Box>
        <Box
          component="img"
          src={mailbox}
          alt="Mailbox"
          sx={{
            width: 350,
            display: { xs: "none", md: "block" },
            ml: 4,
          }}
        />
      </Box>
    </Box>
  );
};

export default SubscribeSection;
