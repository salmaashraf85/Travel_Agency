import type { Review } from "../types/Review";
import review1 from '../assets/review1.jpg';
import review2 from '../assets/review2.jpg';
import review3 from '../assets/review3.jpg';
import googlelogo from '../assets/googlelogo.png';
export const reviews: Review[] = [
  {
    id: 1,
    name: "Olga",
    quote: "A real sense of community, nurtured",
    role: "Weave Studios - Kai Tak",
    description: "Really appreciate the help and support from the staff during tough times.Shoutout to Katie for...",
    rating: 5,
    image: review1,
    logo: googlelogo
  },
  {
    id: 2,
    name: "Thomas",
    quote: "The facilities are superb. Clean, slick, bright.",
    role: "Weave Studios - Olympic",
    description: "\"A real sense of community, nurtured\"Really appreciate the help and support from the staff...",
    rating: 5,
    image: review2,
    logo: googlelogo
  },
  {
    id: 3,
    name: "Eliot",
    quote: "A real sense of community, nurtured",
    role: "Weave Studios - kai Tak",
    description: "The community events are fantastic and the staff are always there to help.",
    rating: 5,
    image: review3,
    logo: googlelogo
  },
  
];
