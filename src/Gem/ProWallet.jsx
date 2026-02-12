import React from 'react';
import { Box, Paper, Typography, Button, Stack, Grid, Divider } from '@mui/material';
import { Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const ProWallet = () => (
  <Box sx={{ p: 4 }}>
    <Paper sx={{ p: 4, bgcolor: '#1a237e', color: 'white', borderRadius: 4, mb: 4 }}>
      <Typography variant="subtitle2">Available Balance</Typography>
      <Typography variant="h2" fontWeight={900}>₦195,000</Typography>
      <Button variant="contained" sx={{ mt: 3, bgcolor: 'white', color: '#1a237e' }}>Withdraw to Bank</Button>
    </Paper>
    <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>Recent Activity</Typography>
    {[1, 2, 3].map(i => (
      <Paper key={i} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontWeight={700}>Payment - Job #{i}042</Typography>
          <Typography color="success.main" fontWeight={800}>+ ₦15,000</Typography>
        </Stack>
      </Paper>
    ))}
  </Box>
);
export default ProWallet;