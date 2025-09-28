export const WyrazeniaAlgebraiczne = [
  {
    slug: "algebra-1",
    title: "Wyrażenia algebraiczne — podstawy",
    type: "theory",
    cke: [["Wyłącza poza nawias jednomian z sumy algebraicznej", "Stosuje wzory skrocenego mnozenia"]],
    steps: [
    "Wyrażenie algebraiczne to zapis matematyczny składający się z liczb, liter (oznaczających zmienne) oraz znaków działań arytmetycznych. \nPrzykłady:\n• 3x + 5\n• 2a² − b + 7\n• (x + 2)(x − 3)",
    "Rodzaje wyrażeń algebraicznych:\n• Jednomian - wyrażenie składające się z jednego składnika, np. 5x, −3a², 7.\n• Wielomian - suma lub różnica jednomianów, np. 2x² + 3x − 5.\n• Ułamek algebraiczny - wyrażenie zawierające zmienne w liczniku i/lub mianowniku, np. (x + 1) / (x − 2).",
    "Upraszczanie wyrażeń algebraicznych polega na:\n• redukowaniu wyrazów podobnych,\n• porządkowaniu według potęg zmiennej,\n• stosowaniu wzorów skróconego mnożenia,\n• wykonywaniu działań arytmetycznych krok po kroku.",
    "Redukcja wyrazów podobnych:\nWyrazy podobne to te, które mają te same zmienne podniesione do tych samych potęg. Sumujemy lub odejmujemy ich współczynniki liczbowo.\nPrzykłady:\n• 3x + 5x = 8x\n• 7a² − 2a² = 5a²\n• 4xy + 3xy = 7xy",
    "Porządkowanie wyrażeń:\nWielomian zapisujemy zwykle w kolejności malejących potęg zmiennej.\nPrzykład:\n4x + x³ − 7 + 2x² → x³ + 2x² + 4x − 7",
    "Przekształcanie wyrażeń algebraicznych:\n• wyłączanie wspólnego czynnika przed nawias,\n• rozkładanie na czynniki przy użyciu wzorów skróconego mnożenia,\n• rozszerzanie nawiasów,\n• upraszczanie ułamków algebraicznych.\n\nPrzykłady:\n• Wyłączanie czynnika: 6x² + 9x = 3x(2x + 3)\n• Rozkład na czynniki: x² − 9 = (x − 3)(x + 3)\n• Rozszerzanie nawiasów: (x + 2)(x − 5) = x² − 5x + 2x − 10 = x² − 3x − 10",
    "Ułamki algebraiczne:\n• Aby uprościć ułamek algebraiczny, wyłączamy wspólne czynniki w liczniku i mianowniku.\n• Zawsze pamiętamy o warunkach istnienia wyrażenia — mianownik nie może być równy zero.\nPrzykład:\n(2x² + 4x) / (2x) = [2x(x + 2)] / (2x) = x + 2, dla x ≠ 0.",
    "Wzory skróconego mnożenia:\n Kwadrat sumy:\n(a + b)² = a² + 2ab + b²\nPrzykład:\n(3 + 5)² = 3² + 2·3·5 + 5² = 9 + 30 + 25 = 64.\n\nKwadrat różnicy:\n(a − b)² = a² − 2ab + b²\nPrzykład:\n(7 − 2)² = 7² − 2·7·2 + 2² = 49 − 28 + 4 = 25.\n\n Różnica kwadratów:\na² − b² = (a − b)(a + b\nPrzykład:\n36 − 25 = (6 − 5)(6 + 5) = 1 · 11 = 11.",
    "Zastosowanie wzorów skróconego mnożenia:\n• Upraszczanie obliczeń (np. szybkie liczenie kwadratów dużych liczb).\n• Rozkładanie wielomianów na czynniki.\n• Rozwiązywanie równań kwadratowych i wyższych stopni.\n• Skracanie wyrażeń wymiernych.",
    "Na maturze podstawowej musisz umieć:\n• rozpoznawać rodzaje wyrażeń algebraicznych,\n• redukować wyrazy podobne,\n• porządkować wyrażenia,\n• stosować wzory skróconego mnożenia,\n• rozkładać wyrażenia na czynniki,\n• upraszczać ułamki algebraiczne,\n• dbać o warunki istnienia (domene) wyrażeń."
  ],

    nextLabel: "Zadania",
    nextLink: "/lessons/algebra-1/zadania"
  },
  {
  "slug": "algebra-1/zadania",
  "title": "Ćwiczenia: Wyrażenia algebraiczne i przekształcenia",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Które z poniższych wyrażeń jest wielomianem?",
      "options": [
        "3x + 5",
        "(x + 1) / (x − 2)",
        "√x + 3",
        "1 / (x + 1)"
      ],
      "correctIndex": 0
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Które wyrazy są podobne: 5x², 3x, −2x², 7?",
      "options": [
        "5x² i −2x²",
        "3x i 7",
        "5x² i 3x",
        "3x i −2x²"
      ],
      "correctIndex": 0
    },
        {
      "id": "e3",
      "type": "multi",
      "question": "Wskaż wszystkie prawidłowe rozwinięcia wyrażenia (a − 3)²:",
      "options": [
        "a² − 6a + 9",
        "a² + 6a + 9",
        "a² − 9",
        "a² − 3a + 9"
      ],
      "correctIndices": [0]
    },
        {
      "id": "e4",
      "type": "text",
      "question": "Rozłóż na czynniki wyrażenie: x² − 16",
      "answer": "(x - 4)(x + 4)"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Uprość wyrażenie: 6x² + 9x",
      "answer": "3x(2x + 3)"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Rozłóż na czynniki: x² − 16",
      "answer": "(x - 4)(x + 4)"
    },
    {
      "id": "e7",
      "type": "text",
      "question": "Uprość ułamek algebraiczny: (2x² + 4x) / (2x)",
      "answer": "x + 2"
    },
    {
      "id": "e8",
      "type": "mcq",
      "question": "Które działanie jest poprawnym przekształceniem (x + 2)(x − 5)?",
      "options": [
        "x² − 3x − 10",
        "x² − 10",
        "x² + 3x − 10",
        "x² − 7x − 10"
      ],
      "correctIndex": 0
    },
        {
      "id": "e9",
      "type": "mcq",
      "question": "Jak rozwiniesz wyrażenie (x + 4)²?",
      "options": [
        "x² + 8x + 16",
        "x² − 8x + 16",
        "x² + 16x + 16",
        "x² − 16x + 16"
      ],
      "correctIndex": 0
    },
  ],
  "nextLabel": "Wielomiany",
  "nextLink": "/lessons/algebra-2"
},
  {
    slug: "algebra-2",
    title: "Wielomiany, definicja i wlasnoci",
    type: "theory",
    steps: [
    "Wielomian to wyrażenie algebraiczne zmiennej rzeczywistej x w postaci:\n\nw(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀,\n\ngdzie:\n• n ∈ ℕ — stopień wielomianu,\n• aₙ ≠ 0 — współczynnik przy najwyższej potędze x,\n• a₀ — wyraz wolny,\n• aₙ, aₙ₋₁, ..., a₁, a₀ ∈ ℝ.",
    "Jeśli w(x) ≡ 0 (wszystkie współczynniki równe 0), mamy wielomian zerowy. Stopień wielomianu zerowego nie jest określony.",
    "Stopień wielomianu to największa potęga zmiennej x, przy której współczynnik jest różny od zera.\nPrzykłady:\n• w(x) = 5x³ − 2x + 7 → stopień 3,\n• p(x) = 4x² + x → stopień 2,\n• q(x) = 6 → stopień 0.",
    "Podział wielomianów ze względu na stopień:\n• wielomian stały — stopnia 0 (np. w(x) = 5),\n• wielomian liniowy — stopnia 1 (np. w(x) = 3x − 7),\n• wielomian kwadratowy — stopnia 2 (np. w(x) = x² − 4x + 3),\n• wielomian sześcienny — stopnia 3 (np. w(x) = 2x³ − x + 1),\n• wielomiany wyższych stopni — n ≥ 4.",
    "Współczynniki wielomianu:\n• aₙ — współczynnik wiodący,\n• a₀ — wyraz wolny,\n• pozostałe liczby aₙ₋₁, ..., a₁ — współczynniki pośrednie.",
    "Pierwiastki wielomianu:\nLiczbę a nazywamy pierwiastkiem wielomianu w, jeśli w(a) = 0.\nPrzykład:\nJeśli w(x) = x² − 5x + 6, to w(2) = 0 oraz w(3) = 0, więc 2 i 3 są pierwiastkami wielomianu.",
    "Związek pierwiastków z postacią iloczynową:\nJeśli liczba a jest pierwiastkiem wielomianu w(x), to (x − a) jest jego czynnikiem. Oznacza to, że wielomian można rozłożyć na prostsze czynniki. \nPrzykład:\nDla w(x) = x² − 5x + 6 mamy: w(x) = (x − 2)(x − 3). \n Zapis w postaci iloczynowej od razu mowi nam, jakie sa pierwiastki wielomianu.",
    "Twierdzenie Bézouta:\nJeśli wielomian w(x) dzielimy przez dwumian (x − a), to reszta z dzielenia jest równa w(a).\n• Jeśli w(a) = 0 → (x − a) jest dzielnikiem wielomianu.\n• Jeśli w(a) ≠ 0 → reszta z dzielenia wynosi w(a).",
    "Liczba pierwiastków rzeczywistych:\n• Wielomian stopnia n ma co najwyżej n pierwiastków rzeczywistych.\n• Czasami ma ich mniej (np. równanie kwadratowe z deltą < 0 nie ma żadnych pierwiastków w liczbach rzeczywistych, wiecej o tym w lekcji z funkcja kwadratowa).",
    "💡 Ciekawostka: Według fundamentalnego twierdzenia algebry każdy wielomian stopnia n ma dokładnie n pierwiastków, ale część z nich może być urojona. Na maturze podstawowej pracujemy tylko na liczbach rzeczywistych, więc nie zawsze wszystkie pierwiastki da się znaleźć.",
    "Na maturze podstawowej trzeba umieć:\n• rozpoznawać stopień wielomianu,\n• wyznaczać wyrazy wolne i współczynniki,\n• znajdować pierwiastki wielomianu,\n• zapisywać wielomian w postaci iloczynowej,\n• stosować twierdzenie Bézouta do sprawdzania pierwiastków."
],

    nextLabel: "Zadania",
    nextLink: "/lessons/algebra-2/zadania"
  },
  {
  "slug": "algebra-2/zadania",
  "title": "Ćwiczenia: Wielomiany i pierwiastki",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Jaki jest stopień wielomianu w(x) = 4x³ − 2x + 7?",
      "options": ["0", "1", "2", "3"],
      "correctIndex": 3
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Który z poniższych wielomianów jest wielomianem liniowym?",
      "options": ["w(x) = 5", "p(x) = x² − 4x + 3", "q(x) = 3x − 7", "r(x) = 2x³ − x + 1"],
      "correctIndex": 2
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Podaj wyraz wolny i współczynnik wiodący wielomianu: w(x) = 2x³ − 5x² + 3x − 7",
      "answer": "wyraz wolny: -7, współczynnik wiodący: 2"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Znajdź pierwiastki wielomianu w(x) = x² − 5x + 6",
      "answer": "2,3"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Zapisz wielomian w postaci iloczynowej: w(x) = x² − 5x + 6",
      "answer": "(x - 2)(x - 3)"
    },
    {
      "id": "e6",
      "type": "mcq",
      "question": "Jeśli w(a) = 0, to dwumian (x − a) jest:",
      "options": ["resztą z dzielenia wielomianu", "dzielnikiem wielomianu", "współczynnikiem pośrednim", "wyrazem wolnym"],
      "correctIndex": 1
    },
    {
      "id": "e7",
      "type": "mcq",
      "question": "Ile maksymalnie pierwiastków rzeczywistych może mieć wielomian stopnia n?",
      "options": ["n/2", "n", "n+1", "2n"],
      "correctIndex": 1
    }
  ],
  "nextLabel": "Działania na wielomianach",
  "nextLink": "/lessons/algebra-3"
},
  {
    slug: "algebra-3",
    title: "Działania na wielomianach",
    type: "theory",
    cke: [["Uczen dodaje, odejmuje i mnoży wielomiany jednej i wielu zmiennych", "Wyłącza poza nawias jednomian z sumy algebraicznej"]],
    steps: [
      "Na tej lekcji zajmiemy się działaniami na wielomianach: dodawaniem, odejmowaniem, mnożeniem, dzieleniem oraz upraszczaniem ułamków algebraicznych.",
      "Dodawanie i odejmowanie wielomianów:\n• Dodajemy lub odejmujemy wyrazy o tych samych potęgach zmiennej.\nPrzykład:\n(2x² + 3x − 5) + (x² − 4x + 7) = 3x² − x + 2.",
      "Mnożenie wielomianów:\n• Każdy wyraz pierwszego wielomianu mnożymy przez każdy wyraz drugiego i redukujemy wyrazy podobne.\nPrzykład:\n(x + 2)(x − 3) = x² − x − 6.",
      "Rozkładanie wielomianów na czynniki:\n• Stosujemy wzory skróconego mnożenia,\n• Wyłączamy wspólne czynniki przed nawias,\n• Korzystamy z pierwiastków wielomianu.\nPrzykład:\n2x² + 4x = 2x(x + 2).",
      "Upraszczanie ułamków algebraicznych:\n• Wyłączamy wspólne czynniki w liczniku i mianowniku.\n• Pamiętamy o warunku x ≠ 0, jeśli mianownik zawiera x.\nPrzykład:\n(2x² + 6x) / (2x) = x + 3, dla x ≠ 0.",
      "Dzielenie wielomianów:\n• Na maturze podstawowej wystarczy umieć podzielić prosty wielomian.\nPrzykłady: \n• (2x² + 4x) ÷ 2x = 2x(x + 2) ÷ 2x = x + 2, dla x ≠ 0.\n• (x^3 + 3x^2) ÷ x = x^2(x + 3) ÷ x = x(x + 3), dla x ≠ 0",
      "Na maturze podstawowej trzeba umieć:\n• dodawać, odejmować i mnożyć wielomiany,\n• rozkładać je na czynniki,\n• upraszczać ułamki algebraiczne,\n• dzielić proste wielomiany (wyłączanie czynnika, sprawdzanie dzielnika)."
],
    nextLabel: "Zadania",
    nextLink: "/lessons/algebra-3/zadania"
  },
  {
  "slug": "algebra-3/zadania",
  "title": "Ćwiczenia: Działania na wielomianach",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz sumę wielomianów: (2x² + 3x − 5) + (x² − 4x + 7)",
      "answer": "3x² - x + 2"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz iloczyn wielomianów: (x + 2)(x − 3)",
      "answer": "x² - x - 6"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Rozłóż wielomian na czynniki: 2x² + 4x",
      "answer": "2x(x + 2)"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Uprość ułamek algebraiczny: (2x² + 6x) / (2x), x ≠ 0",
      "answer": "x + 3"
    },
      {
    "id": "e5",
    "type": "mcq",
    "question": "Który z poniższych wielomianów jest poprawnie rozłożony na czynniki?",
    "options": [
      "x^2 + 5x = x(x + 5)",
      "x^2 + 5x = (x + 5)^2",
      "2x^2 + 3x = 2(x + 3)",
      "x^2 − 4 = x(x − 4)"
    ],
    "correctIndex": 0
  },
  {
    "id": "e6",
    "type": "multi",
    "question": "Wskaż wszystkie poprawnie uproszczone ułamki algebraiczne:",
    "options": [
      "(x^2 + 3x) / x = x + 3",
      "(2x^2 + 4x) / 2x = x + 2",
      "(x^2 − x) / x = x − 1",
      "(x^2 + 5x) / x = x^2 + 5"
    ],
    "correctIndices": [0, 1, 2]
  },
  {
    "id": "e7",
    "type": "text",
    "question": "Podziel wielomian: x^3 + 3x^2 ÷ x i podaj wynik, dla x ≠ 0",
    "answer": "x^2 + 3x"
  },
  {
    "id": "e8",
    "type": "text",
    "question": "Uprość wyrażenie: (3x^2 + 6x) ÷ 3x, x ≠ 0",
    "answer": "x + 2"
  },
    {
    "id": "e9",
    "type": "multi",
    "question": "Wskaż wszystkie prawidłowe rozwinięcia kwadratu sumy lub różnicy:",
    "options": [
      "(x + 5)^2 = x^2 + 10x + 25",
      "(x − 3)^2 = x^2 − 6x + 9",
      "(x + 2)^2 = x^2 + 4x − 4",
      "(x − 1)^2 = x^2 − 1"
    ],
    "correctIndices": [0, 1]
  }
  ],
  "nextLabel": "Wyrażenia wymierne",
  "nextLink": "/lessons/algebra-4"
},
  {
    slug: "algebra-4",
    title: "Wyrażenia wymierne — mnożenie, dzielenie i uproszczenia",
    type: "theory",
    cke: ["Uczen mnozy i dzieli wyrazenia wymierne"],
    steps: [
    "Wyrażenie wymierne to iloraz dwóch wielomianów P(x) i Q(x), gdzie Q(x) ≠ 0. Zapisujemy je w postaci P(x)/Q(x). Dziedzina wyrażenia wymiernego to zbiór wszystkich liczb rzeczywistych x, dla których mianownik Q(x) ≠ 0.",
    "Podstawowe działania na wyrażeniach wymiernych:\n• Mnożenie: (P(x)/Q(x)) · (R(x)/S(x)) = (P(x)·R(x)) / (Q(x)·S(x))\n• Dzielenie: (P(x)/Q(x)) ÷ (R(x)/S(x)) = (P(x)·S(x)) / (Q(x)·R(x)), przy R(x) ≠ 0",
    "Upraszczanie wyrażeń wymiernych:\n• Rozkładamy licznik i mianownik na czynniki,\n• Skracamy wspólne czynniki,\n• Pamiętamy o zachowaniu dziedziny (nie dzielimy przez zero).\nPrzykład:\n(2x² + 4x) / (4x) = [2x(x + 2)] / (4x) = (x + 2)/2, dla x ≠ 0.",
    "Dodawanie i odejmowanie wyrażeń wymiernych:\n• Najpierw sprowadzamy do wspólnego mianownika,\n• Następnie dodajemy lub odejmujemy liczniki,\n• Upraszczamy wynik i pamiętamy o warunkach dziedziny.\nPrzykład:\n1/x + 2/(x+1) = (1·(x+1) + 2·x) / (x(x+1)) = (3x+1) / (x(x+1)), x ≠ 0, x ≠ −1.",
    "Rozwiązywanie równań z wyrażeniami wymiernymi:\n• Przenosimy wszystkie wyrażenia na jedną stronę,\n• Sprowadzamy do wspólnego mianownika,\n• Rozwiązujemy powstałe równanie wielomianowe w liczniku,\n• Sprawdzamy, czy rozwiązania nie zerują mianownika (miejsca nieciągłości).",
    "Uwagi o miejscach nieciągłości:\n• Każda liczba, która powoduje zerowanie mianownika, nie należy do dziedziny wyrażenia.\n• Podczas rozwiązywania równań wymiernych musimy wykluczyć takie wartości.\nPrzykład:\nRównanie: 1/(x−2) = 3\n• Dziedzina: x ≠ 2\n• Rozwiązanie: 1/(x−2) = 3 → x − 2 = 1/3 → x = 7/3, co należy do dziedziny."
],
    nextLabel: "Zadania",
    nextLink: "/lessons/algebra-4/zadania"
  },
  {
  "slug": "algebra-4/zadania",
  "title": "Ćwiczenia: Wyrażenia wymierne",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Uprość wyrażenie: (2x² + 4x) / (4x), x ≠ 0",
      "answer": "(x + 2)/2"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz iloczyn wyrażeń wymiernych: (x/2) · (4/x)",
      "answer": "2"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Podziel wyrażenia wymierne: (3x² / 4) ÷ (x / 2), x ≠ 0",
      "answer": "3x/2"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Sprowadź do wspólnego mianownika i uprość: 1/x + 2/(x+1), x ≠ 0, x ≠ −1",
      "answer": "(3x + 1) / (x(x+1))"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Rozwiąż równanie: 1/(x−2) = 3, x ≠ 2",
      "answer": "x = 7/3"
    },
    {
      "id": "e6",
      "type": "mcq",
      "question": "Która liczba nie należy do dziedziny wyrażenia 1/(x²−4)?",
      "options": ["0", "2", "-1", "3"],
      "correctIndex": 1
    },
    {
      "id": "e7",
      "type": "text",
      "question": "Uprość wyrażenie: (x² − 4)/(x² − 2x), x ≠ 0, x ≠ 2",
      "answer": "(x + 2)/(x)"
    }
  ],
  "nextLabel": "Równania i nierówności",
  "nextLink": "/lessons/rownania-1"
}
];
