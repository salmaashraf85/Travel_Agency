import { Box, Button, Typography } from "@mui/material";
import { reviews } from "../data/reviews";
import ReviewCard from "../components/ReviewCard";

export const ReviewsSection = () => (
  <Box py={6} px={{ xs: 2, md: 10 }} bgcolor="#f9f9f9">
    
    <Typography variant="h4" fontWeight="bold" mb={1}>
      Reviews
    </Typography>

    
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      mb={3}
    >
      <Typography variant="body1" mb={3}>
        What people say about our travel services
      </Typography>

      <Button
        variant="text"
        size="small"
        sx={{
          border: '1px solid #8DD3BB',
          backgroundColor: 'transparent',
          color: 'black',
          textTransform: 'none',
          borderRadius: 1,
          fontSize: '0.9rem',
          padding: '6px 12px',
          position: 'relative',
          mr: 5,
          top: '-50px', 
          mt: { xs: 4, sm: 2 },
          '&:hover': {
            backgroundColor: '#8DD3BB',
            color: 'white',
          },
        }}
      >
        See All
      </Button>
    </Box>

    
    <Box
      display="flex"
      flexWrap="wrap"
      gap={6}
      justifyContent="flex-start"
    >
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Box>
  </Box>
);
