export const Trygonometria = [
    {
  slug: "trygonometria-1",
  title: "Podstawy trygonometrii:",
  type: "theory",
  cke: ["Uczen wykorzystuje definicje funkcji: sinus, cosinus i tangens dla kątów od 0∘ do 180∘, w szczególności wyznacza wartości funkcji trygonometrycznych dla kątów 30∘, 45∘, 60∘"],
  steps: [
    "Funkcje trygonometryczne definiuje się początkowo w trójkącie prostokątnym dla kąta ostrego α.",
    "Oznaczenia: a – przyprostokątna leżąca naprzeciw kąta α, b – przyprostokątna przylegająca do kąta α, c – przeciwprostokątna.",
    "sin α = a/c – stosunek długości przeciwległej przyprostokątnej do przeciwprostokątnej.",
    "cos α = b/c – stosunek długości przyprostokątnej przylegającej do przeciwprostokątnej.",
    "tg α = a/b – stosunek długości przeciwległej przyprostokątnej do przyprostokątnej przylegającej.",
    "Podstawowe wartości funkcji trygonometrycznych:",
    "sin 30° = 1/2, cos 30° = √3/2, tg 30° = √3/3.", 
    "sin 45° = √2/2, cos 45° = √2/2, tg 45° = 1.", 
    "sin 60° = √3/2, cos 60° = 1/2, tg 60° = √3.",
    "Zależności między funkcjami dla kątów dopełniających się do 90°:",
    "sin(90° – α) = cos α, cos(90° – α) = sin α, tg(90° – α) = 1/tg α."
  ],
  nextLabel: "Zadania",
  nextLink: "/lessons/trygonometria-1/zadania"
},
{
  "slug": "trygonometria-1/zadania",
  "title": "Ćwiczenia: Podstawy trygonometrii",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Który wzór definiuje cosinus kąta ostrego α w trójkącie prostokątnym?",
      "options": [
        "cos α = a/c",
        "cos α = b/c",
        "cos α = a/b",
        "cos α = c/a"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Ile wynosi tg 45°?",
      "options": [
        "√2/2",
        "1",
        "√3/3",
        "√3"
      ],
      "correctIndex": 1
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Dla kąta α = 60° mamy:",
      "options": [
        "sin α = 1/2, cos α = √3/2",
        "sin α = √3/2, cos α = 1/2",
        "sin α = √2/2, cos α = √2/2",
        "sin α = √3/3, cos α = √3/2"
      ],
      "correctIndex": 1
    },
    {
      "id": "e4",
      "type": "multi",
      "question": "Które zależności są prawdziwe dla kątów dopełniających się do 90°?",
      "options": [
        "sin(90° – α) = cos α",
        "cos(90° – α) = sin α",
        "tg(90° – α) = tg α",
        "tg(90° – α) = 1/tg α"
      ],
      "correctIndices": [0, 1, 3]
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Oblicz tg 30° korzystając z wartości sin 30° i cos 30°.",
      "answer": "tg 30° = (1/2) / (√3/2) = √3/3"
    }
  ],
  "nextLabel": "Jedynka trygonometryczna",
  "nextLink": "/lessons/trygonometria-2"
},
{
  "slug": "trygonometria-2",
  "title": "Jedynka trygonometryczna i zależności między funkcjami:",
  "type": "theory",
  "cke": ["korzysta z wzorów sin2α+cos2α=1, tgα=sinαcosα"],
  "steps": [
    "Funkcje trygonometryczne definiowane w trójkącie prostokątnym można rozszerzyć na wszystkie kąty wypukłe (0° ≤ α ≤ 180°).",
    "W takim ujęciu sin α i cos α mogą przyjmować również wartości ujemne, w zależności od położenia kąta na płaszczyźnie.",
    "Dla kątów rozwartych zachodzą następujące zależności:",
    "sin(180° – α) = sin α, cos(180° – α) = –cos α, tg(180° – α) = –tg α (dla α ≠ 90°).",
    "Podstawowa tożsamość trygonometryczna (tzw. jedynka trygonometryczna): sin² α + cos² α = 1. Wynika ona z twierdzenia Pitagorasa.",
    "Ta zależność jest prawdziwa dla wszystkich kątów α.",
    "Dodatkowe powiązania między funkcjami:",
    "tg α = sin α / cos α (dla cos α ≠ 0).",
    "ctg α = cos α / sin α (dla sin α ≠ 0)."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/trygonometria-2/zadania"
},
{
  "slug": "trygonometria-2/zadania",
  "title": "Ćwiczenia: Jedynka trygonometryczna",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Które równanie to tzw. jedynka trygonometryczna?",
      "options": [
        "sin² α – cos² α = 1",
        "sin² α + cos² α = 1",
        "tg α * ctg α = 1",
        "cos² α = 1 – sin α"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Jeśli sin α = 3/5 i α jest ostry, to ile wynosi cos α?",
      "options": [
        "3/5",
        "4/5",
        "√21/5",
        "nie da się obliczyć"
      ],
      "correctIndex": 1
    },
    {
      "id": "e3",
      "type": "multi",
      "question": "Które wzory są poprawne?",
      "options": [
        "tg α = sin α / cos α",
        "ctg α = cos α / sin α",
        "sin(180° – α) = –sin α",
        "cos(180° – α) = –cos α"
      ],
      "correctIndices": [0, 1, 3]
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Uzupełnij: Jeśli cos α = –0,6 i α jest rozwarty, to sin α = ...",
      "answer": "sin α = √(1 – (–0,6)²) = √(1 – 0,36) = √0,64 = 0,8"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Oblicz tg 150° korzystając z tożsamości: tg(180° – α) = –tg α.",
      "answer": "tg 150° = –tg 30° = –√3/3"
    }
  ],
  "nextLabel": "Twierdzenie cosinusów",
  "nextLink": "/lessons/trygonometria-3"
},
{
  "slug": "trygonometria-3",
  "title": "Twierdzenie cosinusów i zastosowania:",
  "type": "theory",
  "cke": ["Uczen stosuje twierdzenie cosinusów oraz wzór na pole trójkąta P=12⋅a⋅b⋅sinγ"],
  "steps": [
    "Twierdzenie cosinusów jest uogólnieniem twierdzenia Pitagorasa na każdy trójkąt.",
    "Dla trójkąta o bokach a, b, c i kącie γ naprzeciw boku c:",
    "c² = a² + b² – 2ab cos γ.",
    "Podobnie:",
    "a² = b² + c² – 2bc cos α.",
    "b² = a² + c² – 2ac cos β.",
    "Twierdzenie to pozwala obliczać długości boków, gdy znamy dwa boki i kąt między nimi, lub obliczać cosinus kąta, gdy znamy trzy boki.",
    "Wzór na pole trójkąta z użyciem trygonometrii: P = 1/2 ab sin γ (dla boku a, b i kąta γ między nimi).",
    "W praktyce: stosuje się do obliczania pól i długości w trójkątach nierównoramiennych, gdy brakuje wysokości."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/trygonometria-3/zadania"
},
{
  "slug": "trygonometria-3/zadania",
  "title": "Ćwiczenia: Twierdzenie cosinusów i pole trójkąta",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Który wzór jest twierdzeniem cosinusów dla boku c?",
      "options": [
        "c² = a² + b² + 2ab cos γ",
        "c² = a² + b² – 2ab cos γ",
        "c² = a² – b² – 2ab cos γ",
        "c² = b² + c² – 2ac cos β"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz długość boku c, jeśli a = 5, b = 7, a kąt γ = 60°. (Użyj tw. cosinusów).",
      "answer": "c² = 5² + 7² – 2·5·7·cos 60° = 25 + 49 – 70·0,5 = 74 – 35 = 39, więc c = √39"
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Pole trójkąta o bokach a i b i kącie γ między nimi wyraża wzór:",
      "options": [
        "P = ab cos γ",
        "P = 1/2 ab sin γ",
        "P = a² + b² – 2ab cos γ",
        "P = 1/2 ab cos γ"
      ],
      "correctIndex": 1
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Oblicz pole trójkąta o bokach a = 8, b = 10 i kącie γ = 30° między nimi.",
      "answer": "P = 1/2 * 8 * 10 * sin 30° = 40 * 1/2 = 20"
    },
    {
      "id": "e5",
      "type": "text",
      "question": "Oblicz cos α, jeśli w trójkącie mamy boki: a = 9, b = 12, c = 15 (α naprzeciw boku a).",
      "answer": "a² = b² + c² – 2bc cos α → 81 = 144 + 225 – 2·12·15 cos α → 81 = 369 – 360 cos α → 360 cos α = 288 → cos α = 0,8"
    }
  ],
  "nextLabel": "Powtórzenie",
  "nextLink": "/lessons/trygonometria-podsumowanie"
}
]