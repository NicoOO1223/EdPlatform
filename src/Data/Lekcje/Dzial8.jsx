export const Stereometria = [
{
  "slug": "stereometria-1",
  "title": "Graniastosłupy: pola powierzchni, objętości, kąty i przekątne",
  "type": "theory",
  "steps": [
    "Graniastosłup to bryła, która ma dwie równoległe, przystające podstawy i prostokątne ściany boczne.",
    "Objętość graniastosłupa: V = Pp · H, gdzie Pp to pole podstawy, a H to wysokość bryły.",
    "Pole powierzchni całkowitej: suma pól wszystkich ścian, czyli Pc = 2·Pp + Pbocz, gdzie Pbocz to pole ścian bocznych.",
    "Przekątne graniastosłupa: można wyróżnić przekątne podstawy i przekątne przestrzenne, które łączą wierzchołki nie leżące na tej samej ścianie."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/stereometria-1/zadania"
},
{
  "slug": "stereometria-1/zadania",
  "title": "Ćwiczenia: Graniastosłupy",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz objętość graniastosłupa o podstawie prostokąta 5×8 i wysokości 10.",
      "answer": "400"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Podaj wzór na pole powierzchni całkowitej graniastosłupa o podstawie Pp i obwodzie podstawy Ob, wysokość H.",
      "answer": "Pc = 2·Pp + Ob·H"
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Które zdanie jest prawdziwe dla przekątnych graniastosłupa prostego?",
      "options": [
        "Przekątne podstaw mają zawsze taką samą długość.",
        "Przekątne przestrzenne łączą wierzchołki nie leżące na tej samej ścianie.",
        "Wszystkie przekątne są równoległe do krawędzi bocznych.",
        "Przekątne boczne mają długość równą wysokości bryły."
      ],
      "correctIndex": 1
    }
  ],
  "nextLabel": "Ostrosłupy",
  "nextLink": "/lessons/stereometria-2"
},
{
  "slug": "stereometria-2",
  "title": "Ostrosłupy: pola powierzchni, objętości, kąty i przekątne",
  "type": "theory",
  "steps": [
    "Ostrosłup to bryła, która ma jedną podstawę i wszystkie ściany boczne w postaci trójkątów łączących wierzchołek z bokami podstawy.",
    "Objętość ostrosłupa: V = 1/3 · Pp · H, gdzie Pp to pole podstawy, a H wysokość opuszczona z wierzchołka na podstawę.",
    "Pole powierzchni całkowitej: suma pola podstawy i pól wszystkich trójkątnych ścian bocznych.",
    "W ostrosłupach można analizować kąty między ścianami bocznymi a podstawą oraz przekątne łączące wierzchołek z wierzchołkami podstawy."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/stereometria-2/zadania"
},
{
  "slug": "stereometria-2/zadania",
  "title": "Ćwiczenia: Ostrosłupy",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz objętość ostrosłupa o podstawie kwadratu 6×6 i wysokości 9.",
      "answer": "108"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Podaj wzór na objętość ostrosłupa o podstawie Pp i wysokości H.",
      "answer": "V = 1/3 · Pp · H"
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "W ostrosłupie, który element łączy wierzchołek z wierzchołkiem podstawy?",
      "options": [
        "Ściana boczna",
        "Krawędź boczna",
        "Przekątna podstawy",
        "Wysokość"
      ],
      "correctIndex": 1
    }
  ],
  "nextLabel": "Bryły obrotowe",
  "nextLink": "/lessons/stereometria-3"
},
{
  "slug": "stereometria-3",
  "title": "Bryły obrotowe: walec, stożek, kula — pola i objętości",
  "type": "theory",
  "steps": [
    "Walec: bryła obrotowa o podstawach w kształcie koła.",
    "Pole powierzchni całkowitej walca: Pc = 2πr² + 2πrH = 2πr(r+H), gdzie r to promień podstawy, H wysokość walca.",
    "Objętość walca: V = πr²H.",
    "Stożek: bryła obrotowa o podstawie kołowej i wierzchołku nie leżącym w płaszczyźnie podstawy.",
    "Pole powierzchni stożka: Pc = πr² + πr l = πr(r+l), gdzie l to tworząca stożka.",
    "Objętość stożka: V = 1/3 · πr²H.",
    "Kula: zbiór punktów w przestrzeni w jednakowej odległości od środka.",
    "Pole powierzchni kuli: P = 4πR², objętość kuli: V = 4/3 · πR³."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/stereometria-3/zadania"
},
{
  "slug": "stereometria-3/zadania",
  "title": "Ćwiczenia: Bryły obrotowe",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Oblicz objętość walca o promieniu podstawy 3 i wysokości 10.",
      "answer": "90π"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Podaj wzór na pole powierzchni stożka o promieniu podstawy r i tworzącej l.",
      "answer": "Pc = πr(r+l)"
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Która z brył obrotowych ma pole powierzchni P = 4πR² i objętość V = 4/3 πR³?",
      "options": [
        "Walec",
        "Stożek",
        "Kula",
        "Walec stożkowy"
      ],
      "correctIndex": 2
    }
  ],
  "nextLabel": "Podobieństwo brył",
  "nextLink": "/lessons/stereometria-4"
},
{
  "slug": "stereometria-4",
  "title": "Podobieństwo brył i zadania praktyczne",
  "type": "theory",
  "steps": [
    "Podobieństwo brył: dwie bryły są podobne, jeśli mają takie same kształty, a odpowiadające sobie wymiary są w tym samym stosunku.",
    "W bryłach podobnych stosunek objętości jest sześcianem skali podobieństwa: V₁/V₂ = k³.",
    "Stosunek pól powierzchni w bryłach podobnych jest kwadratem skali podobieństwa: P₁/P₂ = k².",
    "Zadania praktyczne: wyznaczanie objętości i pól powierzchni rzeczywistych obiektów (np. pudeł, butelek, kul) korzystając ze wzorów i własności podobieństwa."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/stereometria-4/zadania"
},
{
  "slug": "stereometria-4/zadania",
  "title": "Ćwiczenia: Podobieństwo brył",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "text",
      "question": "Dwa podobne walce mają promienie w stosunku 1:3. W jakim stosunku są ich objętości?",
      "answer": "1:27"
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Dwa podobne ostrosłupy mają krawędzie odpowiadające sobie w stosunku 2:5. W jakim stosunku są ich pola powierzchni?",
      "answer": "4:25"
    },
    {
      "id": "e3",
      "type": "mcq",
      "question": "Skala podobieństwa brył dotyczy:",
      "options": [
        "Tylko objętości",
        "Tylko pól powierzchni",
        "Wszystkich wymiarów liniowych brył",
        "Nie ma zastosowania w praktyce"
      ],
      "correctIndex": 2
    }
  ],
  "nextLabel": "Podsumowanie",
  "nextLink": "/lessons/stereometria-summary"
}
]