"use client"

import Link from "next/link"
import { SiteShell, PageHeader } from "@/components/site-shell"
import {
  WireButton,
  WireHeading,
  WireLabel,
  WirePlaceholder,
  WireText,
} from "@/components/wireframe-kit"
import { WireAccordion, WireBadge, WireStepAccordion, WireTabs, WireTimeline } from "@/components/wire-ui"
import { VectorChecklist } from "@/components/vector-checklist"
import { useLanguage } from "@/contexts/language-context"

export default function VectorWireframeV2() {
  const { t } = useLanguage()

  return (
    <SiteShell pageName="Vector Workshop">
      <PageHeader
        label={t.vector.pageLabel}
        title={t.pageHeader.vector.title}
        intro={t.pageHeader.vector.intro}
        actions={
          <div className="flex flex-wrap items-start gap-4">
            <Link href="/contact">
              <WireButton variant="primary">{t.vector.heroSchedule}</WireButton>
            </Link>
            <div className="flex flex-col items-start gap-1.5">
              <WireButton variant="secondary">{t.vector.heroDownload}</WireButton>
              <span className="font-mono text-xs text-muted-foreground">{t.vector.heroDownloadNote}</span>
            </div>
          </div>
        }
      />

      {/* PROOF — sessions run, participant quote, photos */}
      <section className="border-b border-neutral-200 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <WireLabel>{t.vector.proofLabel}</WireLabel>
            <WireText className="max-w-2xl text-base text-neutral-700">{t.vector.proofLead}</WireText>
          </div>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <blockquote className="flex flex-col gap-4 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
              <p className="text-pretty text-lg font-medium leading-relaxed text-neutral-800">
                &ldquo;{t.vector.proofQuote}&rdquo;
              </p>
              <footer className="font-mono text-xs uppercase tracking-wide text-neutral-400">
                {t.vector.proofQuoteAttribution}
              </footer>
            </blockquote>
            <WirePlaceholder label="[Workshop session photo]" className="aspect-video w-full" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <WirePlaceholder label="[Session photo]" className="aspect-square w-full" />
            <WirePlaceholder label="[Session photo]" className="aspect-square w-full" />
            <WirePlaceholder label="[Session photo]" className="aspect-square w-full" />
          </div>
        </div>
      </section>

      {/* WHY THIS WORKSHOP — tabs instead of a graphic */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 flex flex-col items-start gap-5">
            <WireLabel>{t.vector.whyLabel}</WireLabel>
            <WireHeading level={2}>{t.vector.whyTitle}</WireHeading>
          </div>
          <WireTabs
            tabs={[
              {
                label: t.vector.tabOutcome,
                content: (
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <WireHeading level={4}>Zespół mówi o celu jednym językiem.</WireHeading>
                      <WireText>
                        Po sesji każdy przy stole potrafi powiedzieć, jaki jest cel, kiedy jest
                        osiągnięty i po czym to poznacie. Znikają rozmowy, w których dwie osoby
                        używają tego samego słowa na dwie różne rzeczy.
                      </WireText>
                    </div>
                    <div className="flex flex-col gap-2">
                      <WireHeading level={4}>Cele, które da się wpisać do kalendarza.</WireHeading>
                      <WireText>
                        Z każdego celu wychodzi lista działań z właścicielem i terminem. Nie musicie
                        tłumaczyć strategii na zadania po sesji, bo to dzieje się w jej trakcie.
                      </WireText>
                    </div>
                    <div className="flex flex-col gap-2">
                      <WireHeading level={4}>Działania, które pracują na kilka celów naraz.</WireHeading>
                      <WireText>
                        Widzicie, które działania wspierają więcej niż jeden cel. To one wchodzą do
                        planu jako pierwsze i to one dają najwięcej za te same pieniądze.
                      </WireText>
                    </div>
                    <div className="flex flex-col gap-2">
                      <WireHeading level={4}>Widoczna droga do celu.</WireHeading>
                      <WireText>
                        Cel, przeszkoda, decyzja, działanie. Cztery kolumny, które można pokazać
                        zarządowi albo zespołowi, który nie był na warsztacie.
                      </WireText>
                    </div>
                    <div className="flex flex-col gap-2">
                      <WireHeading level={4}>Decyzje nazwane wprost, razem z tymi na nie.</WireHeading>
                      <WireText>
                        Wychodzicie z listą tego, co robicie, i tego, czego świadomie nie robicie. Ta
                        druga lista zwalnia czas i budżet szybciej niż pierwsza.
                      </WireText>
                    </div>
                    <WireText className="border-t border-neutral-200 pt-4 text-sm text-neutral-500">
                      Po jednym module masz wypełniony arkusz: jeden cel, mapę zasobów i przeszkód,
                      listę decyzji i listę działań z właścicielami. To jest artefakt, do którego
                      wracacie za kwartał.
                    </WireText>
                  </div>
                ),
              },
              {
                label: t.vector.tabMethod,
                content: (
                  <div className="flex flex-col gap-3">
                    <WireText>
                      Warsztat Vector to pięcioetapowy warsztat strategiczny prowadzący od celu przez
                      zasoby i przeszkody do decyzji i działań.
                    </WireText>
                    <WireText>
                      Vector powstał w oparciu o najbardziej znane i poważane frameworki
                      strategiczne, zestawione z wieloletnim doświadczeniem facylitacji warsztatów.
                      Stworzyliśmy warsztat, który można prowadzić dla wszystkich działów w
                      organizacji, w różnych sytuacjach i na wielu poziomach. Dodatkowo Vector jest
                      warsztatem modułowym, który można powtarzać i łączyć ze sobą, osiągając jeszcze
                      lepsze efekty w czasie.
                    </WireText>
                    <WireText>
                      Vector jest destylatem dziesięciu lat facylitacji i wielu frameworków
                      strategicznych. Zostało w nim to, co działa w pokoju pełnym ludzi, pod presją
                      czasu. Prostota tej struktury jest jego przewagą: nikt nie traci energii na
                      zrozumienie metody, więc cała uwaga idzie na firmę. Pod tą prostotą dzieje się
                      głęboka praca strategiczna.
                    </WireText>
                    <WireText>Poniżej poznasz cały przebieg warsztatu od początku do końca.</WireText>
                  </div>
                ),
              },
              {
                label: t.vector.tabForWhom,
                content: (
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <WireHeading level={4}>Kto to prowadzi.</WireHeading>
                      <WireText>
                        Osoba, która odpowiada za wynik zespołu i ma mandat, żeby zwołać ludzi na dwie
                        godziny. Team leader, dyrektor działu, członek zarządu, konsultant pracujący z
                        klientem. Nie musisz mieć doświadczenia w facylitacji, materiały prowadzą Cię
                        krok po kroku.
                      </WireText>
                    </div>
                    <div className="flex flex-col gap-2">
                      <WireHeading level={4}>Kto siada przy stole.</WireHeading>
                      <WireText>
                        Od trzech do ośmiu osób, w tym zawsze jedna decyzyjna. Bez niej wyjdziecie z
                        listą postulatów zamiast decyzji.
                      </WireText>
                    </div>
                    <div className="flex flex-col gap-2">
                      <WireHeading level={4}>Gdzie się sprawdza.</WireHeading>
                      <WireText>
                        Firmy od kilkunastu osób do kilkuset, organizacje pozarządowe, zespoły
                        projektowe, jednoosobowe działalności pracujące nad własnym kierunkiem.
                      </WireText>
                    </div>
                    <div className="flex flex-col gap-2">
                      <WireHeading level={4}>Kiedy nie warto.</WireHeading>
                      <WireText>
                        Vector nie rozwiąże konfliktu personalnego i nie zastąpi rozmowy, którą ktoś
                        w firmie odkłada od pół roku. Uporządkuje natomiast to, co po takiej rozmowie
                        trzeba zrobić.
                      </WireText>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* WHEN TO USE — scenario cards with badges */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>{t.vector.whenLabel}</WireLabel>
            <WireHeading level={2}>{t.vector.whenTitle}</WireHeading>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                tag: "Turning Point",
                title: "Punkt zwrotny",
                subtitle: "Kiedy obieracie nowy kierunek",
                line:
                  "Czasami organizacja wymaga zmiany lub zmiana przychodzi niespodziewanie. Pojawia się wtedy widmo wielu rzeczy, które trzeba zrobić, i wielu rzeczy, które trzeba przemyśleć. Uporządkowanie myślenia o tej zmianie pozwala stworzyć jasny plan i nie stracić głowy nawet w najtrudniejszym momencie organizacji. Vector pomaga uporządkować kolejne kroki, zrozumieć, co oznacza zmiana dla organizacji i jak można ją wykorzystać do dalszego rozwoju.",
              },
              {
                tag: "Misalignment",
                title: "Zgrzyty",
                subtitle: "Kiedy coś przestaje działać",
                line:
                  "Długo nierozwiązywane problemy lubią się kumulować i tworzyć kolejne ogniska zapalne. Brak zrozumienia między zespołami, utrata projektów i niekończące się wewnętrzne spory to tylko objawy prawdziwych przyczyn. Vector umożliwi skuteczne wychwycenie źródeł problemów, pozwoli je omówić w kontrolowanym środowisku i wskazać decyzje, które rozwiążą konflikty.",
              },
              {
                tag: "New Chapter",
                title: "Nowy etap",
                subtitle: "Kiedy wchodzicie w nowy rozdział",
                line:
                  "Kiedy przestajemy nadążać za rozwojem lub pojawia się duża, permanentna zmiana, potrzebne jest zrozumienie nowej rzeczywistości organizacji. Duża inwestycja, sukcesja lub przejęcie firmy wymaga, by kluczowe role rozumiały, dokąd zmierza organizacja i jakie kroki musi poczynić, by dalej się rozwijać. Vector jest narzędziem, by zrobić to skutecznie, jednocześnie mapując nowe możliwości organizacji i to, jakie zmiany w niej zajdą.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-white p-5"
              >
                <WireBadge tone="blue">{s.tag}</WireBadge>
                <div className="flex flex-col gap-0.5">
                  <WireHeading level={4}>{s.title}</WireHeading>
                  <p className="font-mono text-xs uppercase tracking-wide text-neutral-400">
                    {s.subtitle}
                  </p>
                </div>
                <WireText className="text-sm">{s.line}</WireText>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-neutral-200 pt-10 text-center">
            <WireText className="max-w-2xl text-base">
              W każdym z tych trzech momentów decyzje i tak zapadną. Pytanie brzmi, czy zapadną w
              kilku głowach osobno i wyjdą na jaw za pół roku, czy przy jednym stole, w dwie
              godziny.
            </WireText>
            <p className="text-sm font-medium text-blue-700">
              Rozpoznajesz któryś z nich? Pobierz pakiet →
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — expandable session steps (video + long text) + downloads */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>{t.vector.howLabel}</WireLabel>
            <WireHeading level={2}>{t.vector.howTitle}</WireHeading>
            <WireText className="max-w-2xl">
              Za chwilę dowiesz się, jak przeprowadzić Vector krok po kroku, oglądając krótkie
              wideo i czytając listę wytycznych. Otrzymasz od nas pełny pakiet materiałów, by usiąść
              ze swoim zespołem i zacząć pracę strategiczną tak szybko, jak to możliwe.
            </WireText>
          </div>

          <div className="mb-6 flex items-center gap-2">
            <WireBadge tone="muted">Agenda</WireBadge>
            <span className="font-mono text-xs text-neutral-400">{t.vector.agendaMeta}</span>
          </div>

          <WireStepAccordion
            steps={[
              {
                title: "Osadź cele (~15 min)",
                duration: "[~15 min · video 3 min]",
                hasVideo: true,
                videoLabel: "[Stage 1 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      Zaczynacie od określenia celu, nad którym chcecie pracować. Ten etap stanowi
                      oś całego warsztatu: każdy moduł skupiony jest wokół jednego celu.
                    </WireText>
                    <WireText className="text-sm">
                      Karta Celu to praca przed sesją. Każdy uczestnik wypełnia swoją osobno i
                      przynosi ją na warsztat. Na miejscu wybieracie jeden cel, nad którym
                      pracujecie w tym module, i dopiero jemu dokładacie cztery obszary: Nazwany
                      (Co), Określony w czasie (Kiedy), Mierzalny (Kiedy wiemy, że jest osiągnięty),
                      Ważny dla organizacji (Wpływ). Karta służy do zebrania i porównania celów,
                      cztery obszary do doprecyzowania tego jednego wybranego.
                    </WireText>
                    <WireText className="text-sm">
                      Miejcie maksymalnie 3 do 4 celów naraz. Jeśli wydają się zbyt operacyjne,
                      wróćcie do metody 5x Dlaczego, żeby zweryfikować, czy to na pewno prawdziwy
                      cel, czy tylko działanie, które pozornie wydaje się istotne.
                    </WireText>
                    <div>
                      <WireBadge tone="blue">Facilitator script</WireBadge>
                      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm text-neutral-700">
                        <li>
                          „Zanim zaczniemy, ustalamy jedno: przez najbliższe dwie godziny mówimy
                          sobie po imieniu i nie ma tu złych odpowiedzi.”
                        </li>
                        <li>
                          „Każdy wypełnił Karty Celu osobno. Zaczynamy od wybrania jednego celu,
                          nad którym pracujemy dzisiaj.”
                        </li>
                        <li>
                          „Powiedzcie mi, po czym poznamy, że ten cel jest osiągnięty. Jeśli nie
                          umiemy tego nazwać, to jeszcze nie jest cel.”
                        </li>
                      </ul>
                    </div>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Cel operacyjny przebrany za strategiczny, na przykład „zrobić nową stronę”.
                        Wtedy 5x Dlaczego, aż dojdziecie do tego, co ta strona ma zmienić.
                      </WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Cel zapisany jednym zdaniem, ma datę, miarę i opisany wpływ na organizację.
                        Nikt przy stole nie sygnalizuje, że pracuje nad czymś innym.
                      </WireText>
                    </div>
                  </div>
                ),
              },
              {
                title: "Zmapuj zasoby (~20 min)",
                duration: "[~20 min · video 4 min]",
                hasVideo: true,
                videoLabel: "[Stage 2 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      W sekcji Zasobów mapujecie to, co Wasza organizacja posiada i co może Wam
                      pomóc w realizacji celu. Będą to zasoby zarówno materialne, jak i
                      niematerialne. Pytania, na które musicie sobie odpowiedzieć:
                    </WireText>
                    <ul className="flex list-disc flex-col gap-1 pl-5 text-sm text-neutral-700">
                      <li>
                        Mocne strony: czego mamy dużo, w czym jesteśmy mocni i świetnie
                        wytrenowani?
                      </li>
                      <li>
                        Unikatowe: w czym jesteśmy najlepsi na rynku, jakie kombinacje zasobów są
                        nie do podrobienia, co mamy, czego nie mają inni?
                      </li>
                      <li>
                        Słabe strony: czego nam brakuje, gdzie nie mamy żadnej przewagi, w czym
                        konkurencja albo inne rozwiązania są lepsze?
                      </li>
                      <li>
                        Ukryte: co chcielibyśmy mieć, czego byśmy potrzebowali, żeby osiągnąć cel,
                        jakie zasoby mają nasi partnerzy, które moglibyśmy wykorzystać?
                      </li>
                    </ul>
                    <div>
                      <WireBadge tone="blue">Facilitator script</WireBadge>
                      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm text-neutral-700">
                        <li>
                          „Zaczynamy od zasobów, bo łatwiej się rozgrzać na tym, co macie, niż na
                          tym, czego brakuje.”
                        </li>
                        <li>
                          „Na razie nie oceniamy, czy zasób jest ważny. Wypisujemy wszystko,
                          selekcję zrobimy przy decyzjach.”
                        </li>
                        <li>
                          „Zajrzyjcie też do zasobów ukrytych: co mają nasi partnerzy, czego
                          moglibyśmy użyć.”
                        </li>
                      </ul>
                    </div>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Grupa wypisuje wyłącznie zasoby materialne. Ludzie, relacje, dane i
                        reputacja rozstrzygają częściej niż sprzęt.
                      </WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Wszystkie cztery kolumny wypełnione, a kolumna zasobów ukrytych ma co
                        najmniej kilka wpisów.
                      </WireText>
                    </div>
                  </div>
                ),
              },
              {
                title: "Nazwij przeszkody (~20 min)",
                duration: "[~20 min · video 3 min]",
                hasVideo: true,
                videoLabel: "[Stage 3 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      W Przeszkodach nazywacie wprost rzeczy, które blokują Was przed osiągnięciem
                      celu. Im głębiej je zrozumiecie, tym klarowniejsze będą decyzje, które
                      musicie podjąć, a droga do celu wyraźniejsza. Odpowiedzcie sobie na
                      pytania:
                    </WireText>
                    <ul className="flex list-disc flex-col gap-1 pl-5 text-sm text-neutral-700">
                      <li>
                        Czym są te przeszkody? Postarajcie się nazwać je bardzo jasno i
                        konkretnie. Użyjcie metody 5x Dlaczego, jeśli wydaje się Wam, że nie są
                        precyzyjne.
                      </li>
                      <li>W jaki sposób te przeszkody wpływają na Wasz cel?</li>
                      <li>
                        Jak silne i dotkliwe są ich skutki? Czy faktycznie są przeszkodą, czy
                        tylko pracą, którą musicie wykonać?
                      </li>
                      <li>
                        Czy powstrzymują nas teraz, czy zostały w przeszłości, czy pozostaną
                        przeszkodami zawsze?
                      </li>
                      <li>Czy da się je rozwiązać, czy nie?</li>
                    </ul>
                    <div>
                      <WireBadge tone="blue">Facilitator script</WireBadge>
                      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm text-neutral-700">
                        <li>
                          „Teraz to, co blokuje. Nazywajcie konkretnie, jednym zdaniem na
                          przeszkodę.”
                        </li>
                        <li>
                          „Przeszkoda czy praca do wykonania? Jeśli wiecie, jak to zrobić, i tylko
                          nikt tego nie zrobił, to nie jest przeszkoda.”
                        </li>
                        <li>„Które z nich blokują nas teraz, a które już minęły?”</li>
                      </ul>
                    </div>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Grupa wpisuje rzeczy spoza swojego wpływu, na przykład koniunkturę albo
                        regulacje. Zapisz je na Parkingu i wróć do tego, co jest po Waszej stronie.
                      </WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Każda przeszkoda ma nazwę i jedno zdanie o tym, jak blokuje cel.
                      </WireText>
                    </div>
                  </div>
                ),
              },
              {
                title: "Wyodrębnij decyzje (~40 min)",
                duration: "[~40 min · video 5 min]",
                hasVideo: true,
                videoLabel: "[Stage 4 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      Na podstawie Zasobów i Przeszkód zmapujcie, jakie decyzje musicie wobec nich
                      podjąć, żeby osiągnąć cel. Skupcie się na każdym pojedynczym elemencie i
                      odpowiedzcie sobie na pytanie, co z nim zrobić, żeby być bliżej celu.
                    </WireText>
                    <WireText className="text-sm">
                      Bardzo istotne jest, by mapować nie tylko to, co chcecie zrobić, ale też
                      rzeczy, których nie robicie.
                    </WireText>
                    <WireText className="text-sm">
                      Uwaga: decyzje to jeszcze nie akcje. Decyzją będzie „musimy poprawić jakość
                      naszych usług dla produktu X”. Akcją będzie szereg rzeczy, które trzeba
                      wykonać, żeby tę poprawę wprowadzić: trening zespołu, lepszy opis produktu i
                      tak dalej.
                    </WireText>
                    <div>
                      <WireBadge tone="blue">Facilitator script</WireBadge>
                      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm text-neutral-700">
                        <li>
                          „Bierzemy element po elemencie. Co robimy z tym zasobem, żeby być bliżej
                          celu?”
                        </li>
                        <li>
                          „Zapisujemy też decyzje o tym, czego nie robimy. To one zwalniają czas i
                          budżet.”
                        </li>
                        <li>
                          „To jeszcze nie jest zadanie. Decyzja wyznacza kierunek, zadania
                          rozpiszemy w kolejnym etapie.”
                        </li>
                      </ul>
                    </div>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Grupa przeskakuje od razu do działań. Tu najbardziej potrzebna jest osoba
                        decyzyjna, bo tylko ona może w tym momencie powiedzieć „nie” i oszczędzić
                        Wam pracy nad czymś, co i tak nie przejdzie.
                      </WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Każdy istotny zasób i każda przeszkoda ma przypisaną decyzję albo świadome
                        „zostawiamy bez zmian”.
                      </WireText>
                    </div>
                  </div>
                ),
              },
              {
                title: "Nazwij akcje (~25 min)",
                duration: "[~25 min · video 3 min]",
                hasVideo: true,
                videoLabel: "[Stage 5 walkthrough]",
                body: (
                  <div className="flex flex-col gap-3">
                    <WireText className="text-sm">
                      Na podstawie Decyzji zmapujcie, co musicie zrobić, żeby uznać je za
                      wprowadzone w życie. Z decyzji powstaje obszerna lista akcji, które następnie
                      uszeregujecie i z których stworzycie projekty prowadzące Was do celu w
                      bieżącej pracy.
                    </WireText>
                    <WireText className="text-sm">
                      Jeśli pracujecie nad kilkoma celami, zwróćcie uwagę, jak wiele akcji jest ze
                      sobą połączonych. Im bliżej są siebie, to znaczy im częściej ta sama akcja
                      wspiera dwa lub kilka celów, tym bliżej jesteście doskonałości strategicznej
                      i tym szybciej osiągniecie cele, wykorzystując zasoby optymalnie.
                    </WireText>
                    <div>
                      <WireBadge tone="blue">Facilitator script</WireBadge>
                      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm text-neutral-700">
                        <li>
                          „Z każdej decyzji robimy listę działań. Na razie bez kolejności i bez
                          oceny.”
                        </li>
                        <li>„Przy każdym działaniu zapisujemy właściciela. Bez nazwiska to nie jest działanie.”</li>
                        <li>„Na koniec zaznaczamy te działania, które wspierają więcej niż jeden cel.”</li>
                      </ul>
                    </div>
                    <div>
                      <WireBadge tone="neutral">{t.vector.commonMistake}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Lista rośnie do stu pozycji i po tygodniu nikt jej nie otwiera. Wybierzcie
                        od pięciu do siedmiu działań na najbliższy kwartał, reszta zostaje jako
                        backlog.
                      </WireText>
                    </div>
                    <div>
                      <WireBadge tone="muted">{t.vector.doneWhen}</WireBadge>
                      <WireText className="mt-2 text-sm">
                        Lista działań z właścicielem i terminem przy każdym, z zaznaczonymi tymi,
                        które pracują na dwa cele naraz. Ustalona data spotkania, na którym
                        sprawdzicie postęp.
                      </WireText>
                    </div>
                  </div>
                ),
              },
            ]}
          />

          {/* Run it online — merged into a single narrative section */}
          <div className="mt-14">
            <div className="mb-6 flex flex-col items-start gap-3">
              <WireBadge tone="blue">{t.vector.onlineLabel}</WireBadge>
              <WireHeading level={3}>{t.vector.onlineTitle}</WireHeading>
              <WireText className="max-w-2xl text-sm">{t.vector.onlineLead}</WireText>
            </div>
            <WireTimeline
              steps={[
                { title: "Pobierz plansze pięciu etapów w PNG", body: "" },
                { title: "Wrzuć je na tablicę i ustaw jako tło", body: "" },
                {
                  title: "Zablokuj planszę, żeby nie przesuwała się podczas pracy, i zaproś zespół",
                  body: "",
                },
              ]}
            />
            <WireText className="mt-6 max-w-2xl text-sm text-neutral-500">{t.vector.onlineFormatsNote}</WireText>
          </div>

          {/* Download — two groups + buy package CTA */}
          <div className="mt-14">
            <div className="mb-6 flex items-center gap-2">
              <WireBadge tone="muted">{t.vector.download}</WireBadge>
              <span className="font-mono text-xs text-neutral-400">Do użycia offline / na miejscu</span>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Files to download */}
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {t.vector.downloadFilesLabel}
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { name: "Plansze pięciu etapów", meta: "PNG · do Miro, FigJama, Murala i tablicy w Teams" },
                    { name: "Przewodnik facylitatora", meta: "PDF" },
                    { name: "Arkusze do druku", meta: "PDF" },
                    { name: "Karty Celu do druku", meta: "PDF" },
                  ].map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-4 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-neutral-400" aria-hidden="true">
                          ⤓
                        </span>
                        <div className="flex flex-col">
                          <WireText className="text-neutral-700">{file.name}</WireText>
                          <span className="font-mono text-xs text-neutral-400">{file.meta}</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-blue-700">{t.vector.download}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI tools — links, visually distinct from files */}
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {t.vector.downloadAiLabel}
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { tool: "Skill do Claude'a", desc: "Przygotowany pod Warsztat Vector", action: "Open", soon: false },
                    { tool: "CustomGPT", desc: "Przygotowany pod Warsztat Vector", action: "Open", soon: false },
                    { tool: "Gem w Gemini", desc: "Dochodzi wkrótce", action: t.vector.comingSoon, soon: true },
                  ].map((conn, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between gap-4 rounded-md border-2 border-dashed px-4 py-3 ${
                        conn.soon ? "border-neutral-200 bg-neutral-50 opacity-60" : "border-blue-300 bg-blue-50/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex size-9 shrink-0 items-center justify-center rounded border-2 border-dashed border-blue-300 font-mono text-xs text-blue-500"
                          aria-hidden="true"
                        >
                          ⧉
                        </span>
                        <div className="flex flex-col">
                          <WireText className="text-neutral-700">{conn.tool}</WireText>
                          <span className="font-mono text-xs text-neutral-400">{conn.desc}</span>
                        </div>
                      </div>
                      {conn.soon ? (
                        <WireBadge tone="muted">{conn.action}</WireBadge>
                      ) : (
                        <span className="flex items-center gap-1 text-sm font-medium text-blue-700">
                          {conn.action}
                          <span aria-hidden="true">↗</span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 rounded-md border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
              <WireButton variant="primary">{t.vector.buyPackage}</WireButton>
              <WireText className="text-sm">{t.vector.buyPackageNote}</WireText>
            </div>
          </div>
        </div>
      </section>

      {/* NOTES, TIPS & INSTRUCTIONS — accordion */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8 flex flex-col items-start gap-3">
            <WireLabel>{t.vector.notesLabel}</WireLabel>
            <WireHeading level={2}>{t.vector.notesTitle}</WireHeading>
          </div>
          <WireAccordion
            items={[
              {
                title: "Tip 1. Przygotuj salę lub środowisko online",
                body: "Najlepiej pracować warsztatowo przy jednym stole. Najłatwiej wtedy zarządzać uwagą grupy i efektywnie pracować nad danym elementem. Każdy powinien mieć miejsce siedzące, a grupa powinna siedzieć przy jednym stole. Jeśli prowadzisz warsztaty online, skorzystaj z narzędzi takich jak Miro lub FigJam oraz programu do wideokonferencji. Każdy uczestnik powinien mieć włączony mikrofon i kamerę, dla lepszej interakcji w grupie.",
              },
              {
                title: "Tip 2. Pilnuj dyskusji",
                body: "To naturalne, że podczas takiego warsztatu pojawią się dyskusje na tematy pochodne albo że w trakcie ćwiczenia kilka osób zacznie wymieniać się spostrzeżeniami. Warto, by każdy miał możliwość wypowiedzi, ale pamiętaj, że Twoim celem jest doprowadzić do wyniku warsztatu. Nie bój się uciąć dyskusji i zwrócić uwagi grupy z powrotem na zadanie. Jeśli tematy dyskusji są ciekawe, zapisz je na osobnej kartce i wróć do nich podczas kolejnego spotkania lub sesji strategicznej. My najczęściej nazywamy to Parkingiem.",
              },
              {
                title: "Tip 3. Zarządzaj czasem",
                body: "Warsztaty mają zazwyczaj trzy widoczne fazy. Wstępną, kiedy wszyscy dopiero się rozgrzewają, a czas ucieka na rozmowy i próby podejścia do zadania. Tutaj warto jak najszybciej zapisać pierwsze rzeczy na kartce i przejść do ćwiczeń. Druga faza następuje, gdy uczestnicy są rozgrzani i tematy biegną szybko. Zwróć uwagę, czy niczego nie pomijają i czy poświęcają wystarczająco dużo czasu poszczególnym pytaniom. W ostatniej fazie następuje rozprężenie. Często ludzie zaczynają odczuwać zmęczenie, przeciążenie lub wracają myślami do codziennych obowiązków. 2 do 2,5 godziny sesji strategicznej powinno wystarczyć na utrzymanie uwagi wszystkich, ale jeśli warsztat się przedłuży, co nie jest błędem, postaraj się skierować uwagę grupy na jedno zadanie, tak by je skończyć. To zazwyczaj dobry moment na dodatkową przerwę albo na zmianę miejsc przy stole.",
              },
              {
                title: "Tip 4. Zbierz wyniki",
                body: "Warsztat to nie tylko to, co wypracujesz z zespołem podczas sesji, ale również jego efekt zapisany i rozpropagowany w organizacji. Nie zawsze wszyscy mogą uczestniczyć w warsztacie, a poza tym warto do niego wracać, weryfikować założenia i pracować na wynikach. Jeśli warsztat został przepracowany prawidłowo, zostanie Ci z niego długa lista zadań do wykonania. Po wypełnieniu arkuszy zrób zdjęcia lub zrzuty ekranu. Upewnij się, że masz zapasową wersję warsztatu oprócz oryginalnego nośnika, niezależnie od tego, czy jest to tablica w Miro, czy wydrukowany arkusz. Warsztat warto podsumować. Stwórz opis wypracowanych elementów, wylistuj wszystkie akcje i określ z osobami decyzyjnymi kolejne kroki działania.",
              },
              {
                title: "Tip 5. Nie uciekaj od sporu",
                body: "Przy mapowaniu przeszkód i decyzji często wychodzi na wierzch coś, co w firmie od dawna leżało nieporuszone. Taki moment należy do warsztatu i warto go wykorzystać. Trzy ruchy, które pomagają. Po pierwsze, przenieś spór z ludzi na kartkę: poproś obie strony, żeby zapisały swoją wersję przeszkody osobno, i powieś je obok siebie. Po drugie, nazwij, na czym polega różnica, na faktach czy na priorytecie. Różnicę w faktach domykacie danymi po sesji, różnicę w priorytecie rozstrzyga osoba decyzyjna przy stole. Po trzecie, jeśli temat jest większy niż warsztat, zapisz go na Parkingu i ustal, kto i kiedy do niego wraca. Prowadź warsztat tak, żeby spięcie skończyło się decyzją.",
              },
            ]}
          />
        </div>
      </section>

      {/* HOW TO PREPARE — downloadable facilitator checklist */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-3 px-4">
          <WireLabel>{t.vector.prepLabel}</WireLabel>
          <WireHeading level={2}>{t.vector.prepTitle}</WireHeading>
          <WireText className="max-w-2xl">{t.vector.checklistLead}</WireText>
          <WireText className="max-w-2xl">{t.vector.checklistLead2}</WireText>
          <WireText className="max-w-2xl">{t.vector.checklistOfflineNote}</WireText>
        </div>
        <div className="mx-auto mt-10 max-w-4xl px-4">
          <VectorChecklist />
        </div>
      </section>

      {/* CTA — two described paths */}
      <section className="bg-blue-600 py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-4 text-center">
          <WireHeading level={2} className="text-balance text-white">
            {t.vector.ctaTitle}
          </WireHeading>
          <p className="max-w-xl text-pretty leading-relaxed text-blue-100">{t.vector.ctaIntro}</p>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center gap-3 rounded-md border-2 border-dashed border-white/40 p-6">
              <WireHeading level={4} className="text-white">
                {t.vector.ctaPath1Title}
              </WireHeading>
              <p className="text-pretty text-sm leading-relaxed text-blue-100">{t.vector.ctaPath1Desc}</p>
              <Link href="/contact">
                <WireButton variant="primary" className="mt-2 border-white bg-white text-blue-700">
                  {t.vector.ctaPath1Button}
                </WireButton>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-md border-2 border-dashed border-white/40 p-6">
              <WireHeading level={4} className="text-white">
                {t.vector.ctaPath2Title}
              </WireHeading>
              <p className="text-pretty text-sm leading-relaxed text-blue-100">{t.vector.ctaPath2Desc}</p>
              <Link
                href="/contact"
                className="mt-2 rounded-md border-2 border-white bg-transparent px-5 py-2.5 text-sm font-medium text-white"
              >
                {t.vector.ctaPath2Button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — 7 items, practical info first */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <WireLabel>FAQ</WireLabel>
            <WireHeading level={2}>Najczęściej zadawane pytania</WireHeading>
          </div>
          <WireAccordion
            items={[
              {
                title: "Ile osób, ile czasu i czego potrzebujemy?",
                body: "Od trzech do ośmiu osób, w tym jedna decyzyjna. Jeden moduł to pięć etapów i 2 do 3 godzin, zależnie od wielkości grupy. Przy stole potrzebujecie wydrukowanych arkuszy, Kart Celu dla każdego uczestnika, markerów i karteczek samoprzylepnych. Online wystarczą plansze PNG wrzucone na tablicę w Miro, FigJamie, Muralu albo Teams oraz wideokonferencja z włączonymi kamerami.",
              },
              {
                title: "Jakie są pierwsze kroki?",
                body: "Pobierz pakiet, przeczytaj materiały i obejrzyj filmy. Potem wybierz cel, nad którym chcesz pracować, i zaproś od trzech do ośmiu osób, w tym jedną decyzyjną. Pierwszy moduł możesz przeprowadzić w tym samym tygodniu.",
              },
              {
                title: "Ile kosztuje warsztat Vector z konsultantem?",
                body: "Od 5 000 do 10 000 zł za dzień, zależnie od liczby modułów. Sam pakiet Vector jest bezpłatny i wystarczy, żeby zacząć. Jeśli chcesz sesję z konsultantem, napisz do nas z jednym zdaniem o sytuacji, a odpowiemy konkretną propozycją.",
              },
              {
                title: "Co zrobić po warsztacie Vector?",
                body: "Spisz wyniki i rozeszlij je również tym, których nie było przy stole. Z listy działań wybierz od pięciu do siedmiu na najbliższy kwartał i przypisz właścicieli. Ustal datę spotkania kontrolnego. Kolejny moduł Vector, na inny cel, ma sens po czterech do sześciu tygodni.",
              },
              {
                title: "Chcę przeprowadzić warsztat u swojego klienta, czy mogę?",
                body: "Tak. Materiały możesz wykorzystać w pracy z klientem. Jeśli robisz to regularnie, sensowniejszy jest trening z facylitacji, bo dostajesz też scenariusze na trudne momenty sesji i informację zwrotną do własnego prowadzenia.",
              },
              {
                title: "Jak przekonać zarząd do warsztatu Vector?",
                body: "Zacznij od kosztu zwlekania. Wypisz trzy decyzje, które w firmie wiszą od kwartału, i zaproponuj dwie godziny na ich domknięcie. Zarząd zwykle łatwiej zgadza się na dwie godziny z konkretnym wynikiem niż na „sesję strategiczną”.",
              },
              {
                title: "Czy mogę przeprowadzić Vector jako NGO albo jednoosobowa firma?",
                body: "Tak. Struktura jest ta sama, zmienia się tylko liczba osób przy stole. Pracując sam, rozłóż moduł na dwa spotkania ze sobą w odstępie kilku dni, bo przerwa robi tu robotę, którą normalnie robi grupa.",
              },
            ]}
          />
        </div>
      </section>
    </SiteShell>
  )
}
