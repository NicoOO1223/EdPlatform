export const GeometriaAnalityczna = [
{
  "slug": "geometria-1",
  "title": "Punkty, odcinki, odległości między punktami",
  "type": "theory",
  "steps": [
    "Środek odcinka AB o końcach A(x₁, y₁) i B(x₂, y₂) obliczamy ze wzoru: S = ((x₁+x₂)/2, (y₁+y₂)/2).",
    "Długość odcinka AB: |AB| = √((x₂-x₁)² + (y₂-y₁)²), co wynika z twierdzenia Pitagorasa.",
    "Odległość punktu P od punktu Q jest równoważna długości odcinka łączącego je w układzie współrzędnych."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/geometria-1/zadania"
},
{
  "slug": "geometria-1/zadania",
  "title": "Ćwiczenia: Punkty, odcinki, odległości między punktami",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz środek odcinka łączącego punkty A(2, 3) i B(6, 7).",
      "answer": "(4, 5)"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz długość odcinka AB, gdzie A(1, 2) i B(4, 6).",
      "answer": "5"
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Który punkt leży dokładnie w połowie odcinka między A(0,0) i B(8,4)?",
      "options": [
        "(4, 2)",
        "(4, 4)",
        "(2, 2)",
        "(8, 2)"
      ],
      "correctIndex": 0
    }
  ],
  "nextLabel": "Równanie prostej",
  "nextLink": "/lessons/geometria-2"
},
{
  "slug": "geometria-2",
  "title": "Równanie prostej: postać kierunkowa i ogólna, równoległość i prostopadłość",
  "type": "theory",
  "steps": [
    "Równanie kierunkowe prostej: y = ax + b, gdzie a to współczynnik kierunkowy, b to wyraz wolny.",
    "Dwie proste są równoległe ⇔ mają równe współczynniki kierunkowe (a₁ = a₂).",
    "Dwie proste są prostopadłe ⇔ iloczyn współczynników kierunkowych a₁·a₂ = -1.",
    "Równanie ogólne prostej: Ax + By + C = 0, przy czym A ≠ 0 lub B ≠ 0.",
    "Równanie ogólne pozwala łatwo sprawdzać współliniowość punktów i obliczać współrzędne przecięcia prostych."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/geometria-2/zadania"
},
{
  "slug": "geometria-2/zadania",
  "title": "Ćwiczenia: Równanie prostej",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Znajdź równanie prostej przechodzącej przez punkty (1,2) i (3,6) w postaci kierunkowej.",
      "answer": "y = 2x"
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Czy proste y = 3x + 1 i y = 3x − 2 są równoległe, prostopadłe czy przecinają się?",
      "options": [
        "Równoległe",
        "Prostopadłe",
        "Przecinają się"
      ],
      "correctIndex": 0
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Czy proste y = 2x + 1 i y = -1/2 x + 3 są prostopadłe?",
      "options": [
        "Tak",
        "Nie"
      ],
      "correctIndex": 0
    }
  ],
  "nextLabel": "Równanie okręgu",
  "nextLink": "/lessons/geometria-3"
},
{
  "slug": "geometria-3",
  "title": "Równanie okręgu",
  "type": "theory",
  "steps": [
    "Równanie okręgu o środku S = (a, b) i promieniu r: (x-a)² + (y-b)² = r².",
    "Punkt P(x, y) należy do okręgu ⇔ spełnia powyższe równanie.",
    "Okrąg w układzie współrzędnych można przesuwać, zmieniając wartości a i b (środek okręgu).",
    "Promień okręgu można obliczyć jako odległość między środkiem a dowolnym punktem na okręgu."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/geometria-3/zadania"
},
{
  "slug": "geometria-3/zadania",
  "title": "Ćwiczenia: Równanie okręgu",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Napisz równanie okręgu o środku w punkcie S(1, -2) i promieniu 3.",
      "answer": "(x-1)² + (y+2)² = 9"
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Czy punkt P(4, 2) należy do okręgu (x-2)² + (y-1)² = 13?",
      "options": [
        "Tak",
        "Nie"
      ],
      "correctIndex": 1
    }
  ],
  "nextLabel": "Wzajemne położenie prostych",
  "nextLink": "/lessons/geometria-4"
},
{
  "slug": "geometria-4",
  "title": "Wzajemne położenie prostych i punkt wspólny dwóch prostych",
  "type": "theory",
  "steps": [
    "Dwie proste mogą być: równoległe (a₁ = a₂), prostopadłe (a₁·a₂ = -1), lub przecinające się w jednym punkcie.",
    "Aby znaleźć punkt przecięcia dwóch prostych, należy rozwiązać układ równań ich równań kierunkowych lub ogólnych.",
    "Jeśli układ równań nie ma rozwiązania, proste są równoległe i nie mają punktu wspólnego.",
    "Jeżeli układ ma nieskończenie wiele rozwiązań, proste pokrywają się."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/geometria-4/zadania"
},
{
  "slug": "geometria-4/zadania",
  "title": "Ćwiczenia: Wzajemne położenie prostych",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Znajdź punkt przecięcia prostych y = 2x + 1 i y = -x + 4.",
      "answer": "(1, 3)"
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Dwie proste y = 5x + 2 i y = 5x − 4 są:",
      "options": [
        "Równoległe",
        "Prostopadłe",
        "Przecinają się"
      ],
      "correctIndex": 0
    }
  ],
  "nextLabel": "Symetrie",
  "nextLink": "/lessons/geometria-5"
},
{
  "slug": "geometria-5",
  "title": "Symetrie i obrazy figur w układzie współrzędnych",
  "type": "theory",
  "steps": [
    "Symetria osiowa względem osi y: P(x₁, y₁) → P'(-x₁, y₁).",
    "Symetria osiowa względem osi x: P(x₁, y₁) → P'(x₁, -y₁).",
    "Symetria środkowa względem początku układu: P(x₁, y₁) → P'(-x₁, -y₁).",
    "Symetrie pozwalają wyznaczać obrazy figur i punktów w układzie współrzędnych oraz badać własności figur symetrycznych."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/geometria-5/zadania"
},
{
  "slug": "geometria-5/zadania",
  "title": "Ćwiczenia: Symetrie w układzie współrzędnych",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Znajdź obraz punktu P(3, -5) w symetrii osiowej względem osi x.",
      "answer": "(3, 5)"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Znajdź obraz punktu P(3, -5) w symetrii osiowej względem osi y.",
      "answer": "(-3, -5)"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Znajdź obraz punktu P(3, -5) w symetrii środkowej względem początku układu.",
      "answer": "(-3, 5)"
    }
  ],
  "nextLabel": "Podsumowanie",
  "nextLink": "/lessons/geometria-summary"
}
]