/**
 * LuxeGlow | Luxury Beauty Salon & Spa Appointment Booking System
 * Vanilla JavaScript: State Management, Interactive Booking Engine, 
 * LocalStorage Persistence, Dynamic Rendering & Real-time Validation.
 */

// ==========================================================================
// 1. DATA SOURCES & CONFIGURATION
// ==========================================================================

const SERVICES_DATA = [
  // --- Category 1: Hair Cuts & Styling ---
  {
    id: "hair-01",
    name: "Signature Haircut & Blowdry",
    category: "hair",
    categoryName: "Hair Cuts & Styling",
    price: 1499,
    duration: 45,
    description: "Personalized face-contouring cut, botanical scalp detox shampoo, relaxing head acupressure massage, and signature argan blowout.",
    products: "Kérastase Nutritive, Moroccanoil Blowdry Treatment",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    badge: "Popular"
  },
  {
    id: "hair-02",
    name: "Luxe Balayage & Gloss Treatment",
    category: "hair",
    categoryName: "Hair Cuts & Styling",
    price: 5999,
    duration: 150,
    description: "Hand-painted sun-kissed French balayage dimensional highlights accompanied by Olaplex bond repair and custom gloss toner.",
    products: "Olaplex No. 1 & 2, L'Oréal Majirel French Gloss",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    badge: "Masterpiece"
  },
  {
    id: "hair-03",
    name: "Botox Hair Spa & Restorative Mask",
    category: "hair",
    categoryName: "Hair Cuts & Styling",
    price: 3899,
    duration: 90,
    description: "Deep fiber rejuvenation therapy for heat-damaged or frizzy hair using micro-protein infusion, warm ozone mist sauna, and silk serum.",
    products: "Brazilian Protein Elixir, Caviar Hair Botox",
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller"
  },
  {
    id: "hair-04",
    name: "Organic Keratin Smoothing Therapy",
    category: "hair",
    categoryName: "Hair Cuts & Styling",
    price: 6499,
    duration: 180,
    description: "100% formaldehyde-free smoothing treatment delivering mirror-like glass hair, silky frizz control, and humidity resistance up to 4 months.",
    products: "Amazon Silk Keratin, Organic Macadamia Oil",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    badge: "Transformative"
  },

  // --- Category 2: Facials & Skincare ---
  {
    id: "facial-01",
    name: "Hydra-Infusion Glow Facial",
    category: "facial",
    categoryName: "Facials & Skincare",
    price: 2999,
    duration: 60,
    description: "Non-invasive vortex pore purification, ultrasonic blackhead extraction, multi-molecular hyaluronic acid infusion, and cryogenic skin lifting.",
    products: "Dermalogica BioLumin-C, Pure Hyaluronic Serum",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    badge: "Top Rated"
  },
  {
    id: "facial-02",
    name: "24K Gold Luxury Illuminating Facial",
    category: "facial",
    categoryName: "Facials & Skincare",
    price: 4499,
    duration: 75,
    description: "Empress royal facial utilizing pure 24K gold leaf sheets, bio-collagen peptides, jade roller lymphatic drainage, and illuminating mask.",
    products: "Pure 24K Elemental Gold Sheets, Swiss Marine Collagen",
    image: "https://images.unsplash.com/photo-1512290900672-1f0233320ff5?auto=format&fit=crop&w=800&q=80",
    badge: "Luxury Exclusive"
  },
  {
    id: "facial-03",
    name: "Ayurvedic Kumkumadi Radiance Therapy",
    category: "facial",
    categoryName: "Facials & Skincare",
    price: 2499,
    duration: 60,
    description: "Holistic glow ritual with Kashmiri saffron oil, sandalwood ubtan exfoliation, rose steam compression, and Kansa wand acupressure.",
    products: "Authentic Forest Essentials Kumkumadi, Pure Mogra Mist",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    badge: "Organic Herb"
  },
  {
    id: "facial-04",
    name: "Deep Pore Detox & Charcoal Purifying",
    category: "facial",
    categoryName: "Facials & Skincare",
    price: 1899,
    duration: 50,
    description: "Clarifying dermatological treatment with bamboo charcoal, salicylic acid gentle peel, and tea tree cold algae compression to balance sebum.",
    products: "Activated Binchotan Charcoal, Australian Tea Tree Algae",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    badge: "Deep Clean"
  },

  // --- Category 3: Manicure/Pedicure ---
  {
    id: "mani-01",
    name: "Luxe Rose Petal Spa Pedicure",
    category: "manicure-pedicure",
    categoryName: "Manicure/Pedicure",
    price: 1799,
    duration: 60,
    description: "Warm mineral Epsom salt soak with fresh damask rose petals, cane sugar scrub, callus smoothing, and hot shea butter massage candle wrap.",
    products: "Dead Sea Rose Salts, Organic French Shea Butter",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    badge: "Pure Bliss"
  },
  {
    id: "mani-02",
    name: "Russian Structured Gel Manicure",
    category: "manicure-pedicure",
    categoryName: "Manicure/Pedicure",
    price: 2199,
    duration: 75,
    description: "Ultra-clean precision dry e-file cuticle detailing, rubber builder gel apex reinforcement, and flawless long-lasting gel lacquer finish.",
    products: "Kodi Professional Rubber Base, OPI Gel Color",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    badge: "Trending"
  },
  {
    id: "mani-03",
    name: "Champagne & Truffle Pedicure Ritual",
    category: "manicure-pedicure",
    categoryName: "Manicure/Pedicure",
    price: 2499,
    duration: 75,
    description: "Effervescent champagne bubble foot soak, white truffle butter mask, hot stone calf massage, and soothing heated lavender booties.",
    products: "Champagne Extract Scrub, White Truffle Restorative Balm",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
    badge: "VIP Indulgence"
  },
  {
    id: "mani-04",
    name: "Classic Express French Polish & Buff",
    category: "manicure-pedicure",
    categoryName: "Manicure/Pedicure",
    price: 999,
    duration: 35,
    description: "Essential nail shaping, organic apricot cuticle oil treatment, mirror-shine high buffing, and crisp timeless Parisian french tips.",
    products: "Essie Professional High-Gloss Lacquer, Vitamin E Oil",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    badge: "Classic"
  },

  // --- Category 4: Bridal Packages ---
  {
    id: "bridal-01",
    name: "The Royal Imperial Bridal Makeover",
    category: "bridal",
    categoryName: "Bridal Packages",
    price: 24999,
    duration: 240,
    description: "Complete bridal dream experience: HD Airbrush makeup, architectural bridal hairstyle, couture dupatta/saree draping, jewelry placement, and mink lashes.",
    products: "Charlotte Tilbury, MAC Pro, Dior Backstage, NARS",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    badge: "Couture Royal"
  },
  {
    id: "bridal-02",
    name: "Pre-Bridal Radiance Countdown (Full Day)",
    category: "bridal",
    categoryName: "Bridal Packages",
    price: 14999,
    duration: 300,
    description: "Full-body walnut polishing, 24K Gold Illuminating Facial, Deluxe Rose Mani-Pedi, Botox Hair Spa, and complete body waxing ritual.",
    products: "Forest Essentials Body Polisher, 24K Gold Marine Serum",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    badge: "Ultimate Glow"
  },
  {
    id: "bridal-03",
    name: "Cocktail & Sangeet Glam Package",
    category: "bridal",
    categoryName: "Bridal Packages",
    price: 9999,
    duration: 120,
    description: "Red-carpet smokey or soft glam makeup, textured Hollywood glam waves or braided floral crown, and precision contouring for nighttime lighting.",
    products: "Huda Beauty Matte & Metallic, Urban Decay All Nighter",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80",
    badge: "Party Glam"
  },
  {
    id: "bridal-04",
    name: "Groom's Executive Royal Grooming",
    category: "bridal",
    categoryName: "Bridal Packages",
    price: 6999,
    duration: 150,
    description: "Tailored luxury package for the modern groom: Precision haircut & beard sculpting, Charcoal detox facial, scalp revitalization, and manicure.",
    products: "Truefitt & Hill Shaving Cream, Tom Ford Beard Oil",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    badge: "Gentleman Luxe"
  }
];

const STYLISTS_DATA = [
  {
    id: "stylist-aarav",
    name: "Aarav Singhania",
    role: "Master Creative Director & Hair Architect",
    specialtyCategory: "hair",
    experience: "10+ Years",
    rating: 4.95,
    reviewsCount: 342,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Trained at the Vidal Sassoon Academy in London, Aarav is renowned for architectural precision cuts, customized balayage dimensions, and restorative hair transformations.",
    specialties: ["French Balayage", "Precision Layering", "Keratin Smoothing", "Color Correction"],
    portfolio: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "stylist-meera",
    name: "Meera Varma",
    role: "Senior Clinical Aesthetician & Skin Healer",
    specialtyCategory: "facial",
    experience: "8+ Years",
    rating: 4.98,
    reviewsCount: 418,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Certified in clinical dermato-cosmetology and ancient Ayurvedic skin therapies. Meera crafts personalized skin protocols that restore cellular radiance and youthful elasticity.",
    specialties: ["Hydra-Infusion", "24K Gold Peeling", "Lymphatic Drainage", "Ayurvedic Facials"],
    portfolio: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512290900672-1f0233320ff5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "stylist-chloe",
    name: "Chloe D'Souza",
    role: "Lead Nail Couture Artist & Pedicurist",
    specialtyCategory: "manicure-pedicure",
    experience: "6+ Years",
    rating: 4.90,
    reviewsCount: 228,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "A pioneer in Russian structured manicures and bespoke nail art. Chloe treats nail care as a fine art form, guaranteeing hygienic apex strength and delicate luxury finishes.",
    specialties: ["Russian Manicure", "Builder Gel Art", "Spa Rose Pedicure", "Chrome & Ombre Tips"],
    portfolio: [
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: "stylist-rhea",
    name: "Rhea Kapoor",
    role: "Celebrity Bridal & Haute Couture Makeup Artist",
    specialtyCategory: "bridal",
    experience: "12+ Years",
    rating: 4.99,
    reviewsCount: 524,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Having dolled up over 800 high-profile brides across India, Rhea is celebrated for ethereal glass-skin bases, captivating eyes, and regal heritage dupatta drapes.",
    specialties: ["HD Airbrush Bridal", "Traditional Saree Draping", "Red Carpet Glamour", "Bridal Trials"],
    portfolio: [
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

const TIME_SLOTS = {
  morning: ["10:00 AM", "11:00 AM", "11:45 AM"],
  afternoon: ["01:00 PM", "02:15 PM", "03:30 PM", "04:45 PM"],
  evening: ["06:00 PM", "07:15 PM", "08:00 PM"]
};

const PROMO_CODES = {
  "GLOW10": { discountPercent: 10, maxDiscount: 2000, description: "10% Welcome Discount" },
  "WELCOME20": { discountPercent: 20, maxDiscount: 3000, description: "20% Exclusive Festive Off" },
  "LUXE500": { flatDiscount: 500, minPrice: 2000, description: "Flat ₹500 off on ₹2000+" }
};

const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    author: "Ananya Sharma",
    rating: 5,
    service: "The Royal Imperial Bridal Makeover",
    comment: "Rhea made my wedding day unforgettable! My skin looked illuminated without feeling heavy, and the makeup stayed completely pristine through 10 hours of ceremonies. Truly royal!",
    date: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    id: "rev-2",
    author: "Vikram Malhotra",
    rating: 5,
    service: "Groom's Executive Royal Grooming",
    comment: "Top notch salon ambiance. The beard sculpting by Aarav and the soothing charcoal facial were remarkably refreshing. Great tea selection too!",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    id: "rev-3",
    author: "Sneha Patel",
    rating: 5,
    service: "Hydra-Infusion Glow Facial",
    comment: "Meera is magic with skin! My congested pores were extracted painlessly and my face was glowing for an entire week. Worth every rupee.",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    id: "rev-4",
    author: "Kavita Rao",
    rating: 5,
    service: "Russian Structured Gel Manicure",
    comment: "Chloe's attention to cuticle cleanliness and nail architecture is unmatched in Bengaluru. Three weeks later and my nails haven't chipped a millimeter!",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    verified: true
  }
];

// ==========================================================================
// 2. LOCALSTORAGE CONTROLLER & SEEDING
// ==========================================================================

const STORAGE_KEYS = {
  APPOINTMENTS: "luxeglow_appointments",
  REVIEWS: "luxeglow_reviews"
};

function initLocalStorage() {
  // Seed sample appointment if storage is empty so student/examiner sees a populated UI immediately
  if (!localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];

    const sampleAppointment = [
      {
        id: "LXG-2026-8419",
        createdAt: new Date().toISOString(),
        serviceId: "facial-01",
        serviceName: "Hydra-Infusion Glow Facial",
        category: "Facials & Skincare",
        duration: 60,
        stylistId: "stylist-meera",
        stylistName: "Meera Varma",
        date: tomorrowStr,
        time: "11:00 AM",
        customer: {
          name: "Dr. Radhika Sen",
          phone: "9876543210",
          email: "radhika.sen@example.com",
          notes: "Kindly keep organic chamomile tea ready."
        },
        pricing: {
          basePrice: 2999,
          discount: 300,
          discountCode: "GLOW10",
          total: 2699
        },
        status: "Confirmed"
      }
    ];
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(sampleAppointment));
  }

  // Seed sample reviews if empty
  if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(DEFAULT_REVIEWS));
  }
}

function getAppointments() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)) || [];
  } catch (e) {
    console.error("Error reading appointments from localStorage:", e);
    return [];
  }
}

function saveAppointments(appointments) {
  try {
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
    updateNavBadge();
  } catch (e) {
    console.error("Error saving appointments to localStorage:", e);
  }
}

function getReviews() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEWS)) || DEFAULT_REVIEWS;
  } catch (e) {
    console.error("Error reading reviews from localStorage:", e);
    return DEFAULT_REVIEWS;
  }
}

function saveReviews(reviews) {
  try {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
  } catch (e) {
    console.error("Error saving reviews to localStorage:", e);
  }
}

// ==========================================================================
// 3. UI RENDERING ENGINES
// ==========================================================================

// Render Salon Services Grid
function renderServices(filteredServices = SERVICES_DATA) {
  const servicesGrid = document.getElementById("servicesGrid");
  const emptyState = document.getElementById("servicesEmptyState");
  if (!servicesGrid) return;

  servicesGrid.innerHTML = "";

  if (filteredServices.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  filteredServices.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="service-img-wrapper">
        <img src="${service.image}" alt="${service.name}" loading="lazy" onerror="this.src='assets/images/fallback.svg'">
        <span class="service-badge">${service.badge}</span>
        <span class="service-duration-badge"><i class="fa-regular fa-clock"></i> ${service.duration} Mins</span>
      </div>
      <div class="service-content">
        <span class="service-category-tag">${service.categoryName}</span>
        <h3 class="service-name">${service.name}</h3>
        <p class="service-desc">${service.description}</p>
        
        <div class="service-products-box">
          <span class="service-products-title"><i class="fa-solid fa-leaf"></i> Formulated With:</span>
          <span class="service-products-list">${service.products}</span>
        </div>

        <div class="service-footer">
          <div class="service-price-box">
            <span class="price-label">Session Price</span>
            <span class="service-price">₹ ${service.price.toLocaleString("en-IN")}</span>
          </div>
          <button class="btn btn-luxury book-service-btn" data-service-id="${service.id}">
            Book Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    // Attach click to "Book Now"
    const bookBtn = card.querySelector(".book-service-btn");
    bookBtn.addEventListener("click", () => {
      prefillBookingWithService(service.id);
    });

    servicesGrid.appendChild(card);
  });
}

// Render Master Stylists Grid
function renderStylists() {
  const stylistsGrid = document.getElementById("stylistsGrid");
  const stylistSelect = document.getElementById("bookingStylist");
  if (!stylistsGrid) return;

  stylistsGrid.innerHTML = "";

  STYLISTS_DATA.forEach(stylist => {
    // 1. Populate Stylist Card
    const card = document.createElement("div");
    card.className = "stylist-card";
    card.innerHTML = `
      <div class="stylist-photo-wrapper">
        <img src="${stylist.image}" alt="${stylist.name}" loading="lazy" onerror="this.src='assets/images/fallback.svg'">
        <span class="stylist-verified-badge" title="Master Certified Stylist"><i class="fa-solid fa-certificate"></i></span>
        <span class="stylist-experience-badge"><i class="fa-solid fa-briefcase"></i> ${stylist.experience} Exp</span>
      </div>
      <div class="stylist-info">
        <h3 class="stylist-name">${stylist.name}</h3>
        <span class="stylist-role">${stylist.role}</span>
        
        <div class="stylist-rating-row">
          <div class="stars-gold">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span class="rating-score">${stylist.rating}</span>
          <span class="review-count-text">(${stylist.reviewsCount} reviews)</span>
        </div>

        <div class="stylist-specialties-tags">
          ${stylist.specialties.map(spec => `<span class="specialty-tag">${spec}</span>`).join("")}
        </div>

        <div class="stylist-actions-row">
          <button class="btn btn-outline btn-sm view-portfolio-btn" data-stylist-id="${stylist.id}">
            <i class="fa-regular fa-image"></i> Portfolio
          </button>
          <button class="btn btn-primary btn-sm select-stylist-btn" data-stylist-id="${stylist.id}">
            <i class="fa-regular fa-calendar-check"></i> Select
          </button>
        </div>
      </div>
    `;

    // Portfolio modal click
    card.querySelector(".view-portfolio-btn").addEventListener("click", () => {
      openStylistModal(stylist.id);
    });

    // Select stylist click
    card.querySelector(".select-stylist-btn").addEventListener("click", () => {
      selectStylistAndScroll(stylist.id);
    });

    stylistsGrid.appendChild(card);

    // 2. Add to dropdown in booking form
    if (stylistSelect) {
      const opt = document.createElement("option");
      opt.value = stylist.id;
      opt.textContent = `${stylist.name} — ${stylist.role}`;
      stylistSelect.appendChild(opt);
    }
  });
}

// Render Time Slots (Morning, Afternoon, Evening)
function renderTimeSlots() {
  const morningContainer = document.getElementById("morningSlots");
  const afternoonContainer = document.getElementById("afternoonSlots");
  const eveningContainer = document.getElementById("eveningSlots");

  const createSlotButtons = (slots, container) => {
    if (!container) return;
    container.innerHTML = "";
    slots.forEach(slot => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "time-slot-btn";
      btn.dataset.time = slot;
      btn.textContent = slot;

      btn.addEventListener("click", () => {
        handleTimeSlotSelect(btn, slot);
      });

      container.appendChild(btn);
    });
  };

  createSlotButtons(TIME_SLOTS.morning, morningContainer);
  createSlotButtons(TIME_SLOTS.afternoon, afternoonContainer);
  createSlotButtons(TIME_SLOTS.evening, eveningContainer);
}

// Render My Bookings Cards
function renderMyBookings(filter = "all") {
  const container = document.getElementById("bookingsCardsContainer");
  const emptyState = document.getElementById("emptyBookingsState");
  if (!container) return;

  const allBookings = getAppointments();
  
  // Update Counts in tabs
  const allCountEl = document.getElementById("allBookingsCount");
  const confirmedCountEl = document.getElementById("confirmedBookingsCount");
  const cancelledCountEl = document.getElementById("cancelledBookingsCount");

  const confirmedCount = allBookings.filter(b => b.status === "Confirmed").length;
  const cancelledCount = allBookings.filter(b => b.status === "Cancelled").length;

  if (allCountEl) allCountEl.textContent = allBookings.length;
  if (confirmedCountEl) confirmedCountEl.textContent = confirmedCount;
  if (cancelledCountEl) cancelledCountEl.textContent = cancelledCount;

  // Filter Bookings
  let filtered = allBookings;
  if (filter === "confirmed") {
    filtered = allBookings.filter(b => b.status === "Confirmed");
  } else if (filter === "cancelled") {
    filtered = allBookings.filter(b => b.status === "Cancelled");
  }

  container.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(booking => {
    const card = document.createElement("div");
    card.className = "user-booking-card";

    const isConfirmed = booking.status === "Confirmed";

    card.innerHTML = `
      <div class="booking-card-top">
        <div class="booking-id-ref">
          <span class="ref-label">Booking Reference</span>
          <strong class="ref-value">${booking.id}</strong>
        </div>
        <span class="status-badge ${isConfirmed ? 'confirmed' : 'cancelled'}">
          <i class="fa-solid ${isConfirmed ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
          ${booking.status}
        </span>
      </div>

      <div class="booking-details-grid">
        <div class="booking-detail-item">
          <span class="detail-label"><i class="fa-solid fa-scissors"></i> Treatment</span>
          <span class="detail-val">${booking.serviceName}</span>
        </div>
        <div class="booking-detail-item">
          <span class="detail-label"><i class="fa-solid fa-user-nurse"></i> Specialist</span>
          <span class="detail-val">${booking.stylistName}</span>
        </div>
        <div class="booking-detail-item">
          <span class="detail-label"><i class="fa-regular fa-calendar"></i> Date &amp; Time</span>
          <span class="detail-val">${formatDisplayDate(booking.date)} at ${booking.time}</span>
        </div>
        <div class="booking-detail-item">
          <span class="detail-label"><i class="fa-solid fa-indian-rupee-sign"></i> Total Payable</span>
          <span class="detail-val booking-price-highlight">₹ ${booking.pricing.total.toLocaleString("en-IN")}</span>
        </div>
        <div class="booking-detail-item">
          <span class="detail-label"><i class="fa-regular fa-user"></i> Client Name</span>
          <span class="detail-val">${booking.customer.name}</span>
        </div>
        <div class="booking-detail-item">
          <span class="detail-label"><i class="fa-solid fa-phone"></i> Contact</span>
          <span class="detail-val">${booking.customer.phone}</span>
        </div>
      </div>

      <div class="booking-actions-footer">
        <button class="btn btn-secondary btn-sm print-booking-slip-btn" data-booking-id="${booking.id}">
          <i class="fa-solid fa-print"></i> Slip
        </button>
        ${
          isConfirmed
            ? `<button class="btn btn-outline btn-sm cancel-booking-btn" data-booking-id="${booking.id}">
                <i class="fa-solid fa-ban"></i> Cancel Booking
               </button>`
            : `<button class="btn btn-luxury btn-sm rebook-btn" data-service-id="${booking.serviceId}">
                <i class="fa-solid fa-rotate-right"></i> Book Again
               </button>`
        }
      </div>
    `;

    // Bind cancel action
    const cancelBtn = card.querySelector(".cancel-booking-btn");
    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => {
        promptCancelBooking(booking.id);
      });
    }

    // Bind print slip action
    const printBtn = card.querySelector(".print-booking-slip-btn");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        showReceiptModal(booking);
      });
    }

    // Bind rebook action
    const rebookBtn = card.querySelector(".rebook-btn");
    if (rebookBtn) {
      rebookBtn.addEventListener("click", () => {
        prefillBookingWithService(booking.serviceId);
      });
    }

    container.appendChild(card);
  });
}

// Render Customer Reviews Grid
function renderReviews() {
  const container = document.getElementById("reviewsGrid");
  if (!container) return;

  const reviews = getReviews();
  container.innerHTML = "";

  reviews.forEach(review => {
    const card = document.createElement("div");
    card.className = "review-card";

    // Build star icons
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        starsHtml += `<i class="fa-solid fa-star"></i>`;
      } else {
        starsHtml += `<i class="fa-regular fa-star"></i>`;
      }
    }

    card.innerHTML = `
      <div class="review-card-top">
        <img src="${review.avatar}" alt="${review.author}" class="reviewer-avatar" onerror="this.src='assets/images/fallback.svg'">
        <div class="reviewer-info">
          <strong class="reviewer-name">${review.author}</strong>
          <span class="service-used-tag"><i class="fa-solid fa-sparkles"></i> ${review.service}</span>
        </div>
      </div>

      <div class="review-stars">
        ${starsHtml}
      </div>

      <p class="review-text">"${review.comment}"</p>

      <div class="review-date-verified">
        <span>${review.date}</span>
        <span class="verified-pill"><i class="fa-solid fa-circle-check"></i> Verified Client</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// Update Active Bookings Badge in Navbar
function updateNavBadge() {
  const badge = document.getElementById("navBookingBadge");
  if (!badge) return;

  const bookings = getAppointments();
  const activeCount = bookings.filter(b => b.status === "Confirmed").length;
  badge.textContent = activeCount;

  if (activeCount > 0) {
    badge.classList.add("has-items");
  } else {
    badge.classList.remove("has-items");
  }
}

// ==========================================================================
// 4. INTERACTIVE BOOKING LOGIC & PRICE CALCULATOR
// ==========================================================================

// Global Booking State for Current Selection
const bookingState = {
  selectedService: null,
  selectedStylist: null,
  selectedDate: null,
  selectedTimeSlot: null,
  promoDiscount: 0,
  promoCodeApplied: null
};

// Initialize Date Picker Constraints (Prevent Past Dates)
function initDatePicker() {
  const dateInput = document.getElementById("bookingDate");
  if (!dateInput) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const minDate = `${year}-${month}-${day}`;

  dateInput.min = minDate;

  // Max 60 days ahead
  const maxDateObj = new Date();
  maxDateObj.setDate(today.getDate() + 60);
  const maxYear = maxDateObj.getFullYear();
  const maxMonth = String(maxDateObj.getMonth() + 1).padStart(2, "0");
  const maxDay = String(maxDateObj.getDate()).padStart(2, "0");
  dateInput.max = `${maxYear}-${maxMonth}-${maxDay}`;

  // Default to tomorrow for convenience
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomYear = tomorrow.getFullYear();
  const tomMonth = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const tomDay = String(tomorrow.getDate()).padStart(2, "0");
  dateInput.value = `${tomYear}-${tomMonth}-${tomDay}`;
  bookingState.selectedDate = dateInput.value;

  dateInput.addEventListener("change", (e) => {
    bookingState.selectedDate = e.target.value;
    updateSlotAvailability();
    updateLiveSummary();
  });
}

// Handle Category Change -> Populate Specific Services Dropdown
function setupCategoryChangeHandler() {
  const categorySelect = document.getElementById("bookingCategory");
  const serviceSelect = document.getElementById("bookingService");
  if (!categorySelect || !serviceSelect) return;

  categorySelect.addEventListener("change", (e) => {
    const selectedCategory = e.target.value;
    serviceSelect.innerHTML = `<option value="">-- Choose Treatment --</option>`;

    if (!selectedCategory) {
      serviceSelect.disabled = true;
      bookingState.selectedService = null;
      updateLiveSummary();
      return;
    }

    const matchedServices = SERVICES_DATA.filter(s => s.category === selectedCategory);
    matchedServices.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = `${s.name} (₹${s.price.toLocaleString("en-IN")} • ${s.duration} mins)`;
      serviceSelect.appendChild(opt);
    });

    serviceSelect.disabled = false;
  });

  serviceSelect.addEventListener("change", (e) => {
    const serviceId = e.target.value;
    bookingState.selectedService = SERVICES_DATA.find(s => s.id === serviceId) || null;
    updateLiveSummary();
  });
}

// Handle Stylist Select
function setupStylistChangeHandler() {
  const stylistSelect = document.getElementById("bookingStylist");
  if (!stylistSelect) return;

  stylistSelect.addEventListener("change", (e) => {
    const stylistId = e.target.value;
    if (stylistId === "any" || !stylistId) {
      bookingState.selectedStylist = { id: "any", name: "Any Available Master Stylist" };
    } else {
      bookingState.selectedStylist = STYLISTS_DATA.find(st => st.id === stylistId) || null;
    }
    updateSlotAvailability();
    updateLiveSummary();
  });
}

// Handle Time Slot Selection Button Click
function handleTimeSlotSelect(buttonEl, timeSlot) {
  // Deselect other slots
  document.querySelectorAll(".time-slot-btn").forEach(btn => btn.classList.remove("selected"));

  buttonEl.classList.add("selected");
  bookingState.selectedTimeSlot = timeSlot;

  const hiddenInput = document.getElementById("selectedTimeSlot");
  if (hiddenInput) hiddenInput.value = timeSlot;

  const displayEl = document.getElementById("slotDisplayPlaceholder");
  if (displayEl) {
    displayEl.innerHTML = `<i class="fa-regular fa-clock"></i> <strong>${timeSlot}</strong> (Reserved)`;
  }

  // Remove validation error if active
  const timeErr = document.getElementById("timeError");
  if (timeErr) timeErr.classList.remove("visible");

  updateLiveSummary();
}

// Check if a time slot is already booked for date & stylist in LocalStorage
function updateSlotAvailability() {
  const currentDate = bookingState.selectedDate;
  const currentStylistId = bookingState.selectedStylist?.id;
  const appointments = getAppointments().filter(b => b.status === "Confirmed");

  document.querySelectorAll(".time-slot-btn").forEach(btn => {
    const slotTime = btn.dataset.time;

    // Is there a booking conflict on this exact date, time, and specific stylist?
    const isBooked = appointments.some(app => {
      const matchDate = app.date === currentDate;
      const matchTime = app.time === slotTime;
      const matchStylist = (currentStylistId && currentStylistId !== "any") 
        ? (app.stylistId === currentStylistId) 
        : false;
      return matchDate && matchTime && matchStylist;
    });

    if (isBooked) {
      btn.disabled = true;
      btn.title = "This slot is already booked for this stylist. Please pick another time.";
      if (btn.classList.contains("selected")) {
        btn.classList.remove("selected");
        bookingState.selectedTimeSlot = null;
        document.getElementById("selectedTimeSlot").value = "";
        document.getElementById("slotDisplayPlaceholder").innerHTML = `<span class="placeholder-text">Please pick another slot</span>`;
      }
    } else {
      btn.disabled = false;
      btn.title = "Available for reservation";
    }
  });
}

// Promo Code Coupon Engine
function setupPromoCodeEngine() {
  const applyBtn = document.getElementById("applyPromoBtn");
  const promoInput = document.getElementById("promoCodeInput");
  const feedbackEl = document.getElementById("promoFeedback");
  if (!applyBtn || !promoInput) return;

  applyBtn.addEventListener("click", () => {
    const code = promoInput.value.trim().toUpperCase();

    if (!bookingState.selectedService) {
      feedbackEl.className = "promo-feedback error";
      feedbackEl.textContent = "Please select a service first before applying coupons.";
      return;
    }

    if (!code) {
      feedbackEl.className = "promo-feedback error";
      feedbackEl.textContent = "Please enter a promo code.";
      return;
    }

    if (PROMO_CODES[code]) {
      const promo = PROMO_CODES[code];
      const basePrice = bookingState.selectedService.price;
      let calculatedDiscount = 0;

      if (promo.discountPercent) {
        calculatedDiscount = Math.round((basePrice * promo.discountPercent) / 100);
        if (calculatedDiscount > promo.maxDiscount) calculatedDiscount = promo.maxDiscount;
      } else if (promo.flatDiscount) {
        if (basePrice < promo.minPrice) {
          feedbackEl.className = "promo-feedback error";
          feedbackEl.textContent = `Requires minimum service bill of ₹${promo.minPrice}.`;
          return;
        }
        calculatedDiscount = promo.flatDiscount;
      }

      bookingState.promoDiscount = calculatedDiscount;
      bookingState.promoCodeApplied = code;

      feedbackEl.className = "promo-feedback success";
      feedbackEl.textContent = `Applied! Saved ₹${calculatedDiscount.toLocaleString("en-IN")} (${promo.description}).`;
      showToast("Coupon Applied!", `Saved ₹${calculatedDiscount.toLocaleString("en-IN")} with code ${code}.`, "success");
    } else {
      bookingState.promoDiscount = 0;
      bookingState.promoCodeApplied = null;
      feedbackEl.className = "promo-feedback error";
      feedbackEl.textContent = "Invalid promo code. Try 'GLOW10' or 'WELCOME20'.";
    }

    updateLiveSummary();
  });
}

// Live Summary Sidebar & Price Breakdown Updates
function updateLiveSummary() {
  const previewContainer = document.getElementById("summaryServicePreview");
  const detailsList = document.getElementById("summaryDetailsList");
  
  if (!bookingState.selectedService) {
    if (previewContainer) previewContainer.style.display = "block";
    if (detailsList) detailsList.style.display = "none";
    return;
  }

  if (previewContainer) previewContainer.style.display = "none";
  if (detailsList) detailsList.style.display = "flex";

  const s = bookingState.selectedService;

  document.getElementById("summaryServiceName").textContent = s.name;
  document.getElementById("summaryDuration").textContent = `${s.duration} Minutes`;

  // Stylist
  const stylistName = bookingState.selectedStylist 
    ? bookingState.selectedStylist.name 
    : "Any Available Master Stylist";
  document.getElementById("summaryStylistName").textContent = stylistName;

  // Date & Time
  const dateStr = bookingState.selectedDate ? formatDisplayDate(bookingState.selectedDate) : "Pick date";
  const timeStr = bookingState.selectedTimeSlot ? bookingState.selectedTimeSlot : "Pick slot";
  document.getElementById("summaryDateTime").textContent = `${dateStr} • ${timeStr}`;

  // Pricing
  const basePrice = s.price;
  const discount = bookingState.promoDiscount;
  const total = Math.max(0, basePrice - discount);

  document.getElementById("summaryBasePrice").textContent = `₹ ${basePrice.toLocaleString("en-IN")}`;

  const discountRow = document.getElementById("summaryDiscountRow");
  if (discount > 0 && bookingState.promoCodeApplied) {
    discountRow.style.display = "flex";
    document.getElementById("discountCodeTag").textContent = bookingState.promoCodeApplied;
    document.getElementById("summaryDiscountAmount").textContent = `- ₹ ${discount.toLocaleString("en-IN")}`;
  } else {
    discountRow.style.display = "none";
  }

  document.getElementById("summaryTotalPrice").textContent = `₹ ${total.toLocaleString("en-IN")}`;
}

// Form Submission & Validation
function setupBookingFormSubmission() {
  const form = document.getElementById("appointmentForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 1. Validation checks
    let isValid = true;

    // Category
    const category = document.getElementById("bookingCategory");
    const categoryErr = document.getElementById("categoryError");
    if (!category.value) {
      category.classList.add("is-invalid");
      categoryErr.classList.add("visible");
      isValid = false;
    } else {
      category.classList.remove("is-invalid");
      categoryErr.classList.remove("visible");
    }

    // Service
    const service = document.getElementById("bookingService");
    const serviceErr = document.getElementById("serviceError");
    if (!service.value || !bookingState.selectedService) {
      service.classList.add("is-invalid");
      serviceErr.classList.add("visible");
      isValid = false;
    } else {
      service.classList.remove("is-invalid");
      serviceErr.classList.remove("visible");
    }

    // Stylist
    const stylist = document.getElementById("bookingStylist");
    const stylistErr = document.getElementById("stylistError");
    if (!stylist.value) {
      stylist.classList.add("is-invalid");
      stylistErr.classList.add("visible");
      isValid = false;
    } else {
      stylist.classList.remove("is-invalid");
      stylistErr.classList.remove("visible");
    }

    // Date
    const dateInput = document.getElementById("bookingDate");
    const dateErr = document.getElementById("dateError");
    if (!dateInput.value) {
      dateInput.classList.add("is-invalid");
      dateErr.classList.add("visible");
      isValid = false;
    } else {
      dateInput.classList.remove("is-invalid");
      dateErr.classList.remove("visible");
    }

    // Time Slot
    const timeErr = document.getElementById("timeError");
    if (!bookingState.selectedTimeSlot) {
      timeErr.classList.add("visible");
      isValid = false;
    } else {
      timeErr.classList.remove("visible");
    }

    // Customer Name
    const nameInput = document.getElementById("customerName");
    const nameErr = document.getElementById("nameError");
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add("is-invalid");
      nameErr.classList.add("visible");
      isValid = false;
    } else {
      nameInput.classList.remove("is-invalid");
      nameErr.classList.remove("visible");
    }

    // Phone Number (10 digits)
    const phoneInput = document.getElementById("customerPhone");
    const phoneErr = document.getElementById("phoneError");
    const phoneRegex = /^[0-9]{10}$/;
    const cleanedPhone = phoneInput.value.replace(/\D/g, "");
    if (!phoneRegex.test(cleanedPhone)) {
      phoneInput.classList.add("is-invalid");
      phoneErr.classList.add("visible");
      isValid = false;
    } else {
      phoneInput.classList.remove("is-invalid");
      phoneErr.classList.remove("visible");
    }

    // Email
    const emailInput = document.getElementById("customerEmail");
    const emailErr = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add("is-invalid");
      emailErr.classList.add("visible");
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailErr.classList.remove("visible");
    }

    if (!isValid) {
      showToast("Incomplete Form", "Please fix highlighted fields before submitting.", "danger");
      return;
    }

    // 2. Simulate Luxury Booking Confirmation with Loading Spinner
    const submitBtn = document.getElementById("submitBookingBtn");
    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoader = submitBtn.querySelector(".btn-loader");

    submitBtn.disabled = true;
    btnText.classList.add("hidden");
    btnLoader.classList.remove("hidden");

    setTimeout(() => {
      // Create new booking record
      const uniqueId = `LXG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const selectedStylistObj = bookingState.selectedStylist || { id: "any", name: "Any Available Master Stylist" };
      const notes = document.getElementById("customerNotes").value.trim();

      const newBooking = {
        id: uniqueId,
        createdAt: new Date().toISOString(),
        serviceId: bookingState.selectedService.id,
        serviceName: bookingState.selectedService.name,
        category: bookingState.selectedService.categoryName,
        duration: bookingState.selectedService.duration,
        stylistId: selectedStylistObj.id,
        stylistName: selectedStylistObj.name,
        date: bookingState.selectedDate,
        time: bookingState.selectedTimeSlot,
        customer: {
          name: nameInput.value.trim(),
          phone: cleanedPhone,
          email: emailInput.value.trim(),
          notes: notes
        },
        pricing: {
          basePrice: bookingState.selectedService.price,
          discount: bookingState.promoDiscount,
          discountCode: bookingState.promoCodeApplied,
          total: Math.max(0, bookingState.selectedService.price - bookingState.promoDiscount)
        },
        status: "Confirmed"
      };

      // Save to LocalStorage
      const appointments = getAppointments();
      appointments.unshift(newBooking);
      saveAppointments(appointments);

      // Reset loading state
      submitBtn.disabled = false;
      btnText.classList.remove("hidden");
      btnLoader.classList.add("hidden");

      // Show receipt modal
      showReceiptModal(newBooking);

      // Re-render bookings list
      renderMyBookings();

      // Show success toast
      showToast("Appointment Confirmed!", `Reference ID: ${newBooking.id} secured successfully.`, "success");

      // Reset Form fields
      form.reset();
      resetBookingState();
    }, 700);
  });

  // Reset Button
  const resetBtn = document.getElementById("resetBookingFormBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      resetBookingState();
      showToast("Form Reset", "All fields have been cleared.", "info");
    });
  }
}

function resetBookingState() {
  bookingState.selectedService = null;
  bookingState.selectedStylist = null;
  bookingState.selectedTimeSlot = null;
  bookingState.promoDiscount = 0;
  bookingState.promoCodeApplied = null;

  document.getElementById("bookingService").innerHTML = `<option value="">-- Choose Category First --</option>`;
  document.getElementById("bookingService").disabled = true;
  document.getElementById("selectedTimeSlot").value = "";
  document.getElementById("slotDisplayPlaceholder").innerHTML = `<span class="placeholder-text">Please pick a slot below</span>`;
  document.querySelectorAll(".time-slot-btn").forEach(btn => btn.classList.remove("selected"));
  document.getElementById("promoFeedback").textContent = "";

  initDatePicker();
  updateLiveSummary();
}

// ==========================================================================
// 5. HELPER ACTIONS: PRE-FILL & AUTO SCROLL
// ==========================================================================

// When clicking "Book Now" on a service card
function prefillBookingWithService(serviceId) {
  const targetService = SERVICES_DATA.find(s => s.id === serviceId);
  if (!targetService) return;

  // Set Category
  const categorySelect = document.getElementById("bookingCategory");
  categorySelect.value = targetService.category;
  categorySelect.dispatchEvent(new Event("change"));

  // Set Specific Service
  const serviceSelect = document.getElementById("bookingService");
  setTimeout(() => {
    serviceSelect.value = targetService.id;
    serviceSelect.dispatchEvent(new Event("change"));
  }, 50);

  // Scroll to booking section
  scrollToSection("booking");
  showToast("Service Selected", `${targetService.name} loaded in booking form.`, "info");
}

// When clicking "Select Stylist" on stylist card
function selectStylistAndScroll(stylistId) {
  const stylistSelect = document.getElementById("bookingStylist");
  if (stylistSelect) {
    stylistSelect.value = stylistId;
    stylistSelect.dispatchEvent(new Event("change"));
  }

  scrollToSection("booking");
  const stylist = STYLISTS_DATA.find(s => s.id === stylistId);
  if (stylist) {
    showToast("Stylist Selected", `${stylist.name} requested for your session.`, "info");
  }
}

// ==========================================================================
// 6. MODAL SYSTEM (RECEIPT, STYLIST PORTFOLIO, WRITE REVIEW, CANCEL)
// ==========================================================================

// Utility: Escape HTML strings to prevent XSS and rendering errors
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let currentReceiptBooking = null;

// High-Fidelity Printable Receipt HTML Generator
function generateReceiptHTML(booking) {
  const isConfirmed = booking.status === "Confirmed";
  const formattedDate = formatDisplayDate(booking.date);
  const now = new Date().toLocaleString("en-IN", { 
    dateStyle: "medium", 
    timeStyle: "short" 
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>LuxeGlow Booking Slip - ${booking.id}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 16mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #221C1A;
      background: #FFFFFF;
      font-size: 13px;
      line-height: 1.5;
      padding: 10px;
    }
    .slip-container {
      max-width: 680px;
      margin: 0 auto;
      border: 2px solid #C59B6D;
      border-radius: 12px;
      padding: 26px 28px;
      position: relative;
    }
    .slip-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid #F0E6DE;
      padding-bottom: 16px;
      margin-bottom: 18px;
    }
    .brand-title {
      font-family: Georgia, 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 700;
      color: #221C1A;
      letter-spacing: 0.5px;
    }
    .brand-sub {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #9A6B3E;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .salon-address {
      font-size: 11px;
      color: #6E645F;
      line-height: 1.4;
    }
    .slip-meta {
      text-align: right;
    }
    .badge-ref {
      display: inline-block;
      background: #FAF7F2;
      border: 1.5px solid #C59B6D;
      color: #9A6B3E;
      padding: 6px 14px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 6px;
    }
    .slip-status {
      display: block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: ${isConfirmed ? '#2E7D32' : '#C62828'};
    }
    .slip-title-bar {
      text-align: center;
      background: #FAF7F2;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #4A3A34;
      margin-bottom: 20px;
      border: 1px solid #EFE8E1;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 22px;
    }
    .info-box {
      background: #FFFFFF;
      border: 1px solid #E8DFD7;
      border-radius: 8px;
      padding: 12px 14px;
    }
    .info-box-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #9A6B3E;
      margin-bottom: 8px;
      border-bottom: 1px solid #F4EFEA;
      padding-bottom: 4px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
      font-size: 12px;
    }
    .info-row:last-child {
      margin-bottom: 0;
    }
    .info-label {
      color: #7A6F68;
    }
    .info-value {
      font-weight: 600;
      color: #221C1A;
      text-align: right;
    }
    .billing-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    .billing-table th {
      background: #FAF7F2;
      text-align: left;
      padding: 10px 12px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #5C524C;
      border-top: 1px solid #E8DFD7;
      border-bottom: 1px solid #E8DFD7;
    }
    .billing-table th:last-child {
      text-align: right;
    }
    .billing-table td {
      padding: 10px 12px;
      border-bottom: 1px solid #F4EFEA;
      font-size: 12px;
    }
    .billing-table td:last-child {
      text-align: right;
      font-weight: 600;
    }
    .total-row td {
      font-size: 15px;
      font-weight: 700;
      color: #9A6B3E;
      border-top: 2px solid #C59B6D;
      border-bottom: 2px solid #C59B6D;
      padding: 12px;
      background: #FAF7F2;
    }
    .policy-box {
      background: #FDFBFA;
      border: 1px dashed #D5C7BC;
      border-radius: 8px;
      padding: 12px 14px;
      margin-bottom: 18px;
    }
    .policy-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #4A3A34;
      margin-bottom: 4px;
    }
    .policy-box ul {
      list-style-type: disc;
      margin-left: 18px;
      font-size: 11px;
      color: #6E645F;
      line-height: 1.5;
    }
    .slip-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #E8DFD7;
      padding-top: 12px;
      font-size: 10px;
      color: #9C8E85;
    }
    .barcode-sim {
      font-family: monospace;
      letter-spacing: 3px;
      font-size: 13px;
      color: #5C524C;
    }
  </style>
</head>
<body>
  <div class="slip-container">
    <div class="slip-header">
      <div>
        <div class="brand-sub">Luxury Salon &amp; Holistic Spa Sanctuary</div>
        <div class="brand-title">LuxeGlow Sanctuary</div>
        <div class="salon-address">
          42 Rose Gold Avenue, 100ft Road, Indiranagar, Bengaluru, KA 560038<br>
          Tel: +91 98765 43210 / 080-4123-8899 | Web: www.luxeglowsalon.com
        </div>
      </div>
      <div class="slip-meta">
        <div class="badge-ref">${booking.id}</div>
        <div class="slip-status">&#9679; ${booking.status.toUpperCase()}</div>
        <div style="font-size: 10px; color: #8E827B; margin-top: 3px;">Issued: ${now}</div>
      </div>
    </div>

    <div class="slip-title-bar">
      Official Appointment Confirmation Slip
    </div>

    <div class="info-grid">
      <div class="info-box">
        <div class="info-box-title">Client Details</div>
        <div class="info-row">
          <span class="info-label">Client Name:</span>
          <span class="info-value">${escapeHtml(booking.customer.name)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Phone:</span>
          <span class="info-value">+91 ${booking.customer.phone}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email:</span>
          <span class="info-value">${escapeHtml(booking.customer.email)}</span>
        </div>
        ${booking.customer.notes ? `
        <div class="info-row" style="margin-top: 4px;">
          <span class="info-label">Notes:</span>
          <span class="info-value" style="font-size: 11px; max-width: 140px;">${escapeHtml(booking.customer.notes)}</span>
        </div>` : ''}
      </div>

      <div class="info-box">
        <div class="info-box-title">Appointment Details</div>
        <div class="info-row">
          <span class="info-label">Treatment:</span>
          <span class="info-value">${escapeHtml(booking.serviceName)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Category:</span>
          <span class="info-value">${escapeHtml(booking.category)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Specialist:</span>
          <span class="info-value">${escapeHtml(booking.stylistName)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Date &amp; Time:</span>
          <span class="info-value" style="color: #9A6B3E;">${formattedDate} • ${booking.time}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Est. Duration:</span>
          <span class="info-value">${booking.duration} Minutes</span>
        </div>
      </div>
    </div>

    <table class="billing-table">
      <thead>
        <tr>
          <th>Treatment / Description</th>
          <th>Duration</th>
          <th>Rate (INR)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>${escapeHtml(booking.serviceName)}</strong><br>
            <span style="font-size: 11px; color: #7A6F68;">Sanctuary suite session with assigned specialist ${escapeHtml(booking.stylistName)}</span>
          </td>
          <td>${booking.duration} mins</td>
          <td>&#8377; ${booking.pricing.basePrice.toLocaleString("en-IN")}</td>
        </tr>
        ${booking.pricing.discount > 0 ? `
        <tr style="color: #2E7D32;">
          <td>Promo Coupon Applied (${booking.pricing.discountCode || 'DISCOUNT'})</td>
          <td>-</td>
          <td>- &#8377; ${booking.pricing.discount.toLocaleString("en-IN")}</td>
        </tr>` : ''}
        <tr>
          <td>Salon Service Tax &amp; Amenity (Complimentary Herbal Elixir &amp; Robe)</td>
          <td>-</td>
          <td>Included (&#8377; 0)</td>
        </tr>
        <tr class="total-row">
          <td colspan="2">TOTAL AMOUNT PAYABLE AT SALON:</td>
          <td>&#8377; ${booking.pricing.total.toLocaleString("en-IN")}</td>
        </tr>
      </tbody>
    </table>

    <div class="policy-box">
      <div class="policy-title">Sanctuary Etiquette &amp; Guest Guidelines:</div>
      <ul>
        <li>Please arrive 10-15 minutes prior to your scheduled time to relax with our complimentary saffron or chamomile tea.</li>
        <li>Appointments may be cancelled or rescheduled up to 2 hours prior without fee via your online My Bookings dashboard.</li>
        <li>Complimentary valet parking is available at the 42 Rose Gold Avenue entrance.</li>
      </ul>
    </div>

    <div class="slip-footer">
      <div>
        <div class="barcode-sim">||| | |||| || ||| ||||| |||</div>
        <span>Auth Code: ${booking.id}-VERIFIED</span>
      </div>
      <div style="text-align: right;">
        <span style="font-weight: 600;">LuxeGlow Salon &amp; Spa Sanctuary</span><br>
        <span>Computer generated receipt • No physical signature required</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

// Direct Clean Iframe Printing Function
function printBookingSlip(booking) {
  const targetBooking = booking || currentReceiptBooking;
  if (!targetBooking) {
    window.print();
    return;
  }

  showToast("Printing Booking Slip", "Generating formatted appointment voucher...", "info");

  try {
    let printFrame = document.getElementById("luxeglowPrintFrame");
    if (!printFrame) {
      printFrame = document.createElement("iframe");
      printFrame.id = "luxeglowPrintFrame";
      printFrame.title = "Print Booking Slip";
      printFrame.style.position = "fixed";
      printFrame.style.top = "-9999px";
      printFrame.style.left = "-9999px";
      printFrame.style.width = "1px";
      printFrame.style.height = "1px";
      printFrame.style.border = "none";
      printFrame.style.opacity = "0";
      document.body.appendChild(printFrame);
    }

    const frameDoc = printFrame.contentDocument || printFrame.contentWindow.document;
    frameDoc.open();
    frameDoc.write(generateReceiptHTML(targetBooking));
    frameDoc.close();

    // Trigger print after iframe renders
    setTimeout(() => {
      try {
        printFrame.contentWindow.focus();
        printFrame.contentWindow.print();
      } catch (err) {
        console.warn("Direct iframe print blocked, falling back to window.print()", err);
        window.print();
      }
    }, 250);
  } catch (error) {
    console.error("Print error, using standard fallback:", error);
    window.print();
  }
}

// 1. Receipt / Confirmation Modal
function showReceiptModal(booking) {
  const modal = document.getElementById("confirmationModal");
  if (!modal || !booking) return;

  currentReceiptBooking = booking;

  document.getElementById("receiptClientName").textContent = booking.customer.name;
  document.getElementById("receiptBookingId").textContent = booking.id;
  document.getElementById("receiptServiceName").textContent = booking.serviceName;
  document.getElementById("receiptCategory").textContent = booking.category;
  document.getElementById("receiptStylistName").textContent = booking.stylistName;
  document.getElementById("receiptDateTime").textContent = `${formatDisplayDate(booking.date)} at ${booking.time}`;
  document.getElementById("receiptDuration").textContent = `${booking.duration} Minutes`;
  document.getElementById("receiptCustomerContact").textContent = `${booking.customer.phone} • ${booking.customer.email}`;
  document.getElementById("receiptTotalPrice").textContent = `₹ ${booking.pricing.total.toLocaleString("en-IN")}`;

  openModal(modal);

  // Print button
  const printBtn = document.getElementById("printReceiptBtn");
  if (printBtn) {
    printBtn.onclick = () => {
      printBookingSlip(currentReceiptBooking);
    };
  }

  // View bookings button
  const viewBtn = document.getElementById("viewBookingsBtn");
  if (viewBtn) {
    viewBtn.onclick = () => {
      closeModal(modal);
      scrollToSection("my-bookings");
    };
  }
}

// 2. Stylist Portfolio Modal
function openStylistModal(stylistId) {
  const stylist = STYLISTS_DATA.find(s => s.id === stylistId);
  if (!stylist) return;

  const modal = document.getElementById("stylistModal");
  const modalBody = document.getElementById("stylistModalBody");

  modalBody.innerHTML = `
    <div class="stylist-modal-grid">
      <div class="stylist-modal-portrait">
        <img src="${stylist.image}" alt="${stylist.name}" onerror="this.src='assets/images/fallback.svg'">
      </div>
      <div class="stylist-modal-details">
        <h3>${stylist.name}</h3>
        <span class="stylist-modal-role">${stylist.role}</span>
        
        <div class="stylist-rating-row">
          <div class="stars-gold">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <span class="rating-score">${stylist.rating}</span>
          <span class="review-count-text">(${stylist.reviewsCount} authentic reviews • ${stylist.experience})</span>
        </div>

        <p class="stylist-modal-bio">${stylist.bio}</p>

        <span class="stylist-gallery-title"><i class="fa-solid fa-camera-retro"></i> Recent Transformations</span>
        <div class="stylist-mini-gallery">
          ${stylist.portfolio.map(img => `<img src="${img}" alt="Client Work" loading="lazy" onerror="this.src='assets/images/fallback.svg'">`).join("")}
        </div>

        <button class="btn btn-luxury btn-block" id="modalBookStylistBtn">
          <i class="fa-regular fa-calendar-check"></i> Book Session with ${stylist.name.split(" ")[0]}
        </button>
      </div>
    </div>
  `;

  // Direct Book CTA
  document.getElementById("modalBookStylistBtn").onclick = () => {
    closeModal(modal);
    selectStylistAndScroll(stylist.id);
  };

  openModal(modal);
}

// 3. Write a Review Modal
function setupReviewModal() {
  const openBtn = document.getElementById("openReviewModalBtn");
  const modal = document.getElementById("reviewModal");
  const form = document.getElementById("newReviewForm");
  const starContainer = document.getElementById("interactiveStarRating");
  const starValueInput = document.getElementById("selectedStarValue");
  const ratingHint = document.getElementById("ratingTextHint");
  if (!openBtn || !modal || !form) return;

  openBtn.addEventListener("click", () => {
    openModal(modal);
  });

  // Star Rating Picker
  const stars = starContainer.querySelectorAll(".star-rate");
  const hints = {
    1: "1.0 (Needs Improvement)",
    2: "2.0 (Fair)",
    3: "3.0 (Good)",
    4: "4.0 (Very Good)",
    5: "5.0 (Exceptional)"
  };

  stars.forEach(star => {
    star.addEventListener("click", () => {
      const rating = parseInt(star.dataset.rating, 10);
      starValueInput.value = rating;
      ratingHint.textContent = hints[rating] || `${rating}.0`;

      stars.forEach(s => {
        const r = parseInt(s.dataset.rating, 10);
        if (r <= rating) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });
    });
  });

  // Form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("reviewAuthorName").value.trim();
    const service = document.getElementById("reviewServiceSelect").value;
    const comment = document.getElementById("reviewComment").value.trim();
    const rating = parseInt(starValueInput.value, 10) || 5;

    if (!name || !service || !comment) {
      showToast("Missing Fields", "Please complete all fields to publish your review.", "danger");
      return;
    }

    const newRev = {
      id: `rev-${Date.now()}`,
      author: name,
      rating: rating,
      service: service,
      comment: comment,
      date: "Just now",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      verified: true
    };

    const reviews = getReviews();
    reviews.unshift(newRev);
    saveReviews(reviews);

    renderReviews();
    closeModal(modal);
    form.reset();

    showToast("Review Published!", "Thank you for sharing your experience at LuxeGlow.", "success");
  });
}

// 4. Cancellation Confirmation Dialog
let bookingIdPendingCancel = null;

function promptCancelBooking(bookingId) {
  const modal = document.getElementById("cancelConfirmModal");
  if (!modal) return;

  bookingIdPendingCancel = bookingId;
  document.getElementById("cancelModalBody").textContent = 
    `Are you sure you want to cancel appointment ${bookingId}? Your suite and master stylist slot will be released.`;

  openModal(modal);
}

function setupCancelModalHandlers() {
  const modal = document.getElementById("cancelConfirmModal");
  const confirmBtn = document.getElementById("confirmCancelBtn");
  const abortBtn = document.getElementById("abortCancelBtn");
  if (!modal || !confirmBtn || !abortBtn) return;

  confirmBtn.addEventListener("click", () => {
    if (!bookingIdPendingCancel) return;

    const appointments = getAppointments();
    const target = appointments.find(b => b.id === bookingIdPendingCancel);
    if (target) {
      target.status = "Cancelled";
      saveAppointments(appointments);
      renderMyBookings();
      updateSlotAvailability();
      showToast("Booking Cancelled", `Appointment ${bookingIdPendingCancel} has been marked as cancelled.`, "danger");
    }

    bookingIdPendingCancel = null;
    closeModal(modal);
  });

  abortBtn.addEventListener("click", () => {
    bookingIdPendingCancel = null;
    closeModal(modal);
  });
}

// Modal Utility Functions
function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("active");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("active");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModalClosers() {
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal-backdrop");
      closeModal(modal);
    });
  });

  // Click outside dialog to close
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });

  // ESC key to close active modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal-backdrop.active");
      if (activeModal) closeModal(activeModal);
    }
  });
}

// ==========================================================================
// 7. TOAST NOTIFICATION ENGINE
// ==========================================================================

function showToast(title, message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const iconClass = type === "success" 
    ? "fa-solid fa-circle-check" 
    : type === "danger" 
    ? "fa-solid fa-triangle-exclamation" 
    : "fa-solid fa-bell";

  toast.innerHTML = `
    <i class="${iconClass} toast-icon"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close-btn" aria-label="Dismiss notification">&times;</button>
  `;

  const closeBtn = toast.querySelector(".toast-close-btn");
  closeBtn.addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 350);
  });

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Auto remove after 4.5 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 350);
    }
  }, 4500);
}

// ==========================================================================
// 8. FILTERS, SEARCH, CONTACT & ACCORDION
// ==========================================================================

// Service Categories & Search Filters
function setupServiceFilters() {
  const tabs = document.querySelectorAll(".category-tab");
  const searchInput = document.getElementById("serviceSearchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const resetBtn = document.getElementById("resetServicesFilterBtn");

  let activeCategory = "all";
  let searchKeyword = "";

  const applyFilters = () => {
    const filtered = SERVICES_DATA.filter(service => {
      const matchesCategory = (activeCategory === "all") || (service.category === activeCategory);
      const matchesSearch = !searchKeyword || 
        service.name.toLowerCase().includes(searchKeyword) ||
        service.description.toLowerCase().includes(searchKeyword) ||
        service.products.toLowerCase().includes(searchKeyword);
      return matchesCategory && matchesSearch;
    });

    renderServices(filtered);
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      activeCategory = tab.dataset.category;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value.trim().toLowerCase();
      if (searchClearBtn) {
        if (searchKeyword.length > 0) {
          searchClearBtn.classList.add("visible");
        } else {
          searchClearBtn.classList.remove("visible");
        }
      }
      applyFilters();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchKeyword = "";
      searchClearBtn.classList.remove("visible");
      applyFilters();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchKeyword = "";
      if (searchClearBtn) searchClearBtn.classList.remove("visible");
      tabs.forEach(t => t.classList.remove("active"));
      tabs[0].classList.add("active");
      activeCategory = "all";
      applyFilters();
    });
  }

  // Footer category links triggering filters
  document.querySelectorAll("[data-filter-trigger]").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetCat = link.dataset.filterTrigger;
      const targetTab = document.querySelector(`.category-tab[data-category="${targetCat}"]`);
      if (targetTab) {
        targetTab.click();
      }
    });
  });
}

// My Bookings Tabs Filter
function setupMyBookingsTabs() {
  const tabs = document.querySelectorAll(".booking-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      renderMyBookings(filter);
    });
  });
}

// FAQ Accordion
function setupFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove("active");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// Contact Form with Real-time Validation
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const phone = document.getElementById("contactPhone");
    const msg = document.getElementById("contactMessage");

    let isValid = true;

    if (!name.value.trim() || name.value.trim().length < 2) {
      name.classList.add("is-invalid");
      document.getElementById("contactNameError").classList.add("visible");
      isValid = false;
    } else {
      name.classList.remove("is-invalid");
      document.getElementById("contactNameError").classList.remove("visible");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add("is-invalid");
      document.getElementById("contactEmailError").classList.add("visible");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
      document.getElementById("contactEmailError").classList.remove("visible");
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value.replace(/\D/g, ""))) {
      phone.classList.add("is-invalid");
      document.getElementById("contactPhoneError").classList.add("visible");
      isValid = false;
    } else {
      phone.classList.remove("is-invalid");
      document.getElementById("contactPhoneError").classList.remove("visible");
    }

    if (!msg.value.trim() || msg.value.trim().length < 10) {
      msg.classList.add("is-invalid");
      document.getElementById("contactMessageError").classList.add("visible");
      isValid = false;
    } else {
      msg.classList.remove("is-invalid");
      document.getElementById("contactMessageError").classList.remove("visible");
    }

    if (!isValid) return;

    showToast("Message Sent!", `Thank you, ${name.value.trim()}! Our concierge will contact you within 2 business hours.`, "success");
    form.reset();
  });
}

// Newsletter Form
function setupNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("newsletterEmail");
  const feedback = document.getElementById("newsletterFeedback");
  if (!form || !emailInput) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
      feedback.className = "newsletter-feedback";
      feedback.style.color = "#FF8A80";
      feedback.textContent = "Please enter a valid email address.";
      return;
    }

    feedback.className = "newsletter-feedback success";
    feedback.textContent = "Welcome to LuxeGlow Club! Check your inbox for your 10% coupon.";
    showToast("Subscribed!", "Welcome to our VIP Sanctuary Club.", "success");
    emailInput.value = "";
  });
}

// ==========================================================================
// 9. NAVIGATION, MOBILE MENU & SCROLL EFFECTS
// ==========================================================================

function setupNavigation() {
  const header = document.getElementById("header");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll spy for active link
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("open");
      if (isOpen) {
        navMenu.classList.remove("open");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
      } else {
        navMenu.classList.add("open");
        mobileToggle.classList.add("active");
        mobileToggle.setAttribute("aria-expanded", "true");
      }
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

// Smooth scrolling with sticky header offset
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const headerHeight = document.getElementById("header")?.offsetHeight || 80;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}

// Utility Date Formatter
function formatDisplayDate(dateStr) {
  if (!dateStr) return "-";
  const [year, month, day] = dateStr.split("-");
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

// ==========================================================================
// 10. SCROLL TRENDING ANIMATIONS & PROGRESS TRACKER
// ==========================================================================

// 1. Scroll Progress Bar Engine
function setupScrollProgressBar() {
  const progressBar = document.getElementById("scrollProgressBar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

// 2. Scroll Reveal Animations (IntersectionObserver)
function setupScrollReveal() {
  // Elements to automatically observe
  const targets = document.querySelectorAll(
    ".section-header, .service-card, .stylist-card, .pillar-card, .review-card, .booking-form-card, .summary-card, .promo-banner-card, .info-card, .contact-form-card, .faq-item"
  );

  targets.forEach((el, index) => {
    el.classList.add("reveal-on-scroll");
    // Add staggered delay for grid children
    const delay = (index % 4) + 1;
    el.classList.add(`reveal-delay-${delay}`);
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // Animate once
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    document.querySelectorAll(".reveal-on-scroll").forEach(el => el.classList.add("is-visible"));
  }
}

// 3. Live Trending Booking Activity Ticker (Social Proof Pill)
function setupTrendingActivityTicker() {
  const pill = document.getElementById("trendingActivityPill");
  const textEl = document.getElementById("trendingPillText");
  const closeBtn = document.getElementById("closeTrendingPill");
  if (!pill || !textEl) return;

  const trendingEvents = [
    "Priya K. just reserved Russian Structured Gel Manicure (3 mins ago)",
    "Dr. Ananya R. booked 24K Gold Illuminating Facial with Meera Varma",
    "Sneha M. secured French Balayage with Master Director Aarav",
    "Kavita S. reserved The Royal Imperial Bridal Makeover for December",
    "Rohan D. booked Groom's Executive Royal Grooming for Saturday",
    "Shalini T. applied promo code GLOW10 for 10% instant discount"
  ];

  let eventIndex = 0;
  let isClosedByUser = false;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      isClosedByUser = true;
      pill.classList.remove("show");
    });
  }

  // Display initial trending notice after 3 seconds
  setTimeout(() => {
    if (isClosedByUser) return;
    textEl.textContent = trendingEvents[eventIndex];
    pill.classList.add("show");

    // Hide after 5.5 seconds
    setTimeout(() => {
      if (!isClosedByUser) pill.classList.remove("show");
    }, 5500);
  }, 3000);

  // Cycle through trending activities every 15 seconds
  setInterval(() => {
    if (isClosedByUser) return;
    eventIndex = (eventIndex + 1) % trendingEvents.length;
    textEl.textContent = trendingEvents[eventIndex];
    pill.classList.add("show");

    setTimeout(() => {
      if (!isClosedByUser) pill.classList.remove("show");
    }, 6000);
  }, 15000);
}

// ==========================================================================
// 11. 3D SPATIAL SCROLL & FLIGHT WINDOW ENGINE
// ==========================================================================

// 1. 3D Spatial Architectural Flight Window Viewport
function setupSpatialFlightWindow() {
  const windowEl = document.getElementById("spatialFlightWindow");
  const stageEl = document.getElementById("spatialStage");
  const reflection = document.getElementById("spatialReflection");
  const sectionEl = document.getElementById("spatial-portal");
  const statusEl = document.getElementById("spatialActiveSuiteName");
  const gyroLabel = document.getElementById("spatialGyroStatus");
  const buttons = document.querySelectorAll(".spatial-flight-btn");
  const hotspots = document.querySelectorAll(".spatial-hotspot");

  if (!windowEl || !stageEl || !sectionEl) return;

  let currentTiltX = 0;
  let currentTiltY = 0;
  let targetTiltX = 0;
  let targetTiltY = 0;
  let scrollFlightZoom = 1;
  let activeFlyPreset = "overview";

  // Preset virtual camera angles for 3D flight
  const flightPresets = {
    overview: {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      translateX: 0,
      translateY: 0,
      label: "Hover cursor to tilt window • Click suite nodes to fly in"
    },
    hair: {
      rotateX: 6,
      rotateY: 14,
      scale: 1.25,
      translateX: 110,
      translateY: 30,
      label: "Flight View: Private Suite 01 — Hair Architecture & Balayage Pod"
    },
    facial: {
      rotateX: 4,
      rotateY: -16,
      scale: 1.25,
      translateX: -120,
      translateY: 20,
      label: "Flight View: Private Suite 02 — HydraFacial & 24K Gold Lounge"
    },
    nails: {
      rotateX: -10,
      rotateY: 0,
      scale: 1.22,
      translateX: 0,
      translateY: -65,
      label: "Flight View: Private Suite 03 — Russian Gel Nail Bar & Spa Pedicure"
    },
    bridal: {
      rotateX: 12,
      rotateY: 0,
      scale: 1.28,
      translateX: 0,
      translateY: 70,
      label: "Flight View: VIP Royal Chamber — The Imperial Bridal Couture Suite"
    }
  };

  // 3D Gyro / Cursor Parallax Tracking on the Flight Window
  stageEl.addEventListener("mousemove", (e) => {
    const rect = windowEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized from -1 to 1
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Tilt limits: -14 to +14 degrees
    targetTiltX = -normY * 13;
    targetTiltY = normX * 13;

    // Move specular reflection
    if (reflection) {
      reflection.style.transform = `translate(${normX * 45}px, ${normY * 45}px)`;
      reflection.style.opacity = "0.9";
    }

    if (gyroLabel) gyroLabel.textContent = "3D Cursor Tilt: Dynamic";
  });

  stageEl.addEventListener("mouseleave", () => {
    targetTiltX = 0;
    targetTiltY = 0;
    if (reflection) {
      reflection.style.transform = "translate(0, 0)";
      reflection.style.opacity = "0.5";
    }
    if (gyroLabel) gyroLabel.textContent = "Interactive Cursor Tilt";
  });

  // Camera Flight Controls
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.dataset.flyTarget;
      activeFlyPreset = target;
      const preset = flightPresets[target] || flightPresets.overview;

      if (statusEl) statusEl.textContent = preset.label;

      // Animate active hotspot pulse
      hotspots.forEach(hs => {
        if (hs.dataset.suite === target) {
          hs.classList.add("active");
        } else {
          hs.classList.remove("active");
        }
      });

      showToast("3D Flight Camera", `Virtual flight navigated to ${target.toUpperCase()} Sanctuary.`, "info");
    });
  });

  // Clicking hotspots directly
  hotspots.forEach(hs => {
    hs.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      const suite = hs.dataset.suite;
      const matchBtn = document.querySelector(`.spatial-flight-btn[data-fly-target="${suite}"]`);
      if (matchBtn) matchBtn.click();
    });
  });

  // Scroll-Driven Flight Zoom & Fly-Through
  window.addEventListener("scroll", () => {
    const rect = sectionEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const visibleRange = windowHeight + rect.height;
      const scrollPos = windowHeight - rect.top;
      const progress = Math.min(1, Math.max(0, scrollPos / visibleRange));

      // Flight zoom forward through the window
      scrollFlightZoom = 0.98 + (progress * 0.14);
    }
  }, { passive: true });

  // Smooth 60fps Physics Render Loop
  function render3DFlight() {
    currentTiltX += (targetTiltX - currentTiltX) * 0.12;
    currentTiltY += (targetTiltY - currentTiltY) * 0.12;

    const preset = flightPresets[activeFlyPreset] || flightPresets.overview;
    const finalRotateX = preset.rotateX + currentTiltX;
    const finalRotateY = preset.rotateY + currentTiltY;
    const finalScale = preset.scale * scrollFlightZoom;
    const finalTransX = preset.translateX;
    const finalTransY = preset.translateY;

    windowEl.style.transform = `
      translate3d(${finalTransX}px, ${finalTransY}px, 0)
      scale3d(${finalScale}, ${finalScale}, ${finalScale})
      rotateX(${finalRotateX.toFixed(2)}deg)
      rotateY(${finalRotateY.toFixed(2)}deg)
    `;

    requestAnimationFrame(render3DFlight);
  }

  requestAnimationFrame(render3DFlight);
}

// 2. Ambient Floating Gold Dust & Rose Petals 3D Canvas
function setupSpatialAtmosphereCanvas() {
  const canvas = document.getElementById("spatialAtmosphereCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 45;
  let lastScrollY = window.pageYOffset;
  let scrollSpeed = 0;

  function resize() {
    if (!canvas.parentElement) return;
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  resize();
  window.addEventListener("resize", resize);

  // Initialize particles with 3D depth factor (z: 0.3 to 2.2)
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * (width || 800),
      y: Math.random() * (height || 600),
      z: 0.3 + Math.random() * 2.2,
      radius: 1.5 + Math.random() * 3,
      baseSpeedX: (Math.random() - 0.5) * 0.4,
      baseSpeedY: 0.3 + Math.random() * 0.7,
      angle: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.03,
      isPetal: Math.random() > 0.65,
      color: Math.random() > 0.5 ? "rgba(212, 175, 55, " : "rgba(232, 165, 152, "
    });
  }

  window.addEventListener("scroll", () => {
    const currentY = window.pageYOffset;
    scrollSpeed = Math.min(6, Math.max(-6, (currentY - lastScrollY) * 0.15));
    lastScrollY = currentY;
  }, { passive: true });

  function drawAtmosphere() {
    ctx.clearRect(0, 0, width, height);
    scrollSpeed *= 0.94;

    particles.forEach(p => {
      p.x += p.baseSpeedX * p.z;
      p.y += (p.baseSpeedY + scrollSpeed) * p.z;
      p.angle += p.spinSpeed;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      const alpha = Math.min(0.85, 0.2 + (p.z / 2.2) * 0.5);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      if (p.isPetal) {
        ctx.fillStyle = p.color + alpha + ")";
        ctx.beginPath();
        ctx.ellipse(0, 0, p.radius * 2 * p.z, p.radius * p.z, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.shadowBlur = 8 * p.z;
        ctx.shadowColor = "#D4AF37";
        ctx.fillStyle = p.color + alpha + ")";
        ctx.beginPath();
        ctx.arc(0, 0, p.radius * p.z, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    requestAnimationFrame(drawAtmosphere);
  }

  requestAnimationFrame(drawAtmosphere);
}

// 3. Interactive 3D Card Hover Physics
function setupInteractive3DCardTilt() {
  const tiltCards = document.querySelectorAll(".service-card, .stylist-card, .pillar-card");

  tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width) * 2 - 1;
      const normY = (y / rect.height) * 2 - 1;

      const tiltX = -normY * 9;
      const tiltY = normX * 9;

      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// ==========================================================================
// 12. USER AUTHENTICATION & SESSION CONTROLLER
// ==========================================================================

const AUTH_STORAGE_KEY = "luxeglow_current_user";

function getCurrentUser() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setupUserAuthentication() {
  const navAuthWrapper = document.getElementById("navAuthWrapper");
  const mobileAuthItem = document.getElementById("mobileAuthItem");
  const user = getCurrentUser();

  if (!navAuthWrapper) return;

  if (user) {
    // Generate initials for avatar badge
    const nameParts = user.name.split(" ");
    const initials = nameParts.length >= 2 
      ? (nameParts[0][0] + nameParts[1][0]).toUpperCase() 
      : user.name.substring(0, 2).toUpperCase();

    // Render logged in user profile dropdown in navbar
    navAuthWrapper.innerHTML = `
      <div class="user-profile-menu" id="userProfileMenu">
        <button type="button" class="user-profile-trigger" id="userProfileTrigger" aria-label="User Account Menu" aria-expanded="false">
          <div class="user-avatar-badge">${initials}</div>
          <span class="user-greeting">Hi, ${nameParts[0]}</span>
          <i class="fa-solid fa-chevron-down user-chevron"></i>
        </button>
        <div class="user-dropdown-pane" id="userDropdownPane">
          <div class="dropdown-user-info">
            <strong>${user.name}</strong>
            <span class="vip-status-tag"><i class="fa-solid fa-crown"></i> ${user.badge || 'VIP Member'}</span>
          </div>
          <div class="dropdown-divider"></div>
          <a href="#my-bookings" class="dropdown-item"><i class="fa-solid fa-calendar-check"></i> My Bookings</a>
          <a href="#booking" class="dropdown-item"><i class="fa-solid fa-sparkles"></i> New Reservation</a>
          <div class="dropdown-divider"></div>
          <button type="button" class="dropdown-item logout-btn" id="logoutBtn">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
          </button>
        </div>
      </div>
    `;

    // Dropdown toggle
    const trigger = document.getElementById("userProfileTrigger");
    const menu = document.getElementById("userProfileMenu");

    if (trigger && menu) {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.contains("open");
        if (isOpen) {
          menu.classList.remove("open");
          trigger.setAttribute("aria-expanded", "false");
        } else {
          menu.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target)) {
          menu.classList.remove("open");
          trigger.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Logout button handler
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        showToast("Signed Out", "You have securely signed out of your sanctuary session.", "info");
        setTimeout(() => {
          setupUserAuthentication();
        }, 300);
      });
    }

    // Update Mobile Nav link
    if (mobileAuthItem) {
      mobileAuthItem.innerHTML = `
        <a href="#my-bookings" class="nav-link">
          <i class="fa-solid fa-crown"></i> ${user.name} (VIP)
        </a>
      `;
    }

    // Pre-fill Appointment Booking Form inputs if empty
    const nameInput = document.getElementById("customerName");
    const phoneInput = document.getElementById("customerPhone");
    const emailInput = document.getElementById("customerEmail");

    if (nameInput && !nameInput.value) nameInput.value = user.name;
    if (phoneInput && !phoneInput.value && user.phone) phoneInput.value = user.phone;
    if (emailInput && !emailInput.value && user.email) emailInput.value = user.email;

  } else {
    // Guest state
    navAuthWrapper.innerHTML = `
      <a href="login.html" class="btn btn-outline btn-sm nav-login-btn" id="navLoginBtn">
        <i class="fa-regular fa-user"></i> Sign In
      </a>
    `;

    if (mobileAuthItem) {
      mobileAuthItem.innerHTML = `
        <a href="login.html" class="nav-link">
          <i class="fa-regular fa-user"></i> Sign In / VIP Club
        </a>
      `;
    }
  }
}

// ==========================================================================
// 13. SYSTEM INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initLocalStorage();
  renderServices();
  renderStylists();
  renderTimeSlots();
  renderMyBookings();
  renderReviews();
  updateNavBadge();

  // Setup interactive engines
  initDatePicker();
  setupCategoryChangeHandler();
  setupStylistChangeHandler();
  setupPromoCodeEngine();
  setupBookingFormSubmission();

  // Setup UI components
  setupServiceFilters();
  setupMyBookingsTabs();
  setupFAQAccordion();
  setupContactForm();
  setupNewsletterForm();
  setupNavigation();
  initModalClosers();
  setupReviewModal();
  setupCancelModalHandlers();

  // Setup Scroll Trending Animations
  setupScrollProgressBar();
  setupScrollReveal();
  setupTrendingActivityTicker();

  // Setup 3D Spatial Scroll & Flight Window
  setupSpatialFlightWindow();
  setupSpatialAtmosphereCanvas();
  setupInteractive3DCardTilt();

  // Setup User Authentication & Session
  setupUserAuthentication();

  console.log("🌸 LuxeGlow Salon & Spa System initialized successfully with Login Portal & VIP Session Management.");
});
