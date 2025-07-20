import {
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import type { DestinationCardProps } from "../types/destination";
export const DestinationCard = ({ city, image }: DestinationCardProps) => {
  return (
    <Card  elevation={0} sx={{ display: 'flex',width:'400px',borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt="img"
        sx={{ width:"100px",borderRadius: 2}}
      />
      <CardContent>
        <Typography variant="h6">{city}</Typography>
        <Typography> Flights . Hotel . Resorts</Typography>
      </CardContent>
    </Card>
  );
};
