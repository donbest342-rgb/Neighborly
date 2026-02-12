import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Drawer, Stack, TextField, InputAdornment, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Briefcase, Bell, Wallet, Star, Send, X, MapPin } from 'lucide-react';

const ProDashboard = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const leads = [
    { id: 1, service: 'Kitchen Tiling', client: 'John Doe', budget: '₦85k', desc: '12x12 kitchen floor.' },
    { id: 2, service: 'AC Repair', client: 'Sarah S.', budget: '₦15k', desc: 'AC not cooling.' }
  ];

  return (
    <Box sx={{ p: 4, bgcolor: '#f4f7fa', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight={900} sx={{ mb: 4 }}>Pro Dashboard</Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[{ l: 'Active Jobs', v: '12' }, { l: 'Leads', v: '5' }, { l: 'Wallet', v: '₦195k' }].map(s => (
          <Grid item xs={4} key={s.l}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={700}>{s.l}</Typography>
              <Typography variant="h5" fontWeight={900}>{s.v}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead><TableRow><TableCell>Service</TableCell><TableCell>Client</TableCell><TableCell>Budget</TableCell><TableCell>Action</TableCell></TableRow></TableHead>
          <TableBody>
            {leads.map(lead => (
              <TableRow key={lead.id}>
                <TableCell fontWeight={700}>{lead.service}</TableCell>
                <TableCell>{lead.client}</TableCell>
                <TableCell color="success.main">{lead.budget}</TableCell>
                <TableCell><Button onClick={() => setSelectedLead(lead)}>View</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Drawer anchor="right" open={!!selectedLead} onClose={() => setSelectedLead(null)}>
        {selectedLead && (
          <Box sx={{ width: 400, p: 4 }}>
            <Typography variant="h5" fontWeight={800}>{selectedLead.service}</Typography>
            <Typography sx={{ my: 2 }}>{selectedLead.desc}</Typography>
            <Button fullWidth variant="contained" onClick={() => setIsQuoteOpen(true)}>Send Quote</Button>
          </Box>
        )}
      </Drawer>

      <Dialog open={isQuoteOpen} onClose={() => setIsQuoteOpen(false)}>
        <DialogTitle>Submit Quote</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Price" sx={{ mt: 2 }} InputProps={{ startAdornment: <InputAdornment position="start">₦</InputAdornment> }} />
          <TextField fullWidth multiline rows={3} label="Message" sx={{ mt: 2 }} />
          <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={() => setIsQuoteOpen(false)}>Send Now</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export default ProDashboard;