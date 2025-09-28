export const LiczbyRzeczywiste = [
  {
    slug: "liczby-rzeczywiste-1",
    title: "Zbiory liczbowe — klasyfikacja i symbole",
    type: "theory",
    steps: [
      "Zbiory liczbowe są fundamentem matematyki. Bez ich zrozumienia trudno przejść do bardziej zaawansowanych działów, takich jak algebra, analiza czy statystyka.",
      "Dlatego naukę matematyki zaczniemy właśnie od poznania podstawowych zbiorów liczbowych oraz oznaczeń, które będą pojawiać się na każdym etapie dalszej edukacji.",
      "Zbiory liczb to uporządkowane grupy, które dzielimy m.in. na liczby naturalne (ℕ), całkowite (ℤ), wymierne (ℚ), niewymierne oraz rzeczywiste (ℝ).",
      "Liczby naturalne ℕ to liczby takie jak 1, 2, 3... Sa to liczby całkowite wieksze od zera.",
      "Liczby całkowite ℤ to liczby naturalne, ich przeciwieństwa oraz 0, np. -3, 0, 2.",
      "Liczby wymierne ℚ to liczby, które można zapisać jako ułamek dwóch liczb całkowitych (np. 1/2, 4, -5, 0.25).",
      "Liczby niewymierne to takie, których nie można zapisać jako ułamek, mają one rozwinięcie dziesiętne nieskończone i nieokresowe, np. √2, π.",
      "Liczby rzeczywiste ℝ obejmują wszystkie liczby wymierne i niewymierne. Oznacza to, że ℝ = ℚ ∪ (zbiór liczb niewymiernych).",
      { type: "image", content: "/images/Zbiory_liczbowe.png" },
      "Podstawowe symbole używane w teorii zbiorów:\n\n• ∈ – należy do\n• ∉ – nie należy do\n• ⊂ – zawiera się w\n• ⊄ – nie zawiera się w\n• ⊆ – podzbiór\n• ⊇ – nadzbiór\n• ∪ – suma zbiorów\n• ∩ – część wspólna zbiorów\n• ∅ – zbiór pusty\n• {} – nawiasy klamrowe oznaczające zbiór",
      "Jeśli zaznajomiłeś się wystarczająco z teorią, przejdźmy teraz do zadań, aby utrwalić wiedzę w praktyce."
    ],
    nextLabel: "Zadania",
    nextLink: "/lessons/liczby-rzeczywiste-1/zadania"
  },
  {
  "slug": "liczby-rzeczywiste-1/zadania",
  "title": "Ćwiczenia: Zbiory liczbowe i symbole",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Która z poniższych liczb należy do zbioru liczb naturalnych ℕ?",
      "options": ["-2", "0", "3", "π"],
      "correctIndex": 2
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Która z poniższych liczb jest liczbą niewymierną?",
      "options": ["1/2", "0.75", "√2", "4"],
      "correctIndex": 2
    },
    {
      "id": "e3",
      "type": "multi",
      "question": "Wskaż prawdziwe stwierdzenia dotyczące liczb całkowitych ℤ:",
      "options": [
        "Liczby całkowite obejmują liczby naturalne i ich przeciwieństwa oraz 0",
        "Liczby całkowite to wszystkie liczby wymierne",
        "0 należy do zbioru ℤ",
        "Liczby całkowite to liczby większe od zera"
      ],
      "correctIndices": [0, 2]
    },
    {
      "id": "e4",
      "type": "mcq",
      "question": "Symbolicznie: liczba a należy do zbioru liczb wymiernych ℚ, ale nie należy do zbioru liczb całkowitych ℤ.",
      "options": ["a ∈ ℚ, a ∉ ℤ", "a ∈ ℤ, a ∉ ℚ", "a ∈ ℝ, a ∉ ℚ", "a ∈ ℕ, a ∉ ℤ"],
      "correctIndex": 0
    },
    {
      "id": "e5",
      "type": "mcq",
      "question": "Suma zbioru liczb wymiernych ℚ i zbioru liczb niewymiernych to:",
      "options": ["ℤ", "ℕ", "ℝ", "∅"],
      "correctIndex": 2
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Podaj wszystkie liczby naturalne większe od -2 i mniejsze od 3 (oddziel przecinkami).",
      "answer": "1,2"
    }
  ],
  "nextLabel": "Przedziały liczbowe",
  "nextLink": "/lessons/liczby-rzeczywiste-2"
},
  {
    slug: "liczby-rzeczywiste-2",
    title: "Przedziały liczbowe i ich własności",
    type: "theory",
    cke: ["Uczen posługuje się pojęciem przedziału liczbowego, zaznacza przedziały na osi liczbowej"],
    steps: [
      "Przedziały liczbowe to fragmenty zbioru liczb rzeczywistych ℝ, ograniczone pewnymi warunkami. Mogą być one skończone lub nieskończone, otwarte lub domknięte.",
      "Wyróżniamy cztery podstawowe rodzaje przedziałów skończonych:\n\n• Przedział domknięty [a, b] — wszystkie liczby x takie, że a ≤ x ≤ b.\n[img src='/images/Interval_closed.png' width='300px']• Przedział otwarty (a, b) — wszystkie liczby x takie, że a < x < b.\n[img src='/images/Interval_open.png' width='300px']\n• Przedział lewostronnie domknięty [a, b) — wszystkie liczby x takie, że a ≤ x < b.\n[img src='/images/Interval_left.png' width='300px']\n• Przedział prawostronnie domknięty (a, b] — wszystkie liczby x takie, że a < x ≤ b.\n[img src='/images/Interval_right.png' width='300px']",
      "Istnieją także przedziały nieskończone:\n\n• (−∞, a) — wszystkie liczby mniejsze od a.\n• (−∞, a] — wszystkie liczby mniejsze lub równe a.\n• (a, ∞) — wszystkie liczby większe od a.\n• [a, ∞) — wszystkie liczby większe lub równe a.",
      "Symbole nieskończoności ∞ i −∞ wskazują, że przedział nie ma granicy z jednej strony. Pamiętaj, że nieskończoność nie jest liczbą, więc zawsze używamy nawiasów otwartych przy ∞ i −∞.",
      "Zapis przedziałów opiera się na symbolach nierówności:\n• Nawias kwadratowy [ lub ] oznacza włączenie granicy przedziału.\n• Nawias okrągły ( lub ) oznacza wykluczenie granicy przedziału.",
      "Warto pamiętać o relacjach między przedziałami:\n• Jeśli przedziały się pokrywają, możemy je zapisać jako sumę: np. [1, 3] ∪ [3, 5] = [1, 5].\n• Jeśli przedziały mają wspólne elementy, możemy znaleźć ich część wspólną: np. [1, 4] ∩ [3, 6] = [3, 4].\n• Jeśli przedziały się nie nakładają, suma będzie je łączyć, ale część wspólna będzie zbiorem pustym ∅.",
      "Na maturze ważne jest, by umieć:\n• rozpoznawać rodzaje przedziałów,\n• zapisywać rozwiązania nierówności w postaci przedziałów,\n• obliczać część wspólną oraz sumę przedziałów,\n• prawidłowo używać nawiasów i symboli matematycznych.",
      "Znajomość przedziałów jest kluczowa, ponieważ wykorzystuje się je w zadaniach z nierównościami, funkcjami, logarytmami i wieloma innymi działami matematyki."],
    nextLabel: "Zadania",
    nextLink: "/lessons/liczby-rzeczywiste-2/zadania"
  },
{
  "slug": "liczby-rzeczywiste-2/zadania",
  "title": "Ćwiczenia: Przedziały liczbowe i ich własności",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Który zapis przedstawia przedział liczb < 2, >= 5?",
      "options": ["(2, 5)", "[2, 5]", "[2, 5)", "(2, 5]"],
      "correctIndex": 4
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Który przedział zawiera wszystkie liczby większe od 3, włącznie z 3?",
      "options": ["(3, ∞)", "[3, ∞)", "(3, ∞)", "[3, ∞)"],
      "correctIndex": 3
    },
    {
      "id": "e3",
      "type": "multi",
      "question": "Wskaż prawdziwe stwierdzenia o przedziałach:",
      "options": [
        "Nawias kwadratowy [ lub ] oznacza włączenie liczby z granicy przedziału",
        "Nawias okrągły ( lub ) oznacza wykluczenie liczby z granicy przedziału",
        "Przedziały nieskończone mogą mieć granice włączone",
        "Część wspólna dwóch przedziałów może być zbiorem pustym"
      ],
      "correctIndices": [0, 1, 3]
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Podaj część wspólną przedziałów [1, 4) i (3, 6] (zapisz w nawiasach kwadratowych/okrągłych).",
      "answer": "[3, 4]"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Podaj sumę przedziałów (1, 3] ∪ [3, 5] (zapisz w nawiasach kwadratowych/okrągłych).",
      "answer": "(1, 5]"
    },
    {
      "id": "e6",
      "type": "mcq",
      "question": "Który zapis przedstawia przedział otwarty od −∞ do 2?",
      "options": ["(−∞, 2)", "(−∞, 2]", "[−∞, 2)", "[−∞, 2]"],
      "correctIndex": 0
    }
  ],
  "nextLabel": "Działania na liczbach rzeczywistych",
  "nextLink": "/lessons/liczby-rzeczywiste-3"
},
{
  "slug": "liczby-rzeczywiste-3",
  "title": "Działania na liczbach rzeczywistych (ułamki, odwrotności, porządek działań)",
  "type": "theory",
  "cke": [
    "Uczeń wykonuje działania (dodawanie, odejmowanie, mnożenie, dzielenie) na liczbach rzeczywistych"
  ],
  "steps": [
    "Działania w zbiorze liczb rzeczywistych obejmują: dodawanie, odejmowanie, mnożenie, dzielenie, potęgowanie, pierwiastkowanie i logarytmowanie. W tej lekcji skupimy sie na pierwszych czterach operacjach.",
    "Dodawanie liczb rzeczywistych: od liczby początkowej dodajemy inną. Przykłady:\n• 10 + 4 = 6\n• 3.14 + 7.7 = 10.84\n • 1/2 + 3/4 = 5/4 (aby dodać ułamki, sprowadzamy je do wspólnego mianownika i dodajemy liczniki)",
    "Odejmowanie liczb rzeczywistych: od liczby początkowej odejmujemy inną. Przykłady:\n• 10 - 4 = 6\n• 3 - 7 = -4\n Na odejmowanie mozemy spojrzec rowniez jako dodawanie liczb ujemnych: \n a - b = a + (-b) Przykladowo: \n• 5/4 + (-1/2) = 5/4 -1/2 = 3/4 (aby odjąć ułamki, sprowadzamy je do wspólnego mianownika i odejmujemy liczniki) ",
    "Mnożenie liczb rzeczywistych: można je rozumieć jako wielokrotne dodawanie tej samej liczby. \nPrzykłady:\n• 3 × 4 = 3 + 3 + 3 + 3 = 12\n• -2 × 5 = -2 + -2 + -2 + -2 + -2 = -10 \n• -1 × -4 = 4 (Mnozenie dwoch liczb ujemnych daje liczbe dodatnia)",
    "Dzielenie liczb rzeczywistych: oznacza podział liczby na równe części i jest operacją odwrotną do mnożenia. Przykłady:\n• 12 ÷ 3 = 4, bo 4 × 3 = 12\n• 24 ÷ 6 = 4, bo 4 × 6 = 24\nDla ułamków: dzielimy przez odwrócony ułamek i mnożymy. Przykład:\n• 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6",
    "Mnożenie i dzielenie są ze sobą powiązane: jeśli a × b = c, to c ÷ b = a i c ÷ a = b.",
    "Liczba przeciwna: liczba, która dodana do danej daje 0. \n• Liczba przeciwna do 4 to -4\n• Liczba przeciwna do -7 to 7",
    "Liczba odwrotna: liczba pomnożona przez swoja odwrotnosc daje 1. \n• Odwrotność 5 to 1/5\n• Odwrotność 3/4 to 4/3",
    "Dodawanie i odejmowanie to operacje łączące lub „cofające” liczby, a mnożenie i dzielenie to operacje powiązane, gdzie mnożenie może być postrzegane jako wielokrotne dodawanie. Mnożenie dwóch liczb ujemnych daje liczbę dodatnią, a liczby przeciwne i odwrotne pozwalają cofnąć działania i rozwiązywać równania."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/liczby-rzeczywiste-3/zadania"
},
{
  "slug": "liczby-rzeczywiste-3/zadania",
  "title": "Ćwiczenia: Działania na liczbach rzeczywistych",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz: 3/4 + 2/4",
      "answer": "5/4"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz: 7 - 10",
      "answer": "-3"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Oblicz: (2/3) * (3/4)",
      "answer": "1/2"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Oblicz: (5/6) / (2/3)",
      "answer": "5/4"
    },
    {
      "id": "e5",
      "type": "mcq",
      "question": "Liczba przeciwna do -7 to:",
      "options": ["7", "-7", "0", "1/7"],
      "correctIndex": 0
    },
    {
      "id": "e6",
      "type": "mcq",
      "question": "Liczba odwrotna do 5/2 to:",
      "options": ["2/5", "-2/5", "5/2", "-5/2"],
      "correctIndex": 0
    },
    {
      "id": "e7",
      "type": "multi",
      "question": "Wskaż prawdziwe stwierdzenia o działaniach na liczbach rzeczywistych:",
      "options": [
        "Mnożenie ułamków: licznik × licznik, mianownik × mianownik",
        "Dzielenie ułamków: odwracamy pierwszy ułamek i mnożymy",
        "Dodawanie i odejmowanie działa tak samo jak dla liczb całkowitych",
        "Liczba dodana do swojej przeciwnosci liczby daje 1"
      ],
      "correctIndices": [0, 2]
    }
  ],
  "nextLabel": "Potęgi i Pierwiastki",
  "nextLink": "/lessons/liczby-rzeczywiste-4"
},
  {
    slug: "liczby-rzeczywiste-4",
    title: "Potęgi i Pierwiastki",
    type: "theory",
    cke: ["Uczen wykonuje dzialania na potegach i pierwiastkach",
      "Stosuje własności pierwiastków dowolnego stopnia, w tym pierwiastków stopnia nieparzystego z liczb ujemnych.",
      "stosuje związek pierwiastkowania z potęgowaniem oraz prawa działań na potęgach i pierwiastkach",
      "stosuje własności monotoniczności potęgowania, w szczególności własności: jeśli x<y oraz a>1, to ax<ay, zaś gdy x<y i 0<a<1, to ax>ay"
    ],
    steps: [
  "W tej lekcji dowiemy się, czym jest potęgowanie, pierwiastkowanie oraz jakie są ich właściwości. Skupimy się na potęgowaniu o wykładniku całkowitym i wymiernym, pierwiastkach oraz zasadach działań na nich.",
  "Potęga o wykładniku całkowitym oznacza wielokrotne mnożenie liczby przez siebie sama: aⁿ = a·a·…·a (n razy), \nMinus w wykładniku 'odwraca' liczbę. a⁻ⁿ = 1/aⁿ (a ≠ 0), \nLiczba podniesiona do zerowego wykładnika daje 1. a⁰ = 1 (a ≠ 0).\nPrzykłady: \n2³ = 2·2·2 = 8 \n5⁰ = 1 \n2⁻² = 1/4.",
  "Potęga o wykładniku wymiernym wprowadza koncept pierwiastka: \na^(1/n) = ⁿ√a (a > 0, n ∈ ℕ) \na^(m/n) = ⁿ√(aᵐ) (a > 0, m ∈ ℤ, n ∈ ℕ) \nPrzykłady: \n8^(1/2) = ²√8 = 2 \n16^(3/2) = (√16)³ = 64 \nZwiazek pierwiastkowania z potęgowaniem jest porownywalny do tego miedzy mnozeniem a dzieleniem – sa to operacje odwrotne.",
  "Potęgi sumują się przy mnożeniu, odejmują przy dzieleniu, potęga potęgi to mnożenie wykładników, a potęga iloczynu(ilorazu) to iloczyn(iloraz) potęg.\nWłaściwości potęg: \naˣ·aʸ = aˣ⁺ʸ \naˣ / aʸ = aˣ⁻ʸ \n(aˣ)ʸ = aˣ·ʸ \naˣ·bˣ = (a·b)ˣ \naˣ / bˣ = (a/b)ˣ \nPrzykłady: \n2³·2⁴ = 2⁷ = 128 \n(3²)³ = 3⁶ = 729 \n2³·5³ = 10³ = 1000",
  "Własności potęg i pierwiastków są ze sobą ściśle powiązane – pierwiastek to potęga o wykładniku ułamkowym: \n√(a·b) = √a·√b \n√(a/b) = √a/√b \n³√(a·b) = ³√a·³√b \n³√(a/b) = ³√a/³√b. \nPrzykłady: √(16·9) = 4·3 = 12 \n³√(-8·27) = -2·3 = -6 \n Wazne: Pierwiastek stopnia parzystego z liczby ujemnej nie istnieje w zbiorze liczb rzeczywistych!.",
  "Monotoniczność funkcji oznacza, że jej wartości rosną lub maleją w sposób uporządkowany w miarę wzrostu argumentu. W przypadku potęgowania mówi ona o możliwości porównywania wartości potęg o tej samej podstawie. \nJeśli x < y i a > 1, to aˣ < aʸ \njeśli x < y i 0 < a < 1, to aˣ > aʸ \nPrzykłady: 2² < 2³ (4 < 8) \n(1/2)² > (1/2)³ (1/4 > 1/8) \nIntuicja: jeśli podstawa jest większa od 1 (a > 1), większy wykładnik daje większą liczbę – potęga 'rośnie' z wykładnikiem; jeśli podstawa jest mniejsza od 1 (0 < a < 1), większy wykładnik daje mniejszą liczbę – potęga 'maleje' z wykładnikiem.",
  "Znajomość tych własności pozwala na upraszczanie wyrażeń algebraicznych, rozwiązywanie równań i nierówności oraz porównywanie wartości liczbowych, na maturze podstawowej warto umieć: \n• stosować własności potęg i pierwiastków do upraszczania wyrażeń, \n• porównywać wartości potęg o tej samej podstawie stosując monotoniczność, \n• rozwiązywać proste równania i nierówności z potęgami i pierwiastkami, \n• stosować pierwiastki stopnia parzystego i nieparzystego w zadaniach, \n• rozumieć związek pierwiastkowania z potęgowaniem i wykorzystywać go w obliczeniach."
],
    nextLabel: "Zadania",
    nextLink: "/lessons/liczby-rzeczywiste-4/zadania"
  },
{
  "slug": "liczby-rzeczywiste-4/zadania",
  "title": "Ćwiczenia: Potęgi i pierwiastki",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz: 2³",
      "answer": "8"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz: 5⁰",
      "answer": "1"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Oblicz: 4⁻²",
      "answer": "1/16"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Oblicz: √(16)",
      "answer": "4"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Oblicz: ³√27",
      "answer": "3"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Oblicz: √(9·25)",
      "answer": "15"
    },
    {
      "id": "e7",
      "type": "text",
      "question": "Oblicz: (2²)³",
      "answer": "64"
    },
    {
      "id": "e8",
      "type": "multi",
      "question": "Wskaż prawdziwe stwierdzenia dotyczące potęg i pierwiastków:",
      "options": [
        "aˣ × aʸ = a^(x+y)",
        "aˣ / aʸ = a^(x−y)",
        "(aˣ)ʸ = a^(x·y)",
        "√(a·b) = √a + √b"
      ],
      "correctIndices": [0, 1, 2]
    },
    {
      "id": "e9",
      "type": "multi",
      "question": "Wskaż prawdziwe stwierdzenia dotyczące pierwiastków sześciennych i n-tych:",
      "options": [
        "³√(a·b) = ³√a · ³√b",
        "³√(a/b) = ³√a / ³√b",
        "ⁿ√(a·b) = ⁿ√a + ⁿ√b",
        "³√a³ = a"
      ],
      "correctIndices": [0, 1, 3]
    }
  ],
  "nextLabel": "Logarytmy",
  "nextLink": "/lessons/liczby-rzeczywiste-5"
},
  {
    slug: "liczby-rzeczywiste-5",
    title: "Logarytmy i ich zastosowania",
    type: "theory",
    cke: ["Uczen rozumie pojęcie logarytmu i jego zastosowania",
      "Stosuje związek logarytmowania z potęgowaniem, posługuje się wzorami na logarytm iloczynu, logarytm ilorazu i logarytm potęgi."
    ],
    steps: [
  "W tej lekcji dowiemy się, czym jest logarytm, jakie są jego własności i zastosowania. Skupimy się na związku logarytmowania z potęgowaniem oraz działaniach na logarytmach.",

  "Definicja logarytmu: niech a i b będą liczbami dodatnimi oraz a ≠ 1. Wówczas log_a b = x ⇔ a^x = b. \nIntuicja: logarytm odpowiada na pytanie, do jakiej potęgi trzeba podnieść podstawę a, aby otrzymać b. Przykład: log₂ 8 = 3, ponieważ 2³ = 8.",

  "Podstawowe własności logarytmów dla a, b, x, y > 0, a ≠ 1 oraz dowolnego p ∈ ℝ: log_a a^p = p, a^(log_a b) = b. Intuicja: logarytm 'odwraca' potęgowanie, podobnie jak pierwiastek odwraca potęgę o wykładniku ułamkowym.",

  "Własności działań na logarytmach pozwalają upraszczać obliczenia: \n1. log_a(x·y) = log_a x + log_a y (logarytm iloczynu),\n2. log_a(x / y) = log_a x − log_a y (logarytm ilorazu),\n3. log_a(x^p) = p·log_a x (logarytm potęgi). \nPrzykłady: log₂(8·4) = log₂8 + log₂4 = 3 + 2 = 5, log₃(9/3) = log₃9 − log₃3 = 2 − 1 = 1, log₅(25²) = 2·log₅25 = 2·2 = 4.",

  "Zmiana podstawy logarytmu pozwala obliczać logarytmy przy użyciu dowolnej znanej podstawy: log_a b = log_c b / log_c a, gdzie c > 0, c ≠ 1. Przykład: log₂ 8 = log₁₀8 / log₁₀2 ≈ 0,903 / 0,301 ≈ 3.",

  "Zastosowania logarytmów obejmują: \n• Rozwiązywanie równań wykładniczych,\n• Upraszczanie działań na dużych liczbach,\n• Obliczenia w naukach przyrodniczych, np. skala Richtera, pH, procent składany.",

  "Rozwiązywanie równań logarytmicznych krok po kroku: \n1. Przekształcamy równanie do postaci logarytmicznej lub wykładniczej,\n2. Stosujemy własności logarytmów,\n3. Sprawdzamy dziedzinę: argument logarytmu musi być > 0. \nPrzykład: log_3(x − 1) = 2 → x − 1 = 3² → x = 10, x > 1.",

  "Na maturze podstawowej warto umieć: \n• rozumieć pojęcie logarytmu i jego związek z potęgowaniem,\n• stosować wzory na logarytm iloczynu, logarytm ilorazu i logarytm potęgi,\n• upraszczać wyrażenia z logarytmami,\n• rozwiązywać proste równania logarytmiczne oraz sprawdzać dziedzinę argumentu."
],
    nextLabel: "Zadania",
    nextLink: "/lessons/liczby-rzeczywiste-5/zadania"
  },
  {
  "slug": "liczby-rzeczywiste-5/zadania",
  "title": "Ćwiczenia: Logarytmy i ich zastosowania",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz: log₂ 8",
      "answer": "3"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz: log₃ 9",
      "answer": "2"
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Które równanie jest równoważne log_5 25 = x?",
      "options": ["5^x = 25", "25^x = 5", "5^25 = x", "x^5 = 25"],
      "correctIndex": 0
    },
    {
      "id": "e4",
      "type": "multi",
      "question": "Wskaż prawdziwe własności logarytmów:",
      "options": [
        "log_a(x·y) = log_a x + log_a y",
        "log_a(x / y) = log_a x − log_a y",
        "log_a(x^p) = p·log_a x",
        "log_a(x + y) = log_a x + log_a y"
      ],
      "correctIndices": [0, 1, 2]
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Oblicz logarytm w innej podstawie: log₂ 8 = log₁₀ 8 / log₁₀ 2. Podaj wynik w przybliżeniu.",
      "answer": "3"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Rozwiąż równanie log_3(x − 1) = 2",
      "answer": "10"
    },
    {
      "id": "e7",
      "type": "mcq",
      "question": "Który warunek jest konieczny dla argumentu logarytmu log_a x?",
      "options": ["x > 0", "x ≥ 0", "x ≠ 0", "x < 0"],
      "correctIndex": 0
    }
  ],
  "nextLabel": "Procenty",
  "nextLink": "/lessons/liczby-rzeczywiste-6"
},
  {
    slug: "liczby-rzeczywiste-6",
    title: "Procenty i pieniądze: obniżki, podwyżki, procent składany",
    type: "theory",
    cke: ["Uczenwykorzystuje własności potęgowania i pierwiastkowania w sytuacjach praktycznych, w tym do obliczania procentów składanych, zysków z lokat i kosztów kredytów"],
    steps: [
       "Procenty to sposób wyrażania części całości w setnych częściach. 1% oznacza jedną setną liczby, czyli 1% = 1/100 = 0,01. W zadaniach maturalnych często używa się procentów do obliczania obniżek, podwyżek i wartości pieniężnych.",
      "Aby obliczyć p% danej liczby a, korzystamy ze wzoru:\n\n• p% · a = (p/100) · a\n\nPrzykład: 20% z 150 zł to (20/100) · 150 = 30 zł.",
      "Podwyżki procentowe:\nJeśli cena towaru wynosiła **a** zł i została podwyższona o **p%**, to nowa cena wynosi:\n\n• a_new = a · (1 + p/100)\n\nPrzykład: Cena telewizora wynosiła 2000 zł i wzrosła o 10% → 2000 · 1,10 = 2200 zł.",
      "Obniżki procentowe:\nJeśli cena towaru wynosiła **a** zł i została obniżona o **p%**, to nowa cena wynosi:\n\n• a_new = a · (1 − p/100)\n\nPrzykład: Kurtka kosztowała 400 zł, po obniżce o 25% kosztuje: 400 · 0,75 = 300 zł.",
      "Kolejne obniżki lub podwyżki:\nJeżeli cena jest zmieniana kilka razy, np. najpierw o **p₁%**, potem o **p₂%**, to nową cenę obliczamy mnożąc kolejne współczynniki:\n\n• a_new = a · (1 ± p₁/100) · (1 ± p₂/100)\n\nPrzykład: Produkt kosztuje 1000 zł, najpierw drożeje o 10%, potem tanieje o 20%:\n1000 · 1,10 · 0,80 = 880 zł.",
      "Procent składany:\nWystępuje, gdy kapitał powiększa się w każdym okresie o pewien procent, a odsetki doliczane są do kapitału.\nWzór ogólny:\n\n• K_n = K₀ · (1 + r)^n\n\nGdzie:\n• K₀ — kapitał początkowy,\n• r — stopa procentowa w postaci ułamka dziesiętnego,\n• n — liczba okresów kapitalizacji,\n• K_n — kapitał po n okresach.\n\nPrzykład: Lokata 5000 zł, oprocentowanie 5% rocznie, czas 3 lata:\nK₃ = 5000 · (1 + 0,05)^3 ≈ 5788 zł.",
      "Jeśli kapitalizacja odsetek jest częstsza niż raz w roku (np. kwartalna lub miesięczna), stosujemy wzór:\n\n• K_n = K₀ · (1 + r/m)^(m·n)\n\nGdzie m — liczba kapitalizacji w roku.\n\nPrzykład: Lokata 2400 zł, oprocentowanie 6% rocznie, kapitalizacja kwartalna, czas 2 lata:\nK₂ = 2400 · (1 + 0,06/4)^(4·2) ≈ 2704,86 zł.",
      "Ważne na maturze:\n• Prawidłowo zamieniać procenty na ułamki dziesiętne.\n• Umieć odróżnić procent prosty (jednorazowy) od procentu składanego.\n• Pamiętać, że dwie kolejne obniżki o 20% to nie to samo, co jedna obniżka o 40%.\n• Umieć stosować wzory przy zadaniach tekstowych związanych z cenami, rabatami i lokatami bankowymi.",
      "Opanowanie procentów i procentu składanego jest kluczowe, ponieważ zagadnienia te pojawiają się w wielu zadaniach maturalnych, zwłaszcza w kontekście pieniędzy, lokat, kredytów i zmian cen."

    ],
    nextLabel: "Zadania",
    nextLink: "/lessons/liczby-rzeczywiste-6/zadania"
  },
  {
  "slug": "liczby-rzeczywiste-6/zadania",
  "title": "Ćwiczenia: Procenty i pieniądze",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz 20% z 150 zł.",
      "answer": "30"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Cena telewizora wynosiła 2000 zł i wzrosła o 10%. Jaka jest nowa cena?",
      "answer": "2200"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Kurtka kosztowała 400 zł, po obniżce o 25% kosztuje:",
      "answer": "300"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Produkt kosztuje 1000 zł, najpierw drożeje o 10%, potem tanieje o 20%. Jaka jest cena końcowa?",
      "answer": "880"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Lokata 5000 zł, oprocentowanie 5% rocznie, czas 3 lata. Ile wynosi kapitał po 3 latach (procent składany)?",
      "answer": "5788"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Lokata 2400 zł, oprocentowanie 6% rocznie, kapitalizacja kwartalna, czas 2 lata. Ile wynosi kapitał końcowy (przybliżone)?",
      "answer": "2704.86"
    },
    {
      "id": "e7",
      "type": "mcq",
      "question": "Jak obliczamy nową cenę po obniżce p% ceny a?",
      "options": [
        "a_new = a · (1 + p/100)",
        "a_new = a · (1 − p/100)",
        "a_new = a / (1 − p/100)",
        "a_new = a + p/100"
      ],
      "correctIndex": 1
    },
    {
      "id": "e8",
      "type": "mcq",
      "question": "Jak obliczamy nową cenę po podwyżce p% ceny a?",
      "options": [
        "a_new = a · (1 + p/100)",
        "a_new = a · (1 − p/100)",
        "a_new = a / (1 + p/100)",
        "a_new = a − p/100"
      ],
      "correctIndex": 0
    },
    {
      "id": "e9",
      "type": "multi",
      "question": "Wskaż prawdziwe stwierdzenia o procentach:",
      "options": [
        "20% z liczby 150 to 30",
        "Dwie kolejne obniżki o 20% to to samo, co jedna obniżka o 40%",
        "Procent składany oznacza, że odsetki doliczane są do kapitału",
        "Procent prosty to jednorazowa zmiana wartości"
      ],
      "correctIndices": [0, 2, 3]
    }
  ],
  "nextLabel": "Wartość bezwzględna",
  "nextLink": "/lessons/liczby-rzeczywiste-7"
},
  {
    slug: "liczby-rzeczywiste-7",
    title: "Wartość bezwzględna",
    type: "theory",
    cke: ['stosuje interpretację geometryczną i algebraiczną wartości bezwzględnej, rozwiązuje równania typu: |x+4|=5'],
    steps: [
    "Wartość bezwzględna liczby rzeczywistej x, oznaczana symbolem |x|, to odległość liczby x od zera na osi liczbowej. Odległość jest zawsze nieujemna, dlatego wartość bezwzględna nigdy nie jest ujemna.",
    "Definicja wartości bezwzględnej:\n\n• |x| = x, gdy x ≥ 0\n• |x| = −x, gdy x < 0\n\nPrzykłady:\n• |5| = 5\n• |−7| = 7\n• |0| = 0",
    "Interpretacja geometryczna:\nWartość bezwzględna to odległość punktu od zera na osi liczbowej.\n• |3| = 3, bo punkt 3 jest oddalony od 0 o 3 jednostki.\n• |−3| = 3, bo punkt −3 również jest oddalony od 0 o 3 jednostki.",
    "Podstawowe własności wartości bezwzględnej:\n• |x| ≥ 0 dla dowolnego x ∈ ℝ\n• |x| = 0 wtedy i tylko wtedy, gdy x = 0\n• |−x| = |x|\n• |x·y| = |x|·|y|\n• |x/y| = |x|/|y| (dla y ≠ 0)\n• |x|² = x²",
    "Rozwiązywanie równań z wartością bezwzględną:\nAby rozwiązać równanie |x| = a:\n• Jeśli a < 0 → równanie nie ma rozwiązań.\n• Jeśli a ≥ 0 → rozwiązania to x = a lub x = −a.\n\nPrzykład: |x| = 7 → x = 7 lub x = −7.",
    "Rozwiązywanie równań postaci |x − a| = b:\n• Jeśli b < 0 → brak rozwiązań.\n• Jeśli b ≥ 0 → rozwiązania to x − a = b lub x − a = −b, czyli:\n  x = a + b lub x = a − b.\n\nPrzykład: |x − 3| = 5 → x = 3 + 5 = 8 lub x = 3 − 5 = −2.",
    "Rozwiązywanie nierówności z wartością bezwzględną:\n• |x| < a (dla a ≥ 0) → −a < x < a\n• |x| ≤ a (dla a ≥ 0) → −a ≤ x ≤ a\n• |x| > a (dla a ≥ 0) → x < −a lub x > a\n• |x| ≥ a (dla a ≥ 0) → x ≤ −a lub x ≥ a\n\nPrzykład: |x| < 4 → −4 < x < 4.",
    "Interpretacja geometryczna równań |x − a| = b:\nTo opis odległości punktu x od liczby a na osi liczbowej.\nPrzykład: |x − 2| = 3 oznacza wszystkie punkty x oddalone o 3 jednostki od punktu 2, czyli x = −1 i x = 5.",
    "Na maturze często pojawiają się zadania, w których trzeba:\n• obliczać wartości wyrażeń z modułami,\n• rozwiązywać równania i nierówności z wartością bezwzględną,\n• interpretować rozwiązania na osi liczbowej.\nUmiejętność poprawnego „rozbijania” wartości bezwzględnej na przypadki jest kluczowa."
  ],
    nextLabel: "Zadania",
    nextLink: "/lessons/liczby-rzeczywiste-7/zadania"
  },
  {
  "slug": "liczby-rzeczywiste-7/zadania",
  "title": "Ćwiczenia: Wartość bezwzględna",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Wartość bezwzględna liczby −7 to:",
      "options": ["−7", "0", "7", "−1"],
      "correctIndex": 2
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Wartość bezwzględna liczby 0 to:",
      "options": ["0", "1", "−1", "Nie istnieje"],
      "correctIndex": 0
    },
    {
      "id": "e3",
      "type": "multi",
      "question": "Wskaż prawdziwe własności wartości bezwzględnej:",
      "options": [
        "|x| ≥ 0 dla dowolnego x ∈ ℝ",
        "|x|² = x²",
        "|−x| = −|x|",
        "|x·y| = |x|·|y|"
      ],
      "correctIndices": [0, 1, 3]
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Rozwiąż równanie: |x| = 3. Podaj wszystkie rozwiązania (oddziel przecinkami).",
      "answer": "3,-3"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Rozwiąż równanie: |x − 2| = 5. Podaj wszystkie rozwiązania (oddziel przecinkami).",
      "answer": "7,-3"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Rozwiąż nierówność: |x| < 4. Podaj przedział rozwiązań.",
      "answer": "−4,4"
    },
    {
      "id": "e7",
      "type": "text",
      "question": "Rozwiąż nierówność: |x| ≥ 6. Podaj przedziały rozwiązań (oddziel przecinkami).",
      "answer": "−∞,−6,6,∞"
    },
    {
      "id": "e8",
      "type": "multi",
      "question": "Interpretacja geometryczna |x − a| = b oznacza:",
      "options": [
        "Odległość punktu x od punktu a na osi liczbowej wynosi b",
        "x = a + b lub x = a − b",
        "x ≥ a i x ≤ b",
        "x · a = b"
      ],
      "correctIndices": [0, 1]
    }
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/liczby-rzeczywiste-8"
},
  {
    slug: "liczby-rzeczywiste-8",
    title: "Podzielność liczb, zadania dowodowe",
    type: "theory",
    cke: ["przeprowadza proste dowody dotyczące podzielności liczb całkowitych i reszt z dzielenia, w tym: \n a)dowód podzielności przez 24 iloczynu czterech kolejnych liczb naturalnych, \n b)dowód własności: jeśli liczba przy dzieleniu przez 4 daje resztę 3, to nie jest kwadratem liczby całkowitej"],
    steps: [
    "Podzielność liczb to jedna z podstawowych własności liczb całkowitych. Mówimy, że liczba całkowita **a** jest podzielna przez liczbę całkowitą **b** (b ≠ 0), jeśli istnieje taka liczba całkowita **k**, że:\n\n• a = b · k\n\nZapisujemy to jako: **b | a**. Jeśli a nie jest podzielne przez b, zapisujemy: **b ∤ a**.",
    "Przykłady podzielności:\n• 12 jest podzielne przez 3, ponieważ 12 = 3 · 4, więc 3 | 12.\n• 15 nie jest podzielne przez 4, ponieważ nie istnieje całkowite k takie, że 15 = 4 · k, więc 4 ∤ 15.",
    "Podstawowe własności podzielności:\n• Jeśli a | b oraz b | c, to a | c.\n• Jeśli a | b, to a | (b · k) dla dowolnej liczby całkowitej k.\n• Jeśli a | b i a | c, to a | (b + c) oraz a | (b − c).\n• Jeśli a | b oraz b ≠ 0, to |a| ≤ |b|.",
    "Kryteria podzielności dla liczb naturalnych:\n• Podzielność przez 2 → liczba jest parzysta, gdy jej ostatnia cyfra to 0, 2, 4, 6 lub 8.\n• Podzielność przez 3 → suma cyfr liczby jest podzielna przez 3.\n• Podzielność przez 5 → ostatnia cyfra to 0 lub 5.\n• Podzielność przez 9 → suma cyfr liczby jest podzielna przez 9.\n• Podzielność przez 10 → ostatnia cyfra to 0.\n• Podzielność przez 4 → liczba utworzona z dwóch ostatnich cyfr jest podzielna przez 4.\n• Podzielność przez 8 → liczba utworzona z trzech ostatnich cyfr jest podzielna przez 8.",
    "Liczby pierwsze i złożone:\n• Liczba pierwsza — liczba naturalna większa od 1, która ma dokładnie dwa dzielniki: 1 i samą siebie (np. 2, 3, 5, 7, 11).\n• Liczba złożona — liczba naturalna większa od 1, która ma więcej niż dwa dzielniki (np. 4, 6, 9, 12).\n• Liczba 1 nie jest ani pierwsza, ani złożona.",
    "Rozkład liczby na czynniki pierwsze:\nKażdą liczbę naturalną większą od 1 można zapisać jako iloczyn liczb pierwszych. Ten rozkład jest jednoznaczny.\n\nPrzykład: 60 = 2² · 3 · 5.",
    "Największy wspólny dzielnik (NWD) i najmniejsza wspólna wielokrotność (NWW):\n• NWD(a, b) to największa liczba naturalna, która dzieli zarówno a, jak i b.\n• NWW(a, b) to najmniejsza liczba naturalna, która jest podzielna przez a i b.\n• Zależność: NWD(a, b) · NWW(a, b) = a · b.",
    "Na maturze podstawowej warto umieć:\n• stosować kryteria podzielności,\n• rozkładać liczby na czynniki pierwsze,\n• znajdować NWD i NWW,\n• rozwiązywać proste zadania dowodowe,\n• sprawdzać, czy liczba jest podzielna przez inną metodami rachunkowymi."
],
    nextLabel: "Zadania",
    nextLink: "/lessons/liczby-rzeczywiste-8/zadania"
  },
  {
  "slug": "liczby-rzeczywiste-8/zadania",
  "title": "Ćwiczenia: Podzielność liczb i zadania dowodowe",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Czy liczba 24 jest podzielna przez 3?",
      "options": ["Tak", "Nie"],
      "correctIndex": 0
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Czy liczba 35 jest podzielna przez 5?",
      "options": ["Tak", "Nie"],
      "correctIndex": 0
    },
    {
      "id": "e3",
      "type": "multi",
      "question": "Wskaż liczby pierwsze spośród poniższych:",
      "options": ["2", "4", "7", "9", "11"],
      "correctIndices": [0, 2, 4]
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Rozłóż liczbę 60 na czynniki pierwsze.",
      "answer": "2^2·3·5"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Znajdź NWD i NWW liczb 12 i 18 (podaj w formacie NWD=..., NWW=...).",
      "answer": "NWD=6,NWW=36"
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Sprawdź, czy liczba 123456 jest podzielna przez 9.",
      "answer": "Nie"
    },
    {
      "id": "e7",
      "type": "multi",
      "question": "Wskaż prawdziwe stwierdzenia dotyczące podzielności:",
      "options": [
        "Jeśli a | b oraz b | c, to a | c",
        "Jeśli a | b i a | c, to a | (b + c)",
        "Jeśli a | b, to a | (b − c) dla dowolnej liczby całkowitej c",
        "Liczba 1 jest liczbą pierwszą"
      ],
      "correctIndices": [0, 1, 2]
    },
    {
      "id": "e8",
      "type": "text",
      "question": "Czy liczba 1 jest liczbą pierwszą czy złożoną? Podaj odpowiedź jednym słowem.",
      "answer": "ani"
    }
  ],
  "nextLabel": "Podsumowanie działu: liczby rzeczywiste",
  "nextLink": "/lessons/liczby-rzeczywiste/podsumowanie"
}
];
