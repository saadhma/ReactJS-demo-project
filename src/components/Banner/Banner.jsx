import * as React from 'react';
import './Banner.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import bannerImage from '../../assets/banner.jpeg';

export default function Banner() {

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: bannerImage,
      }}
    >
        {<img src={bannerImage} alt='' />}
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              title
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              description
            </Typography>
            <Link variant="subtitle1" href="#">
              linkText
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}