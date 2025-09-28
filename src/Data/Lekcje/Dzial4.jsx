  export const Funkcje = [
  // Dzial 4 Funkcje 1 (wstep, funkcja liniowa, funkcja kwadratowa, wielomiany, funkcja logarytmiczna, funkcja wymierna)
  {
    slug: "funckje-1",
    title: "Funckje",
    type: "theory",
    cke: ["Uczen określa funkcje jako jednoznaczne przyporządkowanie za pomocą opisu słownego, tabeli, wykresu, wzoru",
      "Oblicza wartość funkcji zadanej wzorem algebraicznym",
      "na podstawie wykresu funkcji y=f(x) szkicuje wykresy funkcji y=f(x−a), y=f(x)+b",
      "Odczytuje z wykresu funkcji: dziedzinę, zbiór wartości, miejsca zerowe, przedziały monotoniczności, przedziały, w których funkcja przyjmuje wartości większe (nie mniejsze) lub mniejsze (nie większe) od danej liczby, największe i najmniejsze wartości funkcji (o ile istnieją) w danym przedziale domkniętym oraz argumenty, dla których wartości największe i najmniejsze są przez funkcję przyjmowane",
      "odczytuje i interpretuje wartości funkcji określonych za pomocą tabel, wykresów, wzorów"],
    steps: [
      "Definicja funkcji: Funkcja f ze zbioru X w zbiór f(x) czesto zapisywanya jako Y, przyporządkowuje każdemu elementowi x ∈ X dokładnie jeden element y ∈ Y",
      "Zbiór X to dziedzina funkcji f, a jego elementy to argumenty funkcji",
      "Zbiór wartości funkcji f: zbiór elementów Y, dla których istnieje x ∈ X takie, że f(x) = y",
      "Miejsce zerowe funkcji: argument x, dla którego f(x) = 0",
      "Funkcja rosnąca: dla x₁ < x₂ zachodzi f(x₁) < f(x₂), przykladowo jesli 4 < 5 to f(4) < f(5)",
      "Funkcja malejąca: dla x₁ < x₂ zachodzi f(x₁) > f(x₂), to znaczy ze dla x = 4 lub 5 (4 < 5) to f(4) > f(5)",
      "Funkcja nierosnąca: dla x₁ < x₂ zachodzi f(x₁) ≥ f(x₂)",
      "Funkcja niemalejąca: dla x₁ < x₂ zachodzi f(x₁) ≤ f(x₂)",
      "Funkcja stała: istnieje c takie, że dla każdego x ∈ X zachodzi f(x) = c",
      "Funkcja f jest jedna z wyzej wymienionych jesli spelnia ten warunek w calej swojej dziedzinie. Taka funkcje nazywamy funckja monotoniczna",
      "Przesuniecie wykresu funkcji: \n•g(x) = f(x) + q, q > 0: przesunięcie wykresu f(x) o q jednostek w górę osi y, \n•g(x) = f(x) - q, q > 0: przesunięcie wykresu f(x) o q jednostek w dół osi y, \n•g(x) = f(x - p), p > 0: przesunięcie wykresu f(x) o p jednostek w prawo osi x, \n•g(x) = f(x + p), p > 0: przesunięcie wykresu f(x) o p jednostek w lewo osi x"
    ],
    nextLabel: "Zadania",
    nextLink: "/lessons/funkcje-1/zadania"
  },
  {
  "slug": "funkcje-1/zadania",
  "title": "Ćwiczenia: Funkcje",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Co jest dziedziną funkcji f?",
      "options": [
        "Zbiór wartości funkcji",
        "Zbiór wszystkich argumentów x, dla których funkcja jest określona",
        "Miejsce zerowe funkcji",
        "Zbiór wszystkich liczb rzeczywistych"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Co to jest miejsce zerowe funkcji?",
      "options": [
        "Argument x, dla którego f(x) = 0",
        "Wartość funkcji f(x)",
        "Zbiór wszystkich argumentów funkcji",
        "Argument x, dla którego f(x) = 1"
      ],
      "correctIndex": 0
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Funkcja f jest rosnąca, jeśli:",
      "options": [
        "Dla x₁ < x₂ zachodzi f(x₁) > f(x₂)",
        "Dla x₁ < x₂ zachodzi f(x₁) < f(x₂)",
        "Dla x₁ < x₂ zachodzi f(x₁) ≥ f(x₂)",
        "Dla x₁ < x₂ zachodzi f(x₁) ≤ f(x₂)"
      ],
      "correctIndex": 1
    },
    {
      "id": "e4",
      "type": "mcq",
      "question": "Jak nazywamy funkcję, która spełnia warunek monotoniczności w całej dziedzinie?",
      "options": [
        "Funkcja liniowa",
        "Funkcja monotoniczna",
        "Funkcja kwadratowa",
        "Funkcja stała"
      ],
      "correctIndex": 1
    },
    {
      "id": "e5",
      "type": "multi",
      "question": "Wskaż poprawne przesunięcia wykresu funkcji f(x):",
      "options": [
        "g(x) = f(x) + q przesuwa wykres o q jednostek w górę osi y",
        "g(x) = f(x - p) przesuwa wykres o p jednostek w lewo osi x",
        "g(x) = f(x + p) przesuwa wykres o p jednostek w prawo osi x",
        "g(x) = f(x) - q przesuwa wykres o q jednostek w dół osi y"
      ],
      "correctIndices": [0, 3]
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Podaj przykład funkcji niemalejącej.",
      "answer": "Przykład: f(x) = x² dla x ≥ 0 lub f(x) = 2x + 1"
    }
  ],
  "nextLabel": "Funkcja Liniowa",
  "nextLink": "/lessons/funkcje-2"
},
    {
    slug: "funkcje-2",
    title: "Funckja liniowa",
    type: "theory",
    cke: ["interpretuje współczynniki występujące we wzorze funkcji liniowej",
      "wyznacza wzór funkcji liniowej na podstawie informacji o jej wykresie lub o jej własnościach"
    ],
    steps: [
      "Funkcja liniowa: f(x) = ax + b, a i b stałe (a i b sa liczbami, nie funkcjami)",
      "Wykresem funkcji liniowej jest prosta, linia przecinajaca uklad wspolrzednych",
      "Współczynnik kierunkowy a: nachylenie prostej",
      "Wzór na a: a = (y₂ - y₁) / (x₂ - x₁)",
      "Funkcja rosnąca, gdy a > 0",
      "Funkcja malejąca, gdy a < 0",
      "Funkcja stała, gdy a = 0",
      "Proste równoległe: a₁ = a₂",
      "Proste prostopadłe: a₁ · a₂ = -1, to znaczy ze przecinaja sie pod katem 90 stopni",
      "Układ równań liniowych ma jedno rozwiązanie (oznaczony), gdy proste przecinają się w jednym punkcie",
      "Układ równań liniowych ma nieskończenie wiele rozwiązań (nieoznaczony), gdy proste są tym samym równaniem",
      "Układ równań liniowych nie ma rozwiązań (sprzeczny), gdy proste są równoległe i różne"
    ],
    nextLabel: "Zadania",
    nextLink: "/lessons/funkcje-2/zadania"
  },
  {
  "slug": "funkcje-2/zadania",
  "title": "Ćwiczenia: Funkcja liniowa",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Jaka jest postać funkcji liniowej?",
      "options": [
        "f(x) = ax² + bx + c",
        "f(x) = ax + b",
        "f(x) = a/x + b",
        "f(x) = a·b^x"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Co określa współczynnik kierunkowy a w funkcji liniowej?",
      "options": [
        "Przecięcie osi y",
        "Nachylenie prostej",
        "Dziedzinę funkcji",
        "Miejsce zerowe funkcji"
      ],
      "correctIndex": 1
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Funkcja liniowa jest rosnąca, gdy:",
      "options": [
        "a > 0",
        "a < 0",
        "a = 0",
        "b > 0"
      ],
      "correctIndex": 0
    },
    {
      "id": "e4",
      "type": "mcq",
      "question": "Kiedy dwie proste są prostopadłe?",
      "options": [
        "a₁ = a₂",
        "a₁ · a₂ = -1",
        "a₁ + a₂ = 0",
        "b₁ = b₂"
      ],
      "correctIndex": 1
    },
    {
      "id": "e5",
      "type": "mcq",
      "question": "Układ równań liniowych jest sprzeczny, gdy:",
      "options": [
        "Proste mają różne nachylenia",
        "Proste są tym samym równaniem",
        "Proste są równoległe i różne",
        "Proste przecinają się w jednym punkcie"
      ],
      "correctIndex": 2
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Podaj wzór na współczynnik kierunkowy a na podstawie dwóch punktów (x₁, y₁) i (x₂, y₂).",
      "answer": "a = (y₂ - y₁) / (x₂ - x₁)"
    }
  ],
  "nextLabel": "Funkcja kwadratowa",
  "nextLink": "/lessons/funkcje-3"
},
  {
    slug: "funkcje-3",
    title: "Funckja kwadratowa",
    cke: ["Uczen szkicuje wykres funkcji kwadratowej zadanej wzorem",
      "Interpretuje współczynniki występujące we wzorze funkcji kwadratowej w postaci ogólnej, kanonicznej i iloczynowej (jeśli istnieje)",
      "wyznacza wzór funkcji kwadratowej na podstawie informacji o tej funkcji lub o jej wykresie",
      "Wyznacza największą i najmniejszą wartość funkcji kwadratowej w przedziale domkniętym"
    ],
    type: "theory",
    steps: [
      "Funkcją kwadratową lub trójmianem kwadratowym nazywamy funkcję: f(x) = ax² + bx + c, gdzie a, b, c są stałymi i a ≠ 0.",
      "Wykresem funkcji kwadratowej jest parabola. Znak współczynnika a decyduje o tym, w którą stronę skierowane ramiona paraboli: do góry (a > 0) lub do dołu (a < 0).",
      "Elementem trójmianu kwadratowego ax² + bx + c nazywamy liczbę Δ = b² - 4ac.",
      "Miejsca zerowe funkcji kwadratowej:",
      "– jeśli Δ > 0, to funkcja ma dwa różne miejsca zerowe: x₁ = (-b - √Δ) / 2a, x₂ = (-b + √Δ) / 2a.",
      "– jeśli Δ = 0, to funkcja ma jedno miejsce zerowe x₀ = -b / 2a (nazywamy je pierwiastkiem podwójnym).",
      "– jeśli Δ < 0, to funkcja nie ma miejsc zerowych.",
      "Położenie wykresu funkcji kwadratowej f(x) = ax² + bx + c względem osi x:",
      "[Rysunki parabol w zależności od a i Δ: a > 0, Δ > 0; a > 0, Δ = 0; a > 0, Δ < 0; a < 0, Δ > 0; a < 0, Δ = 0; a < 0, Δ < 0]",
      "Wzór funkcji kwadratowej:",
      "– Postać ogólna: f(x) = ax² + bx + c, a ≠ 0.",
      "Współrzędne wierzchołka paraboli: (-b / 2a, -Δ / 4a).",
      "– Postać kanoniczna: f(x) = a(x - p)² + q, a ≠ 0.",
      "Współrzędne wierzchołka paraboli (p, q), gdzie: p = -b / 2a, q = -Δ / 4a.",
      "– Postać iloczynowa:",
      " • jeśli Δ > 0, to f(x) = a(x - x₁)(x - x₂), gdzie x₁ i x₂ są miejscami zerowymi;",
      " • jeśli Δ = 0, to f(x) = a(x - x₀)², gdzie x₀ jest miejscem zerowym;",
      " • jeśli Δ < 0, to nie istnieje postać iloczynowa."
    ],
    nextLabel: "Zadania",
    nextLink: "/lessons/funkcje-3/zadania"
  },
  {
  "slug": "funkcje-3/zadania",
  "title": "Ćwiczenia: Funkcja kwadratowa",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Jaka jest postać ogólna funkcji kwadratowej?",
      "options": [
        "f(x) = ax + b",
        "f(x) = ax² + bx + c",
        "f(x) = a/x + b",
        "f(x) = a·b^x"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "W jaki sposób znak współczynnika a wpływa na parabolę?",
      "options": [
        "a > 0 → ramiona do góry, a < 0 → ramiona do dołu",
        "a > 0 → ramiona do dołu, a < 0 → ramiona do góry",
        "a > 0 → parabola przesunięta w lewo, a < 0 → przesunięta w prawo",
        "a > 0 → jedno miejsce zerowe, a < 0 → dwa miejsca zerowe"
      ],
      "correctIndex": 0
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Ile miejsc zerowych ma funkcja kwadratowa, jeśli Δ = 0?",
      "options": [
        "0",
        "1",
        "2",
        "Nieskończenie wiele"
      ],
      "correctIndex": 1
    },
    {
      "id": "e4",
      "type": "mcq",
      "question": "Postać kanoniczna funkcji kwadratowej to:",
      "options": [
        "f(x) = ax² + bx + c",
        "f(x) = a(x - p)² + q",
        "f(x) = a(x - x₁)(x - x₂)",
        "f(x) = ax + b"
      ],
      "correctIndex": 1
    },
    {
      "id": "e5",
      "type": "mcq",
      "question": "Jeżeli Δ < 0, to funkcja kwadratowa:",
      "options": [
        "Ma dwa miejsca zerowe",
        "Ma jedno miejsce zerowe",
        "Nie ma miejsc zerowych",
        "Ma wierzchołek w punkcie (0,0)"
      ],
      "correctIndex": 2
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Podaj współrzędne wierzchołka paraboli dla funkcji kwadratowej f(x) = ax² + bx + c.",
      "answer": "(-b / 2a, -Δ / 4a)"
    }
  ],
  "nextLabel": "Funkcja wymierna",
  "nextLink": "/lessons/funkcje-4"
},
    {
    slug: "funkcje-4",
    title: "funkcja wymierna",
    type: "theory",
    cke: ["posługuje się funkcją f(x)=ax, w tym jej wykresem, do opisu i interpretacji zagadnień związanych z wielkościami odwrotnie proporcjonalnymi"],
    steps: [
      "Funkcję postaci f(x) = a / x, gdzie a ≠ 0 i x ∈ R*, nazywamy proporcjonalnością odwrotną.",
      "Proporcjonalność odwrotna ma następującą własność: iloczyn wartości zmiennej proporcjonalnej i odpowiadającej jej wartości zmiennej proporcjonalnej jest stały i równy liczbie a – współczynnikowi proporcjonalności.",
      "Wykresem funkcji f(x) = a / x, gdzie x ∈ R* (a ≠ 0), jest hiperbola.",
      "Prosta y = 0 jest jej asymptotą poziomą, a prosta x = 0 jest asymptotą pionową.",
      "Funkcję postaci f(x) = w(x) / v(x), gdzie v i w są wielomianami oraz w nie jest wielomianem zerowym, nazywamy funkcją wymierną.",
      "Dziedziną każdej funkcji wymiernej jest zbiór wszystkich liczb rzeczywistych, dla których w(x) ≠ 0."
    ],
    nextLabel: "Zadania",
    nextLink: "/lessons/funkcje-4/zadania"
  },
  {
  "slug": "funkcje-4/zadania",
  "title": "Ćwiczenia: Funkcja wymierna",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Jak nazywamy funkcję postaci f(x) = a / x, a ≠ 0?",
      "options": [
        "Funkcja liniowa",
        "Funkcja kwadratowa",
        "Proporcjonalność odwrotna",
        "Funkcja wykładnicza"
      ],
      "correctIndex": 2
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Jaką krzywą tworzy wykres funkcji f(x) = a / x?",
      "options": [
        "Parabolę",
        "Prostą",
        "Hiperbolę",
        "Elipsę"
      ],
      "correctIndex": 2
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Jakie są asymptoty funkcji f(x) = a / x?",
      "options": [
        "y = a i x = a",
        "y = 0 i x = 0",
        "y = 1 i x = 1",
        "Brak asymptot"
      ],
      "correctIndex": 1
    },
    {
      "id": "e4",
      "type": "mcq",
      "question": "Dziedziną funkcji wymiernej f(x) = w(x)/v(x) jest:",
      "options": [
        "Wszystkie liczby rzeczywiste",
        "Liczby rzeczywiste dla których v(x) ≠ 0",
        "Liczby całkowite",
        "Liczby dodatnie"
      ],
      "correctIndex": 1
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Podaj własność proporcjonalności odwrotnej dla f(x) = a / x.",
      "answer": "Iloczyn wartości zmiennej i odpowiadającej jej wartości funkcji jest stały i równy a"
    }
  ],
  "nextLabel": "Funkcja wykladnicza i logarytmiczna",
  "nextLink": "/lessons/funkcje-5"
},
    {
    slug: "funkcje-5",
    title: "Funkcja Wykladnicza i Logarytmiczna",
    type: "theory",
    cke: ["posługuje się funkcjami wykładniczą i logarytmiczną, w tym ich wykresami, do opisu i interpretacji zagadnień związanych z zastosowaniami praktycznymi."],
    steps: [
      "Funkcja wykładnicza – funkcję postaci f(x) = a^x, gdzie a > 0 i a ≠ 1, określoną dla x ∈ ℝ, nazywamy funkcją wykładniczą",
      "Dla a ∈ (0;1) funkcja wykładnicza f(x) = a^x jest malejąca",
      "Dla a ∈ (1;∞) funkcja wykładnicza f(x) = a^x jest rosnąca",

      "Funkcja logarytmiczna – funkcję postaci f(x) = log_a x, gdzie a > 0 i a ≠ 1, określoną dla x ∈ (0;∞), nazywamy funkcją logarytmiczną",
      "Dla a ∈ (0;1) funkcja logarytmiczna f(x) = log_a x jest malejąca",
      "Dla a ∈ (1;∞) funkcja logarytmiczna f(x) = log_a x jest rosnąca"
    ],
    nextLabel: "Zadania",
    nextLink: "/lessons/funkcje-5/zadania"
  },
  {
  "slug": "funkcje-5/zadania",
  "title": "Ćwiczenia: Funkcja wykładnicza i logarytmiczna",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Funkcja f(x) = a^x, a > 1, jest:",
      "options": [
        "Malejąca",
        "Rosnąca",
        "Stała",
        "Nieokreślona"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Funkcja f(x) = a^x, a ∈ (0,1), jest:",
      "options": [
        "Malejąca",
        "Rosnąca",
        "Stała",
        "Nieokreślona"
      ],
      "correctIndex": 0
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Dziedziną funkcji logarytmicznej f(x) = log_a x, a > 0, a ≠ 1, jest:",
      "options": [
        "ℝ",
        "(0, ∞)",
        "(-∞, 0)",
        "(-∞, ∞) \ {0}"
      ],
      "correctIndex": 1
    },
    {
      "id": "e4",
      "type": "mcq",
      "question": "Funkcja logarytmiczna f(x) = log_a x, a ∈ (0,1), jest:",
      "options": [
        "Malejąca",
        "Rosnąca",
        "Stała",
        "Nieokreślona"
      ],
      "correctIndex": 0
    },
    {
      "id": "e5",
      "type": "mcq",
      "question": "Funkcja logarytmiczna f(x) = log_a x, a ∈ (1, ∞), jest:",
      "options": [
        "Malejąca",
        "Rosnąca",
        "Stała",
        "Nieokreślona"
      ],
      "correctIndex": 1
    },
    {
      "id": "e6",
      "type": "text",
      "question": "Podaj przykład funkcji wykładniczej malejącej i rosnącej.",
      "answer": "Malejąca: f(x) = (1/2)^x, rosnąca: f(x) = 2^x"
    }
  ],
  "nextLabel": "Trygonometria",
  "nextLink": "/lessons/dzial-6"
}

]