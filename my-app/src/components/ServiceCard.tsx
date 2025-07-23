// components/ServiceCard.tsx
import { Box, Typography, Button } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  icon: ReactNode;
};

const ServiceCard = ({ title, description, buttonText, image, icon }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: 400,
        borderRadius: 4,
        overflow: "hidden",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center", // لعرض المحتوى في منتصف البطاقة
        justifyContent: "center",
        p: 4,
        color: "#fff",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="700" mb={1}>
          {title}
        </Typography>
        <Typography variant="body2" color="#FFFFFF">
          {description}
        </Typography>
        <Typography variant="body2" mb={2} color="#FFFFFF">
          destinations
        </Typography>
        <Button
          variant="contained"
          startIcon={icon}
          sx={{
            backgroundColor: "#C2EFD4",
            color: "#000",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#a6dfbe",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceCard;
