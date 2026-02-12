import React from 'react';
import { Box, Container, Grid, Paper, Typography, TextField, Button, Avatar, Chip, Rating } from '@mui/material';
import { Search, MapPin, Star, ShieldCheck } from 'lucide-react';

const ProSearch = () => (
  <Container sx={{ py: 6 }}>
    <Paper sx={{ p: 2, mb: 4, borderRadius: 3, display: 'flex', gap: 2 }}>
      <TextField fullWidth placeholder="Search plumbers, tilers..." />
      <Button variant="contained" sx={{ px: 4 }}>Search</Button>
    </Paper>
    <Grid container spacing={3}>
      {[1, 2, 3].map(i => (
        <Grid item xs={12} key={i}>
          <Paper sx={{ p: 3, borderRadius: 3, display: 'flex', gap: 3 }}>
            <Avatar sx={{ width: 80, height: 80 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight={800}>Pro Artisan {i} <ShieldCheck size={16} color="blue" /></Typography>
              <Rating value={4.5} size="small" readOnly />
              <Typography color="text.secondary">Lekki, Lagos</Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="h6" fontWeight={900}>₦5,000+</Typography>
              <Button variant="outlined" sx={{ mt: 1 }}>View Profile</Button>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);
export default ProSearch;