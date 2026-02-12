import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Box, Avatar, Button, Paper, Divider, List, ListItem, ListItemText, ImageList, ImageListItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import serviceProviders from '../Moc-data.js';

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const provider = serviceProviders.find(p => p.id === id);

  if (!provider) return <Typography align="center">Provider Not Found</Typography>;

  return (
    <Box sx={{ bgcolor: '#fbfcfd', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 4 }}>Back</Button>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, borderRadius: 5, textAlign: 'center' }}>
              <Avatar src={provider.avatar} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
              <Typography variant="h5" fontWeight={800}>{provider.name}</Typography>
              <Typography color="primary" fontWeight={600}>{provider.profession}</Typography>
              <Button variant="contained" fullWidth sx={{ mt: 4 }}>Book Now</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, borderRadius: 5, mb: 4 }}>
              <Typography variant="h6" fontWeight={800}>About</Typography>
              <Typography color="text.secondary">{provider.bio}</Typography>
            </Paper>
            <Paper sx={{ p: 4, borderRadius: 5 }}>
              <Typography variant="h6" fontWeight={800}>Services</Typography>
              <List>
                {provider.services.map((s, i) => (
                  <ListItem key={i} divider><ListItemText primary={s.title} secondary={s.description} /><Typography fontWeight={800}>{s.price}</Typography></ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default ProfileDetails;