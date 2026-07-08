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
        consequences: [
          "[Organizacje, które nie przeprowadzą transformacji, ryzykują utratę relevance na rynku.]",
          "[Każdy rok bez zmiany pogłębia przepaść między kulturą organizacji a wymaganiami otoczenia.]",
          "[Nieudana transformacja może kosztować więcej niż jej nieprzeprowadzenie — warto zrobić to dobrze.]",
        ],
      }}
    />
  )
}
