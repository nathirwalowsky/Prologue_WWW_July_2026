"use client"

import { ServicePage } from "@/components/service-page"
import { useLanguage } from "@/contexts/language-context"

export default function StrategyPage() {
  const { t } = useLanguage()

  return (
    <ServicePage
      data={{
        slug: "strategy",
        label: t.nav.servicesStrategy,
        title: t.pageHeader.strategy.title,
        intro: t.pageHeader.strategy.intro,
        identRows: [
          {
            area: "[Kierunek biznesowy]",
            now: "[Zespół ma wiele równoległych priorytetów bez jasnego centrum ciężkości.]",
            goal: "[Jedna klarowna strategia, którą każdy może wyjaśnić w dwóch zdaniach.]",
          },
          {
            area: "[Przewaga konkurencyjna]",
            now: "[Oferta jest podobna do konkurencji — trudno uzasadnić wyższą cenę.]",
            goal: "[Wyraźne pozycjonowanie, które przyciąga właściwych klientów i odpycha złych.]",
          },
          {
            area: "[Podejmowanie decyzji]",
            now: "[Decyzje strategiczne są odkładane lub podejmowane w oparciu o intuicję.]",
            goal: "[Ustrukturyzowany proces decyzyjny oparty na danych i jasnych kryteriach.]",
          },
          {
            area: "[Zaangażowanie zespołu]",
            now: "[Liderzy rozumieją strategię, ale reszta organizacji nie czuje się z nią związana.]",
            goal: "[Strategia jest żywa — ludzie na każdym poziomie wiedzą, jak ich praca się do niej przyczynia.]",
          },
        ],
        innerThoughts: [
          '"Mamy świetny produkt, ale nie wiemy, jak go wyraźnie odróżnić od konkurencji."',
          '"Zespół jest zmotywowany, ale każdy ciągnie w innym kierunku."',
          '"Podejmuję decyzje strategiczne głównie w oparciu o przeczucie — to mnie niepokoi."',
        ],
        toll: [
          { tag: "Energia", line: "[Ciągłe gaszenie pożarów zamiast budowania czegoś trwałego.]" },
          { tag: "Pewność siebie", line: "[Wątpliwości, czy obrana droga jest właściwa — nawet gdy wyniki są dobre.]" },
          { tag: "Czas", line: "[Tygodnie i miesiące mijają bez odczuwalnego strategicznego postępu.]" },
        ],
        authorityQuote:
          '"Pracowaliśmy z dziesiątkami liderów, którzy dokładnie tak się czuli. Naszą rolą nie jest powiedzieć Ci, jaką masz strategię — ale pomóc Ci ją odkryć i skrystalizować razem z Twoim zespołem."',
        stats: [
          { value: "40+", label: "[Strategii zbudowanych z klientami]" },
          { value: "3×", label: "[Średnie przyspieszenie tempa decyzji]" },
          { value: "90%", label: "[Klientów wdraża strategię w ciągu 90 dni]" },
          { value: "15+", label: "[Branż, w których pracowaliśmy]" },
        ],
        caseStudies: [
          {
            industry: "[Branża 1]",
            client: "[Klient A]",
            result: "[Przed → po. Kluczowy wynik osiągnięty w określonym czasie po wdrożeniu strategii.]",
          },
          {
            industry: "[Branża 2]",
            client: "[Klient B]",
            result: "[Przed → po. Kluczowy wynik osiągnięty w określonym czasie po wdrożeniu strategii.]",
          },
          {
            industry: "[Branża 3]",
            client: "[Klient C]",
            result: "[Przed → po. Kluczowy wynik osiągnięty w określonym czasie po wdrożeniu strategii.]",
          },
        ],
        steps: [
          {
            title: "[Diagnoza — zrozumienie sytuacji wyjściowej]",
            body: "[Co robimy w tym kroku, jakie pytania zadajemy i co odkrywamy razem z klientem.]",
          },
          {
            title: "[Warsztaty strategiczne — współtworzenie kierunku]",
            body: "[Opis sesji roboczych: kto bierze udział, jak długo trwają, co jest ich wynikiem.]",
          },
          {
            title: "[Krystalizacja — spójny dokument strategiczny]",
            body: "[Jak przekształcamy wnioski warsztatowe w gotowy do użycia dokument strategiczny.]",
          },
          {
            title: "[Aktywacja — uruchomienie strategii w organizacji]",
            body: "[Jak pomagamy klientowi zakomunikować strategię i uruchomić pierwsze inicjatywy.]",
          },
        ],
        ctaTitle: t.services.ctaTitle.strategy,
        consequences: [
          "[Bez jasnej strategii zespół traci czas na inicjatywy, które nie przesuwają igły.]",
          "[Brak pozycjonowania oznacza konkurowanie ceną — co prowadzi do presji marżowej.]",
          "[Strategiczna niejasność generuje frustrację w zespole i rotację kluczowych ludzi.]",
        ],
      }}
    />
  )
}
