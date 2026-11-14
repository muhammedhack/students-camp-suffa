/**
 * AL-IRTIQA-26 (الارتقاء ٢٦) — ADVANCED ANIMATION & INTERACTION SYSTEM (PHASE 4)
 * Comprehensive Vanilla JS Engine:
 * - Scroll Progress Bar & Viewport Tracking
 * - High-Fidelity Preloader & Intersection Observer Scroll Reveals
 * - Interactive Seven-Day Ascension Journey & Paper Plane Flight Curve
 * - Interactive Global Study World Map with Radiating Flight Arcs & Info Console
 * - Editorial Media Gallery with Dual Filtering (Category + Day) & Full-Screen Lightbox (Zoom, Keyboard, Touch Swipe)
 * - Interactive Video Theatre with Simulated HD Canvas Audio Waveform & Scrubber
 * - Interactive Food & Dining Menu (Day Selector + Meal Category Pills + Nutrition Modal)
 * - Camp Memory Wall with Frontend Demo Storage (localStorage)
 * - Micro-interactions: Magnetic Buttons, Metric Counters, Toast Notices
 */

class AnimationController {
  constructor() {
    this.initScrollProgressBar();
    this.initPreloader();
    this.initScrollReveal();
    this.initCountdown();
    this.initJourneyTabs();
    this.initInteractiveSevenDays();
    this.initInteractiveGlobalMap();
    this.initEnhancedGallery();
    this.initVideoPlayerLightbox();
    this.initEnhancedFoodDining();
    this.initCampMemoryWall();
    this.initMicroInteractions();
    this.initFaqAccordion();
    this.initPeopleFilters();
    this.initContactDemoForm();
    this.initResourceSearch();
    this.initSmoothScroll();
  }

  // 1. Top Viewport Scroll Progress Bar
  initScrollProgressBar() {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 2. Premium Preloader
  initPreloader() {
    const preloader = document.getElementById('site-preloader');
    if (!preloader) return;

    const hidePreloader = () => {
      preloader.classList.add('is-hidden');
      setTimeout(() => {
        if (preloader.parentNode) {
          preloader.style.display = 'none';
        }
      }, 650);
    };

    const skipBtn = document.querySelector('.preloader-skip-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', hidePreloader);
    }

    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, 600);
    } else {
      window.addEventListener('load', () => setTimeout(hidePreloader, 600));
      setTimeout(hidePreloader, 2500);
    }
  }

  // 3. IntersectionObserver Scroll Reveals
  initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-fade-up, .reveal-scale-up, .reveal-fade-in').forEach(el => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-fade-up, .reveal-scale-up, .reveal-fade-in').forEach(el => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.reveal-fade-up, .reveal-scale-up, .reveal-fade-in').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // 4. Countdown Timer
  initCountdown() {
    const countdownContainers = document.querySelectorAll('[data-countdown]');
    if (!countdownContainers.length) return;

    const targetDateStr = (window.IRTIQA_DATA && window.IRTIQA_DATA.meta && window.IRTIQA_DATA.meta.datesFormatted.targetCountdown) || '2026-12-21T08:00:00+05:30';
    const targetTime = new Date(targetDateStr).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      countdownContainers.forEach(container => {
        const daysEl = container.querySelector('[data-days]');
        const hoursEl = container.querySelector('[data-hours]');
        const minsEl = container.querySelector('[data-mins]');
        const secsEl = container.querySelector('[data-secs]');

        if (distance <= 0) {
          if (daysEl) daysEl.textContent = '00';
          if (hoursEl) hoursEl.textContent = '00';
          if (minsEl) minsEl.textContent = '00';
          if (secsEl) secsEl.textContent = '00';
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
        if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
      });
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // 5. Homepage Journey Tabs
  initJourneyTabs() {
    const tabs = document.querySelectorAll('.journey-tab-btn');
    const dayCards = document.querySelectorAll('.journey-day-panel');
    if (!tabs.length || !dayCards.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetDay = tab.getAttribute('data-day');
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        dayCards.forEach(card => {
          if (card.getAttribute('data-day') === targetDay) {
            card.style.display = 'block';
            card.classList.add('reveal-visible');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. Interactive Seven-Day Ascension Journey (Signature Experience)
  initInteractiveSevenDays() {
    const stage = document.getElementById('journey-stage-container');
    if (!stage) return;

    const dayBtns = stage.querySelectorAll('.journey-day-pill-btn');
    const plane = document.getElementById('journey-plane');
    const activeStroke = document.getElementById('journey-active-stroke');
    const prevBtn = document.getElementById('btn-journey-prev');
    const nextBtn = document.getElementById('btn-journey-next');

    // UI Elements in Live Showcase Hub
    const dayBadge = document.getElementById('showcase-day-badge');
    const dayTitle = document.getElementById('showcase-day-title');
    const malTitle = document.getElementById('showcase-mal-title');
    const s1Title = document.getElementById('showcase-session-1');
    const s1Desc = document.getElementById('showcase-session-1-desc');
    const s2Title = document.getElementById('showcase-session-2');
    const s2Desc = document.getElementById('showcase-session-2-desc');
    const s3Title = document.getElementById('showcase-session-3');
    const s3Desc = document.getElementById('showcase-session-3-desc');
    const fullLink = document.getElementById('showcase-full-link');

    const daysData = {
      '01': {
        badge: 'Day 01 // 21 December 2026, Monday',
        title: 'Inauguration, Academic Vision & Goal Setting',
        mal: 'ഉദ്ഘാടനവും പരിചയവും ലക്ഷ്യനിർണ്ണയവും',
        s1: 'Solemn Opening & Presidential Keynote',
        s1d: 'Presided by Dr. C.K. Muhammed Abdurahman Al Faizy Al Azhari.',
        s2: 'Orientation Rules & Cohort Dynamics',
        s2d: 'Camp house regulations, peer group allocations, and study circle protocols.',
        s3: 'Aspiration Audit & Spiritual Dedication',
        s3d: 'Personal diary formulation and nocturnal dedication prayers.',
        link: 'day-01.html',
        percent: 8,
        planeY: 45
      },
      '02': {
        badge: 'Day 02 // 22 December 2026, Tuesday',
        title: 'Pathways to Higher Studies & University Mapping',
        mal: 'ഉപരിപഠന വഴികളും സർവ്വകലാശാലാ സാധ്യതകളും',
        s1: 'CUET-PG Central Universities Entrance Masterclass',
        s1d: 'Structure, eligibility, test codes, and high-yield question patterns.',
        s2: 'Indian Central Universities Ecosystem (JNU, Jamia, EFLU, DU, AMU)',
        s2d: 'Department profiles, faculty strengths, and hostel accommodations.',
        s3: 'Mock Diagnostic Entrance Test & Syllabus Review',
        s3d: 'Timed sample diagnostic testing with peer analysis.',
        link: 'day-02.html',
        percent: 23,
        planeY: 28
      },
      '03': {
        badge: 'Day 03 // 23 December 2026, Wednesday',
        title: 'Advanced Study Methods & Cognitive Architecture',
        mal: 'പഠനരീതികളും സമയ മാനേജ്മെന്റും',
        s1: 'The Cornell Note-Taking & Active Recall Framework',
        s1d: 'Synthesizing complex Arabic textual commentary into structured modern notes.',
        s2: 'Speed Reading & Academic Literature Review Clinics',
        s2d: 'Skimming, scanning, and analytical critique of contemporary research.',
        s3: "Preserving Dars Spiritual Mutala'a in University Life",
        s3d: "Harmonizing sacred scholarship habits with secular university rigor.",
        link: 'day-03.html',
        percent: 38,
        planeY: 20
      },
      '04': {
        badge: 'Day 04 // 24 December 2026, Thursday',
        title: 'Language Mastery & Rhetorical Eloquence',
        mal: 'ഭാഷാ ശേഷിയും വാക്പാടവവും',
        s1: 'Functional Arabic Fluency & Classical Balagha in Modern Context',
        s1d: 'Spoken dialogue, academic vocabulary, and modern Arabic journal writing.',
        s2: 'Academic English Grammar & Argumentative Writing',
        s2d: 'Sentence structure, academic registers, and GRE/TOEFL lexicon building.',
        s3: 'Trilingual Toastmasters Speech Halaqa',
        s3d: 'Impromptu speeches and podium presentation training in 3 languages.',
        link: 'day-04.html',
        percent: 54,
        planeY: 35
      },
      '05': {
        badge: 'Day 05 // 25 December 2026, Friday',
        title: "Digital Tools, Statement of Purpose (SOP) & Jumu'ah",
        mal: 'ആശയവിനിമയവും ഡിജിറ്റൽ നൈപുണ്യവും',
        s1: 'Statement of Purpose (SOP) Formulation Masterclass',
        s1d: 'Drafting winning personal statements, research intents, and academic CVs.',
        s2: "Friday Jumu'ah Assembly & Moral Leadership",
        s2d: 'Solemn Friday sermon on the ethics of scholarship and societal duty.',
        s3: 'Munazarah (Trilingual Academic Debate Finals)',
        s3d: 'Competitive debate rounds judging logic, poise, and structured rebuttals.',
        link: 'day-05.html',
        percent: 69,
        planeY: 28
      },
      '06': {
        badge: 'Day 06 // 26 December 2026, Saturday',
        title: 'Leadership, Civil Services & Social Responsibility',
        mal: 'നേതൃത്വവും സാമൂഹിക സേവനവും',
        s1: 'Civil Services (UPSC) & Public Policy Pathways',
        s1d: 'Syllabus orientation, optional subjects selection, and interview strategies.',
        s2: 'One-on-One Admissions Mentorship Pairing',
        s2d: 'Personal guidance matching each student with senior university mentors.',
        s3: 'Nocturnal Campfire Camaraderie & Soulful Poetry',
        s3d: 'Spiritual fellowship, student anecdotes, and unity under the open sky.',
        link: 'day-06.html',
        percent: 85,
        planeY: 20
      },
      '07': {
        badge: 'Day 07 // 27 December 2026, Sunday',
        title: 'Reflections, Valedictory Assembly & Future Roadmap',
        mal: 'അവലോകനവും സമാപനവും ഭാവി കർമ്മപദ്ധതിയും',
        s1: 'Personal Action Blueprint Finalization',
        s1d: 'Individual 1-year and 3-year academic roadmaps compiled by each delegate.',
        s2: 'Grand Valedictory Assembly & Certificate Conferral',
        s2d: 'Presidential valedictory address and conferral of camp graduation credentials.',
        s3: "Closing Solemn Du'a & Global Fellowship Network Launch",
        s3d: 'Final prayer of ascension and formal induction into the ADSA scholar network.',
        link: 'day-07.html',
        percent: 96,
        planeY: 15
      }
    };

    let currentDayIndex = 1;

    const selectDay = (dayNumStr) => {
      const data = daysData[dayNumStr];
      if (!data) return;

      currentDayIndex = parseInt(dayNumStr, 10);

      // Update buttons
      dayBtns.forEach(btn => {
        const bDay = btn.getAttribute('data-day');
        if (bDay === dayNumStr) {
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        }
      });

      // Update Plane & SVG track
      if (plane) {
        plane.style.left = `${data.percent}%`;
        plane.style.top = `${data.planeY}px`;
      }

      if (activeStroke) {
        const offset = 800 - (data.percent / 100 * 800);
        activeStroke.style.strokeDashoffset = `${offset}`;
      }

      // Update Showcase Panel with smooth fade
      const panel = document.getElementById('day-showcase-panel');
      if (panel) {
        panel.style.opacity = '0.6';
        panel.style.transform = 'translateY(4px)';
        setTimeout(() => {
          if (dayBadge) dayBadge.textContent = data.badge;
          if (dayTitle) dayTitle.textContent = data.title;
          if (malTitle) malTitle.textContent = data.mal;
          if (s1Title) s1Title.textContent = data.s1;
          if (s1Desc) s1Desc.textContent = data.s1d;
          if (s2Title) s2Title.textContent = data.s2;
          if (s2Desc) s2Desc.textContent = data.s2d;
          if (s3Title) s3Title.textContent = data.s3;
          if (s3Desc) s3Desc.textContent = data.s3d;
          if (fullLink) {
            fullLink.href = data.link;
            fullLink.textContent = `View Full Day ${dayNumStr} Page & Transcripts →`;
          }
          panel.style.opacity = '1';
          panel.style.transform = 'translateY(0)';
          panel.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        }, 120);
      }
    };

    dayBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        selectDay(btn.getAttribute('data-day'));
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        let prev = currentDayIndex - 1;
        if (prev < 1) prev = 7;
        selectDay(String(prev).padStart(2, '0'));
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        let next = currentDayIndex + 1;
        if (next > 7) next = 1;
        selectDay(String(next).padStart(2, '0'));
      });
    }

    // Touch Swipe Gesture for Mobile
    let touchStartX = 0;
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const deltaX = touchEndX - touchStartX;
      if (Math.abs(deltaX) > 45) {
        if (deltaX < 0) {
          // Swipe Left -> Next Day
          let next = currentDayIndex + 1;
          if (next > 7) next = 1;
          selectDay(String(next).padStart(2, '0'));
        } else {
          // Swipe Right -> Prev Day
          let prev = currentDayIndex - 1;
          if (prev < 1) prev = 7;
          selectDay(String(prev).padStart(2, '0'));
        }
      }
    }, { passive: true });
  }

  // 7. Interactive Global Study World Map & Console (Signature Experience)
  initInteractiveGlobalMap() {
    const mapWrapper = document.querySelector('.global-map-wrapper');
    if (!mapWrapper) return;

    const destPills = document.querySelectorAll('.global-dest-pill');
    const mapPins = document.querySelectorAll('.map-pin-btn');

    // Console fields
    const flagEl = document.getElementById('console-country-flag');
    const nameEl = document.getElementById('console-country-name');
    const hubTagEl = document.getElementById('console-hub-tag');
    const descEl = document.getElementById('console-country-desc');
    const unisListEl = document.getElementById('console-unis-list');
    const programsEl = document.getElementById('console-programs-text');
    const scholarEl = document.getElementById('console-scholarship-text');
    const actionLink = document.getElementById('console-action-link');

    const destData = {
      'india': {
        flag: '🇮🇳',
        name: 'Premier Central Universities in India',
        hub: 'National Accreditation // CUET-PG Track',
        desc: 'Renowned central research institutions offering subsidized collegiate study, advanced faculties in Arabic, international relations, linguistics, and philosophy.',
        unis: ['JNU New Delhi', 'Jamia Millia Islamia', 'EFLU Hyderabad', 'Delhi University', 'AMU Aligarh'],
        programs: 'MA Arabic Language & Literature, MA International Relations, MA Linguistics, MA Comparative Religion.',
        scholarships: 'UGC Non-NET fellowship, Central Sector Scholarships, and hostel grants.',
        linkText: 'Download CUET-PG Entrance Blueprint →'
      },
      'egypt': {
        flag: '🇪🇬',
        name: 'Al-Azhar University (Cairo, Egypt)',
        hub: 'Millennium-Old Global Seat of Islamic Learning',
        desc: 'The world’s premier Sunni Islamic institution providing direct continuity with classical Dars pedagogy in Usul al-Din, Sharia, and Arabic Eloquence.',
        unis: ['Faculty of Usul al-Din', 'Faculty of Arabic Language', 'Faculty of Sharia & Law', "Faculty of Islamic Da'wah"],
        programs: 'License & Masters in Usul al-Din, Arabic Balagha, Islamic Jurisprudence, and Hadith Sciences.',
        scholarships: 'Al-Azhar Grand Imam Fellowship & Egyptian Ministry of Higher Education grants.',
        linkText: 'View Al-Azhar Equivalency Requirements →'
      },
      'qatar': {
        flag: '🇶🇦',
        name: 'Qatar University & Hamad Bin Khalifa University',
        hub: 'State-of-the-Art Gulf Academic Research Center',
        desc: 'World-ranked postgraduate institutions in Education City Doha offering high-stipend fellowships for multilingual scholars in Islamic and global ethics.',
        unis: ['Hamad Bin Khalifa University (HBKU)', 'Qatar University College of Sharia', 'Doha Institute for Graduate Studies'],
        programs: 'MA in Islam & Global Affairs, MA in Applied Islamic Ethics, MA in Public Policy.',
        scholarships: 'Full HBKU Graduate Scholarship (100% Tuition, Monthly Stipend, Housing, Health Insurance).',
        linkText: 'Explore HBKU Scholarship Checklist →'
      },
      'turkey': {
        flag: '🇹🇷',
        name: 'Marmara & Istanbul Universities (Turkey)',
        hub: 'Eurasian Gateway to Modern Islamic Thought & Philosophy',
        desc: 'Historic Turkish theological and social science faculties combining rigorous Ottoman scholarship with modern Western academic dialectics.',
        unis: ['Marmara University Faculty of Theology', 'Istanbul University', 'Ibn Haldun University', 'Ankara University'],
        programs: 'MA in Islamic Studies (Turkish & Arabic medium), Civilizational Studies, Philosophy & Logic.',
        scholarships: 'Türkiye Bursları Government Scholarship (Full Tuition, Monthly Allowance, Dormitory, Flight Tickets).',
        linkText: 'Download Türkiye Bursları Application Guide →'
      },
      'uk': {
        flag: '🇬🇧',
        name: 'SOAS & Oxford (United Kingdom)',
        hub: 'World-Leading Critical Humanities & Oriental Studies',
        desc: 'Globally celebrated centres for critical text editions, historical-critical methodology, and intercultural translation studies in London and Oxford.',
        unis: ['SOAS University of London', 'University of Oxford (Oriental Studies)', 'University of Edinburgh', 'Exeter University'],
        programs: 'MA in Middle Eastern Studies, Near & Middle Eastern Civilizations, Intercultural Islamic Studies.',
        scholarships: "Chevening UK Government Scholarships, Commonwealth Master's Fellowships, Oxford Center for Islamic Studies Grants.",
        linkText: 'Review Chevening Eligibility Blueprint →'
      },
      'malaysia': {
        flag: '🇲🇾',
        name: 'International Islamic University Malaysia (IIUM)',
        hub: 'Pioneering Integration of Revealed Knowledge & Human Sciences',
        desc: 'Renowned international university based in Kuala Lumpur dedicated to the Islamization of knowledge, Islamic banking, and modern social sciences.',
        unis: ['Kulliyyah of Islamic Revealed Knowledge (KIRKHS)', 'Kulliyyah of Economics & Management Sciences'],
        programs: "MA in Qur'an & Sunnah Studies, Master of Islamic Banking & Finance, MA in Political Science.",
        scholarships: 'IIUM Graduate Assistantship Scheme & Malaysian International Scholarship (MIS).',
        linkText: 'Check IIUM Admission Windows →'
      },
      'saudi': {
        flag: '🇸🇦',
        name: 'Islamic University of Madinah & Umm al-Qura',
        hub: 'Classical Canonical Sanad & Hadith Preservation',
        desc: "The historic holy sanctuary faculties offering full residential scholarships for exhaustive master's research in Hadith, Tafsir, and Fiqh.",
        unis: ['Islamic University of Madinah', 'Umm al-Qura University Makkah', 'Imam Mohammad Ibn Saud University Riyadh'],
        programs: 'Postgraduate Higher Studies in Hadith Sciences, Fiqh & Usul, Arabic Syntax & Morphology.',
        scholarships: 'Saudi Government Royal Scholarships (Full Coverage, Monthly Allowance, Return Airfare, Free Housing).',
        linkText: 'Review Madinah University Portal Guidelines →'
      }
    };

    const activateDestination = (destKey) => {
      const data = destData[destKey];
      if (!data) return;

      // Update pills
      destPills.forEach(pill => {
        if (pill.getAttribute('data-dest') === destKey) {
          pill.classList.add('active');
          pill.setAttribute('aria-selected', 'true');
        } else {
          pill.classList.remove('active');
          pill.setAttribute('aria-selected', 'false');
        }
      });

      // Update map pins
      mapPins.forEach(pin => {
        if (pin.getAttribute('data-dest') === destKey) {
          pin.classList.add('active');
        } else {
          pin.classList.remove('active');
        }
      });

      // Update Flight Arcs
      const arcs = document.querySelectorAll('.map-flight-arc');
      arcs.forEach(arc => {
        arc.style.display = 'none';
      });
      const activeArc = document.getElementById(`arc-${destKey}`);
      if (activeArc) {
        activeArc.style.display = 'block';
      }

      // Update Console with smooth animation
      const consolePanel = document.getElementById('country-info-console');
      if (consolePanel) {
        consolePanel.style.opacity = '0.5';
        setTimeout(() => {
          if (flagEl) flagEl.textContent = data.flag;
          if (nameEl) nameEl.textContent = data.name;
          if (hubTagEl) hubTagEl.textContent = data.hub;
          if (descEl) descEl.textContent = data.desc;
          if (unisListEl) {
            unisListEl.innerHTML = data.unis.map(u => `<span class="badge badge-royal" style="font-size: 0.75rem;">${u}</span>`).join(' ');
          }
          if (programsEl) programsEl.textContent = data.programs;
          if (scholarEl) scholarEl.textContent = data.scholarships;
          if (actionLink) actionLink.textContent = data.linkText;

          consolePanel.style.opacity = '1';
          consolePanel.style.transition = 'opacity 0.25s ease';
        }, 120);
      }
    };

    destPills.forEach(pill => {
      pill.addEventListener('click', () => {
        activateDestination(pill.getAttribute('data-dest'));
      });
    });

    mapPins.forEach(pin => {
      pin.addEventListener('click', () => {
        activateDestination(pin.getAttribute('data-dest'));
      });
    });
  }

  // 8. Editorial Media Gallery with Dual Filtering & Full-Screen Lightbox
  initEnhancedGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    const categoryBtns = document.querySelectorAll('.gallery-filter-btn');
    const dayBtns = document.querySelectorAll('.gallery-day-btn');
    const items = galleryGrid.querySelectorAll('.gallery-media-item');

    let currentCategory = 'all';
    let currentDay = 'all';

    const applyFilter = () => {
      items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        const itemDay = item.getAttribute('data-day');

        const catMatch = (currentCategory === 'all' || itemCat === currentCategory);
        const dayMatch = (currentDay === 'all' || itemDay === currentDay);

        if (catMatch && dayMatch) {
          item.style.display = 'block';
          item.classList.add('reveal-visible');
        } else {
          item.style.display = 'none';
        }
      });
    };

    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        applyFilter();
      });
    });

    dayBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dayBtns.forEach(b => {
          b.classList.remove('active');
          b.style.background = '#FFF';
          b.style.color = 'var(--text-secondary)';
        });
        btn.classList.add('active');
        btn.style.background = 'var(--color-blue-royal)';
        btn.style.color = '#FFF';
        currentDay = btn.getAttribute('data-day');
        applyFilter();
      });
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('image-lightbox');
    if (!lightbox) return;

    const lightboxImg = document.getElementById('lightbox-img');
    const captionTitle = document.getElementById('lightbox-caption-title');
    const captionDesc = document.getElementById('lightbox-caption-desc');
    const counterText = document.getElementById('lightbox-counter-text');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const zoomBtn = document.getElementById('lightbox-zoom-btn');

    let visibleItems = [];
    let activeIndex = 0;
    let isZoomed = false;

    const updateLightbox = () => {
      if (!visibleItems.length || activeIndex < 0 || activeIndex >= visibleItems.length) return;
      const target = visibleItems[activeIndex];

      const src = target.getAttribute('data-lightbox-src');
      const title = target.getAttribute('data-lightbox-title') || '';
      const desc = target.getAttribute('data-lightbox-caption') || '';

      if (lightboxImg) {
        lightboxImg.src = src;
        lightboxImg.classList.remove('is-zoomed');
        isZoomed = false;
      }
      if (captionTitle) captionTitle.textContent = title;
      if (captionDesc) captionDesc.textContent = desc;
      if (counterText) counterText.textContent = `${activeIndex + 1} / ${visibleItems.length}`;
    };

    const openLightbox = (index) => {
      visibleItems = Array.from(items).filter(it => it.style.display !== 'none');
      if (!visibleItems.length) visibleItems = Array.from(items);

      activeIndex = index >= 0 && index < visibleItems.length ? index : 0;
      updateLightbox();

      lightbox.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('is-active');
      document.body.style.overflow = '';
      if (lightboxImg) lightboxImg.classList.remove('is-zoomed');
      isZoomed = false;
    };

    items.forEach((item, idx) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        visibleItems = Array.from(items).filter(it => it.style.display !== 'none');
        const pos = visibleItems.indexOf(item);
        openLightbox(pos >= 0 ? pos : idx);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        activeIndex = activeIndex > 0 ? activeIndex - 1 : visibleItems.length - 1;
        updateLightbox();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        activeIndex = activeIndex < visibleItems.length - 1 ? activeIndex + 1 : 0;
        updateLightbox();
      });
    }

    if (zoomBtn && lightboxImg) {
      zoomBtn.addEventListener('click', () => {
        isZoomed = !isZoomed;
        lightboxImg.classList.toggle('is-zoomed', isZoomed);
      });
      lightboxImg.addEventListener('click', () => {
        isZoomed = !isZoomed;
        lightboxImg.classList.toggle('is-zoomed', isZoomed);
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        activeIndex = activeIndex > 0 ? activeIndex - 1 : visibleItems.length - 1;
        updateLightbox();
      }
      if (e.key === 'ArrowRight') {
        activeIndex = activeIndex < visibleItems.length - 1 ? activeIndex + 1 : 0;
        updateLightbox();
      }
    });

    // Mobile Swipe inside Lightbox
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const deltaX = touchEndX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) {
          activeIndex = activeIndex < visibleItems.length - 1 ? activeIndex + 1 : 0;
        } else {
          activeIndex = activeIndex > 0 ? activeIndex - 1 : visibleItems.length - 1;
        }
        updateLightbox();
      }
    }, { passive: true });
  }

  // 9. Interactive Video Player Lightbox with Canvas Audio Waveform
  initVideoPlayerLightbox() {
    const videoModal = document.getElementById('video-lightbox');
    if (!videoModal) return;

    const playBtns = document.querySelectorAll('.btn-video-play');
    const closeBtn = document.getElementById('video-modal-close');
    const titleEl = document.getElementById('video-modal-title');
    const descEl = document.getElementById('video-modal-desc');
    const catEl = document.getElementById('video-modal-category');

    const centerPlayBtn = document.getElementById('video-canvas-center-play');
    const controlPlayBtn = document.getElementById('video-play-toggle');
    const scrubberFill = document.getElementById('video-scrubber-fill');
    const scrubberTrack = document.getElementById('video-scrubber-track');
    const timerDisplay = document.getElementById('video-timer-display');
    const muteToggle = document.getElementById('video-mute-toggle');
    const canvas = document.getElementById('video-canvas-stream');

    let isPlaying = false;
    let isMuted = false;
    let animId = null;
    let currentTime = 0;
    const duration = 1125; // 18 mins 45 secs in seconds

    // Render Canvas Frame
    const renderCanvas = () => {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      // Dark cinematic backdrop
      ctx.fillStyle = '#081124';
      ctx.fillRect(0, 0, w, h);

      // Subtle radial light
      const grad = ctx.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, w / 2);
      grad.addColorStop(0, 'rgba(31, 91, 169, 0.4)');
      grad.addColorStop(1, 'rgba(8, 17, 36, 1)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw simulated live soundwave bars
      const numBars = 36;
      const barWidth = 6;
      const gap = 10;
      const startX = (w - (numBars * (barWidth + gap))) / 2;

      ctx.fillStyle = '#11AF83';
      for (let i = 0; i < numBars; i++) {
        let barHeight = isPlaying ? (Math.sin(Date.now() * 0.008 + i * 0.4) * 0.5 + 0.5) * 80 + 15 : 12;
        const x = startX + i * (barWidth + gap);
        const y = h / 2 - barHeight / 2;

        ctx.fillStyle = i % 2 === 0 ? '#1F5BA9' : '#11AF83';
        ctx.fillRect(x, y, barWidth, barHeight);
      }

      // Title overlay on canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '600 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('AL-IRTIQA-26 ARCHIVAL HD RECORDING', w / 2, h - 35);

      if (isPlaying) {
        currentTime = (currentTime + 0.25) % duration;
        const pct = (currentTime / duration) * 100;
        if (scrubberFill) scrubberFill.style.width = `${pct}%`;

        if (timerDisplay) {
          const curM = Math.floor(currentTime / 60);
          const curS = Math.floor(currentTime % 60);
          timerDisplay.textContent = `${String(curM).padStart(2, '0')}:${String(curS).padStart(2, '0')} / 18:45`;
        }
        animId = requestAnimationFrame(renderCanvas);
      }
    };

    const togglePlay = () => {
      isPlaying = !isPlaying;
      if (centerPlayBtn) centerPlayBtn.style.display = isPlaying ? 'none' : 'flex';
      if (controlPlayBtn) {
        controlPlayBtn.innerHTML = isPlaying
          ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
          : '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
      }

      if (isPlaying) {
        renderCanvas();
      } else {
        cancelAnimationFrame(animId);
      }
    };

    playBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-video-title') || 'AL-IRTIQA-26 Keynote Recording';
        const cat = btn.getAttribute('data-video-category') || 'Documentary';
        const desc = btn.getAttribute('data-video-desc') || '';

        if (titleEl) titleEl.textContent = title;
        if (catEl) catEl.textContent = cat;
        if (descEl) descEl.textContent = desc;

        videoModal.classList.add('is-active');
        document.body.style.overflow = 'hidden';

        currentTime = 0;
        isPlaying = true;
        if (centerPlayBtn) centerPlayBtn.style.display = 'none';
        renderCanvas();
      });
    });

    if (centerPlayBtn) centerPlayBtn.addEventListener('click', togglePlay);
    if (controlPlayBtn) controlPlayBtn.addEventListener('click', togglePlay);

    if (scrubberTrack) {
      scrubberTrack.addEventListener('click', (e) => {
        const rect = scrubberTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, clickX / rect.width));
        currentTime = pct * duration;
        if (scrubberFill) scrubberFill.style.width = `${pct * 100}%`;
      });
    }

    if (muteToggle) {
      muteToggle.addEventListener('click', () => {
        isMuted = !isMuted;
        muteToggle.style.color = isMuted ? 'var(--color-emerald)' : '#FFFFFF';
      });
    }

    const closeVideoModal = () => {
      isPlaying = false;
      cancelAnimationFrame(animId);
      videoModal.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('is-active')) {
        closeVideoModal();
      }
    });
  }

  // 10. Enhanced Food & Dining Experience (Meal Filter + Nutrition Modal)
  initEnhancedFoodDining() {
    const dayBtns = document.querySelectorAll('.food-day-btn');
    const dayPanels = document.querySelectorAll('.food-day-panel');
    const mealFilterBtns = document.querySelectorAll('.meal-type-filter-btn');

    if (dayBtns.length && dayPanels.length) {
      dayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetDay = btn.getAttribute('data-day');
          dayBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');

          dayPanels.forEach(panel => {
            if (panel.getAttribute('data-day') === targetDay) {
              panel.style.display = 'block';
              panel.classList.add('is-active');
            } else {
              panel.style.display = 'none';
              panel.classList.remove('is-active');
            }
          });
        });
      });
    }

    // Meal Category Filters
    if (mealFilterBtns.length) {
      mealFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetMeal = btn.getAttribute('data-meal');
          mealFilterBtns.forEach(b => {
            b.classList.remove('active');
            b.style.background = '#FFF';
            b.style.color = 'var(--text-secondary)';
            b.style.borderColor = 'var(--border-light)';
          });
          btn.classList.add('active');
          btn.style.background = 'var(--color-blue-royal)';
          btn.style.color = '#FFF';
          btn.style.borderColor = 'var(--color-blue-royal)';

          const activePanel = document.querySelector('.food-day-panel.is-active') || document.querySelector('.food-day-panel');
          if (!activePanel) return;

          const cards = activePanel.querySelectorAll('.meal-card');
          cards.forEach(card => {
            const mType = card.getAttribute('data-meal-type');
            if (targetMeal === 'all' || mType === targetMeal) {
              card.style.display = 'flex';
              card.style.opacity = '1';
            } else {
              card.style.display = 'none';
              card.style.opacity = '0';
            }
          });
        });
      });
    }

    // Nutrition & Culinary Modal
    const nutritionModal = document.getElementById('nutrition-modal');
    if (!nutritionModal) return;

    const modalTitle = document.getElementById('nutrition-modal-title');
    const modalHighlight = document.getElementById('nutrition-modal-highlight');
    const modalNutrition = document.getElementById('nutrition-modal-nutrition');
    const modalEtiquette = document.getElementById('nutrition-modal-etiquette');
    const closeBtn = document.getElementById('nutrition-modal-close');
    const ackBtn = document.getElementById('nutrition-modal-ack-btn');

    document.querySelectorAll('.btn-inspect-nutrition').forEach(btn => {
      btn.addEventListener('click', () => {
        if (modalTitle) modalTitle.textContent = btn.getAttribute('data-title') || 'Meal Highlights';
        if (modalHighlight) modalHighlight.textContent = btn.getAttribute('data-highlight') || '';
        if (modalNutrition) modalNutrition.textContent = btn.getAttribute('data-nutrition') || '';
        if (modalEtiquette) modalEtiquette.textContent = btn.getAttribute('data-etiquette') || '';

        nutritionModal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeNutModal = () => {
      nutritionModal.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeNutModal);
    if (ackBtn) ackBtn.addEventListener('click', closeNutModal);
    nutritionModal.addEventListener('click', (e) => {
      if (e.target === nutritionModal) closeNutModal();
    });
  }

  // 11. Camp Memory Wall with Frontend Demo Storage
  initCampMemoryWall() {
    const memoryModal = document.getElementById('memory-modal');
    const openBtn = document.getElementById('btn-open-memory-modal');
    const closeBtn = document.getElementById('memory-modal-close');
    const form = document.getElementById('memory-demo-form');
    const container = document.getElementById('memory-wall-container');
    const resetBtn = document.getElementById('memory-reset-demo-btn');

    const storageKey = 'irtiqa_memories_demo';

    // Load stored memories from localStorage
    const loadStoredMemories = () => {
      if (!container) return;
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
          const list = JSON.parse(stored);
          list.forEach(item => {
            renderCard(item, false);
          });
        }
      } catch (e) {
        console.warn('localStorage error loading memories:', e);
      }
    };

    const renderCard = (item, prepend = true) => {
      const card = document.createElement('div');
      card.className = 'memory-polaroid-card reveal-visible';
      card.innerHTML = `
        <div>
          <span class="badge badge-emerald" style="font-size: 0.6875rem; margin-bottom: 0.5rem;">${item.day} • Delegate Reflection</span>
          <p class="memory-quote-text">"${item.quote}"</p>
        </div>
        <div class="memory-author-meta">
          <div class="memory-author-avatar" style="background: var(--color-mint-pale); color: var(--color-emerald);">
            ${item.initials}
          </div>
          <div>
            <div style="font-weight: 700; font-size: 0.875rem; color: var(--text-primary);">${item.author}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${item.dars}</div>
          </div>
        </div>
      `;
      if (prepend && container.firstChild) {
        container.insertBefore(card, container.firstChild);
      } else {
        container.appendChild(card);
      }
    };

    if (openBtn && memoryModal) {
      openBtn.addEventListener('click', () => {
        memoryModal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      });
    }

    const closeMemModal = () => {
      if (memoryModal) {
        memoryModal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMemModal);
    if (memoryModal) {
      memoryModal.addEventListener('click', (e) => {
        if (e.target === memoryModal) closeMemModal();
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const author = document.getElementById('mem-author').value.trim();
        const dars = document.getElementById('mem-dars').value.trim();
        const day = document.getElementById('mem-day').value;
        const quote = document.getElementById('mem-quote').value.trim();

        if (!author || !quote) {
          alert('Please fill in your name and reflection.');
          return;
        }

        const initials = author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'AL';
        const newMemory = { author, dars, day, quote, initials };

        // Save to localStorage
        try {
          const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
          existing.unshift(newMemory);
          localStorage.setItem(storageKey, JSON.stringify(existing));
        } catch (err) {
          console.warn('localStorage write error:', err);
        }

        renderCard(newMemory, true);
        form.reset();
        closeMemModal();

        // Toast feedback
        let toast = document.getElementById('demo-toast');
        if (!toast) {
          toast = document.createElement('div');
          toast.id = 'demo-toast';
          toast.className = 'toast-notice';
          document.body.appendChild(toast);
        }
        toast.innerHTML = `<strong>Memory Added!</strong> Your reflection is now featured on the Camp Memory Wall.`;
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 4000);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        localStorage.removeItem(storageKey);
        alert('Stored demo reflections reset.');
        location.reload();
      });
    }

    loadStoredMemories();
  }

  // 12. Micro-interactions: Magnetic Buttons & Metric Counters
  initMicroInteractions() {
    // Magnetic Buttons (Desktop >1024px only)
    if (window.innerWidth > 1024 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const magneticBtns = document.querySelectorAll('[data-magnetic="true"], .btn-magnetic');
      magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate(0px, 0px)';
        });
      });
    }

    // Metric Number Counters
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const countObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetNum = parseInt(el.getAttribute('data-counter'), 10) || 0;
          const duration = 1400;
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * targetNum);

            el.textContent = currentVal.toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = targetNum.toLocaleString();
            }
          };

          requestAnimationFrame(updateCount);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => countObserver.observe(c));
  }

  // 13. FAQ Accordion
  initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-accordion-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-accordion-header');
      if (!trigger) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-active');
        faqItems.forEach(other => {
          other.classList.remove('is-active');
          const otherTrigger = other.querySelector('.faq-accordion-header');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('is-active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // 14. Faculty & People Filtering
  initPeopleFilters() {
    const filterBtns = document.querySelectorAll('.people-filter-btn');
    const cards = document.querySelectorAll('.person-profile-card');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.getAttribute('data-group');
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        cards.forEach(card => {
          const cardGroup = card.getAttribute('data-group');
          if (group === 'all' || cardGroup === group) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 15. Contact Demo Form
  initContactDemoForm() {
    const form = document.getElementById('contact-demo-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="full_name"]');
      if (!name || !name.value.trim()) {
        alert('Please enter your full name.');
        return;
      }

      let toast = document.getElementById('demo-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'demo-toast';
        toast.className = 'toast-notice';
        document.body.appendChild(toast);
      }
      toast.innerHTML = `<strong>Message Dispatched (Demo)!</strong> Thank you, ${name.value.trim()}. The Secretariat will respond shortly.`;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 4500);
      form.reset();
    });
  }

  // 16. Resource Search
  initResourceSearch() {
    const searchInput = document.getElementById('resource-search-input');
    const filterBtns = document.querySelectorAll('.resource-cat-btn');
    const cards = document.querySelectorAll('.resource-download-card');

    if (!cards.length) return;

    const apply = () => {
      const query = (searchInput ? searchInput.value.toLowerCase().trim() : '');
      const activeBtn = document.querySelector('.resource-cat-btn.active');
      const cat = activeBtn ? activeBtn.getAttribute('data-category') : 'all';

      cards.forEach(c => {
        const cCat = c.getAttribute('data-category');
        const text = c.textContent.toLowerCase();
        const catMatch = (cat === 'all' || cCat === cat);
        const queryMatch = (!query || text.includes(query));
        c.style.display = (catMatch && queryMatch) ? 'flex' : 'none';
      });
    };

    if (searchInput) searchInput.addEventListener('input', apply);
    if (filterBtns.length) {
      filterBtns.forEach(b => {
        b.addEventListener('click', () => {
          filterBtns.forEach(btn => btn.classList.remove('active'));
          b.classList.add('active');
          apply();
        });
      });
    }
  }

  // 17. Smooth Scroll
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = 84;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.irtiqaAnim = new AnimationController();
});
