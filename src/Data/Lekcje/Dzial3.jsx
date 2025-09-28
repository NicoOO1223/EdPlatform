export const RównaniaINierówności = [
  {
  slug: "rownania-1",
  title: "Wprowadzenie do równań i nierówności",
  type: "theory",
  cke: [
    "Uczeń rozumie pojęcie równania i nierówności",
    "Uczeń potrafi wskazać rozwiązania równań i nierówności w prostych przypadkach"
  ],
  steps: [
    "Równanie to zapis matematyczny, w którym dwie wyrażenia połączone są znakiem równości '='. Rozwiązaniem równania jest taka wartość zmiennej, dla której obie strony równania mają tę samą wartość.",
    "Nierówność to zapis matematyczny, w którym dwie wyrażenia są porównywane za pomocą znaków: '<', '>', '≤', '≥'. Rozwiązaniem nierówności jest zbiór wszystkich wartości zmiennej, które spełniają dane porównanie.",
    "Przykład równania: x + 3 = 7 → rozwiązanie: x = 4.",
    "Przykład nierówności: x − 2 > 5 → rozwiązanie: x > 7.",
    "Równania i nierówności wykorzystuje się do opisywania problemów matematycznych i praktycznych, np. obliczania niewiadomych w zadaniach tekstowych.",
    "W dalszych lekcjach poznasz różne typy równań i nierówności oraz sposoby ich rozwiązywania."
  ],
  nextLabel: "Równania i nierówności liniowe",
  nextLink: "/lessons/rownania-2"
},
  {
    slug: "rownania-2",
    title: "Równania i nierówności liniowe",
    type: "theory",
    cke: ["Uczen przekształca równania i nierówności w sposób równoważny",
      "Rozwiązuje nierówności liniowe z jedną niewiadomą"
    ],
    steps: [
    "Równanie liniowe to równanie, w którym zmienna występuje w pierwszej potędze i nie ma jej w mianowniku ani pod pierwiastkiem. Standardowa postać: ax + b = 0, gdzie a ≠ 0.",
    "Nierówność liniowa to nierówność, w której zmienna występuje w pierwszej potędze. Standardowa postać: ax + b < 0, ax + b ≤ 0, ax + b > 0, ax + b ≥ 0, gdzie a ≠ 0.",
    "Standardowym sposobem rozwiązywania równań i nierówności są przekształcenia równoważne: \n• Dodawanie lub odejmowanie tej samej liczby po obu stronach równania lub nierówności nie zmienia jego rozwiązania.\n• Mnożenie lub dzielenie obu stron równania przez liczbę różną od zera nie zmienia rozwiązania.\n• W przypadku mnożenia lub dzielenia nierówności przez liczbę ujemną, znak nierówności należy odwrócić.",
    "Przykłady rozwiązywania równań liniowych:\n• ax + b = 0 → x = −b / a\n• 3x + 6 = 0 → x = −6 / 3 = −2",
    "Przykłady rozwiązywania nierówności liniowych:\n• ax + b > 0 → x > −b / a (jeżeli a > 0)\n• ax + b > 0 → x < −b / a (jeżeli a < 0)\n• −2x + 4 ≥ 0 → −2x ≥ −4 → x ≤ 2 (odwracamy znak nierówności przy dzieleniu przez −2)",
    "Rownania sprzeczne i tozsamosciowe: \n Równanie sprzeczne to równanie, które nie ma żadnego rozwiązania. Przykład: 2x + 3 = 2x − 1 → 3 = −1 (fałsz) → brak rozwiązań.",
    "Równanie tożsamościowe to równanie, które jest prawdziwe dla wszystkich wartości zmiennej w dziedzinie. Przykład: 3(x + 2) − 6 = 3x → 3x + 6 − 6 = 3x → 3x = 3x → prawda dla każdego x.",
    "Nierówność sprzeczna to nierówność, która nie jest spełniona przez żadną liczbę z dziedziny. Przykład: x + 1 < x → fałsz dla każdego x.",        "Nierówność tożsamościowa to nierówność prawdziwa dla wszystkich liczb z dziedziny. Przykład: x + 2 ≥ x − 1 → 2 ≥ −1 → prawda dla każdego x.",  
    "Wskazówki praktyczne:\n• Zawsze sprawdzaj znak współczynnika przy zmiennej przy dzieleniu lub mnożeniu,\n• Rozwiązania nierówności zapisuj w postaci przedziałów,\n • Po przekształceniach równania lub nierówności, jeśli otrzymasz fałsz (np. 5 = 3) → sprzecznosc,\n• Jeśli otrzymasz prawdę niezależną od zmiennej (np. 0 = 0 lub 7 ≥ 4) → tożsamośc."
],
    nextLabel: "Zadania",
    nextLink: "/lessons/rownania-2/zadania"
  },
  {
  "slug": "rownania-2/zadania",
  "title": "Ćwiczenia: Równania i nierówności liniowe",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Rozwiąż równanie: 3x + 6 = 0",
      "answer": "-2"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Rozwiąż nierówność: 2x − 5 > 0",
      "answer": "x > 5/2"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Rozwiąż nierówność: −4x + 8 ≤ 0",
      "answer": "x ≥ 2"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Rozwiąż równanie: 5x − 7 = 3x + 1",
      "answer": "4"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Rozwiąż nierówność: −3x + 9 > 0",
      "answer": "x < 3"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Rozwiąż równanie: 7 − 2x = 1",
      "answer": "3"
    },
    {
      "id": "e7",
      "type": "mcq",
      "question": "Które rozwiązanie jest poprawne dla nierówności 4x − 8 < 0?",
      "options": ["x < 2", "x > 2", "x ≤ 2", "x ≥ 2"],
      "correctIndex": 0
    },
    {
      "id": "e8",
      "type": "mcq",
      "question": "Które równanie jest tożsamościowe?",
      "options": [
        "x + 3 = x − 1",
        "2x + 4 = 2(x + 2)",
        "3x − 1 = 3x + 2",
        "5x + 3 = 3x + 5"
      ],
      "correctIndex": 1
    },
    {
      "id": "e9",
      "type": "mcq",
      "question": "Która nierówność jest sprzeczna?",
      "options": [
        "x + 1 < x",
        "x − 2 ≥ x − 3",
        "2x + 5 > 0",
        "x + 4 ≥ x + 1"
      ],
      "correctIndex": 0
    },
  ],
  "nextLabel": "Równania kwadratowe",
  "nextLink": "/lessons/rownania-3"
},
  {
    slug: "rownania-3",
    title: "Równania kwadratowe",
    type: "theory",
    cke: ["Uczen rozwiązuje równania i nierówności kwadratowe"],
    steps: [
        "Równanie kwadratowe to równanie postaci ax² + bx + c = 0, gdzie a ≠ 0, a, b, c ∈ ℝ. Rozwiązaniem równania są takie wartości x, które sprawiają, że wyrażenie po lewej stronie równa się zero.",
        "Najważniejszym narzędziem przy rozwiązywaniu równań kwadratowych jest delta (Δ), liczymy ją wzorem Δ = b² − 4ac. To Δ decyduje o liczbie i rodzaju pierwiastków:\n • Δ > 0 → dwa różne pierwiastki rzeczywiste,\n • Δ = 0 → jeden pierwiastek podwójny,\n• Δ < 0 → brak pierwiastków rzeczywistych (istnieją dwa pierwiastki zespolone).",
        "Po wyliczeniu delty, możemy znaleźć oba pierwiastki równania za pomocą wzoru kwadratowego: x₁ =  = (−b + √Δ) / (2a), x₂ = (−b - √Δ) / (2a). Zauważ, że gdy Δ = 0, wzór upraszcza się do x = −b / (2a).",
        "Po obliczeniu pierwiastków równania kwadratowego możemy zapisać je w postaci iloczynowej:\n(x - x₁)(x - x₂) = 0, gdzie x₁ i x₂ to pierwiastki. \nCzęsto można też od razu spróbować faktoryzacji: jeśli uda się zapisać równanie w postaci (x + p)(x + q) = 0, rozwiązania to x = -p lub x = -q. (Reguła zerowego iloczynu) \n Przykład:\n• x² - 5x + 6 = 0 → (x - 2)(x - 3) = 0 → x = 2 lub x = 3",
        "💡 Porady do intuicyjnej faktoryzacji:\n• Szukaj dwóch liczb, które po dodaniu dają współczynnik przy x (b), a po pomnożeniu wyraz wolny (c).\n• Jeśli przy x² jest współczynnik różny od 1, wyciągnij wspólny czynnik lub użyj grupowania.\n• Rozpisz wszystkie pary dzielników liczby wolnej i sprawdź, która para spełnia sumę równą współczynnikowi przy x.\n• Jeśli nie jesteś pewny, obliczenie delty to sprawdzona metoda, która działa w każdym przypadku.",
        "Wskazówki praktyczne:\n• Zawsze sprawdzaj deltę przed użyciem wzoru kwadratowego,\n• Jeśli równanie jest już w postaci iloczynowej, użyj reguły zerowego iloczynu,\n• W zadaniach tekstowych pamiętaj, aby wybrać rozwiązania spełniające dodatkowe warunki problemu."
        ],
    nextLabel: "Zadania",
    nextLink: "/lessons/rownania-3/zadania"
  },
  {
  "slug": "rownania-3/zadania",
  "title": "Ćwiczenia: Równania kwadratowe",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Rozwiąż równanie kwadratowe przez rozkład na czynniki:\nx² − 5x + 6 = 0",
      "answer": "x=2, x=3"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Rozwiąż równanie kwadratowe ze wzoru kwadratowego:\n2x² − 4x − 6 = 0",
      "answer": "x=3, x=-1"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Rozwiąż równanie kwadratowe przez uzupełnianie kwadratu:\nx² + 6x + 5 = 0",
      "answer": "x=-1, x=-5"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Rozwiąż równanie kwadratowe:\n3x² + 12x + 12 = 0",
      "answer": "x=-2"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Rozwiąż równanie kwadratowe:\nx² + x + 1 = 0",
      "answer": "Brak pierwiastków rzeczywistych"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Zadanie tekstowe: Iloczyn dwóch liczb wynosi 12, a ich suma wynosi 7. Znajdź te liczby.",
      "answer": "3, 4"
    }
  ],
  "nextLabel": "Nierówności kwadratowe",
  "nextLink": "/lessons/rownania-4"
},

  {
    slug: "rownania-4",
    title: "Nierówności kwadratowe",
    type: "theory",
    steps: [
        "Nierówność kwadratowa to nierówność postaci ax² + bx + c > 0, ax² + bx + c ≥ 0, ax² + bx + c < 0 lub ax² + bx + c ≤ 0, gdzie a ≠ 0.",
        "Rozwiązywanie nierówności kwadratowych krok po kroku:",
        "1. Wyznacz miejsca zerowe równania kwadratowego ax² + bx + c = 0 (np. metodą wzoru kwadratowego lub faktoryzacją).",
        "2. Sporządź wykres funkcji kwadratowej f(x) = ax² + bx + c używajac znaku współczynnika przy x², aby określić, gdzie funkcja jest dodatnia, a gdzie ujemna. Jesli a > 0, ramiona paraboli skierowane są w górę (f(x) > 0 na zewnątrz miejsc zerowych). Jeśli a < 0, ramiona paraboli skierowane są w dół (f(x) > 0 wewnątrz miejsc zerowych).",
        "3. Zapisz rozwiązanie nierówności w formie przedziałów:\n   • Dla ax² + bx + c > 0 → przedziały, w których funkcja jest dodatnia,\n   • Dla ax² + bx + c < 0 → przedziały, w których funkcja jest ujemna.",
        "Przykład: x² − 5x + 6 > 0\n• Miejsca zerowe: x = 2, x = 3\n• Funkcja jest parabolą o ramionach skierowanych w górę (a > 0)\n• Rozwiązanie: x < 2 lub x > 3",
        "Wskazówki praktyczne:\n• Zwracaj uwagę na znak współczynnika przy x²,\n• Jesli a > 0 funkcja kwadratowa jest dodatnia poza pierwiastkami, ujemna pomiędzy pierwiastkami,\n• Jesli a < 0 funkcja kwadratowa jest ujemna poza pierwiastkami, dodatnia pomiędzy pierwiastkami.\n• Rozwiązania zapisuj zawsze w formie przedziałów lub zbiorów liczbowych."
    ],
    nextLabel: "Zadania",
    nextLink: "/lessons/rownania-4/zadania"
  },
  {
  "slug": "rownania-4/zadania",
  "title": "Ćwiczenia: Nierówności kwadratowe",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Rozwiąż nierówność kwadratową:\nx² − 5x + 6 > 0",
      "answer": "x<2, x>3"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Rozwiąż nierówność kwadratową:\nx² + 4x + 3 < 0",
      "answer": "-3<x<-1"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Rozwiąż nierówność kwadratową:\n2x² − 3x − 2 > 0",
      "answer": "x<-0.5, x>2"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Rozwiąż nierówność kwadratową:\nx² + x + 1 < 0",
      "answer": "Brak rozwiązań rzeczywistych"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Zadanie tekstowe: Produkt dwóch liczb rzeczywistych jest dodatni, a ich suma wynosi -1. Znajdź przedziały, w których mogą znajdować się te liczby.",
      "answer": "x<-1 lub x>0"
    }
  ],
  "nextLabel": "Równania wymierne",
  "nextLink": "/lessons/rownania-5"
},
{
    slug: "rownania-5",
    title: "Równania wymierne",
    type: "theory",
  steps: [
      "Równanie wymierne to równanie, w którym zmienna występuje w mianowniku, np. (x + 2)/(x − 1) = 3.",
      "Równania wymierne są bardzo podobne do równań liniowych i kwadratowych, z tą różnicą, że zawsze trzeba sprawdzić dziedzinę!",
      "Dziedzina równania wymiernego to wszystkie wartości zmiennej, dla których mianownik ≠ 0. \n❗ W matematyce nie wolno dzielić przez zero – wykluczamy więc wszystkie wartości x, dla których mianownik jest równy zero.",
      "Rozwiązywanie równań wymiernych krok po kroku:\n1. Wyznacz dziedzinę równania,\n2. Pomnóż obie strony równania przez wspólny mianownik (bez zerowania mianownika),\n3. Rozwiąż powstałe równanie liniowe lub kwadratowe jak zwykle,\n4. Sprawdź, czy rozwiązania należą do dziedziny równania.",
      "Przykład: (x + 2)/(x − 1) = 3\n• Dziedzina: x ≠ 1\n• Mnożymy obie strony przez (x − 1): x + 2 = 3(x − 1)\n• Rozwiązujemy: x + 2 = 3x − 3 → −2x = −5 → x = 5/2\n• Sprawdzamy dziedzinę: x = 5/2 ∈ dziedziny → rozwiązanie poprawne",
      "Wskazówki praktyczne:\n• Nigdy nie dziel przez wyrażenie zawierające zmienną bez sprawdzenia dziedziny,\n• Zawsze zapisuj ograniczenia dziedziny przy odpowiedzi,\n• W przypadku równań z wieloma mianownikami, należy sprowadzić je do wspólnego mianownika, a następnie sprawdzić dziedzinę."
],
    nextLabel: "Zadania",
    nextLink: "/lessons/rownania-5/zadania"
},
  {
  "slug": "rownania-5/zadania",
  "title": "Ćwiczenia: Równania wymierne",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Rozwiąż równanie wymierne:\n(x + 3)/(x − 2) = 4",
      "answer": "x=10"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Rozwiąż równanie wymierne:\n(2x − 1)/(x + 1) = 3",
      "answer": "x=2"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Rozwiąż równanie wymierne:\n(x² − 1)/(x − 1) = 5",
      "answer": "x=3"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Rozwiąż równanie wymierne z dziedziną: (x + 2)/(x − 3) = 0",
      "answer": "x=-2"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Sprawdź dziedzinę równania:\n(3x − 4)/(x² − 4) = 1",
      "answer": "x≠2, x≠-2"
    }
  ],
  "nextLabel": "Równania i nierówności sprzeczne i tożsamościowe",
  "nextLink": "/lessons/rownania-6"
},
  {
    slug: "rownania-6",
    title: "Układy równań liniowych",
    type: "theory",
    cke: ['rozwiązuje układy równań liniowych z dwiema niewiadomymi, podaje interpretację geometryczną',
      "stosuje układy równań do rozwiązywania zadań tekstowych",
    ],
    steps: [
    "Układ równań liniowych to zestaw dwóch lub więcej równań liniowych, które mają wspólne zmienne. Celem jest znalezienie wartości zmiennych spełniających wszystkie równania jednocześnie.",
    "Standardowa forma układu dwóch równań liniowych:\nax + by = c\ndx + ey = f",
    "Metody rozwiązywania układów równań liniowych:\n1. Metoda podstawiania:\n   • Wyznacz jedną zmienną z jednego równania,\n   • Podstaw do drugiego równania,\n   • Rozwiąż dla drugiej zmiennej,\n   • Następnie oblicz pierwszą zmienną.",
    "2. Metoda przeciwnych współczynników (metoda dodawania/odejmowania):\n   • Przekształć równania tak, aby współczynniki jednej ze zmiennych były przeciwne,\n   • Dodaj lub odejmij równania,\n   • Rozwiąż dla pozostałej zmiennej,\n   • Następnie oblicz drugą zmienną.",
    "3. Metoda graficzna:\n   • Narysuj wykresy obu równań na osi współrzędnych,\n   • Punkt przecięcia prostych to rozwiązanie układu.",
    "Zadania tekstowe:\n• Przekształć treść zadania na układ równań liniowych,\n• Oznacz zmienne symbolami,\n• Rozwiąż układ wybraną metodą,\n• Sprawdź, czy rozwiązanie spełnia wszystkie warunki zadania.",
    "Wskazówki praktyczne:\n• Zawsze sprawdzaj, czy układ ma jedno rozwiązanie, nieskończenie wiele rozwiązań lub jest sprzeczny,\n• Staraj się upraszczać równania przed podstawianiem,\n• W zadaniach tekstowych zwracaj uwagę na jednostki i kontekst problemu."
    ],
    nextLabel: "Zadania",
    nextLink: "/lessons/rownania-6/zadania"
  },
  {
  "slug": "rownania-6/zadania",
  "title": "Ćwiczenia: Układy równań liniowych",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Rozwiąż układ równań metodą podstawiania:\n2x + y = 7\nx − y = 1",
      "answer": "x=2, y=3"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Rozwiąż układ równań metodą przeciwnych współczynników:\n3x + 2y = 12\n5x − 2y = 8",
      "answer": "x=4, y=0"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Zadanie tekstowe: W sklepie sprzedano 10 jabłek i 5 gruszek za 25 zł. Następnego dnia sprzedano 6 jabłek i 8 gruszek za 26 zł. Ile kosztuje jedno jabłko, a ile gruszka?",
      "answer": "jabłko=2, gruszka=3"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Rozwiąż układ równań:\nx + y = 10\nx − y = 4",
      "answer": "x=7, y=3"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Rozwiąż układ równań:\n2x − 3y = 1\n4x + y = 11",
      "answer": "x=2, y=1"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Zadanie tekstowe: Samochód i rower przejechały razem 90 km. Samochód przejechał o 30 km więcej niż rower. Ile kilometrów przejechał każdy pojazd?",
      "answer": "samochód=60, rower=30"
    }
  ],
  "nextLabel": "Wartość bezwzględna w równaniach i nierównościach",
  "nextLink": "/lessons/rownania-7"
},
  {
    slug: "rownania-7",
    title: "Wartość bezwzględna w równaniach i nierównościach",
    type: "theory",
    steps: [
        "W nierównościach wartość bezwzględna pojawia się najczęściej w postaci |x − a| < b lub |x − a| > b, gdzie b ≥ 0.",
        "Intuicja: |x − a| mierzy odległość liczby x od punktu a na osi liczbowej.",
        "|x − a| < b → x znajduje się wewnątrz przedziału (a − b, a + b).",
        "|x − a| > b → x znajduje się poza przedziałem (a − b, a + b).",
        "Rozwiązania nierówności z modułem zapisujemy w formie przedziałów, co ułatwia interpretację, szczególnie w zadaniach tekstowych."
],
    nextLabel: "Zadania",
    nextLink: "/lessons/rownania-7/zadania"
  },
  {
  "slug": "rownania-7/zadania",
  "title": "Ćwiczenia: Wartość bezwzględna w równaniach i nierównościach",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Rozwiąż równanie z wartością bezwzględną:\n|x − 3| = 5",
      "answer": "x=8, x=-2"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Rozwiąż nierówność:\n|x + 2| < 4",
      "answer": "x>-6, x<2"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Rozwiąż nierówność:\n|2x − 1| > 3",
      "answer": "x<-1, x>2"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Zadanie tekstowe: Odległość liczby x od 7 jest mniejsza niż 5. Zapisz rozwiązanie w postaci przedziału.",
      "answer": "x>2, x<12"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Rozwiąż równanie:\n|3x + 4| = 10",
      "answer": "x=2, x=-14/3"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Rozwiąż nierówność:\n|x − 5| ≥ 7",
      "answer": "x≤-2, x≥12"
    }
  ],
  "nextLabel": "Podsumowanie",
  "nextLink": "/lessons/rownania-podsumowanie"
},

];
