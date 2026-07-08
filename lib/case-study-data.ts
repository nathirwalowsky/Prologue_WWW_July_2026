// Case study data — placeholder copy, ready for real content

export type CaseStudySection = {
  id: string
  title: string
  body: string[]          // paragraphs
  quote?: { text: string; author: string; role: string }
}

export type CaseStudy = {
  slug: string
  industry: string
  service: "strategy" | "key-projects" | "transformation"
  client: string
  headline: string        // hero h1
  subline: string         // one sentence below headline
  // Executive summary bar
  challenge: string
  approach: string
  result: string
  // Key stats
  stats: { value: string; label: string }[]
  // Body sections
  sections: CaseStudySection[]
  // Tags shown in hero
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-strategy-01",
    industry: "Retail",
    service: "strategy",
    client: "[Klient A]",
    headline: "[Jak firma z sektora retail odbudowała strategię wzrostu po pandemii]",
    subline: "[Jedno zdanie opisujące skalę zmiany i jej znaczenie dla organizacji.]",
    challenge: "[Brak spójnego kierunku strategicznego po dwóch latach reaktywnych decyzji operacyjnych.]",
    approach: "[Trzymiesięczny proces diagnostyczny, warsztaty z zarządem i menedżerami, krystalizacja strategii na 3 lata.]",
    result: "[Nowa strategia przyjęta przez cały zarząd, pierwsze inicjatywy uruchomione w ciągu 6 tygodni od zakończenia pracy.]",
    stats: [
      { value: "3 mies.", label: "czas trwania projektu" },
      { value: "12",      label: "sesji warsztatowych" },
      { value: "4",       label: "priorytety strategiczne" },
      { value: "6 tyg.",  label: "do pierwszych rezultatów" },
    ],
    tags: ["Retail", "Strategia", "Zarząd"],
    sections: [
      {
        id: "challenge",
        title: "Wyzwanie",
        body: [
          "[Opis sytuacji wyjściowej klienta: co się działo w organizacji, jakie były objawy problemu, dlaczego poprzednie próby rozwiązania nie zadziałały.]",
          "[Drugi akapit — głębszy kontekst: rynkowy, strukturalny lub kulturowy. Co sprawiało, że sytuacja była szczególnie trudna właśnie dla tej organizacji.]",
        ],
        quote: {
          text: "[Cytat od klienta opisujący moment, w którym zrozumieli, że potrzebują zewnętrznego wsparcia.]",
          author: "[Imię i nazwisko]",
          role: "[Stanowisko, Nazwa firmy]",
        },
      },
      {
        id: "approach",
        title: "Nasze podejście",
        body: [
          "[Opis pierwszego etapu pracy: diagnoza, pierwsze sesje, czego się dowiedzieliśmy i co nas zaskoczyło.]",
          "[Opis drugiego etapu: warsztaty, co budowaliśmy razem, jak wyglądała współpraca z zespołem klienta.]",
          "[Opis efektu końcowego etapu projektowego: co zostało dostarczone, jak wyglądał dokument / framework / decyzja.]",
        ],
      },
      {
        id: "results",
        title: "Rezultaty",
        body: [
          "[Opis bezpośrednich wyników: co klient ma teraz, czego nie miał przed współpracą.]",
          "[Opis szerszego wpływu: jak zmiana strategiczna zaczęła działać w organizacji, co zmieniło się w sposobie pracy lub podejmowania decyzji.]",
        ],
        quote: {
          text: "[Końcowy cytat od klienta — refleksja na temat wartości współpracy i tego, co zmieniło się w organizacji.]",
          author: "[Imię i nazwisko]",
          role: "[Stanowisko, Nazwa firmy]",
        },
      },
    ],
  },
  {
    slug: "case-study-keyprojects-01",
    industry: "Manufacturing",
    service: "key-projects",
    client: "[Klient B]",
    headline: "[Jak producent przemysłowy przeprowadził kluczową transformację cyfrową na czas i w budżecie]",
    subline: "[Jedno zdanie opisujące skalę projektu i jego strategiczne znaczenie.]",
    challenge: "[Projekt od 8 miesięcy stał w miejscu — brak właściciela, rozjeżdżający się zakres, frustracja zespołu.]",
    approach: "[Przejęcie roli PM, reset zakresu z interesariuszami, nowy harmonogram z buforami, cotygodniowy rytm raportowania.]",
    result: "[Projekt dostarczony z 3-tygodniowym poślizgiem wobec nowego harmonogramu, w 97% założonego budżetu.]",
    stats: [
      { value: "8 mies.", label: "projekt stał w miejscu" },
      { value: "97%",    label: "realizacja budżetu" },
      { value: "3 tyg.", label: "poślizg wobec nowego planu" },
      { value: "14",     label: "interesariuszy zaangażowanych" },
    ],
    tags: ["Manufacturing", "Kluczowe projekty", "PMO"],
    sections: [
      {
        id: "challenge",
        title: "Wyzwanie",
        body: [
          "[Opis sytuacji: projekt krytyczny dla operacji, ale bez wyraźnego lidera i z rozmytym zakresem. Co działo się w praktyce — spotkania bez decyzji, budżet przepalany bez postępu.]",
          "[Co sprawiło, że organizacja zdecydowała się sięgnąć po zewnętrzne wsparcie właśnie w tym momencie.]",
        ],
      },
      {
        id: "approach",
        title: "Nasze podejście",
        body: [
          "[Etap 1: Diagnoza stanu projektu. Co sprawdziliśmy, z kim rozmawialiśmy, co odkryliśmy jako prawdziwe źródło problemu.]",
          "[Etap 2: Reset. Jak przeprowadziliśmy sesję z interesariuszami, żeby uzgodnić nowy zakres i harmonogram — i jak zarządzaliśmy napięciami między stronami.]",
          "[Etap 3: Prowadzenie projektu do końca. Rytm pracy, mechanizmy eskalacji, podejście do zarządzania ryzykiem w trakcie realizacji.]",
        ],
        quote: {
          text: "[Cytat od klienta na temat różnicy, jaką zrobiło zewnętrzne prowadzenie projektu w ich codziennej pracy.]",
          author: "[Imię i nazwisko]",
          role: "[Stanowisko, Nazwa firmy]",
        },
      },
      {
        id: "results",
        title: "Rezultaty",
        body: [
          "[Opis tego, co projekt dostarczył — konkretnie, bez ogólników.]",
          "[Opis efektu organizacyjnego: czego nauczył się zespół klienta, co zmienili w sposobie prowadzenia projektów po tej współpracy.]",
        ],
      },
    ],
  },
  {
    slug: "case-study-transformation-01",
    industry: "Financial Services",
    service: "transformation",
    client: "[Klient C]",
    headline: "[Jak firma z sektora finansowego przeprowadziła zmianę modelu pracy bez utraty wyników]",
    subline: "[Jedno zdanie opisujące skalę organizacyjną i stawkę transformacji.]",
    challenge: "[Nowy model pracy hybrydowej nakłada się na głęboką zmianę kultury — przy jednoczesnej presji na wyniki kwartalne.]",
    approach: "[Program transformacji w 4 falach, angażujący 3 poziomy organizacji, z jasnym systemem mierzenia adopcji zmian.]",
    result: "[Po 12 miesiącach 78% pracowników ocenia nowy model pracy jako lepszy od poprzedniego. Wyniki finansowe utrzymane.]",
    stats: [
      { value: "12 mies.", label: "czas trwania programu" },
      { value: "78%",     label: "pracowników pozytywnie ocenia zmiany" },
      { value: "4 fale",  label: "wdrożenia transformacji" },
      { value: "3 poziomy", label: "organizacji zaangażowane" },
    ],
    tags: ["Financial Services", "Transformacja", "Kultura"],
    sections: [
      {
        id: "challenge",
        title: "Wyzwanie",
        body: [
          "[Opis kontekstu: organizacja pod presją zmiany modelu pracy, z historią nieudanych inicjatyw zmian i silnym cynizmem wśród menedżerów średniego szczebla.]",
          "[Co sprawiało, że ta transformacja była szczególnie ryzykowna — i dlaczego zarząd zdecydował się działać mimo to.]",
        ],
        quote: {
          text: "[Cytat od klienta opisujący moment przełomu — kiedy zrozumieli, że zmiana jest nieodwracalna i trzeba ją przeprowadzić dobrze.]",
          author: "[Imię i nazwisko]",
          role: "[Stanowisko, Nazwa firmy]",
        },
      },
      {
        id: "approach",
        title: "Nasze podejście",
        body: [
          "[Fala 1 i 2: diagnoza i projektowanie — jak mapowaliśmy kulturę, identyfikowaliśmy blokerów i projektowaliśmy interwencje dla poszczególnych grup.]",
          "[Fala 3 i 4: wdrożenie i stabilizacja — jak prowadziliśmy równolegle inicjatywy na 3 poziomach organizacji, jak mierzyliśmy adopcję i korygowaliśmy kurs.]",
        ],
      },
      {
        id: "results",
        title: "Rezultaty",
        body: [
          "[Dane ilościowe: wyniki pomiaru adopcji, wskaźniki zaangażowania, wyniki finansowe w trakcie i po programie.]",
          "[Efekt jakościowy: co zmieniło się w kulturze organizacji, co teraz działa inaczej niż przed transformacją.]",
        ],
        quote: {
          text: "[Końcowy cytat — refleksja lidera transformacji na temat tego, czego się nauczył i co zrobiłby inaczej.]",
          author: "[Imię i nazwisko]",
          role: "[Stanowisko, Nazwa firmy]",
        },
      },
    ],
  },
]
