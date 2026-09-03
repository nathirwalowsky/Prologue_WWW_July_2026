export type Lang = "pl" | "en"

export const translations = {
  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home:          { pl: "Strona główna",  en: "Home" },
    product:       { pl: "Produkt",        en: "Product" },
    services:      { pl: "Usługi",         en: "Services" },
    servicesStrategy:    { pl: "Budowanie strategii",           en: "Building Strategy" },
    servicesStrategyDesc:{ pl: "Zdefiniuj kierunek i przewagę konkurencyjną", en: "Define direction and competitive advantage" },
    servicesKeyProjects:    { pl: "Kluczowe projekty",          en: "Key Projects" },
    servicesKeyProjectsDesc:{ pl: "Dostarcz inicjatywy, które naprawdę się liczą", en: "Deliver the initiatives that truly matter" },
    servicesTransformation:    { pl: "Transformacja",           en: "Transformation" },
    servicesTransformationDesc:{ pl: "Przeprowadź całą organizację przez głęboką zmianę", en: "Guide your whole organisation through deep change" },
    viewAllServices: { pl: "Wszystkie usługi →",               en: "All services →" },
    vector:        { pl: "Vector",         en: "Vector" },
    about:         { pl: "O nas",          en: "About" },
    caseStudies:   { pl: "Realizacje",     en: "Case studies" },
    blog:          { pl: "Blog",           en: "Blog" },
    contact:       { pl: "Kontakt",        en: "Contact" },
    viewAllProducts: { pl: "Zobacz wszystkie produkty →", en: "View all products →" },
    cta:           { pl: "[CTA]",          en: "[CTA]" },
    openMenu:      { pl: "Otwórz menu",    en: "Open menu" },
    closeMenu:     { pl: "Zamknij menu",   en: "Close menu" },
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    explore:       { pl: "Eksploruj",      en: "Explore" },
    company:       { pl: "Firma",          en: "Company" },
    connect:       { pl: "Kontakt",        en: "Connect" },
    about:         { pl: "O nas",          en: "About" },
    becomePartner: { pl: "Zostań Partnerem", en: "Become a Partner" },
    privacy:       { pl: "Polityka Prywatności", en: "Privacy Policy" },
    contact:       { pl: "Kontakt",        en: "Contact" },
  },

  // ── Announcement bar ─────────────────────────────────────────────────────────
  announcement: {
    text: {
      pl: "Darmowe warsztaty strategiczne — pobierz warsztat Vector bez kosztów.",
      en: "Free strategic workshop — get the Vector Workshop at no cost.",
    },
    cta: {
      pl: "Pobierz za darmo →",
      en: "Get it free →",
    },
  },

  // ── Home page ────────────────────────────────────────────────────────────────
  home: {
    heroEyebrow:      { pl: "[Nagłówek — kogo obsługujesz]",           en: "[Eyebrow — who you serve]" },
    heroHeading:      { pl: "Strategiczna doskonałość",                 en: "Strategic excellence" },
    heroHeadingAccent:{ pl: "w erze ciągłej transformacji",            en: "in an age of constant transformation" },
    heroSub:          { pl: "[Nagłówek wyjaśniający propozycję wartości w jednym lub dwóch zdaniach.]", en: "[Subheadline explaining your value proposition in one or two clear, human sentences.]" },
    heroCtaPrimary:   { pl: "Warsztaty Vector",                         en: "Vector Workshop" },
    heroCtaSecondary: { pl: "[Działanie drugorzędne]",                  en: "[Secondary action]" },
    breakthroughsLabel:{ pl: "Przełomy",                                en: "Breakthroughs" },
    breakthroughsTitle:{ pl: "Co możesz odblokować",                   en: "What You Could Unlock" },
    breakthroughsSub: { pl: "[Zdanie ramowe: konceptualne przełomy, które może osiągnąć klient.]", en: "[Framing sentence: the conceptual breakthroughs a client can achieve.]" },
    breakthroughDesc: { pl: "[Krótki opis zmiany konceptualnej i dlaczego jest ważna dla klienta.]", en: "[Short description of the conceptual shift and why it matters for the client.]" },
    testimonialsLabel:{ pl: "Referencje",                               en: "Social proof" },
    testimonialsTitle:{ pl: "Co mówią nasi klienci",                   en: "What Our Clients Say" },
    testimonialQuote: { pl: "[Opinia klienta o pracy z Prologue Agency]", en: "[Client quote about working with Prologue Agency]" },
    ctaTitle:         { pl: "Gotowy, by przekształcić swój biznes?",    en: "Ready to Transform Your Business?" },
    ctaSub:           { pl: "[Tekst zachęcający odwiedzającego do kolejnego kroku.]", en: "[Supporting text encouraging the visitor to take the next step.]" },
    ctaSchedule:      { pl: "Zaplanuj Warsztaty Vector",                en: "Schedule Vector Workshop" },
    ctaGetInTouch:    { pl: "Skontaktuj się z nami",                    en: "Get in Touch" },
    philosophyLabel:  { pl: "Filozofia",                                en: "Philosophy" },
    philosophyTitle:  { pl: "Jak myślimy",                              en: "How We Think" },
    philosophySub:    { pl: "[Krótki tekst wyjaśniający filozofię i podejście do transformacji biznesu.]", en: "[Short text explaining your philosophy and approach to business transformation.]" },
    philosophyLearnMore:{ pl: "Dowiedz się więcej o nas →",             en: "Learn more about us →" },
    philosophyWayOfWork:{ pl: "Sposób pracy",                           en: "Way of Work" },
    philosophyWhyItMatters:{ pl: "Dlaczego to ważne",                   en: "Why It Matters" },
    philosophyValues: { pl: "Wartości",                                 en: "Values" },
    philosophyAIManifest:{ pl: "Manifest AI",                           en: "AI Manifest" },
    blogLabel:        { pl: "Blog",                                     en: "Blog" },
    blogTitle:        { pl: "Najnowsze z naszego bloga",                en: "Latest from Our Blog" },
    blogViewAll:      { pl: "Zobacz wszystkie wpisy →",                 en: "View all posts →" },
    blogReadMore:     { pl: "Czytaj więcej →",                          en: "Read more →" },
    faqLabel:         { pl: "FAQ",                                      en: "FAQ" },
    faqTitle:         { pl: "Najczęściej zadawane pytania",             en: "Frequently Asked Questions" },
    faqReadArticle:   { pl: "Przeczytaj artykuł",                       en: "Read article" },
    ctaVideoLabel:    { pl: "[Wideo — sekcja CTA]",                     en: "[Video — CTA section]" },
    ctaVideoPlay:     { pl: "Odtwórz wideo CTA",                        en: "Play CTA video" },
    breakthroughsVideoLabel: { pl: "[Wideo — Przełomy]",                en: "[Video — Breakthroughs]" },
    breakthroughsVideoPlay:  { pl: "Odtwórz wideo Przełomy",           en: "Play Breakthroughs video" },

    // Results section
    resultsLabel:     { pl: "Rezultaty",                                en: "Results" },
    resultsTitle:     { pl: "Liczby, które mówią za siebie",            en: "Numbers that speak for themselves" },
    resultsSub:       { pl: "[Jedno zdanie opisujące skalę i głębokość pracy z klientami.]", en: "[One sentence describing the scale and depth of client work.]" },
    resultsStat1Value:{ pl: "200+",                                     en: "200+" },
    resultsStat1Label:{ pl: "Godzin warsztatów",                        en: "Hours of workshops" },
    resultsStat2Value:{ pl: "40+",                                      en: "40+" },
    resultsStat2Label:{ pl: "Projektów dostarczonych",                  en: "Projects delivered" },
    resultsStat3Value:{ pl: "15+",                                      en: "15+" },
    resultsStat3Label:{ pl: "Transformacji biznesowych",                en: "Business transformations" },
    resultsStat4Value:{ pl: "95%",                                      en: "95%" },
    resultsStat4Label:{ pl: "Klientów poleca nas dalej",                en: "Clients refer us forward" },
    resultsCaseStudiesLabel: { pl: "Studia przypadku",                  en: "Case studies" },
    resultsCaseStudiesTitle: { pl: "Wybrane prace",                     en: "Selected work" },
    resultsCaseStudyIndustry: { pl: "[Branża]",                        en: "[Industry]" },
    resultsCaseStudyOutcome: { pl: "[Kluczowy wynik lub przełom osiągnięty z klientem.]", en: "[Key outcome or breakthrough achieved with the client.]" },
    resultsCaseStudyTag: { pl: "[Etykieta projektu]",                   en: "[Engagement type]" },
    resultsViewAll:   { pl: "Zobacz wszystkie studia przypadku →",      en: "View all case studies →" },

    // Services section
    servicesLabel:    { pl: "Usługi",                                   en: "Services" },
    servicesTitle:    { pl: "Jak pracujemy z Tobą",                     en: "How we work with you" },
    servicesSub:      { pl: "[Jedno zdanie łączące trzy rodzaje zaangażowania w jedną spójną ofertę.]", en: "[One sentence connecting the three engagement types into one coherent offer.]" },
    service1Tag:      { pl: "Strategia",                                en: "Strategy" },
    service1Title:    { pl: "Budowanie strategii",                      en: "Building Strategy" },
    service1Desc:     { pl: "[Opis zaangażowania — co robimy, jak to wygląda, co klient osiąga na końcu.]", en: "[Engagement description — what we do, what it looks like, what the client achieves at the end.]" },
    service1Detail1:  { pl: "[Punkt szczegółowy 1]",                    en: "[Detail point 1]" },
    service1Detail2:  { pl: "[Punkt szczegółowy 2]",                    en: "[Detail point 2]" },
    service1Detail3:  { pl: "[Punkt szczegółowy 3]",                    en: "[Detail point 3]" },
    service2Tag:      { pl: "Realizacja",                               en: "Delivery" },
    service2Title:    { pl: "Dostarczanie kluczowych projektów",        en: "Delivering Key Projects" },
    service2Desc:     { pl: "[Opis zaangażowania — co robimy, jak to wygląda, co klient osiąga na końcu.]", en: "[Engagement description — what we do, what it looks like, what the client achieves at the end.]" },
    service2Detail1:  { pl: "[Punkt szczegółowy 1]",                    en: "[Detail point 1]" },
    service2Detail2:  { pl: "[Punkt szczegółowy 2]",                    en: "[Detail point 2]" },
    service2Detail3:  { pl: "[Punkt szczegółowy 3]",                    en: "[Detail point 3]" },
    service3Tag:      { pl: "Transformacja",                            en: "Transformation" },
    service3Title:    { pl: "Prowadzenie transformacji",                en: "Leading Transformation" },
    service3Desc:     { pl: "[Opis zaangażowania — co robimy, jak to wygląda, co klient osiąga na końcu.]", en: "[Engagement description — what we do, what it looks like, what the client achieves at the end.]" },
    service3Detail1:  { pl: "[Punkt szczegółowy 1]",                    en: "[Detail point 1]" },
    service3Detail2:  { pl: "[Punkt szczegółowy 2]",                    en: "[Detail point 2]" },
    service3Detail3:  { pl: "[Punkt szczegółowy 3]",                    en: "[Detail point 3]" },
    servicesLearnMore:{ pl: "Dowiedz się więcej →",                     en: "Learn more →" },

    // Who is Prologue for section
    whoLabel:         { pl: "Dla kogo",                                   en: "Who it's for" },
    whoTitle:         { pl: "Czy Prologue jest dla Ciebie?",              en: "Is Prologue right for you?" },
    whoSub:           { pl: "Rozpoznaj siebie w poniższych sytuacjach.",  en: "See if you recognise yourself in any of these." },
    whoSymptom1:      { pl: "Prowadzisz tę samą rozmowę strategiczną co kwartał — bez postępu.", en: "You're having the same strategy conversation every quarter — with no progress." },
    whoSymptom2:      { pl: "Kluczowa inicjatywa właśnie utknęła w martwym punkcie.", en: "A key initiative has just stalled and nobody knows quite why." },
    whoSymptom3:      { pl: "Twój zespół wykonuje zadania, ale Ty zgubiłeś kierunek.", en: "Your team is executing, but you've lost sight of direction." },
    whoSymptom4:      { pl: "Zewnętrzny kontekst zmienił się i Twoja strategia wymaga przebudowy.", en: "The external context has shifted and your strategy needs rebuilding." },
    whoSymptom5:      { pl: "Masz energię i zasoby — brakuje Ci struktury, by je właściwie ukierunkować.", en: "You have energy and resources ��� you're missing the structure to direct them well." },
    whoSymptom6:      { pl: "Wiesz, że potrzebujesz zmiany, ale nie wiesz od czego zacząć.", en: "You know you need to change, but you don't know where to start." },
    whoCtaMatch:      { pl: "Jeśli rozpoznajesz się w 2 lub więcej — porozmawiajmy.", en: "If you nodded at 2 or more — we should talk." },
    whoCtaSchedule:   { pl: "Zaplanuj rozmowę",                           en: "Schedule a call" },
    whoNotYetTitle:   { pl: "Jeszcze nie gotowy?",                        en: "Not there yet?" },
    whoNotYetDesc:    { pl: "Zacznij od darmowego warsztatu Vector — ramy strategiczne, które możesz przeprowadzić samodzielnie.", en: "Start with the free Vector Workshop — a strategic framework you can run yourself." },
    whoVectorCta:     { pl: "Pobierz warsztat Vector",                    en: "Get the Vector Workshop" },
    whoBlogCta:       { pl: "Albo przeczytaj nasze artykuły →",           en: "Or read our articles →" },
  },

  // ── Business Sections component ──────────────────────────────────────────────
  businessSections: {
    label:       { pl: "Jak pracujemy i co osiągasz",         en: "How we work and what you achieve" },
    howTitle:    { pl: "Jak pracujemy",                       en: "How we work" },
    resultsTitle:{ pl: "Rezultaty, których możesz oczekiwać", en: "Results you can expect" },
    principle1Title: { pl: "Zaczynamy od diagnozy",           en: "We start with diagnosis" },
    principle1Desc:  { pl: "Zanim zaproponujemy cokolwiek, rozumiemy gdzie naprawdę jesteś — nie gdzie myślisz, że jesteś.", en: "Before proposing anything, we understand where you truly are — not where you think you are." },
    principle2Title: { pl: "Pracujemy ramię w ramię z Twoim zespołem",  en: "We embed alongside your team" },
    principle2Desc:  { pl: "Nie zostawiamy slajdów i znikamy. Jesteśmy obecni przez cały czas trwania pracy.", en: "We don't drop slides and disappear. We stay present for the duration of the work." },
    principle3Title: { pl: "Mierzymy wyniki, nie aktywności",  en: "We measure outcomes, not outputs" },
    principle3Desc:  { pl: "Sukces jest zdefiniowany na początku i weryfikowany na końcu. Jasne, uczciwe, bez wymówek.", en: "Success is defined at the start and verified at the end. Clear, honest, no excuses." },
    principle4Title: { pl: "Budujemy zdolności, nie zależność", en: "We build capability, not dependency" },
    principle4Desc:  { pl: "Naszym celem jest sprawić, byś nie potrzebował nas — posiadając umiejętności, by prowadzić następny projekt samodzielnie.", en: "Our goal is to make you not need us — owning the skills to lead the next project yourself." },
  },

  // ── About page ───────────────────────────────────────────────────────────────
  about: {
    storyLabel:      { pl: "Nasza historia",    en: "Our Story" },
    theStoryLabel:   { pl: "Historia",          en: "The Story" },
    threeActs:       { pl: "Opowiedziana w trzech aktach", en: "Told in Three Acts" },
    philosophyLabel: { pl: "Filozofia",         en: "Philosophy" },
    whatWeBelieve:   { pl: "W co wierzymy",     en: "What We Believe" },
    wayOfWork:       { pl: "Sposób pracy",      en: "Way of Work" },
    howWeWork:       { pl: "Jak pracujemy",     en: "How We Work" },
    whyItMatters:    { pl: "Dlaczego to ważne", en: "Why It Matters" },
    valuesLabel:     { pl: "Wartości",          en: "Values" },
    valuesTitle:     { pl: "Co kieruje naszymi decyzjami", en: "What Guides Our Decisions" },
    aiManifest:      { pl: "Nasz Manifest AI",  en: "Our AI Manifest" },
    aiTitle:         { pl: "Jak używamy AI — odpowiedzialnie", en: "How We Use AI — Responsibly" },
    readManifest:    { pl: "[Przeczytaj pełny manifest]", en: "[Read the full manifest]" },
    ctaTitle:        { pl: "Chcesz z nami współpracować?", en: "Want to Work With Us?" },
    ctaPrimary:      { pl: "Skontaktuj się z nami", en: "Get in Touch" },
    ctaSecondary:    { pl: "Zostań Partnerem",  en: "Become a Partner" },
    pageLabel:       { pl: "O nas",             en: "About" },
  },

  // ── Blog page ────────────────────────────────────────────────────────────────
  blog: {
    pageLabel:      { pl: "Blog i spostrzeżenia", en: "Blog & Insights" },
    featuredLabel:  { pl: "Wyróżniony wpis",    en: "Featured Post" },
    readFull:       { pl: "Przeczytaj pełny artykuł →", en: "Read Full Article →" },
    readMore:       { pl: "Czytaj więcej →",    en: "Read More →" },
    noPostsYet:     { pl: "[Brak wpisów w tej kategorii.]", en: "[No posts in this category yet.]" },
    newsletterTitle:{ pl: "Zapisz się do newslettera", en: "Subscribe to Our Newsletter" },
    subscribe:      { pl: "Zapisz się",         en: "Subscribe" },
    consentNewsletter: {
      pl: "Wyrażam zgodę na otrzymywanie newslettera od Prologue Agency i przetwarzanie mojego e-maila w tym celu, zgodnie z Polityką Prywatności (RODO). Mogę zrezygnować w każdej chwili.",
      en: "I consent to receiving the newsletter from Prologue Agency and to the processing of my email for this purpose, in accordance with the Privacy Policy (GDPR / RODO). I can unsubscribe at any time.",
    },
    ctaMidLabel:   { pl: "Pracujemy z liderami takimi jak Ty",     en: "We work with leaders like you" },
    ctaMidTitle:   { pl: "Czy ten artykuł rezonuje z Twoją sytuacją?", en: "Does this article resonate with your situation?" },
    ctaMidDesc:    { pl: "Jeśli tak, prawdopodobnie jest dobry moment na rozmowę. Pierwsze 30 minut jest bezpłatne.", en: "If so, it's probably a good time to talk. The first 30 minutes are free." },
    ctaMidPrimary: { pl: "Zaplanuj bezpłatną rozmowę",             en: "Schedule a free call" },
    ctaMidSecondary:{ pl: "Albo pobierz warsztat Vector →",        en: "Or get the free Vector Workshop →" },
    ctaEndLabel:   { pl: "Gotowy na kolejny krok?",                en: "Ready for the next step?" },
    ctaEndTitle:   { pl: "Zamień spostrzeżenia w działanie",       en: "Turn insight into action" },
    ctaEndDesc:    { pl: "Każdy artykuł na tym blogu wynika z pracy z prawdziwymi firmami w prawdziwych sytuacjach. Jeśli rozpoznajesz swoje wyzwanie — możemy pomóc.", en: "Every article on this blog comes from working with real businesses in real situations. If you recognise your challenge — we can help." },
    ctaEndPrimary: { pl: "Zaplanuj rozmowę wstępną",              en: "Schedule an intro call" },
    ctaEndSecondary:{ pl: "Dowiedz się więcej o usługach →",       en: "Learn more about services →" },
  },

  // ── Vector page ──────────────────────────────────────────────────────────────
  vector: {
    whyLabel:     { pl: "Dlaczego te warsztaty", en: "Why This Workshop" },
    whyTitle:     { pl: "Dlaczego to działa",    en: "Why It Works" },
    whenLabel:    { pl: "Kiedy stosować",         en: "When to Use" },
    whenTitle:    { pl: "Kiedy przeprowadzić Warsztaty Vector", en: "When to Run a Vector Workshop" },
    howLabel:     { pl: "Jak to działa",          en: "How It Works" },
    howTitle:     { pl: "Sesja, krok po kroku",   en: "The Session, Step by Step" },
    notesLabel:   { pl: "Notatki i wskazówki",    en: "Notes & Tips" },
    notesTitle:   { pl: "Notatki, wskazówki i instrukcje", en: "Notes, Tips and Instructions" },
    prepLabel:    { pl: "Przygotowanie",           en: "Preparation" },
    prepTitle:    { pl: "Przygotuj się do facylitacji", en: "Get Ready to Facilitate" },
    ctaTitle:     { pl: "Gotowy, by pójść głębiej?", en: "Ready to Go Deeper?" },
    schedule:     { pl: "Zaplanuj sesję konsultacyjną", en: "Schedule a Consulting Session" },
    buyWorkshop:  { pl: "Kup pełne warsztaty",    en: "Buy Full Workshop" },
    download:     { pl: "Pobierz",                en: "Download" },
    openTemplate: { pl: "Otwórz szablon",         en: "Open template" },
    makeCopy:     { pl: "Utwórz kopię",           en: "Make a copy" },
    duplicate:    { pl: "Duplikuj",               en: "Duplicate" },
    pageLabel:    { pl: "Warsztat Vector",        en: "Vector Workshop" },
    tabOutcome:   { pl: "Wynik",                  en: "The Outcome" },
    tabMethod:    { pl: "Metoda",                 en: "The Method" },
    tabForWhom:   { pl: "Dla kogo",               en: "Who It's For" },

    // Hero actions
    heroSchedule:      { pl: "Umów sesję z konsultantem", en: "[Book a session with a consultant]" },
    heroDownload:      { pl: "Pobierz pakiet Vector",      en: "[Get the Vector package]" },
    heroDownloadNote:  { pl: "[Jedna linia mikrokopii pod przyciskiem pobierania.]", en: "[One line of microcopy under the download button.]" },

    // Proof section
    proofLabel: { pl: "Dowód", en: "Proof" },
    proofLead:  { pl: "[Jedno zdanie z liczbą przeprowadzonych sesji.]", en: "[One sentence with the number of sessions run.]" },
    proofQuote: { pl: "[Cytat uczestnika warsztatu.]", en: "[Participant quote about the workshop.]" },
    proofQuoteAttribution: { pl: "[Imię, rola, firma]", en: "[Name, role, company]" },

    // Agenda meta
    agendaMeta: { pl: "2 do 3 godzin, zależnie od wielkości grupy · 5 etapów", en: "[2 to 3 hours, depending on group size · 5 stages]" },
    commonMistake: { pl: "Najczęstszy błąd", en: "[Most Common Mistake]" },
    doneWhen: { pl: "Po czym poznasz, że etap jest skończony", en: "[How You Know the Stage Is Done]" },

    // Run it online (merged section)
    onlineLabel: { pl: "Online", en: "Online" },
    onlineTitle: { pl: "Przeprowadź Vector online", en: "[Run Vector Online]" },
    onlineLead:  { pl: "[Jedno zdanie o tym, jak przeprowadzić warsztat zdalnie.]", en: "[One sentence on running the workshop remotely.]" },
    onlineFormatsNote: { pl: "[Informacja o dostępnych formatach — plansze PNG do wgrania na dowolną tablicę online.]", en: "[Note on available formats — PNG boards you can upload to any online whiteboard.]" },

    // Download section
    downloadFilesLabel: { pl: "Pliki do pobrania", en: "[Files to Download]" },
    downloadAiLabel:    { pl: "Narzędzia AI",       en: "[AI Tools]" },
    buyPackage:      { pl: "Kup gotowy pakiet warsztatowy", en: "[Buy the Ready-Made Workshop Package]" },
    buyPackageNote:  { pl: "[Jedno zdanie opisujące, co zawiera gotowy pakiet warsztatowy.]", en: "[One sentence describing what the ready-made workshop package includes.]" },
    comingSoon: { pl: "Wkrótce", en: "[Soon]" },

    // Final CTA — two paths
    ctaPath1Title: { pl: "Umów rozmowę", en: "[Book a Call]" },
    ctaPath1Desc:  { pl: "[Jedno zdanie opisujące pierwszą ścieżkę.]", en: "[One sentence describing the first path.]" },
    ctaPath2Title: { pl: "Zapytaj o trening", en: "[Ask About Training]" },
    ctaPath2Desc:  { pl: "[Jedno zdanie opisujące drugą ścieżkę.]", en: "[One sentence describing the second path.]" },

    // Checklist lead
    checklistLead: { pl: "[Jedno zdanie leadu nad checklistą.]", en: "[One lead sentence above the checklist.]" },
  },

  // ── Contact page ─────────────────────────────────────────────────────────────
  contact: {
    pageLabel:   { pl: "Kontakt",                   en: "Contact" },
    formLabel:   { pl: "Formularz kontaktowy",       en: "Contact form" },
    directLabel: { pl: "Bezpośredni kontakt",        en: "Direct" },
    otherWays:   { pl: "Inne sposoby kontaktu",      en: "Other Ways to Reach Us" },
    sendMessage: { pl: "Wyślij wiadomość",           en: "Send Message" },
    fieldFullName: { pl: "Imię i nazwisko",          en: "Full name" },
    fieldEmail:  { pl: "E-mail",                     en: "Email" },
    fieldCompany:{ pl: "Firma",                      en: "Company" },
    fieldMessage:{ pl: "Wiadomość",                  en: "Message" },
    consentRequired: {
      pl: "Wyrażam zgodę na przetwarzanie moich danych osobowych przez Prologue Agency w celu udzielenia odpowiedzi na moje zapytanie, zgodnie z Polityką Prywatności (RODO).",
      en: "I consent to the processing of my personal data by Prologue Agency for the purpose of responding to my inquiry, in accordance with the Privacy Policy (GDPR / RODO).",
    },
    consentMarketing: {
      pl: "Chcę otrzymywać okazjonalne aktualizacje i komunikaty marketingowe od Prologue Agency. Mogę wycofać zgodę w każdej chwili.",
      en: "I would like to receive occasional updates and marketing communications from Prologue Agency. I can withdraw this consent at any time.",
    },
    processLabel:    { pl: "Jak wygląda współpraca",     en: "How we work together" },
    processStep1:    { pl: "Rozmowa wstępna",            en: "Initial call" },
    processStep1Desc:{ pl: "30 min — poznajemy wyzwanie i sprawdzamy dopasowanie.", en: "30 min — we understand your challenge and check for fit." },
    processStep2:    { pl: "Oferta",                     en: "Offer" },
    processStep2Desc:{ pl: "Przygotowujemy propozycję dopasowaną do Twojej sytuacji.", en: "We prepare a proposal tailored to your situation." },
    processStep3:    { pl: "Spotkanie ofertowe",         en: "Offer meeting" },
    processStep3Desc:{ pl: "Omawiamy zakres, pytania i warunki współpracy.", en: "We walk through the scope, answer questions and agree terms." },
    processStep4:    { pl: "Umowa",                      en: "Contract" },
    processStep4Desc:{ pl: "Podpisujemy dokumenty i zabezpieczamy termin.", en: "We sign the paperwork and secure the dates." },
    processStep5:    { pl: "Warsztat Kickoff",           en: "Kickoff workshop" },
    processStep5Desc:{ pl: "Zaczynamy pracę — wspólnie, od pierwszego dnia.", en: "We start the work — together, from day one." },
    ndaLabel:    { pl: "Umowa o poufności (NDA)",       en: "Non-disclosure agreement (NDA)" },
    ndaDesc:     { pl: "Proszę o podpisanie NDA przed omówieniem szczegółów projektu.", en: "I'd like an NDA signed before discussing project details." },
    emailLabel:  { pl: "E-mail",                        en: "Email" },
    phoneLabel:  { pl: "Telefon",                       en: "Phone" },
    copyEmail:   { pl: "Kopiuj e-mail",                 en: "Copy email" },
    copyPhone:   { pl: "Kopiuj telefon",                en: "Copy phone" },
    copied:      { pl: "Skopiowano!",                   en: "Copied!" },
    emailValue:    { pl: "hello@prologue.agency",          en: "hello@prologue.agency" },
    phoneValue:    { pl: "+48 000 000 000",               en: "+48 000 000 000" },
    whatsappNote:  { pl: "Dostępny również na WhatsApp",  en: "Also available on WhatsApp" },
    whatsappCta:   { pl: "Napisz na WhatsApp →",          en: "Message on WhatsApp →" },
  },

  // ── Partner page ─���───────────────────────────────────────────────────────────
  partner: {
    pageLabel:   { pl: "Zostań Partnerem",           en: "Become a Partner" },
    heading:     { pl: "Budujmy razem świetne projekty.", en: "Let's build great projects together." },
    intro:       { pl: "Chcesz współpracować z Prologue Agency przy dostarczaniu najlepszych projektów — lub korzystać z naszego frameworka ze swoimi klientami? Opowiedz nam trochę o swojej firmie i nawiążmy kontakt.", en: "Want to work with Prologue Agency to deliver the best projects — or use our framework with your own clients? Tell us a little about your company and let's connect." },
    formLabel:   { pl: "Zapytanie partnerskie",       en: "Partner inquiry" },
    submit:      { pl: "Wyślij zapytanie partnerskie", en: "Submit Partner Inquiry" },
    fieldEmail:  { pl: "E-mail",                      en: "Email" },
    fieldWebsite:{ pl: "Strona internetowa",          en: "Website" },
    fieldPhone:  { pl: "Numer telefonu",              en: "Phone number" },
    fieldTAX:    { pl: "Numer identyfikacji podatkowej", en: "TAX identification number" },
    companyType: { pl: "Typ firmy",                   en: "Type of company" },
    selectType:  { pl: "[Wybierz typ firmy]",         en: "[Select company type]" },
    consentRequired: {
      pl: "Wyrażam zgodę na przetwarzanie danych mojej firmy i moich danych osobowych przez Prologue Agency w celu rozpatrzenia i odpowiedzi na to zapytanie partnerskie, zgodnie z Polityką Prywatności (RODO).",
      en: "I consent to the processing of my company and personal data by Prologue Agency to review and respond to this partnership inquiry, in accordance with the Privacy Policy (GDPR / RODO).",
    },
    consentMarketing: {
      pl: "Chcę otrzymywać aktualizacje partnerskie i komunikaty marketingowe od Prologue Agency. Mogę wycofać zgodę w każdej chwili.",
      en: "I would like to receive partnership updates and marketing communications from Prologue Agency. I can withdraw this consent at any time.",
    },
  },

  // ── PageHeader (shared) ────────────────────────────────────────────────��──────
  pageHeader: {
    blog: {
      title: { pl: "[Blog — spostrzeżenia na temat biznesu, strategii i przywództwa]", en: "[Blog — insights on business, strategy and leadership]" },
      intro: { pl: "[Krótka linia opisująca rodzaj treści, które czytelnik tu znajdzie.]", en: "[A short line describing the kind of content readers will find here.]" },
    },
    vector: {
      title: { pl: "[Warsztaty Vector — przeprowadź je samodzielnie z naszym frameworkiem]", en: "[Vector Workshop — facilitate it yourself with our framework]" },
      intro: { pl: "[Jedno zdanie o tym, czym są Warsztaty Vector i dla kogo są przeznaczone.]", en: "[One line on what the Vector workshop is and who it's for.]" },
    },
    contact: {
      title: { pl: "[Kontakt — zacznijmy rozmowę]", en: "[Contact — let's start a conversation]" },
      intro: { pl: "[Zapewnij odwiedzającego o czasie odpowiedzi i tym, co nastąpi dalej.]", en: "[Reassure the visitor about response time and what happens next.]" },
    },
    strategy: {
      title: { pl: "Budowanie strategii", en: "Building Strategy" },
      intro: { pl: "[Jedno zdanie opisujące, co klient zyska po zaangażowaniu się w usługę strategiczną.]", en: "[One sentence on what the client gains from the strategy engagement.]" },
    },
    keyProjects: {
      title: { pl: "Dostarczanie kluczowych projektów", en: "Delivering Key Projects" },
      intro: { pl: "[Jedno zdanie opisujące, co klient zyska po zaangażowaniu się w realizację kluczowych projektów.]", en: "[One sentence on what the client gains from the key projects engagement.]" },
    },
    transformation: {
      title: { pl: "Prowadzenie transformacji", en: "Leading Transformation" },
      intro: { pl: "[Jedno zdanie opisujące, co klient zyska po zaangażowaniu się w transformację.]", en: "[One sentence on what the client gains from the transformation engagement.]" },
    },
  },

  // ── Services pages (shared copy) ─────────────────────────────────────────────
  services: {
    identificationLabel: { pl: "Identyfikacja",                  en: "Identification" },
    identificationTitle: { pl: "Od tego, gdzie jesteś, do tego, gdzie chcesz być", en: "From where you are to where you want to be" },
    empathyLabel:        { pl: "Empatia",                        en: "Empathy" },
    empathyTitle:        { pl: "Jak to naprawdę wygląda od środka", en: "What it really looks like from the inside" },
    hopeLabel:           { pl: "Nadzieja",                       en: "Hope" },
    hopeTitle:           { pl: "Można to zmienić",               en: "This can be changed" },
    planLabel:           { pl: "Plan",                           en: "The Plan" },
    planTitle:           { pl: "Jak to naprawiamy",              en: "Here is how we fix it" },
    thresholdLabel:      { pl: "Co Cię blokuje",                 en: "What blocks you" },
    thresholdTitle:      { pl: "Najczęstsze pytania, zanim ktoś zdecyduje się działać", en: "The most common questions before someone decides to act" },
    notReadyLabel:       { pl: "Nie gotowy?",                    en: "Not ready yet?" },
    notReadyTitle:       { pl: "Zacznij od pogłębienia wiedzy",  en: "Start by learning more" },
    ctaSchedule:         { pl: "Zaplanuj rozmowę",               en: "Schedule a call" },
    ctaLearnMore:        { pl: "Dowiedz się więcej",             en: "Learn more" },
    readMore:            { pl: "Czytaj więcej →",                en: "Read more →" },
    step:                { pl: "Krok",                           en: "Step" },
    caseStudy:           { pl: "Studium przypadku",              en: "Case study" },
    readStory:           { pl: "Przeczytaj historię →",          en: "Read story →" },
    nowBadge:            { pl: "Teraz",                          en: "Now" },
    goalBadge:           { pl: "Cel",                            en: "Goal" },
    ctaTitle: {
      strategy:       { pl: "Gotowy, by zdefiniować swoją strategię?",       en: "Ready to define your strategy?" },
      keyProjects:    { pl: "Gotowy, by dostarczyć projekty, które mają znaczenie?", en: "Ready to deliver the projects that matter?" },
      transformation: { pl: "Gotowy, by przeprowadzić swoją organizację przez transformację?", en: "Ready to lead your organisation through transformation?" },
    },
    formLabel:        { pl: "Pierwsza rozmowa",              en: "First conversation" },
    formTitle:        { pl: "Zacznij od rozmowy",            en: "Start with a conversation" },
    formIntro:        { pl: "Pierwsze 30 minut jest bezpłatne. Bez zobowiązań — po prostu sprawdzimy, czy jesteśmy dla siebie właściwi.", en: "The first 30 minutes are free. No commitment — we simply check if we're right for each other." },
    formSubmit:       { pl: "Wyślij wiadomość",              en: "Send message" },
    thresholdIntro:   { pl: "Każdy miesiąc bez działania to miesiąc, w którym problem się utrwala, a okno możliwości się zawęża.", en: "Every month without action is a month the problem becomes more embedded — and the window of opportunity narrows." },
  },

  // ── Case studies ────────────────────────────────────────────────────────────
  caseStudies: {
    label:          { pl: "Realizacje",                              en: "Case studies" },
    title:          { pl: "Wybrane projekty",                        en: "Selected work" },
    intro:          { pl: "Przykłady projektów, które przeprowadziliśmy razem z klientami.", en: "Examples of projects we have run together with clients." },
    challenge:      { pl: "Wyzwanie",                               en: "Challenge" },
    approach:       { pl: "Podejście",                              en: "Approach" },
    result:         { pl: "Rezultat",                               en: "Result" },
    toc:            { pl: "Spis treści",                            en: "Table of contents" },
    ctaSide:        { pl: "Widzisz podobne wyzwanie?",             en: "See a similar challenge?" },
    ctaSideDesc:    { pl: "Porozmawiajmy — pierwsze 30 minut jest bezpłatne.", en: "Let's talk — the first 30 minutes are free." },
    ctaSideBtn:     { pl: "Zaplanuj rozmowę",                      en: "Schedule a call" },
    ctaEndLabel:    { pl: "Następny krok",                          en: "Next step" },
    ctaEndTitle:    { pl: "Widzisz w tej historii swoje wyzwanie?", en: "Do you see your challenge in this story?" },
    ctaEndDesc:     { pl: "Każda sytuacja jest inna — ale wzorce, które tutaj opisujemy, powtarzają się. Jeśli coś tu rezonuje, to dobry moment na rozmowę.", en: "Every situation is different — but the patterns we describe here repeat themselves. If something resonates, it's a good time to talk." },
    ctaEndPrimary:  { pl: "Zaplanuj bezpłatną rozmowę",            en: "Schedule a free call" },
    ctaEndSecondary:{ pl: "Dowiedz się więcej o usłudze →",        en: "Learn more about the service →" },
    readMore:       { pl: "Przeczytaj realizację →",                en: "Read case study →" },
    industry:       { pl: "Branża",                                 en: "Industry" },
  },
} as const

/** Shorthand helper type – a record with pl and en strings */
type TranslationEntry = { pl: string; en: string }

/** Recursively walk the translations tree and return an object with the same
 *  shape, but with all leaf { pl, en } nodes resolved to the active language. */
type Resolved<T> = T extends TranslationEntry
  ? string
  : { [K in keyof T]: Resolved<T[K]> }

function resolve<T>(node: T, lang: Lang): Resolved<T> {
  if (
    node !== null &&
    typeof node === "object" &&
    "pl" in node &&
    "en" in node &&
    Object.keys(node).length === 2
  ) {
    return (node as TranslationEntry)[lang] as Resolved<T>
  }
  const result: Record<string, unknown> = {}
  for (const key of Object.keys(node as object)) {
    result[key] = resolve((node as Record<string, unknown>)[key], lang)
  }
  return result as Resolved<T>
}

export function getTranslations(lang: Lang) {
  return resolve(translations, lang)
}

export type Translations = ReturnType<typeof getTranslations>
