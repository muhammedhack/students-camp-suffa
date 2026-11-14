# AL-IRTIQA-26 (الارتقاء ٢٦) — Official Website

> **The Art of Ascension** — A Seven-Day Educational & Higher-Studies Camp  
> Organised by: **Alathurpadi Dars Students' Association (ADSA)**  
> In Collaboration with: **SUFFA Dars Network**  
> Venue: **Alathurpadi Dars Campus (Halaqatudduroos), Melmuri, Malappuram, Kerala**  
> Dates: **21 – 27 December 2026**

---

## 1. Official Brand Identity & Design System

The visual identity of AL-IRTIQA-26 is derived directly from the official brand logo:
- **Primary Mark**: Official artwork featuring royal sapphire calligraphy (*الارتقاء*), the ascending sky-blue paper-plane motif, and the mint halo (`assets/images/al-irtiqa-26-logo.png`).
- **Core Concept**: Elevation, Growth, Upward Movement, Academic Rigor, and International Horizons.

### Official Brand Color Palette
- **Royal Blue** (`#1F5BA9`): Primary brand color for headings, primary actions, and core typography.
- **Emerald Green** (`#11AF83`): Accent brand color for highlights, secondary actions, and badges.
- **Deep Blue** (`#1E3882`): Deep foundation color for hero titles and footer grounding.
- **Clean White** (`#FFFFFF`): Crisp surface layer and high-contrast card backgrounds.
- **Soft Off-White** (`#F8FAFC`): Main body canvas.
- **Pale Mint** (`#EAF7F2`): Ambient surface tints and badge backgrounds.
- **Pale Blue** (`#EEF4FC`): Navigation controls and subtle interactive states.

### Typography System
- **Display & Headings**: *Plus Jakarta Sans* & *Cinzel*
- **Body English**: *Plus Jakarta Sans* & *Inter*
- **Arabic**: *Amiri* & *Noto Sans Arabic*
- **Malayalam**: *Noto Sans Malayalam* & *Manjari*

---

## 2. Technology Stack

- **Frontend Only**: Modern HTML5, semantic markup, pure CSS3, and Vanilla JavaScript.
- **Zero Heavy Frameworks**: Pure static website, compatible with VS Code Live Server.
- **True Bidirectional Multilingual Engine**: Built-in support for **English**, **Malayalam**, and **Arabic (RTL)** with instant DOM updates and persistent preference.
- **Modular Data Architecture**: Centralized data objects in `assets/data/site-data.js` and `assets/data/translations/`.

---

## 3. Directory Structure

```text
al-irtiqa-26/
├── index.html                           # Brand System Foundation & Experience Scaffold
├── pages/                               # Public Website Pages (Phases 3 & 4)
│   ├── about.html
│   ├── theme.html
│   ├── journey.html
│   ├── day-01.html ... day-07.html
│   ├── people.html
│   ├── activities.html
│   ├── gallery.html
│   ├── resources.html
│   ├── updates.html
│   ├── faq.html
│   └── contact.html
├── student/                             # Student Portal Demo (Phase 5)
│   ├── login.html
│   ├── dashboard.html
│   ├── id-card.html
│   ├── attendance.html
│   └── certificate.html
├── admin/                               # Unified Admin Dashboard Demo (Phase 6)
│   ├── login.html
│   └── dashboard.html
├── assets/
│   ├── css/
│   │   ├── variables.css                # Official design tokens (Royal Blue, Emerald Green, etc.)
│   │   ├── main.css                     # Reset, base typography, grid utilities, access
│   │   ├── components.css               # Header, nav, buttons, cards, badges, footer
│   │   ├── animations.css               # Controlled transitions, radiant glows, reveals
│   │   └── responsive.css               # Mobile-first breakpoints (320px to 1920px)
│   ├── js/
│   │   ├── app.js                       # Central application orchestrator
│   │   ├── language.js                  # 3-Language switcher & RTL controller
│   │   ├── navigation.js                # Sticky header & accessible mobile drawer
│   │   └── animations.js                # IntersectionObserver scroll reveals & countdown
│   ├── data/
│   │   ├── site-data.js                 # Central metadata, dates, 7 days structure
│   │   └── translations/
│   │       ├── en.js                    # English translation dictionary
│   │       ├── ml.js                    # Malayalam translation dictionary
│   │       └── ar.js                    # Arabic translation dictionary
│   └── images/
│       ├── al-irtiqa-26-logo.png        # Official brand logo (original proportions & transparency)
│       ├── brand/                       # Organizer logos (ADSA & SUFFA)
│       └── gallery/                     # High-resolution media assets
└── README.md
```

---

## 4. Development Roadmap & Phases

- [x] **Phase 0**: Workspace Audit, Asset Discovery & Architecture Planning
- [x] **Phase 1**: Official Brand Identity & Design Foundation (Royal Blue & Emerald Green)
- [ ] **Phase 2**: Complete Immersive Homepage Experience (Awaiting User Authorization)
- [ ] **Phase 3**: Public Information Pages & Seven-Day Detailed Journeys
- [ ] **Phase 4**: Interactive Media Gallery, Lightbox & Global Study Map
- [ ] **Phase 5**: Student Portal Experience (Digital ID, QR Attendance Mockup, Certificate)
- [ ] **Phase 6**: Single Unified Admin Dashboard (Demo Mode)
- [ ] **Phase 7**: Multilingual System Full-Site Translation & RTL Review
- [ ] **Phase 8**: Performance Tuning, QA, Device Matrix Verification & Audit
