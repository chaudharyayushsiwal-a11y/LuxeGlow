# LuxeGlow — Local Beauty Salon & Spa Appointment Booking System

> A luxury commercial-grade beauty salon and holistic spa appointment booking platform built with modern HTML5, CSS3, Vanilla JavaScript, LocalStorage state management, advanced 3D spatial flight window physics, live movement scroll animations, interactive receipt printing, and an all-in-one deployable architecture.

---

## 🌟 1. Project Overview

**LuxeGlow** is a responsive, interactive web application engineered for high-end local beauty salons, wellness centers, and medical day spas. It provides a seamless, friction-free booking journey for clients to discover curated beauty treatments, choose specialized master stylists, select appointment dates and times, and manage reservations directly within their local browser session without relying on third-party paid backend services.

### 🎨 Key Design Aesthetic
- **Color Palette:** Cream (`#FAF7F2`), Warm Beige (`#F4EFEA`), Soft Blush Pink (`#FDF2F0`), Card White (`#FFFFFF`), and metallic Rose Gold (`#C59B6D` / `#9A6B3E`).
- **Typography:** *Playfair Display* for luxury editorial serif headings; *Plus Jakarta Sans* for clean, modern, legible UI copy.
- **Visual Ambiance:** High-definition photography, delicate rounded corners (`border-radius: 14px-32px`), golden glowing accents, subtle drop shadows, and responsive glassmorphism navigation.
- **All-in-One Deployment:** `index.html` is completely self-contained with embedded CSS, JavaScript, and Base64 SVG assets. You can drag just `index.html` directly onto Netlify Drop to make the site public instantly!

---

## ✨ 2. Advanced 3D & Live Movement Features Breakdown

### A. Global Interactive 3D Ambient Atmosphere Canvas
- **Full-Screen 3D Atmosphere Canvas (`#globalAtmosphereCanvas`):** Fixed background canvas rendering floating organic rose petals, shimmering gold dust particles, and luminescent orbs.
- **Scroll Velocity Interaction:** Particles dynamically accelerate in 3D parallax space as the user scrolls up or down (faster scrolling = dynamic flying speed lines and petal drift).
- **Mouse Proximity Wake:** Moving the cursor gently repels nearby particles with smooth physics.

### B. Luxury 3D Cursor Spotlight & Floating Aura
- **Interactive Cursor Spotlight (`#cursorSpotlight`):** Silky-smooth luminous halo that tracks the cursor using `requestAnimationFrame` lerp interpolation.
- **Contextual Hover Expansion:** Spotlight expands and intensifies to a radiant gold aura when hovering over buttons, cards, suite nodes, or navigation links.

### C. Hero Section 3D Multi-Layered Floating Parallax
- **Hero 3D Depth Stage (`#hero3DStage`):** Multi-layered 3D perspective (`perspective: 1200px`) that shifts smoothly with cursor movement.
- **Floating 3D Levitation Badges:**
  - Left Badge: `4.9 / 5 Rating ★★★★★ (1,480+ Authentic Reviews)`
  - Right Badge: `Haute Couture & Spa (Award-Winning Sanctuary)`
  - Floating 3D golden rings (`.ring-hero-1`, `.ring-hero-2`) and breathing aura blobs.
- **Scroll Parallax:** Background photo gently pans downward as user scrolls, creating a cinematic departure.

### D. 3D Spatial Sanctuary Flight Window — Live HUD & Flight Controls
- **3D Spatial Viewport Stage:** An architectural glass flight window featuring multi-layered 3D depth (`translateZ` layers, glowing ambient light orbs, and panoramic salon sanctuary suites).
- **Interactive Cursor 3D Parallax & Glare:** Dynamic gyro-tilt that calculates mouse coordinates in real-time, tilting the window in 3D perspective (`rotateX`, `rotateY`) while moving a specular glass glare reflection.
- **Live Pitch & Yaw HUD Readout:** Shows real-time pitch/yaw degrees (`Pitch: -3.8° | Yaw: +5.2°`) updated continuously on mouse move.
- **Spatial Flight Reticle Crosshair:** Center flight crosshair that pans dynamically in 3D space with orientation tilt.
- **Audio Equalizer Waveform:** Animated ambient soundwave frequency bars pulsating in the HUD.
- **Virtual Camera Flight Presets:** Interactive HUD controls to fly the virtual camera directly into *Hair Architecture, Skincare Lounge, Nail Studio*, or the *Imperial Bridal Chamber*.
- **Interactive Suite Hotspot Nodes:** Glowing 3D pulsing nodes with hover cards providing suite details and quick booking shortcuts.

### E. Multi-Layer 3D Tilt with Real-Time Specular Glare
- **Dynamic 3D Card Hover Physics:** Real-time 3D tilt on all service cards, stylist cards, and pillar highlights.
- **Specular Glare Reflection (`.card-specular-glare`):** Real-time radial gradient reflection positioned under the cursor coordinates via CSS variables `--mouse-x` and `--mouse-y`.
- **Z-Axis Layer Separation:** On hover, card images, category badges, price tags, and buttons physically lift outwards on `translateZ` layers.

### F. Scroll Trending Animations & Velocity Skew
- **Infinite Trending Ticker Marquee:** Continuous 60fps horizontal marquee featuring trending salon treatments, discounts, and real-time updates.
- **Scroll Velocity Skew:** Ticker dynamically speeds up and skews (`skewX`) based on scrolling velocity, returning elastically to 0deg when scrolling stops.
- **Scroll Depth Progress Bar:** Sleek rose gold indicator along the header tracking user page read progress.
- **3D Stagger Reveal (IntersectionObserver):** Cards cascade in with 3D perspective flip (`rotateX(12deg) translateY(40px)` to `rotateX(0deg) translateY(0)`).
- **Live Social Proof Pill:** Floating badge displaying recent live client appointments in Indiranagar.

### G. Interactive Price Counter & Golden Ripple Clicks
- **Animated Number Counter:** Changing treatments or applying promo codes triggers a smooth animated counter with a golden pulse flash (`@keyframes pricePulseAnim`).
- **Water Ripple Click Effect:** Clicking any button or time slot spawns an expanding golden ripple wave that radiates outward from the click position.

### H. Curated Service Menu (4 Categories, 16 Services)
1. **Hair Cuts & Styling:** Signature Haircut & Blowdry, Luxe Balayage & Gloss, Botox Hair Spa & Restorative Mask, Organic Keratin Smoothing.
2. **Facials & Skincare:** Hydra-Infusion Glow Facial, 24K Gold Luxury Illuminating Facial, Ayurvedic Kumkumadi Radiance Therapy, Deep Pore Detox & Charcoal Purifying.
3. **Manicure/Pedicure:** Luxe Rose Petal Spa Pedicure, Russian Structured Gel Manicure, Champagne & Truffle Pedicure, Classic Express French Polish.
4. **Bridal Packages:** The Royal Imperial Bridal Makeover, Pre-Bridal Radiance Countdown, Cocktail & Sangeet Glam, Groom's Executive Royal Grooming.
- **Interactive Controls:** Filter by category pills, live instant search input, and one-click "Book Now" buttons that pre-fill the booking engine.

### I. Stylist Selection & Portfolios
- **4 Master Stylists:**
  - *Aarav Singhania* — Master Creative Director & Hair Architect (10+ Years)
  - *Meera Varma* — Senior Clinical Aesthetician & Skin Healer (8+ Years)
  - *Chloe D'Souza* — Lead Nail Couture Artist & Pedicurist (6+ Years)
  - *Rhea Kapoor* — Celebrity Bridal & Haute Couture Makeup Artist (12+ Years)
- **Stylist Portfolio Modal:** Shows high-resolution client work gallery, specialty tags, customer review counts, and instant "Book Session" CTA.
- **Select Stylist Action:** Automatically sets the stylist in the booking form and scrolls into view.

### J. Appointment Booking Engine
- **Dynamic Category & Treatment Dropdowns:** Changing category updates specific treatments with price and duration metadata.
- **Stylist Selection:** Pick your favorite master stylist or choose "Any Available Specialist".
- **Date Picker with Boundary Validation:** HTML5 `min` attribute set dynamically via JavaScript to today's date, preventing past date bookings.
- **Time Slots (Morning, Afternoon, Evening):** Interactive slot buttons. Checks LocalStorage to disable slots already booked for that date and stylist.
- **Coupon / Promo Code System:**
  - `GLOW10` — 10% Welcome Discount (up to ₹2,000).
  - `WELCOME20` — 20% Festive Off (up to ₹3,000).
  - `LUXE500` — Flat ₹500 discount on services ₹2,000 and above.
- **Live Summary Sidebar:** Real-time summary showing selected treatment, duration, stylist, date & time, itemized price breakdown, and total amount payable.
- **Client Form Validation:** Validates full name (min 2 characters), phone number (10 digits), and valid email address.

### K. Booking Confirmation & Printable Receipt Voucher
- **Unique Booking Reference:** Formats unique reference ID (e.g., `LXG-2026-8419`).
- **Confirmation Modal:** Displays a checkmark animation, client details, scheduled date/time, and appointment instructions.
- **Direct Clean Print Engine (`printBookingSlip`):** Direct iframe printing generates an official, crisp salon appointment voucher without multi-page blanks, dark modal overlays, or browser clipping. Also backed by `@media print` CSS rules.
- **LocalStorage Sync:** Saves appointment immediately to `luxeglow_appointments`.

### L. My Bookings Management Section
- **Full Booking Management:** Lists all saved appointments from LocalStorage.
- **Filter Tabs:** View "All Bookings", "Active / Confirmed", or "Cancelled".
- **Cancel Appointment with Confirmation Modal:** Prevents accidental clicks, updates booking status to "Cancelled", updates navbar badge, and displays a toast notification.
- **Slip Re-print:** Ability to view and print the receipt slip for any existing booking at any time.

### M. VIP Sanctuary Authentication & Membership Modal
- **Dual-Tab Authentication:** Switch seamlessly between **Sign In** and **Create VIP Profile**.
- **1-Click Instant Demo Login (Viva / Examiner Ready):**
  - **Client Demo:** Dr. Radhika Sen (`radhika.sen@example.com` / `password123`)
  - **Stylist / Staff Demo:** Master Stylist Aarav (`aarav.stylist@luxeglow.com` / `password123`)
- **Live Password Strength Meter:** Visual color-coded strength bar (Weak / Moderate / Strong).
- **Password Visibility Toggles:** Eye icons to reveal/mask password inputs.
- **Navbar Profile State:** Once logged in, the navigation replaces the "Sign In" button with an authenticated **User Profile Menu** (`RS`, `Hi, Radhika`, VIP Gold status tag, and dropdown with links to My Bookings, New Reservation, and Sign Out).
- **Auto-Fill Booking Fields:** Client name, mobile, and email automatically pre-fill into the booking form for logged-in VIP members.

---

## 📁 3. File & Folder Organization

```
LuxeGlow/
├── index.html              # Complete All-in-One standalone file (embedded 3D CSS, JS & SVGs)
├── login.html              # Standalone VIP Member Authentication & Sign-in portal
├── style.css               # Modular CSS3 stylesheet (3D animations, flight stage, print rules)
├── script.js               # Modular Vanilla JavaScript (3D physics, particles, LocalStorage)
├── assets/
│   └── images/
│       ├── logo.svg        # Scalable vector logo for LuxeGlow brand
│       └── fallback.svg    # Graceful offline fallback SVG image
└── README.md               # Complete project documentation, deployment guide, and viva defense
```

> **Note on Architecture:** `index.html` has all styles, scripts, 3D engines, and vector assets embedded directly into it. This means you can upload just `index.html` by itself to Netlify Drop, or you can upload the full folder—both work 100% out-of-the-box!

---

## 🚀 4. How to Deploy to Netlify (Free & Public in 30 Seconds)

You can publish LuxeGlow live on the web for free using Netlify in two easy ways:

### Method 1: Single File Netlify Drop (Fastest & Zero Setup)
1. Open your browser and go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Sign in or continue with GitHub/Email.
3. Simply drag and drop your **`index.html`** file directly into the dotted upload area on the screen!
4. Netlify will build and deploy your website in under 10 seconds.
5. You will get a live public URL (e.g., `https://luxeglow-sanctuary.netlify.app`) that anyone around the world can open on phone, tablet, or PC!

### Method 2: Drag & Drop the Entire `LuxeGlow/` Folder
1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Drag and drop the whole **`LuxeGlow`** directory into the browser window.
3. Netlify will automatically detect `index.html` as the entry point and publish your site with all assets.

---

## 🎓 5. College Project Viva & Technical Defense Guide

### Q1: How did you implement the 3D effects without heavy WebGL libraries like Three.js?
> *"We utilized hardware-accelerated CSS 3D Transforms (`perspective`, `rotateX`, `rotateY`, `translateZ`, `transform-style: preserve-3d`) combined with a lightweight HTML5 2D Canvas for atmospheric particles. This achieves high-fidelity 60fps 3D visuals with zero external library overhead, keeping the entire application bundle under 320 KB and completely dependency-free."*

### Q2: How does the 3D card tilt and specular glare physics work?
> *"In `setupInteractive3DCardTilt()`, a `mousemove` listener normalizes cursor coordinates on the card to a range of -1 to +1. We compute rotational angles for `rotateX` and `rotateY`, and simultaneously set CSS custom properties `--mouse-x` and `--mouse-y`. An overlaid radial gradient layer (`.card-specular-glare`) uses these coordinates to dynamically project a specular light reflection directly beneath the user's cursor, while child elements translate forward on the Z-axis for layered depth."*

### Q3: How do the live scroll velocity effects work?
> *"By calculating the difference between the current scroll position and the previous frame's position (`delta = currentY - lastY`), we derive real-time scroll velocity. This velocity scales particle downward drift speed on the background canvas and applies an elastic `skewX` transform to the trending marquee ticker, creating responsive kinetic feedback."*
