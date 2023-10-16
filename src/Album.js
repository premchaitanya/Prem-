import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            To write a great album description, one needs to consider various elements 
            such as the music genre or genres, the sonic details, the mood, and the overall 
            theme or story of the album. A successful album description should also be concise
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="data:image/jpeg;base64,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"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Image Album
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}