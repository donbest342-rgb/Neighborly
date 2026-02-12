import React from 'react';
import { 
  Box, Container, Grid, Paper, Typography, Button, Avatar, 
  Stack, Chip, Divider, Rating, ImageList, ImageListItem, IconButton 
} from '@mui/material';
import { 
  CheckCircle2, MapPin, Star, ShieldCheck, 
  MessageSquare, Share2, Award, Calendar
} from 'lucide-react';

const PublicProProfile = () => {
  // Mock Data
  const pro = {
    name: "John Doe",
    business: "Doe Tiling & Masonry",
    rating: 4.9,
    reviews: 124,
    location: "Lekki, Lagos",
    experience: "10+ Years",
    bio: "Specialist in premium floor and wall tiling. We handle everything from ceramic to exotic marble and mosaic designs for luxury homes and offices.",
    services: ["Bathroom Tiling", "Kitchen Backsplash", "Marble Polishing", "Wall Cladding"],
    portfolio: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      "https://images.unsplash.com/photo-1523413555809-0fb1d4da238d?w=400",
      "https://images.unsplash.com/photo-1558905619-17153ad2739b?w=400",
      "https://images.unsplash.com/photo-1600566752355-397921139bcd?w=400",
    ]
  };

  return (
    <Box sx={{ bgcolor: '#fbfcfd', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* LEFT: CONTENT */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #eef2f6' }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
                <Avatar src="https://i.pravatar.cc/150?u=pro" sx={{ width: 120, height: 120, border: '4px solid #fff', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }} />
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                    <Typography variant="h4" fontWeight={900} color="#1a237e">{pro.name}</Typography>
                    <CheckCircle2 color="#1976d2" size={24} fill="#e3f2fd" />
                  </Stack>
                  <Typography variant="h6" color="text.secondary">{pro.business}</Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 1 }} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Star size={18} color="#faaf00" fill="#faaf00" />
                      <Typography fontWeight={700}>{pro.rating}</Typography>
                      <Typography variant="body2" color="text.secondary">({pro.reviews})</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <MapPin size={18} color="#666" />
                      <Typography variant="body2" color="text.secondary">{pro.location}</Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h6" fontWeight={800} gutterBottom>About</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 4 }}>{pro.bio}</Typography>

              <Typography variant="h6" fontWeight={800} gutterBottom>Services</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
                {pro.services.map(s => <Chip key={s} label={s} sx={{ fontWeight: 600 }} />)}
              </Stack>

              <Typography variant="h6" fontWeight={800} gutterBottom>Project Gallery</Typography>
              <ImageList cols={2} gap={12} sx={{ borderRadius: 3, overflow: 'hidden' }}>
                {pro.portfolio.map((img, i) => (
                  <ImageListItem key={i}><img src={img} alt="Work" style={{ borderRadius: '8px' }} /></ImageListItem>
                ))}
              </ImageList>
            </Paper>
          </Grid>

          {/* RIGHT: BOOKING CARD */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 24 }}>
              <Paper sx={{ p: 4, borderRadius: 4, border: '2px solid #1a237e' }}>
                <Typography variant="h6" fontWeight={800} gutterBottom>Hire {pro.name}</Typography>
                <Stack spacing={2} sx={{ my: 3 }}>
                  <Box sx={{ p: 2, bgcolor: '#f8f9fb', borderRadius: 2, display: 'flex', gap: 2 }}>
                    <ShieldCheck color="#2e7d32" />
                    <Box>
                      <Typography variant="body2" fontWeight={700}>Verified Pro</Typography>
                      <Typography variant="caption">Background checked & vetted.</Typography>
                    </Box>
                  </Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Experience</Typography>
                    <Typography variant="body2" fontWeight={700}>{pro.experience}</Typography>
                  </Stack>
                </Stack>
                <Button fullWidth variant="contained" size="large" sx={{ py: 2, bgcolor: '#1a237e', fontWeight: 800 }}>Request a Quote</Button>
                <Button fullWidth variant="outlined" startIcon={<MessageSquare size={18} />} sx={{ mt: 2 }}>Message</Button>
              </Paper>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default PublicProProfile;