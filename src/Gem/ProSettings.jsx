import React, { useState } from 'react';
import { 
  Box, Container, Paper, Typography, TextField, Button, Avatar, 
  Grid, Stack, Tabs, Tab, IconButton, Divider, Switch, FormControlLabel 
} from '@mui/material';
import { User, Briefcase, Lock, Camera, Save, Trash2 } from 'lucide-react';

const ProSettings = () => {
  const [tab, setTab] = useState(0);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={900} sx={{ mb: 4, color: '#1a237e' }}>Settings</Typography>
      
      <Paper sx={{ borderRadius: 4, overflow: 'hidden' }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)} variant="fullWidth" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab icon={<User size={18} />} label="Profile" iconPosition="start" />
          <Tab icon={<Briefcase size={18} />} label="Services" iconPosition="start" />
          <Tab icon={<Lock size={18} />} label="Security" iconPosition="start" />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {tab === 0 && (
            <Stack spacing={4}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Box sx={{ position: 'relative' }}>
                  <Avatar src="https://i.pravatar.cc/150?u=pro" sx={{ width: 100, height: 100 }} />
                  <IconButton sx={{ position: 'absolute', bottom: 0, right: 0, bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}>
                    <Camera size={16} />
                  </IconButton>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={700}>Profile Photo</Typography>
                  <Typography variant="body2" color="text.secondary">Update your business avatar</Typography>
                </Box>
              </Stack>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}><TextField fullWidth label="Full Name" defaultValue="John Doe" /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label="Business Name" defaultValue="Doe Tiling Services" /></Grid>
                <Grid item xs={12}><TextField fullWidth multiline rows={3} label="Professional Bio" defaultValue="Expert tiler with 10 years experience..." /></Grid>
              </Grid>
            </Stack>
          )}

          {tab === 1 && (
            <Stack spacing={3}>
              <Typography variant="h6" fontWeight={700}>My Services</Typography>
              {['Tiling', 'Masonry'].map((s) => (
                <Paper key={s} variant="outlined" sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography fontWeight={600}>{s}</Typography>
                  <IconButton color="error"><Trash2 size={18} /></IconButton>
                </Paper>
              ))}
              <Button variant="dashed" sx={{ border: '2px dashed #ccc', py: 1.5 }}>+ Add New Category</Button>
              <Divider sx={{ my: 2 }} />
              <FormControlLabel control={<Switch defaultChecked />} label="Show my profile in search results" />
            </Stack>
          )}

          {tab === 2 && (
            <Stack spacing={3} sx={{ maxWidth: 400 }}>
              <Typography variant="h6" fontWeight={700}>Update Password</Typography>
              <TextField fullWidth type="password" label="Current Password" />
              <TextField fullWidth type="password" label="New Password" />
              <Button variant="contained" sx={{ mt: 2 }}>Update Password</Button>
            </Stack>
          )}

          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" startIcon={<Save size={18} />} sx={{ px: 4, py: 1.5, bgcolor: '#1a237e' }}>
              Save All Changes
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProSettings;