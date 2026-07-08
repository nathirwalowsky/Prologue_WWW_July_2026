"use client"

import { ServicePage } from "@/components/service-page"
import { useLanguage } from "@/contexts/language-context"

export default function TransformationPage() {
  const { t } = useLanguage()

  return (
    <ServicePage
      data={{
        slug: "transformation",
        label: t.nav.servicesTransformation,
        title: t.pageHeader.transformation.title,
        intro: t.pageHeader.transformation.intro,
        problems: [
          "[Ogłosiłeś transformację — ale po roku organizacja wygląda i działa praktycznie tak samo jak wcześniej.]",
          "[Widzisz opór: część ludzi entuzjastycznie przyjęła zmiany, ale większość czeka i obserwuje z dystansem.]",
          "[Stare struktury i procesy blokują nowy kierunek — i nie wiesz, od czego zacząć ich przebudowę.]",
          "[Martwisz się, że kolejna nieudana inicjatywa zmian tylko pogłębi cynizm w organizacji.]",
          "[Masz wizję, gdzie chcesz być — ale nie masz mapy drogowej, jak tam doprowadzić całą organizację.]",
          "[Rynek zmienia się szybciej niż Twoja organizacja jest w stanie się dostosować.]",
        ],
        identRows: [
          {
            area: "[Zmiana kulturowa]",
            now: "[Organizacja deklaruje zmianę, ale zachowania i nawyki pozostają takie same.]",
            goal: "[Nowa kultura i sposób działania zakorzeniony w codziennych praktykach całego zespołu.]",
          },
          {
            area: "[Zaangażowanie ludzi]",
            now: "[Część zespołu entuzjastycznie przyjęła zmiany, większość czeka i obserwuje.]",
            goal: "[Masa krytyczna liderów i pracowników aktywnie napędza transformację.]",
          },
          {
            area: "[Procesy i struktury]",
            now: "[Stare procesy i struktury organizacyjne hamują nowy kierunek.]",
            goal: "[Procesy i struktura zaprojektowane pod nową strategię — wspierają, a nie blokują zmianę.]",
          },
          {
            area: "[Wyniki transformacji]",
            now: "[Nie wiadomo, jak mierzyć postęp transformacji — czy idziemy w dobrym kierunku?]",
            goal: "[Jasny dashboard transformacji: co zmieniamy, jak to mierzymy i kiedy osiągamy punkt docelowy.]",
          },
        ],
        innerThoughts: [
          '"Ogłosiliśmy transformację rok temu. Ludzie mówią o niej, ale nic się nie zmieniło."',
          '"Martwię się, że opór w organizacji jest silniejszy niż moja zdolność do zmiany."',
          '"Widzę, czego potrzebujemy. Ale nie wiem, jak przeprowadzić przez to całą organizację."',
        ],
        toll: [
          { tag: "Autorytet", line: "[Nieudane inicjatywy zmian podważają wiarygodność lidera.]" },
          { tag: "Kultura", line: "[Cynizm wobec kolejnych projektów zmian narasta z każdą nieudaną próbą.]" },
          { tag: "Czas", line: "[Okno na transformację jest krótkie — rynek nie czeka na organizację w trakcie zmiany.]" },
        ],
        authorityQuote:
          '"Transformacja jest najtrudniejszym rodzajem pracy, jaką robimy — bo wymaga zmiany nie tylko tego, co organizacja robi, ale jak myśli. Wiemy, jak to prowadzić, bo sami przez to przeszliśmy."',
        stats: [
          { value: "15+", label: "[Transformacji przeprowadzonych z klientami]" },
          { value: "18", label: "[Miesięcy — typowy horyzont głębokiej transformacji]" },
          { value: "80%", label: "[Organizacji utrzymuje zmiany po 2 latach]" },
          { value: "3×", label: "[Średni wzrost efektywności organizacyjnej po transformacji]" },
        ],
        caseStudies: [
          {
            industry: "[Branża 1]",
            client: "[Klient A]",
            result: "[Transformacja kultury i struktury — organizacja przeszła z hierarchii do modelu zwinnego w 18 miesięcy.]",
          },
          {
            industry: "[Branża 2]",
            client: "[Klient B]",
            result: "[Przed → po. Kluczowy wynik osiągnięty w trakcie lub po przeprowadzeniu transformacji.]",
          },
          {
            industry: "[Branża 3]",
            client: "[Klient C]",
            result: "[Przed → po. Kluczowy wynik osiągnięty w trakcie lub po przeprowadzeniu transformacji.]",
          },
        ],
        steps: [
          {
            title: "[Diagnoza gotowości — gdzie jesteśmy naprawdę?]",
            body: "[Ocena obecnego stanu kultury, procesów i gotowości organizacji do głębokiej zmiany.]",
          },
          {
            title: "[Projekt transformacji — dokąd i jak?]",
            body: "[Definicja celu, mapy drogi i systemu pomiaru postępu transformacji.]",
          },
          {
            title: "[Aktywacja liderów — zmiana zaczyna się od góry]",
            body: "[Warsztaty i coaching dla liderów, którzy będą napędzać zmianę na swoich poziomach.]",
          },
          {
            title: "[Kaskada i zakorzenienie — zmiana staje się normą]",
            body: "[Przeniesienie transformacji na całą organizację i zakorzenienie nowych nawyków i praktyk.]",
          },
        ],
        ctaTitle: t.services.ctaTitle.transformation,
        blockers: [
          {
            question: "Jak przekonam organizację, która już nie wierzy w kolejne inicjatywy zmian?",
            answer: "[Cynizm w organizacji jest realny i uzasadniony historią. Dlatego zaczynamy od małego — pierwszych widocznych wyników, które odbudowują zaufanie, zanim wejdziemy w głębszą zmianę. Ludzie zmieniają zdanie przez doświadczenie, nie przez prezentacje.]",
          },
          {
            question: "Skąd wiem, że za 2 lata zmiana się utrzyma?",
            answer: "[Transformacje nie utrzymują się dlatego, że są dobrze zaprojektowane — utrzymują się dlatego, że są zakorzenione w nowych nawykach, strukturach i systemach motywacyjnych. Ostatni etap naszej pracy to właśnie to: sprawdzamy, że zmiana ma fundamenty, a nie tylko entuzjazm.]",
          },
          {
            question: "Co, jeśli część kluczowych ludzi nie jest gotowa na zmianę?",
            answer: "[To jeden z najważniejszych czynników ryzyka każdej transformacji. Identyfikujemy go na początku i projektujemy podejście do każdego segmentu: early adopters, skeptics i blockers wymagają różnych działań. Nie ignorujemy oporu — zarządzamy nim.]",
          },
          {
            question: "Jak pogodzić transformację z bieżącymi wynikami biznesowymi?",
            answer: "[To napięcie jest realne. Naszym zadaniem jest zaprojektować transformację tak, żeby nie zatrzymywała biznesu — ale żeby działa równolegle. Tempo transformacji dostosowujemy do Waszej zdolności absorpcji zmian, nie do jakiegoś idealnego harmonogramu.]",
          },
          {
            question: "Ile to właściwie kosztuje — czas, pieniądze, energia?",
            answer: "[Nie ma tu jednej odpowiedzi, bo transformacja różni się skalą w zależności od organizacji. Na pierwszej rozmowie robimy wstępną ocenę zakresu i dajemy Wam uczciwy obraz kosztu — zanim ktokolwiek podejmie jakiekolwiek zobowiązanie.]",
          },
        ],
      }}
    />
  )
}
