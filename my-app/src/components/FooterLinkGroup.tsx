import { Typography, Stack, Link } from "@mui/material";

type Props = {
  title: string;
  links: string[];
};

const FooterLinkGroup: React.FC<Props> = ({ title, links }) => {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" fontWeight="700" fontSize={18} gutterBottom>
        {title}
      </Typography>
      {links.map((text, index) => (
        <Link
          key={index}
          href="#"
          underline="none"
          color="text.secondary"
          sx={{ "&:hover": { color: "#8DD3BB" } }}
        >
          {text}
        </Link>
      ))}
    </Stack>
  );
};

export default FooterLinkGroup;
