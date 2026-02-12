const serviceProviders = [
  {
    id: "sp-001",
    name: "John Plumbing Services",
    profession: "Professional Plumber",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Ikeja, Lagos",
    joined: "Joined June 2018",
    rating: 4.7,
    reviewsCount: 48,
    hourlyRate: "₦10,000 – ₦30,000",
    bio: "Expert plumber with 6 years of experience in residential and commercial maintenance. Specialized in leak detection and modern bathroom installations.",
    services: [
      { title: "Pipe Repair", description: "Fixing burst pipes and underground leaks", price: "From ₦10,000" },
      { title: "Bathroom Installation", description: "Complete fitting of toilets, sinks, and showers", price: "From ₦25,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"]
  },
  {
    id: "sp-002",
    name: "Elite Barber Studio",
    profession: "Professional Barber",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    location: "Yaba, Lagos",
    joined: "Joined March 2020",
    rating: 4.9,
    reviewsCount: 76,
    hourlyRate: "₦5,000 – ₦12,000",
    bio: "Providing premium grooming services with 4 years of experience. We bring the luxury studio experience to your doorstep.",
    services: [
      { title: "Home Service Haircut", description: "Professional haircut at your preferred location", price: "₦12,000" },
      { title: "Beard Trim & Sculpting", description: "Precision beard detailing and hot towel treatment", price: "₦5,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800"]
  },
  {
    id: "sp-003",
    name: "Ade Carpentry Works",
    profession: "Master Carpenter",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Bodija, Ibadan",
    joined: "Joined January 2014",
    rating: 4.5,
    reviewsCount: 34,
    hourlyRate: "₦20,000 – ₦80,000",
    bio: "With over 10 years in the woodcraft industry, I specialize in bespoke furniture and modern wardrobe designs for luxury homes.",
    services: [
      { title: "Furniture Making", description: "Custom sofas, chairs, and dining sets", price: "From ₦50,000" },
      { title: "Wood Repairs", description: "Restoration of antique or damaged wooden fixtures", price: "₦20,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800"]
  },
  {
    id: "sp-004",
    name: "Bright Home Tutors",
    profession: "Professional Home Teacher",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    location: "Gwarimpa, Abuja",
    joined: "Joined September 2017",
    rating: 4.8,
    reviewsCount: 52,
    hourlyRate: "₦8,000 – ₦15,000",
    bio: "Certified educator with 7 years of experience helping students excel in WAEC, JAMB, and Primary school foundations.",
    services: [
      { title: "WAEC Prep", description: "Intensive 2-hour coaching sessions for core subjects", price: "₦15,000" },
      { title: "Primary Tutoring", description: "Homework help and foundational literacy/numeracy", price: "₦8,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"]
  },
  {
    id: "sp-005",
    name: "Swift Electricians",
    profession: "Licensed Electrician",
    avatar: "https://images.unsplash.com/photo-1581092921461-7d157390dfd1?w=400",
    location: "GRA, Port Harcourt",
    joined: "Joined February 2016",
    rating: 4.6,
    reviewsCount: 41,
    hourlyRate: "₦15,000 – ₦50,000",
    bio: "8 years of experience in industrial and domestic wiring. Specialized in fault detection and generator maintenance.",
    services: [
      { title: "Wiring", description: "Complete house wiring and conduit installations", price: "From ₦40,000" },
      { title: "Generator Install", description: "Safe setup and changeover switch installation", price: "₦15,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800"]
  },
  {
    id: "sp-006",
    name: "CleanPro Home Cleaning",
    profession: "Professional Cleaner",
    avatar: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?w=400",
    location: "Lekki, Lagos",
    joined: "Joined May 2019",
    rating: 4.4,
    reviewsCount: 29,
    hourlyRate: "₦12,000 – ₦25,000",
    bio: "5 years of providing meticulous cleaning services. We use eco-friendly products to ensure your home is sparkling and safe.",
    services: [
      { title: "Deep Cleaning", description: "Thorough cleaning of all rooms, including hard-to-reach areas", price: "₦25,000" },
      { title: "Office Cleaning", description: "Daily or weekly professional maintenance for workspaces", price: "₦12,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800"]
  },
  {
    id: "sp-007",
    name: "FixIt Auto Mechanics",
    profession: "Expert Auto Mechanic",
    avatar: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400",
    location: "Surulere, Lagos",
    joined: "Joined July 2015",
    rating: 4.3,
    reviewsCount: 38,
    hourlyRate: "₦20,000 – ₦70,000",
    bio: "Specializing in both Japanese and European car brands with 9 years of mechanical experience.",
    services: [
      { title: "Engine Repair", description: "Diagnostic checks and complete engine overhauls", price: "From ₦50,000" },
      { title: "Routine Servicing", description: "Oil change, brake checks, and general maintenance", price: "₦20,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"]
  },
  {
    id: "sp-008",
    name: "Prime AC Technicians",
    profession: "AC Installation Expert",
    avatar: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
    location: "Wuse, Abuja",
    joined: "Joined January 2018",
    rating: 4.6,
    reviewsCount: 45,
    hourlyRate: "₦18,000 – ₦60,000",
    bio: "6 years experience in HVAC systems. Quick and efficient cooling solutions for homes and offices.",
    services: [
      { title: "AC Installation", description: "Mounting and commissioning of split or window units", price: "₦18,000" },
      { title: "Gas Refilling", description: "Leak check and refrigerant gas top-up", price: "₦25,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?w=800"]
  },
  {
    id: "sp-009",
    name: "Mama T Catering",
    profession: "Professional Caterer",
    avatar: "https://images.unsplash.com/photo-1556911223-e45b426096be?w=400",
    location: "Akobo, Ibadan",
    joined: "Joined October 2013",
    rating: 4.8,
    reviewsCount: 64,
    hourlyRate: "₦50,000 – ₦200,000",
    bio: "11 years of creating delicious memories. We handle everything from corporate lunches to intimate home parties.",
    services: [
      { title: "Home Party Package", description: "Meals for 20-50 guests including side dishes", price: "₦150,000" },
      { title: "Small Event Catering", description: "Finger foods and appetizers for meetings", price: "₦50,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1555244162-803834f70033?w=800"]
  },
  {
    id: "sp-010",
    name: "QuickFix Phone Repairs",
    profession: "Electronics Technician",
    avatar: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400",
    location: "Computer Village, Lagos",
    joined: "Joined May 2019",
    rating: 4.2,
    reviewsCount: 58,
    hourlyRate: "₦5,000 – ₦25,000",
    bio: "Fast and reliable mobile repairs. Specialized in screen replacements and motherboard micro-soldering.",
    services: [
      { title: "Screen Repair", description: "Replacement of cracked LCD/OLED panels", price: "From ₦15,000" },
      { title: "Battery Replacement", description: "Genuine battery replacement for all brands", price: "₦5,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=800"]
  },
  {
    id: "sp-011",
    name: "Royal Tailors",
    profession: "Bespoke Fashion Designer",
    avatar: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400",
    location: "Maitama, Abuja",
    joined: "Joined November 2012",
    rating: 4.9,
    reviewsCount: 72,
    hourlyRate: "₦20,000 – ₦90,000",
    bio: "Master of traditional and contemporary African fashion. 12 years of experience in custom tailoring.",
    services: [
      { title: "Native Wear", description: "Custom-fit Agbada or Senator styles", price: "₦45,000" },
      { title: "Corporate Suit", description: "Hand-stitched bespoke suits for men and women", price: "₦90,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1594932224828-b4b059b6f68d?w=800"]
  },
  {
    id: "sp-012",
    name: "GreenScape Gardeners",
    profession: "Professional Gardener",
    avatar: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=400",
    location: "Ajah, Lagos",
    joined: "Joined April 2018",
    rating: 4.5,
    reviewsCount: 31,
    hourlyRate: "₦15,000 – ₦40,000",
    bio: "Passionate about greenery with 6 years of experience in landscape design and plant health maintenance.",
    services: [
      { title: "Landscaping", description: "Garden design, stone paths, and turfing", price: "From ₦40,000" },
      { title: "Maintenance", description: "Pruning, weeding, and lawn mowing", price: "₦15,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1558905619-1725426377c2?w=800"]
  },
  {
    id: "sp-013",
    name: "SafeHands Babysitting",
    profession: "Certified Childcare Provider",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    location: "Challenge, Ibadan",
    joined: "Joined August 2019",
    rating: 4.8,
    reviewsCount: 44,
    hourlyRate: "₦6,000 – ₦15,000",
    bio: "Qualified babysitter with a focus on child safety and early development. 5 years of trusted service.",
    services: [
      { title: "Day Care", description: "8-hour daily supervision and activities", price: "₦10,000" },
      { title: "Night Care", description: "Evening supervision and bedtime routine", price: "₦6,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800"]
  },
  {
    id: "sp-014",
    name: "Pro Movers NG",
    profession: "Logistics Specialist",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400",
    location: "Oshodi, Lagos",
    joined: "Joined March 2017",
    rating: 4.3,
    reviewsCount: 39,
    hourlyRate: "₦30,000 – ₦120,000",
    bio: "Relocating made easy. 7 years of experience in careful handling and transportation of home and office goods.",
    services: [
      { title: "House Moving", description: "Packing, loading, and offloading of 3-bedroom flat", price: "₦120,000" },
      { title: "Office Relocation", description: "Quick and safe transport of office furniture and tech", price: "From ₦80,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1600510326132-8231560c3294?w=800"]
  },
  {
    id: "sp-015",
    name: "Sparkle Laundry",
    profession: "Textile Care Specialist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    location: "Kubwa, Abuja",
    joined: "Joined June 2020",
    rating: 4.6,
    reviewsCount: 46,
    hourlyRate: "₦3,000 – ₦12,000",
    bio: "Expert dry cleaning and laundry services with a focus on fabric longevity. Fast 24-hour turnaround available.",
    services: [
      { title: "Wash & Iron", description: "Regular wear laundering and crisp ironing", price: "₦5,000" },
      { title: "Dry Cleaning", description: "Specialized care for suits and delicate fabrics", price: "₦3,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800"]
  },
  {
    id: "sp-016",
    name: "Dr. Tech Software",
    profession: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    location: "Enugu, Nigeria",
    joined: "Joined Jan 2021",
    rating: 4.9,
    reviewsCount: 22,
    hourlyRate: "₦25,000 – ₦150,000",
    bio: "Developing responsive websites and custom mobile apps. 5 years of experience in JavaScript and Python.",
    services: [
      { title: "Website Design", description: "Custom UI/UX and development", price: "From ₦150,000" },
      { title: "App Bug Fixing", description: "Debugging and performance optimization", price: "₦25,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"]
  },
  {
    id: "sp-017",
    name: "Graceful Events",
    profession: "Event Planner",
    avatar: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
    location: "Owerri, Imo",
    joined: "Joined July 2016",
    rating: 4.7,
    reviewsCount: 88,
    hourlyRate: "₦100,000 – ₦500,000",
    bio: "Exquisite event planning and coordination. We turn your dreams into stress-free reality.",
    services: [
      { title: "Full Wedding Planning", description: "End-to-end management from decor to vendors", price: "From ₦400,000" },
      { title: "Consultation", description: "Budget planning and vendor selection help", price: "₦100,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800"]
  },
  {
    id: "sp-018",
    name: "Zenith Interior",
    profession: "Interior Decorator",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    location: "Uyo, Akwa Ibom",
    joined: "Joined Oct 2018",
    rating: 4.8,
    reviewsCount: 35,
    hourlyRate: "₦40,000 – ₦150,000",
    bio: "Creating serene and productive living spaces through expert spatial design and lighting.",
    services: [
      { title: "Mood Board Design", description: "Visual concepts for your room transformation", price: "₦40,000" },
      { title: "Room Makeover", description: "Painting, furniture selection, and styling", price: "From ₦150,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1616489953149-80806411516e?w=800"]
  },
  {
    id: "sp-019",
    name: "Focus Photography",
    profession: "Professional Photographer",
    avatar: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=400",
    location: "Asaba, Delta",
    joined: "Joined Dec 2017",
    rating: 4.6,
    reviewsCount: 54,
    hourlyRate: "₦35,000 – ₦120,000",
    bio: "Capturing life's best moments. Specialized in portrait, product, and wedding photography.",
    services: [
      { title: "Studio Portrait", description: "1-hour session with 5 edited digital copies", price: "₦35,000" },
      { title: "Event Coverage", description: "Full-day photography for parties or weddings", price: "From ₦120,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800"]
  },
  {
    id: "sp-020",
    name: "Secure Guard Services",
    profession: "Security Consultant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    location: "Calabar, Cross River",
    joined: "Joined Feb 2015",
    rating: 4.4,
    reviewsCount: 27,
    hourlyRate: "₦20,000 – ₦100,000",
    bio: "Safety first. We provide private security personnel and electronic surveillance installations.",
    services: [
      { title: "CCTV Installation", description: "Setup of 4-camera monitoring system", price: "₦100,000" },
      { title: "Risk Assessment", description: "Home security audit and advice", price: "₦20,000" }
    ],
    portfolio: ["https://images.unsplash.com/photo-1557597774-9d2739f8ff00?w=800"]
  }
];

export default serviceProviders;