import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
// import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import Searchbar from './searchbar.jsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function HeroSection({ onContactClick }) {
  return (
    <motion.Box
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      sx={{ bgcolor: 'grey', py: { xs: 10, md: 14 }, textAlign: 'center' }}
    >
      <Container maxWidth="md"
      sx={{
        // backgroundColor: '#732',
        backgroundImage: 'url(https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fcourage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fachieve&docid=ufS61tXGpZBydM&tbnid=2F771NtejnF3pM&vet=12ahUKEwj0hPeQzsKSAxUdVkEAHXzlES4QM3oECCIQAA..i&w=740&h=494&hcb=2&ved=2ahUKEwj0hPeQzsKSAxUdVkEAHXzlES4QM3oECCIQAA)',
        pt: 4,
      }}>
        <Typography
          variant="h1"
          fontWeight={800}
          textAlign={'center'}
          sx={{
            fontSize: { xs: '2.8rem', md: '4.5rem' },
            lineHeight: 1.1,
            mb: 3
          }}
        >
          Find Trusted Local Professionals
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          textAlign={'center'}
          sx={{ mb: 6, maxWidth: 760, mx: 'auto' }}
        >
          Connect with verified service providers in your area. From appliance repair to house cleaning, find the right professional for your needs.
        </Typography>

        <Searchbar />

      </Container>
    </motion.Box>
  );
}