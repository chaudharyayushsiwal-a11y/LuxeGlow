# LuxeGlow — Local Beauty Salon & Spa Appointment Booking System

> A luxury commercial-grade salon and holistic spa appointment booking platform built with vanilla web technologies, LocalStorage persistence, real-time price calculations, responsive styling, and accessible UI/UX design.

---

## 📖 1. Project Overview

**LuxeGlow** is a responsive, interactive web application engineered for high-end local beauty salons, wellness centers, and medical day spas. It provides a seamless, friction-free booking journey for clients to discover curated beauty treatments, choose specialized master stylists, select appointment dates and times, and manage reservations directly within their local browser session without relying on third-party paid backend services.

### 🌟 Key Design Aesthetic
- **Color Palette:** Cream (`#FAF7F2`), Warm Beige (`#F4EFEA`), Soft Blush Pink (`#FDF2F0`), Card White (`#FFFFFF`), and metallic Rose Gold (`#C59B6D` / `#9A6B3E`).
- **Typography:** *Playfair Display* for luxury editorial serif headings; *Plus Jakarta Sans* for clean, modern, legible UI copy.
- **Visuals:** High-definition photography, delicate rounded corners (`border-radius: 14px-32px`), golden glowing accents, subtle drop shadows, and responsive glassmorphism navigation.

---

## 💎 2. Features Breakdown

### A. Navigation & Header
- **Fixed & Glassmorphism Header:** Automatically gains background blur and shadow when scrolled.
- **Smooth Anchor Navigation:** Jumps to sections with offset compensation for the sticky navigation bar.
- **Active Bookings Badge:** Real-time badge in the navigation bar displaying the exact count of confirmed appointments.
- **Mobile Responsive Drawer:** Animated hamburger menu toggle with backdrop close.

### B. Hero Section
- **Sanctuary Experience:** High-resolution salon ambiance imagery with dark-warm gradient overlay.
- **Primary Call to Actions:** Direct "Book Your Appointment" and "Explore Services" buttons.
- **Trust Counters:** 15,000+ Happy Clients, 4.9★ Average Rating, 12+ Master Specialists, and 100% Cruelty-Free certification.

### C. Curated Service Menu (4 Categories)
1. **Hair Cuts & Styling:** Signature Haircut & Blowdry, Luxe Balayage & Gloss, Botox Hair Spa & Restorative Mask, Organic Keratin Smoothing.
2. **Facials & Skincare:** Hydra-Infusion Glow Facial, 24K Gold Luxury Illuminating Facial, Ayurvedic Kumkumadi Radiance Therapy, Deep Pore Detox & Charcoal Purifying.
3. **Manicure/Pedicure:** Luxe Rose Petal Spa Pedicure, Russian Structured Gel Manicure, Champagne & Truffle Pedicure, Classic Express French Polish.
4. **Bridal Packages:** The Royal Imperial Bridal Makeover, Pre-Bridal Radiance Countdown, Cocktail & Sangeet Glam, Groom's Executive Royal Grooming.
- **Interactive Controls:** Filter by category pills, live instant search input, and one-click "Book Now" buttons that pre-fill the booking engine.

### D. Stylist Selection & Portfolios
- **4 Master Stylists:**
  - *Aarav Singhania* — Master Creative Director & Hair Architect (10+ Years)
  - *Meera Varma* — Senior Clinical Aesthetician & Skin Healer (8+ Years)
  - *Chloe D'Souza* — Lead Nail Couture Artist & Pedicurist (6+ Years)
  - *Rhea Kapoor* — Celebrity Bridal & Haute Couture Makeup Artist (12+ Years)
- **Stylist Portfolio Modal:** Shows high-resolution client work gallery, specialty tags, customer review counts, and instant "Book Session" CTA.
- **Select Stylist Action:** Automatically sets the stylist in the booking form and scrolls into view.

### E. Appointment Booking Engine
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

### F. Booking Confirmation & Printable Receipt
- **Unique Booking Reference:** Formats unique reference ID (e.g., `LXG-2026-8419`).
- **Confirmation Modal:** Displays a checkmark animation, client details, scheduled date/time, and appointment instructions.
- **Direct Clean Print Engine (`printBookingSlip`):** Direct iframe printing creates an official, sharp salon appointment voucher without multi-page blanks, dark modal overlays, or browser clipping. Also backed by `@media print` CSS rules.
- **LocalStorage Sync:** Saves appointment immediately to `luxeglow_appointments`.

### G. My Bookings Management Section
- **Full Booking Management:** Lists all saved appointments from LocalStorage.
- **Filter Tabs:** View "All Bookings", "Active / Confirmed", or "Cancelled".
- **Cancel Appointment with Confirmation Modal:** Prevents accidental clicks, updates booking status to "Cancelled", updates navbar badge, and displays a toast notification.
- **Slip Re-print:** Ability to view and print the receipt slip for any existing booking at any time.

### H. 3D Spatial Scroll & Architectural Flight Window
- **3D Spatial Viewport Stage:** An architectural glass flight window featuring multi-layered 3D depth (`translateZ` layers, glowing ambient light orbs, and panoramic salon sanctuary suites).
- **Interactive Cursor 3D Parallax & Glare:** Dynamic gyro-tilt that calculates mouse coordinates in real-time, tilting the window in 3D perspective (`rotateX`, `rotateY`) while moving a specular glass glare reflection.
- **Scroll-Driven Fly-Through Zoom:** Smooth camera forward translation as the user scrolls through the spatial portal.
- **Virtual Camera Flight Presets:** Interactive HUD controls to fly the virtual camera directly into *Hair Architecture, Skincare Lounge, Nail Studio*, or the *Imperial Bridal Chamber*.
- **Interactive Suite Hotspot Nodes:** Glowing 3D pulsing nodes with hover cards providing suite details and quick booking shortcuts.
- **Ambient 3D Gold Dust & Rose Petals Canvas:** Floating particles drifting in 3D space with velocity acceleration during scrolling.
- **Interactive 3D Card Tilt:** Real-time magnetic 3D hover physics on service, stylist, and pillar cards.

### I. Scroll Trending Animations & Social Proof
- **Infinite Trending Ticker Marquee:** Continuous 60fps horizontal marquee featuring trending salon treatments, discounts, and real-time updates.
- **Scroll Depth Progress Bar:** Sleek rose gold indicator along the header tracking user page read progress.
- **Scroll Reveal (IntersectionObserver):** Smooth upward fade animations triggered dynamically as sections and cards enter the viewport.
- **Live Social Proof Pill:** Floating badge displaying recent live client appointments in Indiranagar.

### J. Customer Reviews & Community Feedback
- **Review Feed:** Displays authentic client testimonials with star ratings, avatar pictures, verified badges, and service tags.
- **Interactive "Share Your Experience" Modal:** Users can submit their own review with interactive 1 to 5 star ratings. Submissions are saved to `luxeglow_reviews` in LocalStorage and instantly added to the feed.

### K. Dedicated Login & VIP Member Portal (`login.html`)
- **VIP Authentication Card:** Dual-tab switching between **Sign In** and **Create VIP Account**.
- **1-Click Demo Accounts (Examiner & Viva Ready):**
  - **Client Demo:** `radhika.sen@example.com` / `password123`
  - **Stylist / Staff Demo:** `aarav.stylist@luxeglow.com` / `password123`
- **Dynamic Password Strength Indicator:** Real-time visual strength meter (Weak / Fair / Strong).
- **Password Visibility Toggles:** Interactive eye icons for masked/unmasked input.
- **Session & Navbar Integration:** Upon login, the top navigation replaces the "Sign In" button with an authenticated **User Profile Menu** (`RS`, `Hi, Radhika`, and dropdown for `My Bookings`, `New Reservation`, and `Sign Out`).
- **Auto-Fill Booking Fields:** When logged in, customer name, mobile, and email automatically pre-fill into the appointment booking form.

### L. Additional Sections
- **Why Choose LuxeGlow Pillars:** Organic botanicals, certified stylists, hospital-grade hygiene, and complimentary high tea.
- **Interactive FAQ Accordion:** Expandable questions regarding cancellation policies, bridal preparation, and safety standards.
- **Contact Us:** Fictional sample salon address in Indiranagar, Bengaluru, contact phone numbers, email addresses, operating hours, social media links, and a validated contact form.
- **Floating Toast Notification System:** Slide-in toasts for instant visual feedback on booking, cancellation, form submissions, and coupon applications.

---

## 📂 3. File & Folder Organization

```
LuxeGlow/
├── index.html              # Main HTML5 application structure & semantic layout
├── login.html              # Dedicated VIP Member Authentication & Sign-in portal
├── style.css               # CSS3 stylesheet: variables, typography, layouts, 3D animations, auth
├── script.js               # Vanilla JavaScript: state, LocalStorage CRUD, auth session, 3D engine
├── assets/
│   └── images/
│       ├── logo.svg        # Scalable vector logo for LuxeGlow brand
│       └── fallback.svg    # Graceful offline fallback SVG image for cards
└── README.md               # Project documentation, deployment guide, and viva preparation
```

---

## 🚀 4. How to Run Locally

This application requires **no build step, no npm packages, and no backend servers**. It runs natively in any standard web browser.

### Option A: Double-Click (Simplest)
1. Navigate to the project directory: `LuxeGlow/`.
2. Double-click `index.html` to open it in your default web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).

### Option B: VS Code Live Server (Recommended for Development)
1. Open the `LuxeGlow` folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on `index.html` and choose **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500`.

---

## 📤 5. Instructions for Uploading to GitHub

Follow these steps to publish your project repository to GitHub:

1. **Initialize Git Repository:**
   Open a terminal in the `LuxeGlow/` folder and execute:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete LuxeGlow salon booking application"
   ```

2. **Create a New Repository on GitHub:**
   - Log in to your GitHub account at [github.com](https://github.com).
   - Click the **"+"** button at the top right and select **"New repository"**.
   - Name the repository: `luxeglow-salon-booking` (or any preferred name).
   - Keep it **Public**.
   - Leave "Initialize with a README" unchecked (since you already have a `README.md`).
   - Click **"Create repository"**.

3. **Link Local Folder and Push:**
   Copy the repository URL shown on GitHub and run:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/luxeglow-salon-booking.git
   git push -u origin main
   ```

---

## 🌐 6. Instructions for Free Deployment

### Method 1: Deploy with GitHub Pages (Zero Extra Accounts)
1. Go to your GitHub repository: `https://github.com/<your-username>/luxeglow-salon-booking`.
2. Click on **Settings** (tab on the top right).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment > Branch**:
   - Choose `main` branch from the dropdown.
   - Choose `/ (root)` folder.
   - Click **Save**.
5. Wait 1–2 minutes. Refresh the page to see your live URL:
   `https://<your-username>.github.io/luxeglow-salon-booking/`

### Method 2: Deploy with Netlify (Fast & Custom URL)
1. Visit [netlify.com](https://www.netlify.com/) and log in (or sign up with GitHub).
2. Go to your **Team Overview** dashboard and click **"Add new site" > "Deploy manually"**.
3. Drag and drop the entire `LuxeGlow/` folder directly into the upload area on Netlify.
4. Netlify will publish your site in seconds and provide a public URL like `https://luxeglow-salon.netlify.app`.
5. *(Optional)* Under **Site settings > Domain management**, you can rename the site subdomain for free.

---

## 🎓 7. College Project Viva & Technical Defense Guide

During an academic viva or project review, the evaluation panel often examines architecture, state management, and real-world considerations. Here are the core questions and technical explanations you can give:

### Q1: Why did you choose Vanilla JavaScript instead of React or Angular?
> *"For a local salon booking system, Vanilla JavaScript provides ultra-fast load times, zero bundle overhead, and no build pipeline dependencies. It demonstrates strong mastery of core web fundamentals: direct DOM manipulation, event listeners, form validation patterns, and Web Storage APIs."*

### Q2: How does LocalStorage work in this application?
> *"Appointments are serialized into a JSON array and stored under the key `'luxeglow_appointments'`. When a user submits an appointment or cancels one, `JSON.stringify()` writes the updated state to the browser's storage, and `JSON.parse()` retrieves it. This ensures bookings survive browser restarts and page refreshes."*

### Q3: How do you prevent booking conflicting time slots?
> *"The function `updateSlotAvailability()` reads all confirmed bookings from LocalStorage for the user-selected date and stylist. If an appointment exists for that exact date, time, and stylist, that time button receives the `disabled` attribute and visual cross-out style."*

### Q4: How is past date selection prevented?
> *"In `initDatePicker()`, JavaScript calculates today's ISO date string (`YYYY-MM-DD`) and applies it to the HTML5 date input's `min` attribute (`dateInput.min = minDate`). The browser natively restricts the calendar UI from selecting past dates."*

### Q5: How do you handle responsive design?
> *"The application follows a mobile-first responsive approach using CSS Grid and Flexbox. Breakpoints are placed at 1200px, 992px, 768px, and 480px. For mobile devices (≤768px), navigation transforms into a slide-down menu with an animated hamburger icon, and multi-column forms convert into single-column layouts for touch friendliness."*

### Q6: How does the printable booking receipt work?
> *"We defined a dedicated `@media print` stylesheet block. When `window.print()` is triggered, all body elements are hidden except `#printableReceiptArea`, cleanly formatting the appointment slip for thermal printers or PDF downloads without page menus or background images."*

---

## 📄 License & Attribution
- **Author:** Developed for Local Beauty Salon & Spa Appointment Booking Project.
- **License:** Open source under the MIT License.
- **Images:** High-resolution commercial license-free photography courtesy of Unsplash.
