import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="/">Safas Corp&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 3 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Stack direction="row" spacing={2}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" fontWeight={600}>
            Address
          </Typography>
          <Typography variant="body2">
            18, Ajibilu Street,Mafoluku, Oshodi, Lagos, Nigeria
          </Typography>
        </Box>
        <Typography display="inline" fontWeight={500} fontSize={30}>
          |
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" fontWeight={600}>
            Phone no
          </Typography>
          <Typography variant="body2">+234 816 064 9644</Typography>
        </Box>
        <Typography display="inline" fontWeight={500} fontSize={30}>
          |
        </Typography>
        <Box sx={{ textAlign: "center", wordBreak: "break-all" }}>
          <Typography variant="body2" fontWeight={600}>
            Email
          </Typography>
          <Typography variant="body2">
            <Link
              color="text.secondary"
              href="mailto:samuelfasanya351@gmail.com"
            >
              samuelfasanya351@gmail.com
            </Link>
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Box
          sx={{
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Follow us on
          </Typography>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: "text.secondary",
            }}
          >
            <IconButton
              color="inherit"
              href="https://facebook.com/"
              aria-label="facebook"
              sx={{ alignSelf: "center" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com/"
              aria-label="Instagram"
              sx={{ alignSelf: "center" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
