"use client"

import { ServicePage } from "@/components/service-page"
import { useLanguage } from "@/contexts/language-context"

export default function KeyProjectsPage() {
  const { t } = useLanguage()

  return (
    <ServicePage
      data={{
        slug: "key-projects",
        label: t.nav.servicesKeyProjects,
        title: t.pageHeader.keyProjects.title,
        intro: t.pageHeader.keyProjects.intro,
        problems: [
          "[Masz kluczową inicjatywę, która od miesięcy nie posuwa się do przodu — i wiesz, że tak nie powinno być.]",
          "[Zakres projektu ciągle się rozrasta, terminy się przesuwają, a zespół jest coraz bardziej sfrustrowany.]",
          "[Interesariusze mają różne oczekiwania co do wyników i nie ma nikogo, kto by to scalił w całość.]",
          "[Projekt jest ważny, ale nie ma dedykowanego lidera z czasem i kompetencjami, by nim kierować.]",
          "[Boisz się, że kolejna inicjatywa skończy się jak poprzednie — dużo energii, mało efektów.]",
          "[Nie wiesz, jak mierzyć postęp — czy projekt idzie dobrze, czy właśnie dryfuje w złym kierunku.]",
        ],
        identRows: [
          {
            area: "[Realizacja inicjatyw]",
            now: "[Ważne projekty ciągną się miesiącami bez konkretnych wyników.]",
            goal: "[Kluczowe inicjatywy dostarczane na czas, z jasno zdefiniowanym wynikiem.]",
          },
          {
            area: "[Zakres i priorytety]",
            now: "[Zakres projektów ciągle się rozrasta — zespół jest przeciążony, a priorytety niejasne.]",
            goal: "[Ograniczony, precyzyjny zakres, który skupia energię na tym, co naprawdę ma znaczenie.]",
          },
          {
            area: "[Zarządzanie interesariuszami]",
            now: "[Interesariusze mają różne oczekiwania, co prowadzi do opóźnień i konfliktów.]",
            goal: "[Interesariusze są zaangażowani, poinformowani i zgrali się wokół wspólnego celu.]",
          },
          {
            area: "[Mierzenie postępu]",
            now: "[Nie ma jasnych wskaźników sukcesu — trudno ocenić, czy projekt idzie dobrze.]",
            goal: "[Konkretne KPI i kamienie milowe, które dają bieżący wgląd w postęp projektu.]",
          },
        ],
        innerThoughts: [
          '"Zaczęliśmy projekt trzy kwartały temu. Nadal nie mamy wyników."',
          '"Każdy jest zajęty, ale nie wiem dokładnie, czym. I czy to właściwe rzeczy."',
          '"Boimy się, że kolejna inicjatywa skończy się tak samo — z dużym wysiłkiem i małym efektem."',
        ],
        toll: [
          { tag: "Wiarygodność", line: "[Opóźnienia projektów podważają zaufanie do liderów i do organizacji.]" },
          { tag: "Motywacja", line: "[Zespół traci zapał, gdy widzi, że ciężka praca nie przekłada się na wyniki.]" },
          { tag: "Zasoby", line: "[Budżet i czas są zamrożone w projektach, które nie dowożą wartości.]" },
        ],
        authorityQuote:
          '"Widzieliśmy ten wzorzec wiele razy. Problem rzadko leży w kompetencjach zespołu — częściej w tym, jak projekt jest zdefiniowany, prowadzony i mierzony."',
        stats: [
          { value: "40+", label: "[Kluczowych projektów zrealizowanych z klientami]" },
          { value: "85%", label: "[Projektów dostarczonych w pierwotnym terminie]" },
          { value: "2×", label: "[Średnia poprawa tempa realizacji]" },
          { value: "12", label: "[Tygodni — typowy czas realizacji pierwszego etapu]" },
        ],
        caseStudies: [
          {
            industry: "[Branża 1]",
            client: "[Klient A]",
            result: "[Projekt, który utknął na 8 miesięcy, dostarczony w 12 tygodni po przebudowie podejścia.]",
          },
          {
            industry: "[Branża 2]",
            client: "[Klient B]",
            result: "[Przed → po. Kluczowy wynik osiągnięty w określonym czasie po wdrożeniu projektu.]",
          },
          {
            industry: "[Branża 3]",
            client: "[Klient C]",
            result: "[Przed → po. Kluczowy wynik osiągnięty w określonym czasie po wdrożeniu projektu.]",
          },
        ],
        steps: [
          {
            title: "[Definicja sukcesu — co dokładnie ma być dostarczone?]",
            body: "[Wspólne ustalenie zakresu, kryteriów sukcesu i tego, co NIE jest w zakresie.]",
          },
          {
            title: "[Struktura projektu — jak to osiągniemy?]",
            body: "[Zaprojektowanie planu: etapy, właściciele, kamienie milowe i mechanizmy eskalacji.]",
          },
          {
            title: "[Uruchomienie i rytm pracy — tydzień po tygodniu]",
            body: "[Kickoff z zespołem, ustalenie rytmu raportowania i pracy operacyjnej przy projekcie.]",
          },
          {
            title: "[Dostarczenie i lessons learned — wynik + wiedza na przyszłość]",
            body: "[Zamknięcie projektu, przekazanie wyników i retrospektywa, która wzmacnia organizację.]",
          },
        ],
        ctaTitle: t.services.ctaTitle.keyProjects,
        blockers: [
          {
            question: "Czy to nie odciągnie naszego zespołu od bieżącej pracy?",
            answer: "[Projektujemy zaangażowanie tak, żeby minimalizować obciążenie Twojego zespołu. Przejmujemy prowadzenie, koordynację i eskalacje — Wasz wkład jest skupiony i zaplanowany z góry, nie ad hoc.]",
          },
          {
            question: "Jak wiadomo, kiedy projekt naprawdę jest na dobrej drodze?",
            answer: "[Pierwszą rzeczą, którą robimy, jest zdefiniowanie jasnych wskaźników sukcesu i kamieni milowych. Przez cały czas trwania projektu widzisz stan na bieżąco — nie dowiadujesz się o problemach, gdy jest już za późno.]",
          },
          {
            question: "Próbowaliśmy już zewnętrznych konsultantów i nic z tego nie wyszło.",
            answer: "[Rozumiemy ten sceptycyzm i słyszymy go regularnie. Różnica polega na tym, że pracujemy razem z Waszym zespołem, a nie obok niego. Nie zostajemy po skończeniu projektu — ale nie znikamy też w połowie drogi.]",
          },
          {
            question: "Co się stanie, jeśli projekt się opóźni?",
            answer: "[Opóźnienia rzadko biorą się znikąd — budujemy mechanizmy wczesnego ostrzegania, żeby widzieć ryzyka zanim staną się problemami. A jeśli coś się zmienia, reagujemy, zamiast czekać na kolejny status update.]",
          },
          {
            question: "Nie jestem pewien, czy to właściwy moment na taki projekt.",
            answer: "[To ważne pytanie. Część naszej pierwszej rozmowy to właśnie ocena: czy to jest właściwy projekt, właściwy czas i właściwe zasoby. Czasem odpowiedź brzmi — jeszcze nie. Wolimy powiedzieć to wcześnie niż startować projekt, który nie ma szans.]",
          },
        ],
      }}
    />
  )
}
