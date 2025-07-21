import { Box, Typography, Paper, Avatar, Rating, Button } from "@mui/material";
import type { Review } from "../types/Review";

type Props = {
  review: Review;
};

const ReviewCard: React.FC<Props> = ({ review }) => (
  <Paper sx={{ p: 3, borderRadius: 4, maxWidth: 350 , boxShadow: '24px 24px 0px rgba(141, 211, 187, 0.4)',}}>
    {/* Quote */}
    <Typography variant="h6" fontWeight={600}>“{review.quote}”</Typography>

    {/* Description */}
    <Typography variant="body2" color="text.secondary" sx={{ my: 1}}>
      {review.description}
    </Typography>

    <Box display="flex" justifyContent="flex-end">
      <Button
        variant="text"
        size="small"
        sx={{
          textTransform: "none",
          fontWeight: 550,
          fontSize: '0.85rem',
          color: 'black',
          padding: 0,
          minWidth: 'auto',
          '&:hover': {
            textDecoration: 'underline',
            backgroundColor: 'transparent',
          },
        }}
      >
        View More
      </Button>
    </Box>

    {/* Rating */}
    <Rating value={review.rating} readOnly size="medium" sx={{ my: 1 }} />

    {/* Name + Role */}
    <Box mt={1}>
      <Typography variant="subtitle2" fontWeight={700} >{review.name}</Typography>
      <Typography variant="caption" color="text.secondary">{review.role}</Typography>
    </Box>

    {/* Logo (Google) */}
    <Box display="flex" alignItems="center" gap={1} mt={1}>
      <Avatar src={review.logo} alt="source" sx={{ width: 20, height: 20 }} />
      <Typography variant="caption" color="text.secondary">Google</Typography>
    </Box>

    {/* Review Image */}
    <Box
      component="img"
      src={review.image}
      alt={review.name}
      sx={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 2, mt: 2 }}
    />
  </Paper>
);

export default ReviewCard;
