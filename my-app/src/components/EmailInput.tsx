import { Box, TextField, Button } from "@mui/material";

const EmailInput = () => {
  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      gap={2}
      width="100%"
      mt={2}
    >
      <TextField
        fullWidth
        type="email"
        placeholder="Your email address"
        variant="outlined"
        size="small"
        inputProps={{ "aria-label": "Email address" }}
        sx={{
          backgroundColor: "#fff",
          borderRadius: 1,
          flex: 1,
          minWidth: { xs: "100%", sm: "300px" },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        size="medium"
        sx={{
          textTransform: "none",
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "#74c6aa",
          },
          borderRadius: 1,
          px: 4,
          width: { xs: "100%", sm: "auto" },
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
};

export default EmailInput;
