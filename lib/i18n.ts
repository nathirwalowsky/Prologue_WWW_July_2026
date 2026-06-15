export type Lang = "pl" | "en"

export const translations = {
  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home:          { pl: "Strona główna",  en: "Home" },
    product:       { pl: "Produkt",        en: "Product" },
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
      pl: "[Pasek ogłoszeń — specjalna oferta lub ważna wiadomość]",
      en: "[Announcement bar — special offer or important message]",
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

  // ── PageHeader (shared) ───────────────────────────────────────────────────────
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
