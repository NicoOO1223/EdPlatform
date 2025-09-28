export const Ciagi = [
    {
  "slug": "ciagi-1",
  "title": "Ciągi liczbowe — definicja i wyraz ogólny",
  "type": "theory",
  "steps": [
    "Definicja: Ciąg liczbowy to uporządkowany zbiór liczb, oznaczany (aₙ), gdzie n ∈ ℕ.",
    "Komentarz: Możemy myśleć o ciągu jako o funkcji, której argumentem jest liczba naturalna, a wartością wyraz ciągu.",
    "Ciąg nieskończony: funkcja, której dziedzina to liczby naturalne dodatnie.",
    "Ciąg oznaczamy (aₙ), kolejne wyrazy: a₁, a₂, a₃ ...",
    "Monotoniczność ciągów: aₙ₊₁ > aₙ – rosnący, aₙ₊₁ < aₙ – malejący, aₙ₊₁ ≥ aₙ – niemalejący, aₙ₊₁ ≤ aₙ – nierosnący",
    "Ciąg stały: wszystkie wyrazy są równe",
    "Ekstra: Zrozumienie monotoniczności jest przydatne przy badaniu granic ciągów i do oceniania zachowania ciągu."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/ciagi-1/zadania"
},
{
  "slug": "ciagi-1/zadania",
  "title": "Ćwiczenia: Ciągi liczbowe",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Co to jest ciąg liczbowy?",
      "options": [
        "Zbiór liczb losowych",
        "Uporządkowany zbiór liczb, oznaczany (aₙ)",
        "Funkcja liniowa",
        "Dowolna funkcja matematyczna"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Ciąg aₙ = 2, 4, 6, 8, ... jest:",
      "options": [
        "Malejący",
        "Nierosnący",
        "Rosnący",
        "Stały"
      ],
      "correctIndex": 2
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Podaj przykład ciągu niemalejącego, który nie jest rosnący.",
      "answer": "Przykład: 2, 2, 3, 3, 4 ..."
    }
  ],
  "nextLabel": "Ciągi arytmetyczne",
  "nextLink": "/lessons/ciagi-2"
},
{
  "slug": "ciagi-2",
  "title": "Ciągi arytmetyczne",
  "type": "theory",
  "steps": [
    "Definicja: Ciąg arytmetyczny to ciąg, w którym każdy wyraz po pierwszym powstaje przez dodanie stałej liczby r do poprzedniego wyrazu.",
    "Komentarz: Różnica r pokazuje, o ile zmienia się każdy kolejny wyraz w stosunku do poprzedniego.",
    "Ciąg arytmetyczny: aₙ₊₁ = aₙ + r",
    "R – różnica ciągu",
    "Wzór ogólny: aₙ = a₁ + (n-1)·r",
    "Suma n wyrazów: Sₙ = (a₁ + aₙ)/2 · n = (2a₁ + (n-1)·r)/2 · n",
    "Ekstra: Ciągi arytmetyczne pojawiają się w zadaniach z liczbami całkowitymi, planach spłat rat równych, czy przy prostych wzrostach liniowych."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/ciagi-2/zadania"
},
{
  "slug": "ciagi-2/zadania",
  "title": "Ćwiczenia: Ciągi arytmetyczne",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "W ciągu arytmetycznym a₁ = 3, r = 5, a₄ = ?",
      "options": [
        "18",
        "13",
        "15",
        "20"
      ],
      "correctIndex": 0
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz sumę pierwszych 10 wyrazów ciągu arytmetycznego a₁ = 2, r = 3.",
      "answer": "S₁₀ = (2 + 29)/2 * 10 = 155"
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Ciąg 7, 10, 13, ... jest ciągiem:",
      "options": [
        "Geometrycznym",
        "Arytmetycznym",
        "Stałym",
        "Malejącym"
      ],
      "correctIndex": 1
    }
  ],
  "nextLabel": "Ciągi geometryczne",
  "nextLink": "/lessons/ciagi-3"
},
{
  "slug": "ciagi-3",
  "title": "Ciągi geometryczne",
  "type": "theory",
  "steps": [
    "Definicja: Ciąg geometryczny to ciąg, w którym każdy wyraz po pierwszym powstaje przez pomnożenie poprzedniego wyrazu przez stałą liczbę q.",
    "Komentarz: Iloraz q pokazuje, ile razy każdy wyraz jest większy lub mniejszy od poprzedniego.",
    "Ciąg geometryczny: aₙ₊₁ = aₙ · q",
    "q – iloraz ciągu",
    "Wzór ogólny: aₙ = a₁ · qⁿ⁻¹",
    "Suma n wyrazów (q ≠ 1): Sₙ = a₁ · (1 - qⁿ)/(1 - q)",
    "Suma n wyrazów (q = 1): Sₙ = n · a₁",
    "Ekstra: Ciągi geometryczne występują przy procentach składanych, wzrostach wykładniczych i zadaniach z bankowości."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/ciagi-3/zadania"
},
{
  "slug": "ciagi-3/zadania",
  "title": "Ćwiczenia: Ciągi geometryczne",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Ciąg 3, 6, 12, 24, ... jest ciągiem:",
      "options": [
        "Arytmetycznym",
        "Geometrycznym",
        "Stałym",
        "Malejącym"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz 5-ty wyraz ciągu geometrycznego a₁ = 2, q = 3.",
      "answer": "a₅ = 2 * 3⁴ = 2 * 81 = 162"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Oblicz sumę pierwszych 4 wyrazów ciągu geometrycznego a₁ = 5, q = 2.",
      "answer": "S₄ = 5 * (1 - 2⁴)/(1 - 2) = 5 * (1 - 16)/(-1) = 5 * 15 = 75"
    }
  ],
  "nextLabel": "Monotoniczność ciągów",
  "nextLink": "/lessons/ciagi-4"
},
{
  "slug": "ciagi-4",
  "title": "Monotoniczność ciągów",
  "type": "theory",
  "steps": [
    "Definicja: Monotoniczność opisuje kierunek zmiany wyrazów ciągu – czy ciąg rośnie, maleje czy pozostaje stały.",
    "Komentarz: Dzięki monotoniczności można przewidzieć zachowanie ciągu bez liczenia wszystkich wyrazów.",
    "Ciąg rosnący: aₙ₊₁ > aₙ",
    "Ciąg malejący: aₙ₊₁ < aₙ",
    "Ciąg nierosnący: aₙ₊₁ ≤ aₙ",
    "Ciąg niemalejący: aₙ₊₁ ≥ aₙ",
    "Ciąg stały: wszystkie wyrazy równe",
    "Ekstra: Monotoniczność przydaje się przy badaniu granic ciągów na maturze podstawowej."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/ciagi-4/zadania"
},
{
  "slug": "ciagi-4/zadania",
  "title": "Ćwiczenia: Monotoniczność ciągów",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Ciąg 5, 5, 5, ... jest:",
      "options": [
        "Rosnący",
        "Malejący",
        "Stały",
        "Niemalejący"
      ],
      "correctIndex": 2
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Ciąg 2, 4, 4, 5, ... jest:",
      "options": [
        "Rosnący",
        "Niemalejący",
        "Malejący",
        "Nierosnący"
      ],
      "correctIndex": 1
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Podaj przykład ciągu nierosnącego, który nie jest malejący.",
      "answer": "Przykład: 5, 4, 4, 3 ..."
    }
  ],
  "nextLabel": "Ciągi rekurencyjne",
  "nextLink": "/lessons/ciagi-5"
},
{
  "slug": "ciagi-5",
  "title": "Ciągi rekurencyjne",
  "type": "theory",
  "steps": [
    "Definicja: Ciąg rekurencyjny to taki, którego każdy wyraz jest określony na podstawie poprzedniego lub kilku poprzednich wyrazów.",
    "Komentarz: Pozwala budować ciągi, gdy wzór jawny nie jest znany lub skomplikowany.",
    "Przykład: a₁ = 2, aₙ₊₁ = aₙ + 3 → kolejne wyrazy: 2, 5, 8, 11 ...",
    "Ekstra: Ciągi rekurencyjne są często używane w zadaniach praktycznych i programowaniu matematycznym."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/ciagi-5/zadania"
},
{
  "slug": "ciagi-5/zadania",
  "title": "Ćwiczenia: Ciągi rekurencyjne",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Dany jest ciąg rekurencyjny: a₁ = 1, aₙ₊₁ = aₙ + 2. Podaj pierwsze 5 wyrazów.",
      "answer": "1, 3, 5, 7, 9"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Dany jest ciąg rekurencyjny: a₁ = 2, aₙ₊₁ = 3·aₙ. Podaj 4. wyraz ciągu.",
      "answer": "a₄ = 2 * 3³ = 54"
    }
  ],
  "nextLabel": "Suma n wyrazów ciągu",
  "nextLink": "/lessons/ciagi-6"
},
{
  "slug": "ciagi-6",
  "title": "Suma n początkowych wyrazów ciągu",
  "type": "theory",
  "steps": [
    "Definicja: Suma n początkowych wyrazów ciągu arytmetycznego lub geometrycznego to suma pierwszych n wyrazów.",
    "Komentarz: Wzory na sumy pozwalają szybko obliczyć sumę dużej liczby wyrazów bez dodawania każdego z osobna.",
    "Suma n wyrazów ciągu arytmetycznego: Sₙ = (a₁ + aₙ)/2 · n = (2a₁ + (n-1)·r)/2 · n",
    "Suma n wyrazów ciągu geometrycznego (q ≠ 1): Sₙ = a₁ · (1 - qⁿ)/(1 - q)",
    "Suma n wyrazów ciągu geometrycznego (q = 1): Sₙ = n · a₁",
    "Procent składany: kapitał K po n latach z rocznym oprocentowaniem r: K · (1 + r)ⁿ",
    "Przy kapitalizacji m razy w roku: K · (1 + r/m)^(m·n)",
    "Ekstra: Procent składany jest praktycznym zastosowaniem ciągów geometrycznych w finansach i bankowości."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/ciagi-6/zadania"
},
{
  "slug": "ciagi-6/zadania",
  "title": "Ćwiczenia: Suma n wyrazów ciągu",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz sumę pierwszych 8 wyrazów ciągu arytmetycznego: a₁ = 3, r = 4.",
      "answer": "S₈ = (2*3 + (8-1)*4)/2 * 8 = (6 + 28)/2 * 8 = 34/2 * 8 = 17 * 8 = 136"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz sumę pierwszych 5 wyrazów ciągu geometrycznego: a₁ = 2, q = 3.",
      "answer": "S₅ = 2 * (1 - 3⁵)/(1 - 3) = 2 * (1 - 243)/(-2) = 2 * 242/2 = 242"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Kapitał K = 1000 zł, oprocentowanie roczne r = 5% (0,05), ile będzie po 3 latach przy procentowaniu rocznym?",
      "answer": "K * (1 + r)³ = 1000 * 1,05³ ≈ 1157,63 zł"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Kapitał K = 1000 zł, oprocentowanie r = 5%, kapitalizacja kwartalna przez 3 lata. Ile wyniesie końcowy kapitał?",
      "answer": "K * (1 + r/4)^(4*3) = 1000 * (1 + 0,05/4)¹² ≈ 1161,62 zł"
    }
  ],
  "nextLabel": "Powtórzenie",
  "nextLink": "/lessons/ciagi-podsumowanie"
}
]