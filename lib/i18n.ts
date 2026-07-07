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
    whoLabel:         { pl: "Dla kogo",                                 en: "Who it's for" },
    whoTitle:         { pl: "Czy Prologue jest dla Ciebie?",            en: "Is Prologue right for you?" },
    whoSub:           { pl: "[Jedno zdanie zapraszające odwiedzającego do zidentyfikowania się z jedną ze ścieżek.]", en: "[One sentence inviting the visitor to identify with one of the two paths.]" },
    whoInGroupTab:    { pl: "Jestem w grupie docelowej",                en: "I'm in the target group" },
    whoNotInGroupTab: { pl: "Nie jestem w grupie docelowej",            en: "I'm not in the target group" },
    whoInGroupDesc:   { pl: "[Krótki opis potwierdzający, że ta osoba jest właściwym klientem — kto to jest, co przeżywa.]", en: "[Short description confirming this person is the right client — who they are, what they're experiencing.]" },
    whoNotInGroupDesc:{ pl: "[Przyjazna wiadomość wyjaśniająca, że Prologue może jeszcze coś zaoferować — darmowe zasoby zamiast odejścia z pustymi rękami.]", en: "[Friendly message explaining Prologue can still offer something — free resources instead of leaving empty-handed.]" },
    whoFreeResourcesTitle: { pl: "Darmowe zasoby dla Ciebie",          en: "Free resources for you" },
    whoFreeResourcesSub: { pl: "[Wyjaśnij, co oferujemy bezpłatnie i dlaczego warto skorzystać.]", en: "[Explain what we offer for free and why it's worth taking.]" },
    whoVectorTitle:   { pl: "Warsztaty Vector — za darmo",              en: "Vector Workshop — free" },
    whoVectorDesc:    { pl: "[Jedno zdanie opisujące warsztat Vector i dlaczego jest wartościowy nawet bez pełnego zaangażowania.]", en: "[One sentence on the Vector workshop and why it's valuable even without full engagement.]" },
    whoVectorCta:     { pl: "Pobierz warsztat Vector",                  en: "Get the Vector Workshop" },
    whoBlogTitle:     { pl: "Najnowsze artykuły z bloga",              en: "Latest blog articles" },
    whoBlogCta:       { pl: "Czytaj wszystkie artykuły →",              en: "Read all articles →" },
  },

  // ── Business Sections component ──────────────────────────────────────────────
  businessSections: {
    label:  { pl: "Nad czym pracujemy",                         en: "What we work on" },
    title:  { pl: "Sekcje biznesowe, nad którymi pracujemy",    en: "Business Sections We Work On" },
    intro:  { pl: "[Wiersz intro] Kliknij temat, aby przeczytać pełny opis.", en: "[Intro line] Tap a topic to read the full description." },
    detail: { pl: "Szczegóły",                                  en: "Detail" },
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
    pageLabel:    { pl: "Warsztaty Vector",        en: "Vector Workshop" },
    tabOutcome:   { pl: "Wynik",                  en: "The Outcome" },
    tabMethod:    { pl: "Metoda",                 en: "The Method" },
    tabForWhom:   { pl: "Dla kogo",               en: "Who It's For" },
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
  },

  // ── Partner page ─────────────────────────────────────────────────────────────
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
    thresholdLabel:      { pl: "Próg",                           en: "Threshold" },
    thresholdTitle:      { pl: "Co się stanie, jeśli nie podejmiesz działania?", en: "What happens if you don't act?" },
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
