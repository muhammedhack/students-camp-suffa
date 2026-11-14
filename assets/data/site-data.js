/**
 * AL-IRTIQA-26 (الارتقاء ٢٦) — CENTRAL SITE DATA & EVENT CONFIGURATION
 * Modular, extensible JavaScript data architecture
 * Strictly separates mock & presentation data
 */

window.IRTIQA_DATA = {
  meta: {
    eventName: "AL-IRTIQA-26",
    arabicName: "الارتقاء ٢٦",
    malayalamName: "അൽ ഇർതിഖാഅ്-26",
    edition: "2026",
    taglineEn: "The Art of Ascension — A Journey Towards Excellence",
    taglineMl: "ഇൽമിൽ ഉറച്ച്, ഉയരങ്ങളിലേക്ക്",
    taglineAr: "بِالْعِلْمِ نَرْتَقِي، وَبِالْهِمَمِ نَسْمُو",
    dates: "21 – 27 December 2026",
    datesFormatted: {
      start: "2026-12-21",
      end: "2026-12-27",
      targetCountdown: "2026-12-21T08:00:00+05:30"
    },
    location: {
      venue: "Alathurpadi Dars Campus (Halaqatudduroos)",
      place: "Melmuri, Malappuram, Kerala, India - 673517",
      mapsUrl: "https://maps.google.com/?q=Alathurpadi+Dars+Juma+Masjid+Melmuri+Malappuram"
    },
    organizer: {
      nameEn: "Alathurpadi Dars Students' Association (ADSA)",
      nameMl: "ആലത്തൂർപടി ദർസ് സ്റ്റുഡന്റ്സ് അസോസിയേഷൻ (ADSA)",
      nameAr: "جمعية طلاب درس علاثوربادي",
      legacy: "150+ Years Legacy of Religious & Academic Integration",
      supervisor: "Dr. C.K. Muhammed Abdurahman Al Faizy Al Azhari",
      supervisorTitle: "Principal Mudarris, Alathurpadi Dars & Member, Samastha Consultative Council"
    },
    contact: {
      phone: "+91 9074525205",
      whatsapp: "919074525205",
      email: "alathoorpadidars@gmail.com",
      website: "https://alathurpadidars.in"
    }
  },

  // The Seven Days Journey Outline
  journey: [
    {
      dayNumber: "01",
      dayKey: "day01",
      dateFormatted: "21 Dec 2026, Monday",
      titleEn: "Foundations of Elevation",
      titleMl: "ഉന്നതിയുടെ അടിത്തറകൾ",
      titleAr: "أُسُسُ الارْتِقَاء",
      themeEn: "Spiritual Grounding & Academic Mindset",
      themeMl: "ആത്മീയ അടിത്തറയും പഠന മനഃസ്ഥിതിയും",
      tagline: "Firm Roots, Soaring Aspirations",
      url: "day-01.html",
      sessions: [
        { time: "08:30 AM – 10:00 AM", title: "Registration & Welcome Halaqa", speaker: "ADSA Reception Committee", venue: "Central Dars Plenary Hall" },
        { time: "10:30 AM – 01:00 PM", title: "Inaugural Keynote: The Philosophy of Ascension", speaker: "Dr. C.K. Muhammed Abdurahman Al Faizy Al Azhari", venue: "Irtiqa Auditorium" },
        { time: "02:30 PM – 04:30 PM", title: "Session 1: Classical Dars Ethics in Modern Academia", speaker: "[Senior Dars Mudarris]", venue: "Halaqa Hall A" },
        { time: "05:00 PM – 06:30 PM", title: "Evening Cohort Circle: Goal Mapping & Study Journaling", speaker: "[Cohort Mentors]", venue: "Campus Courtyard" },
        { time: "08:00 PM – 09:30 PM", title: "Night Plenary: Inspiration from Heritage Scholars", speaker: "[Guest Historian]", venue: "Central Dars Plenary Hall" }
      ]
    },
    {
      dayNumber: "02",
      dayKey: "day02",
      dateFormatted: "22 Dec 2026, Tuesday",
      titleEn: "Classical Wisdom, Modern Horizons",
      titleMl: "പാരമ്പര്യ ജ്ഞാനവും ആധുനിക ചക്രവാളവും",
      titleAr: "الأَصَالَةُ وَالمُعَاصَرَة",
      themeEn: "Dars Heritage & Research Methodology",
      themeMl: "ദർസ് പാരമ്പര്യവും ഗവേഷണ രീതിശാസ്ത്രവും",
      tagline: "Connecting Heritage with Global Scholarship",
      url: "day-02.html",
      sessions: [
        { time: "08:30 AM – 10:30 AM", title: "Research Fundamentals: Textual Hermeneutics to Literature Review", speaker: "[Senior Research Fellow]", venue: "Irtiqa Auditorium" },
        { time: "11:00 AM – 01:00 PM", title: "Comparative Jurisprudence & Contemporary Critical Studies", speaker: "[Faculty of Classical Fiqh]", venue: "Halaqa Hall A" },
        { time: "02:30 PM – 04:30 PM", title: "Hands-on Lab: Formulating Academic Research Questions", speaker: "[Academic Advisor]", venue: "Research Lab" },
        { time: "05:00 PM – 06:30 PM", title: "Manuscript Study: Reading Classical Marginalia (Hashiya)", speaker: "[Senior Mudarris]", venue: "Library Archive" },
        { time: "08:00 PM – 09:30 PM", title: "Colloquium: Bridging the Dars and the University", speaker: "[Alumni Research Scholars]", venue: "Irtiqa Auditorium" }
      ]
    },
    {
      dayNumber: "03",
      dayKey: "day03",
      dateFormatted: "23 Dec 2026, Wednesday",
      titleEn: "The Power of Languages",
      titleMl: "ഭാഷാ നൈപുണ്യവും ആശയവിനിമയവും",
      titleAr: "قُوَّةُ اللُّغَاتِ وَالبَيَان",
      themeEn: "Functional Arabic, Academic English & Urdu",
      themeMl: "ഫങ്ഷണൽ അറബി, അക്കാദമിക് ഇംഗ്ലീഷ്, ഉർദു",
      tagline: "Universal Voices for Global Impact",
      url: "day-03.html",
      sessions: [
        { time: "08:30 AM – 10:30 AM", title: "Functional Spoken & Academic Arabic for International Scholars", speaker: "[International Arabic Specialist]", venue: "Irtiqa Auditorium" },
        { time: "11:00 AM – 01:00 PM", title: "Academic English: Grammar of Scholarly Argumentation", speaker: "[University English Professor]", venue: "Language Lab B" },
        { time: "02:30 PM – 04:30 PM", title: "Urdu Literary & Theological Discourse Workshop", speaker: "[Urdu Scholar]", venue: "Halaqa Hall B" },
        { time: "05:00 PM – 06:30 PM", title: "Trilingual Toastmasters & Speech Practice Circles", speaker: "[Communication Coaches]", venue: "Open Amphitheatre" },
        { time: "08:00 PM – 09:30 PM", title: "Arabic-English Poetry & Rhetoric Night (Balagha & Eloquence)", speaker: "[Poets & Rhetoricians]", venue: "Central Dars Plenary Hall" }
      ]
    },
    {
      dayNumber: "04",
      dayKey: "day04",
      dateFormatted: "24 Dec 2026, Thursday",
      titleEn: "Higher Education & Global Universities",
      titleMl: "ഉപരിപഠനവും അന്താരാഷ്ട്ര സർവകലാശാലകളും",
      titleAr: "التَّعْلِيمُ العَالِي وَالجَامِعَاتُ الدَّوْلِيَّة",
      themeEn: "Global Campuses, Scholarships & Application Roadmaps",
      themeMl: "വിദേശ സർവകലാശാലകൾ, സ്കോളർഷിപ്പുകൾ, അഡ്മിഷൻ വഴികൾ",
      tagline: "Navigating International Academia",
      url: "day-04.html",
      sessions: [
        { time: "08:30 AM – 10:30 AM", title: "Central Universities in India (JNU, Jamia, EFLU, DU, AMU) Admission Blueprints", speaker: "[TREND Senior Trainer]", venue: "Irtiqa Auditorium" },
        { time: "11:00 AM – 01:00 PM", title: "Middle East & Asian Universities: Al-Azhar, Qatar, Marmara, Istanbul", speaker: "[International Admissions Mentor]", venue: "Irtiqa Auditorium" },
        { time: "02:30 PM – 04:30 PM", title: "Western Academia: UK, Europe & US Scholarships (Chevening, Erasmus+)", speaker: "[Commonwealth Scholar Alumni]", venue: "Halaqa Hall A" },
        { time: "05:00 PM – 06:30 PM", title: "Interactive Consultation: Choosing Your Academic Discipline", speaker: "[Career Counseling Desk]", venue: "Advising Hub" },
        { time: "08:00 PM – 09:30 PM", title: "Panel Discussion: Overcoming Academic Impostor Syndrome", speaker: "[University Professors & Scholars]", venue: "Irtiqa Auditorium" }
      ]
    },
    {
      dayNumber: "05",
      dayKey: "day05",
      dateFormatted: "25 Dec 2026, Friday",
      titleEn: "Critical Thinking & Academic Writing",
      titleMl: "വിമർശനാത്മക ചിന്തയും അക്കാദമിക് എഴുത്തും",
      titleAr: "التَّفْكِيرُ النَّقْدِيُّ وَالكِتَابَةُ الأَكَادِيمِيَّة",
      themeEn: "Paper Publishing, Literature Review & Dialectics",
      themeMl: "പ്രബന്ധ രചന, ലിറ്ററേച്ചർ റിവ്യൂ, സംവാദം",
      tagline: "Articulating Thought with Rigor",
      url: "day-05.html",
      sessions: [
        { time: "08:30 AM – 10:30 AM", title: "Writing the Winning Statement of Purpose (SOP) & Academic CV", speaker: "[Academic Writing Consultant]", venue: "Irtiqa Auditorium" },
        { time: "11:00 AM – 12:30 PM", title: "Friday Prayer & Khutbah at Alathurpadi Juma Masjid", speaker: "Chief Mudarris", venue: "Alathurpadi Juma Masjid" },
        { time: "02:30 PM – 04:30 PM", title: "Munazarah Dialectics Lab: Islamic Logic Applied to Modern Debate", speaker: "[Faculty of Logic & Philosophy]", venue: "Debate Chamber" },
        { time: "05:00 PM – 06:30 PM", title: "Peer Paper Review & Citation Mastery (APA, Chicago, MLA)", speaker: "[Editorial Board Mentors]", venue: "Research Lab" },
        { time: "08:00 PM – 09:30 PM", title: "Simulated University Admission Interview Rounds", speaker: "[Panel of Interviewers]", venue: "Conference Rooms 1-4" }
      ]
    },
    {
      dayNumber: "06",
      dayKey: "day06",
      dateFormatted: "26 Dec 2026, Saturday",
      titleEn: "Leadership, Ethics & Community Impact",
      titleMl: "നേതൃത്വവും ധാർമികതയും സാമൂഹ്യ ദൗത്യവും",
      titleAr: "القِيَادَةُ وَالأَخْلَاقُ وَالمَسْؤُولِيَّة",
      themeEn: "Social Stewardship & Educational Reform",
      themeMl: "സാമൂഹിക പുനർനിർമാണവും നേതൃപാടവവും",
      tagline: "Scholars of Integrity for Society",
      url: "day-06.html",
      sessions: [
        { time: "08:30 AM – 10:30 AM", title: "The Scholar as a Public Intellectual: Civic Duty & Ethics", speaker: "[Eminent Social Ethicist]", venue: "Irtiqa Auditorium" },
        { time: "11:00 AM – 01:00 PM", title: "Civil Services & Public Policy Pathways for Madrasa Graduates", speaker: "[IAS / Civil Services Mentor]", venue: "Irtiqa Auditorium" },
        { time: "02:30 PM – 04:30 PM", title: "Community Education Models: Designing Impactful Local Projects", speaker: "[ADSA Leadership Council]", venue: "Halaqa Hall A" },
        { time: "05:00 PM – 06:30 PM", title: "Youth Mentoring Circles: Guiding the Next Generation", speaker: "[Senior Coordinators]", venue: "Campus Courtyard" },
        { time: "08:00 PM – 10:00 PM", title: "Campfire of Reflections: Seven Days of Transformation", speaker: "[All Campers & Mentors]", venue: "Campus Amphitheatre" }
      ]
    },
    {
      dayNumber: "07",
      dayKey: "day07",
      dateFormatted: "27 Dec 2026, Sunday",
      titleEn: "The Horizon of Tomorrow (Valedictory)",
      titleMl: "നാളെയുടെ ചക്രവാളം (സമാപനം)",
      titleAr: "أُفُقُ الغَدِ وَخِتَامُ المَسِيرَة",
      themeEn: "Action Plan, Mentorship Pledges & Certification",
      themeMl: "കർമപദ്ധതി, മെന്റർഷിപ്പ് പ്രതിജ്ഞ, സമാപനം",
      tagline: "Departing to Lead and Inspire",
      url: "day-07.html",
      sessions: [
        { time: "08:30 AM – 10:30 AM", title: "Individualized 1-Year Academic Action Plan Finalization", speaker: "[Personal Mentors]", venue: "Advising Hub" },
        { time: "11:00 AM – 01:00 PM", title: "Grand Valedictory Session & Mentorship Oath", speaker: "Dr. C.K. Muhammed Abdurahman Al Faizy Al Azhari & Dignitaries", venue: "Irtiqa Auditorium" },
        { time: "02:30 PM – 04:00 PM", title: "Digital Certificate Conferral & Fellowship Awarding", speaker: "[ADSA Presidium]", venue: "Irtiqa Auditorium" },
        { time: "04:30 PM – 05:30 PM", title: "Farewell Halaqa & Closing Du'a", speaker: "Alathurpadi Dars Faculty", venue: "Central Dars Plenary Hall" }
      ]
    }
  ],

  // Seven-Day Food & Dining Menu (Editable Placeholders)
  dining: {
    timings: {
      breakfast: "07:30 AM – 08:20 AM",
      lunch: "01:00 PM – 02:15 PM",
      eveningTea: "04:30 PM – 05:00 PM",
      dinner: "09:30 PM – 10:15 PM"
    },
    location: "Alathurpadi Dars Central Dining Hall (Melmuri)",
    specialNotes: "All meals are prepared with wholesome ingredients under strict hygiene standards. Special dietary requirements can be notified at the helpdesk upon arrival.",
    menuDays: [
      {
        day: "01",
        date: "Monday, 21 Dec 2026",
        dayTitle: "Welcome & Inaugural Feast",
        breakfast: {
          items: "Traditional Kerala Idiyappam & Vegetable Stew, Steamed Bananas, Fresh Tea / Coffee",
          timing: "07:30 AM – 08:20 AM",
          highlight: "Light & energizing traditional morning menu"
        },
        lunch: {
          items: "Malabar Ghee Rice with Slow-Cooked Chicken Varutharacha Curry, Dal Tadka, Crisp Papad, Mango Pickle & Fresh Salad",
          timing: "01:00 PM – 02:15 PM",
          highlight: "Traditional Malabar festive reception"
        },
        eveningTea: {
          items: "Hot Sukku Tea / Cardamom Tea, Banana Fritters (Pazham Pori) & Roasted Chickpeas",
          timing: "04:30 PM – 05:00 PM",
          highlight: "Authentic dars tea-time refreshment"
        },
        dinner: {
          items: "Whole Wheat Chapatis, Creamy Paneer Butter Masala, Mixed Dal Curry, Steamed Rice, Warm Cumin Water",
          timing: "09:30 PM – 10:15 PM",
          highlight: "Wholesome, digestion-friendly dinner"
        }
      },
      {
        day: "02",
        date: "Tuesday, 22 Dec 2026",
        dayTitle: "Scholarly Research Day",
        breakfast: {
          items: "Soft Puttu with Kadala Curry, Fresh Boiled Eggs, Seasonal Cut Fruits, Hot Tea",
          timing: "07:30 AM – 08:20 AM",
          highlight: "Protein-rich breakfast for intense study"
        },
        lunch: {
          items: "Kerala Red Rice, Malappuram Style Fish Curry / Vegetable Theeyal, Thoran (Cabbage & Coconut), Moru Curry, Pickle & Chammanthi",
          timing: "01:00 PM – 02:15 PM",
          highlight: "Traditional homestyle Kerala meal"
        },
        eveningTea: {
          items: "Suleimani Tea / Milk Tea with Hot Meat Rolls & Spicy Onion Pakoras",
          timing: "04:30 PM – 05:00 PM",
          highlight: "Crispy snack break"
        },
        dinner: {
          items: "Malabar Pathiri, Mughlai Chicken Kurma / Rich Green Peas Masala, Fresh Cut Watermelon, Jeera Water",
          timing: "09:30 PM – 10:15 PM",
          highlight: "Classic Malabar dinner"
        }
      },
      {
        day: "03",
        date: "Wednesday, 23 Dec 2026",
        dayTitle: "Trilingual Immersion Day",
        breakfast: {
          items: "Steamed Idli with Sambar & Coconut Chutney, Crispy Medu Vada, Filter Coffee / Tea",
          timing: "07:30 AM – 08:20 AM",
          highlight: "Light South Indian classic"
        },
        lunch: {
          items: "Hyderabadi Style Dum Biryani (Chicken / Vegetable), Cooling Cucumber Onion Raita, Brinjal Salan, Pappadam",
          timing: "01:00 PM – 02:15 PM",
          highlight: "Aromatic Hyderabadi culinary experience"
        },
        eveningTea: {
          items: "Masala Chai with Samosas & Mint Chutney, Assorted Biscuits",
          timing: "04:30 PM – 05:00 PM",
          highlight: "North-Indian inspired evening tea"
        },
        dinner: {
          items: "Tandoori Rotis, Dal Makhani, Mixed Vegetable Korma, Light Pulao, Seasonal Fruit Custard",
          timing: "09:30 PM – 10:15 PM",
          highlight: "Balanced nutritious evening feast"
        }
      },
      {
        day: "04",
        date: "Thursday, 24 Dec 2026",
        dayTitle: "Global Horizons Day",
        breakfast: {
          items: "Fluffy Poori with Potato Masala, Sweet Kesari Halwa, Fresh Orange Slices, Tea / Coffee",
          timing: "07:30 AM – 08:20 AM",
          highlight: "Festive morning breakfast"
        },
        lunch: {
          items: "Fragrant Jeera Rice, Tender Mutton Curry / Mushroom Pepper Fry, Dal Fry, Fresh Garden Salad, Lemon Pickle",
          timing: "01:00 PM – 02:15 PM",
          highlight: "Rich academic fuel for campus counseling"
        },
        eveningTea: {
          items: "Special Arabic Qahwah (Cardamom Coffee) with Dates & Sweet Unnakaya (Banana Stuffed Snack)",
          timing: "04:30 PM – 05:00 PM",
          highlight: "Arabian hospitality touchpoint"
        },
        dinner: {
          items: "Steamed Rice, Nadan Sambar, Avial, Beetroot Thoran, Crispy Pappadam, Warm Herb Infused Water",
          timing: "09:30 PM – 10:15 PM",
          highlight: "Clean and restorative meal"
        }
      },
      {
        day: "05",
        date: "Friday, 25 Dec 2026",
        dayTitle: "Sacred Friday & Dialectics",
        breakfast: {
          items: "Malabar Neyyappam, Vellayappam with Egg Roast / Vegetable Stew, Fresh Bananas, Hot Tea",
          timing: "07:30 AM – 08:20 AM",
          highlight: "Traditional Jumu'ah morning delicacies"
        },
        lunch: {
          items: "Grand Jumu'ah Thalassery Dum Biryani, Date Pickle, Onion Mint Chammanthi, Pappadam, Sweet Payasam",
          timing: "01:15 PM – 02:30 PM",
          highlight: "Special Friday festive banquet"
        },
        eveningTea: {
          items: "Hot Sulaimani with Kozhikkodan Halwa & Savory Parippu Vada",
          timing: "04:30 PM – 05:00 PM",
          highlight: "Calicut heritage tea snacks"
        },
        dinner: {
          items: "Whole Wheat Soft Chapatis, Chicken Stew / Chana Masala, Light Rice Gruel with Salted Mango & Ghee (Optional)",
          timing: "09:30 PM – 10:15 PM",
          highlight: "Comforting post-debate dinner"
        }
      },
      {
        day: "06",
        date: "Saturday, 26 Dec 2026",
        dayTitle: "Leadership & Community Day",
        breakfast: {
          items: "Healthy Ragi Puttu with Steamed Green Gram & Jaggery, Fresh Papaya Cubes, Milk Tea",
          timing: "07:30 AM – 08:20 AM",
          highlight: "Wholesome millet energy boost"
        },
        lunch: {
          items: "Steamed Matta Rice, Malabar Chicken Fry / Paneer Tikka, Pulissery, Cabbage Thoran, Pickled Green Chillies",
          timing: "01:00 PM – 02:15 PM",
          highlight: "Hearty traditional power lunch"
        },
        eveningTea: {
          items: "Ginger Mint Tea with Crunchy Onion Samosas & Roasted Peanuts",
          timing: "04:30 PM – 05:00 PM",
          highlight: "Campfire precursor refreshments"
        },
        dinner: {
          items: "Special Mandi Rice with Grilled Pepper Chicken / Roasted Paneer, Spicy Tomato Salata, Lemon Mint Juice",
          timing: "09:30 PM – 10:30 PM",
          highlight: "Grand Campfire Celebration Feast"
        }
      },
      {
        day: "07",
        date: "Sunday, 27 Dec 2026",
        dayTitle: "Valedictory & Horizon Day",
        breakfast: {
          items: "Soft Appam with Coconut Milk & Rich Vegetable Stew, Fresh Cut Apples, Premium Coffee / Tea",
          timing: "07:30 AM – 08:20 AM",
          highlight: "Refined valedictory morning breakfast"
        },
        lunch: {
          items: "Grand Royal Malabar Biryani, Pineapple Pachadi, Boiled Egg, Mint Chutney, Ice Cream with Fresh Dry Fruits",
          timing: "01:00 PM – 02:30 PM",
          highlight: "Farewell Royal Feast"
        },
        eveningTea: {
          items: "Special Cardamom Tea with Sweet Mutta Maala / Kinpathiri & Assorted Savories",
          timing: "04:30 PM – 05:15 PM",
          highlight: "Parting tea & fellowship snacks"
        },
        dinner: {
          items: "Light Chapatis, Vegetable Korma, Steamed Rice, Sweet Herbal Digestive Kawa",
          timing: "08:30 PM – 09:30 PM",
          highlight: "Departure travel-friendly light dinner"
        }
      }
    ]
  },

  // People & Faculty Directory
  people: {
    patron: {
      name: "Dr. C.K. Muhammed Abdurahman Al Faizy Al Azhari",
      role: "Chief Patron & Keynote Speaker",
      title: "Principal Mudarris, Alathurpadi Dars & Member, Samastha Central Mushawara",
      qualification: "Ph.D., Al-Azhar University, Cairo | Eminent Dars Educator",
      bio: "Renowned scholar and religious educator heading Alathurpadi Dars for decades. Instrumental in integrating rigorous traditional Dars studies with global higher education.",
      image: "assets/images/speakers/speaker-patron.jpeg"
    },
    speakers: [
      {
        id: "sp1",
        name: "Uvais Ashrafy al Faizy al Nizami",
        role: "Senior Faculty & Fiqh Scholar",
        category: "mentors",
        title: "Senior Faculty, Alathurpadi Dars",
        qualification: "Faizy, Nizami | Alathurpadi Academic Board",
        bio: "Specialist in Classical Islamic Jurisprudence, Usul al-Fiqh, and comparative pedagogical methods in traditional dars circles.",
        image: "assets/images/speakers/speaker-mentor.jpeg"
      },
      {
        id: "sp2",
        name: "Senior Trainer, SKSSF TREND Higher Education Wing",
        role: "Career Strategist & Admissions Director",
        category: "mentors",
        title: "Certified Master Trainer, TREND Higher Education",
        qualification: "M.Phil., Central University | Certified Career Coach",
        bio: "Veteran mentor guiding thousands of dars graduates into Central Universities, JNU, EFLU, and international scholarship fellowships.",
        image: "assets/images/gallery/gallery-orientation.png"
      },
      {
        id: "sp3",
        name: "International Arabic & Linguistics Faculty",
        role: "Head of Trilingual Immersion",
        category: "language",
        title: "Senior Lecturer in Functional Arabic & Academic English",
        qualification: "M.A. Linguistics (EFLU) | Al-Azhar Arabic Diploma",
        bio: "Pioneering educator specializing in breaking linguistic barriers for madrasa graduates pursuing global research and foreign university admissions.",
        image: "assets/images/gallery/gallery-workshop.png"
      },
      {
        id: "sp4",
        name: "Akbar Sherif al Faizy al Nizami",
        role: "Assistant Faculty & Dialectics Mentor",
        category: "mentors",
        title: "Faculty, Alathurpadi Dars",
        qualification: "Faizy, Nizami | Researcher in Mantiq & Kalam",
        bio: "Specialist in classical logic (Mantiq) and academic argumentation, training students in structured debate and discourse.",
        image: "assets/images/gallery/gallery-session.png"
      },
      {
        id: "sp5",
        name: "Shafeeq Niyas al Faizy al Nizami",
        role: "Dars Pedagogy & Research Coordinator",
        category: "mentors",
        title: "Faculty of Hadith & Hermeneutics",
        qualification: "Faizy, Nizami",
        bio: "Mentor specializing in textual analysis and guiding final-year dars students towards university research publications.",
        image: "assets/images/gallery/gallery-discussion.jpeg"
      },
      {
        id: "sp6",
        name: "ADSA Committee Leadership",
        role: "Organizing Committee Directorate",
        category: "committee",
        title: "Alathurpadi Dars Students' Association",
        qualification: "Student Council Executive Body",
        bio: "Student leadership steering logistics, residential accommodations, digital infrastructure, and delegate mentoring.",
        image: "assets/images/brand/adsa-official-logo.png"
      }
    ]
  },

  // Frequently Asked Questions
  faqs: [
    {
      category: "general",
      question: "What is AL-IRTIQA-26?",
      answer: "AL-IRTIQA-26 is a premium seven-day residential academic orientation camp organized by Alathurpadi Dars Students' Association (ADSA) in collaboration with the SUFFA Dars Network. It is designed to prepare students graduating from darses to pursue higher education at premier Central and international universities."
    },
    {
      category: "general",
      question: "Where and when will the camp be held?",
      answer: "The camp will be held from 21 December to 27 December 2026 at the historic Alathurpadi Dars Campus (Halaqatudduroos) in Melmuri, Malappuram, Kerala, India."
    },
    {
      category: "registration",
      question: "Who is eligible to participate?",
      answer: "Final-year and graduating students from SUFFA darses and affiliated institutions preparing for higher studies entrance examinations, central university admissions, and international scholarships are eligible."
    },
    {
      category: "registration",
      question: "How do I register for the camp?",
      answer: "Registrations will open officially through our online portal and helpline. Currently, the online Student Portal operates in demo demonstration mode for prospective delegates to preview the dashboard."
    },
    {
      category: "food",
      question: "Are accommodation and food provided?",
      answer: "Yes, complete residential accommodation and full-board dining (breakfast, lunch, evening tea with snacks, and dinner) are arranged inside the Alathurpadi Dars campus for all seven days of the camp."
    },
    {
      category: "schedule",
      question: "What subjects and sessions will be covered during the seven days?",
      answer: "The comprehensive curriculum spans Classical Dars Research Methodologies, Functional Arabic, Academic English, Urdu, Central Universities (JNU, Jamia, EFLU, DU) Admission Blueprints, International Scholarships (Erasmus, Chevening, Turkiye Burslari), Munazarah Dialectics, and Academic Writing."
    },
    {
      category: "general",
      question: "Will participants receive a certificate?",
      answer: "Yes, every delegate who completes the full seven-day residential program, submits their individual higher education roadmap, and participates in the workshops will be awarded an official certificate of completion from ADSA and Alathurpadi Dars."
    }
  ]
};
