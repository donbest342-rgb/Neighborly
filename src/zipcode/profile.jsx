

import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Rating,
  Chip,
  Divider,
  IconButton,
  Stack,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// ──────────────────────────────────────────────
// Animation Variants (reusable fade-in on scroll)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// ──────────────────────────────────────────────
// Custom Testimonials Carousel (unchanged)
const TestimonialsCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(next, 6500);
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, paused]);

  return (
    <Box
      sx={{ position: 'relative', maxWidth: 920, mx: 'auto', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Box sx={{ display: 'flex', transform: `translateX(-${activeIndex * 100}%)`, transition: 'transform 0.7s ease' }}>
        {items.map((t, i) => (
          <Box key={i} sx={{ minWidth: '100%', px: 2, boxSizing: 'border-box' }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, bgcolor: 'grey.50' }}>
              <Rating value={t.rating} readOnly precision={0.1} />
              <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic', minHeight: 80 }}>
                "{t.text}"
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 3, alignItems: 'center' }}>
                <Avatar src={t.avatar} sx={{ width: 56, height: 56 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>{t.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{t.role} • {t.date}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={prev}
        sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(25,118,210,0.8)', color: 'white' }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={next}
        sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(25,118,210,0.8)', color: 'white' }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 3 }}>
        {items.map((_, i) => (
          <Box
            key={i}
            onClick={() => setActiveIndex(i)}
            sx={{
              width: 10, height: 10, borderRadius: '50%',
              bgcolor: i === activeIndex ? 'primary.main' : 'grey.400',
              cursor: 'pointer',
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

// ──────────────────────────────────────────────
// Contact Form Modal
const ContactModal = ({ open, onClose }) => {
  const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone is required'),
    message: yup.string().min(10, 'Message too short').required('Message is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Here: send to backend (e.g., emailjs, API, etc.)
    alert('Thank you! We will get back to you soon.');
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Contact Alex Rivera Designs</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('name')}
            label="Full Name"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            {...register('email')}
            label="Email"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register('phone')}
            label="Phone Number"
            fullWidth
            margin="normal"
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
          <TextField
            {...register('message')}
            label="Your Message / Project Details"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <DialogActions sx={{ mt: 3 }}>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Send Message
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// ──────────────────────────────────────────────
// Main Landing Page
const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  // Sample data
  const services = [
    { title: "Full Interior Design", desc: "End-to-end planning, 3D visualization, sourcing", price: "₦450,000+" },
    { title: "Consultation & Moodboard", desc: "1–2 hr session + custom inspiration board", price: "₦75,000" },
    { title: "Renovation Supervision", desc: "Project management & quality control", price: "12–18% of budget" },
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?w=800",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  ];

  const testimonials = [
    { name: "Sarah J.", role: "Lekki Resident", rating: 5, text: "Turned our outdated space into a dream home. Professional and creative!", date: "Jan 2026", avatar: "https://i.pravatar.cc/100?img=1" },
    { name: "Michael O.", role: "Business Owner", rating: 4.8, text: "Office redesign increased team productivity. Highly recommended.", date: "Dec 2025", avatar: "https://i.pravatar.cc/100?img=2" },
    { name: "Aisha B.", role: "Client", rating: 5, text: "Perfect execution from start to finish. Worth every kobo!", date: "Nov 2025", avatar: "https://i.pravatar.cc/100?img=3" },
  ];

  const calendlyLink = "https://calendly.com/your-username/15min"; // ← Replace with YOUR real Calendly link

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh' }}>
      {/* Navbar */}
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid', borderColor: 'grey.200' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h5" fontWeight={700} color="primary">Alex Rivera</Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Portfolio</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Box>

            <Button variant="contained" size="small" onClick={openContact} sx={{ display: { xs: 'none', md: 'block' } }}>
              Book Consultation
            </Button>

            <IconButton sx={{ display: { md: 'none' } }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>

          {mobileMenuOpen && (
            <Box sx={{ display: { md: 'none' }, py: 2, bgcolor: 'white' }}>
              <Stack spacing={2} alignItems="center">
                <Button fullWidth>Home</Button>
                <Button fullWidth>Services</Button>
                <Button fullWidth>Portfolio</Button>
                <Button fullWidth>About</Button>
                <Button fullWidth onClick={openContact}>Contact</Button>
                <Button variant="contained" fullWidth onClick={openContact}>Book Now</Button>
              </Stack>
            </Box>
          )}
        </Container>
      </AppBar>

      {/* Hero */}
      <motion.Box
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        sx={{ bgcolor: 'grey.50', py: { xs: 8, md: 12 }, textAlign: 'center' }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={800} sx={{ mb: 3, fontSize: { xs: '2.8rem', md: '4.2rem' } }}>
            Transform Your Space with Timeless Design
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 5, maxWidth: 720, mx: 'auto' }}>
            Professional interior design & consultation in Lagos & Abuja — creating beautiful, functional spaces that reflect your lifestyle.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <Button variant="contained" size="large" sx={{ py: 1.8, px: 5 }} onClick={openContact}>
              Get Free Consultation
            </Button>
            <Button variant="outlined" size="large" startIcon={<PhoneIcon />} href="tel:+234XXXXXXXXXX">
              Call Now
            </Button>
          </Stack>
        </Container>
      </motion.Box>

      {/* About */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Avatar src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600" sx={{ width: 1, height: 480, borderRadius: 3, objectFit: 'cover' }} variant="square" />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={7}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Typography variant="h3" fontWeight={700} gutterBottom>About Alex Rivera</Typography>
              <Typography variant="h6" color="primary" gutterBottom>8+ Years • Interior Designer & Consultant</Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.9, mb: 3 }}>
                Passionate about turning ordinary spaces into extraordinary experiences. Specialized in modern minimalist, luxury residential, and commercial projects across Nigeria. I focus on client vision, functionality, and timeless aesthetics.
              </Typography>
              <Chip icon={<LocationOnIcon />} label="Based in Lagos | Serving Nationwide" color="primary" variant="outlined" sx={{ fontSize: '1rem', py: 2.5 }} />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Services */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography variant="h3" fontWeight={700} textAlign="center" gutterBottom>Services I Offer</Typography>
            <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 680, mx: 'auto' }}>
              Tailored solutions for residential, commercial, and renovation projects
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {services.map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card elevation={3} sx={{ height: '100%', borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-12px)' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" fontWeight={600} gutterBottom>{s.title}</Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>{s.desc}</Typography>
                      <Chip label={s.price} color="primary" sx={{ mt: 2 }} />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Portfolio – similar motion wrappers can be added */}

      {/* Testimonials */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography variant="h3" fontWeight={700} textAlign="center" gutterBottom>What Clients Say</Typography>
          </motion.div>
          <TestimonialsCarousel items={testimonials} />
        </Container>
      </Box>

      {/* Final CTA */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography variant="h3" fontWeight={700} gutterBottom>Ready to Transform Your Space?</Typography>
            <Typography variant="h6" sx={{ mb: 5, opacity: 0.9 }}>
              Book a free 20-minute consultation today — no obligation.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                onClick={openContact}
              >
                Schedule Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ borderColor: 'white', color: 'white' }}
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book via Calendly
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Footer – add motion if desired */}

      {/* Contact Modal */}
      <ContactModal open={contactOpen} onClose={closeContact} />
    </Box>
  );
};

export default LandingPage;