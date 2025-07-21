import {
  Box,
  IconButton
} from "@mui/material";
import FooterLinkGroup from "../components/FooterLinkGroup";
import Group from "../assets/Group.png";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

const FooterSection = () => {
  const linkData = [
    { title: "Our Destinations", links: ["Canada", "Alaska", "France","Iceland"] },
    { title: "Our Activities", links: ["Northern Lights", "Cruising & sailing", "Multi-activities","kayaing"] },
    { title: "Travel Blogs", links: ["Bali Travel Guide", "Sri Lanks Travel Guide","Peru Travel Guide","Bali Travel Guide"] },
    { title: "About Us", links: ["Our Story", "Work With us"] },
    { title: "Contact Us", links: ["Our Story", "Work With us"] },
  ];

  return (
    <Box  py={6} px={{ xs: 3, md: 10 }}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        rowGap={4}
        columnGap={2}
      
      >
        {/* Logo and Socials */}
        <Box flexBasis={{ xs: "100%", md: "15%" }}>
          <Box
  component="img"
  src={Group}
  alt="logo"
  sx={{ width: 120, height: 'auto', mb: 2 }}
/>

          <Box display="flex" >
            <IconButton
              size="small"
              sx={{ color: "black", "&:hover": { color: "#8DD3BB" } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "black", "&:hover": { color: "#8DD3BB" } }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "black", "&:hover": { color: "#8DD3BB" } }}
            >
              <YouTubeIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "black", "&:hover": { color: "#8DD3BB" } }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Links */}
        {linkData.map((group, idx) => (
          <Box key={idx} flexBasis={{ xs: "45%", sm: "30%", md: "15%" }}>
            <FooterLinkGroup title={group.title} links={group.links} />
          </Box>
        ))}
      </Box>

      
    </Box>
  );
};

export default FooterSection;
