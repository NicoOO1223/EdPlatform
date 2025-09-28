export const Planimetria = [
{
  "slug": "planimetria-1",
  "title": "Własności figur płaskich: obwody i pola",
  "type": "theory",
  "steps": [
    "Obwód figury płaskiej to suma długości wszystkich jej boków.",
    "Pole figury płaskiej to miara powierzchni zawartej w jej wnętrzu.",
    "Podstawowe wzory na pola figur:",
    "Kwadrat: P = a², obwód O = 4a.",
    "Prostokąt: P = a·b, O = 2a + 2b.",
    "Równoległobok: P = a·hₐ (a bok, hₐ wysokość opuszczona na bok a).",
    "Trapez: P = (a+b)/2 · h (a i b – podstawy, h – wysokość).",
    "Romb: P = a·h lub P = (e·f)/2 (gdzie e i f to długości przekątnych).",
    "Koło: P = πr², O = 2πr."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/planimetria-1/zadania"
},
{
  "slug": "planimetria-1/zadania",
  "title": "Ćwiczenia: Własności figur płaskich",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Jak obliczysz pole prostokąta o bokach długości 7 cm i 5 cm?",
      "options": [
        "12 cm²",
        "35 cm²",
        "25 cm²",
        "70 cm²"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "Który wzór stosujemy do obliczenia pola trapezu o podstawach a i b oraz wysokości h?",
      "options": [
        "P = a·b",
        "P = ½(a+b)·h",
        "P = a·h",
        "P = (a+b+c)/2"
      ],
      "correctIndex": 1
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Oblicz obwód kwadratu o boku 9 cm.",
      "answer": "36"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Podaj wzór na pole koła o promieniu r.",
      "answer": "πr²"
    }
  ],
  "nextLabel": "Trójkąty",
  "nextLink": "/lessons/planimetria-2"
},
{
  "slug": "planimetria-2",
  "title": "Trójkąty: rodzaje, własności, twierdzenie Pitagorasa",
  "type": "theory",
  "cke": ["Uczen rozpoznaje trójkąty ostrokątne, prostokątne i rozwartokątne przy danych długościach boków (m.in. stosuje twierdzenie odwrotne do twierdzenia Pitagorasa i twierdzenie cosinusów); stosuje twierdzenie: w trójkącie naprzeciw większego kąta wewnętrznego leży dłuższy bok"
  ],
  "steps": [
    "Rodzaje trójkątów ze względu na boki: równoboczny (wszystkie boki równe), równoramienny (dwa boki równe), różnoboczny (wszystkie boki różne).",
    "Rodzaje trójkątów ze względu na kąty: ostrokątny (wszystkie kąty < 90°), prostokątny (jeden kąt = 90°), rozwartokątny (jeden kąt > 90°).",
    "Suma kątów wewnętrznych każdego trójkąta wynosi 180°.",
    "Elementy szczególne w trójkącie:",
    "Środkowa – łączy wierzchołek z środkiem przeciwległego boku; punkt przecięcia środkowych to środek ciężkości (dzieli każdą środkową w stosunku 2:1 od wierzchołka).",
    "Symetralna boku – prosta prostopadła do boku w jego środku; ich przecięcie wyznacza środek okręgu opisanego.",
    "Dwusieczna kąta – półprosta dzieląca kąt na połowy; ich przecięcie to środek okręgu wpisanego.",
    "Wysokość – odcinek prostopadły opuszczony z wierzchołka na bok (lub jego przedłużenie)",
    "Twierdzenie Pitagorasa: w trójkącie prostokątnym o przyprostokątnych a, b i przeciwprostokątnej c zachodzi a² + b² = c²."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/planimetria-2/zadania"
},
{
  "slug": "planimetria-2/zadania",
  "title": "Ćwiczenia: Trójkąty",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Jaką sumę mają kąty wewnętrzne w dowolnym trójkącie?",
      "options": [
        "90°",
        "180°",
        "270°",
        "360°"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "mcq",
      "question": "W trójkącie prostokątnym o przyprostokątnych długości 6 i 8, długość przeciwprostokątnej wynosi:",
      "options": [
        "10",
        "12",
        "14",
        "15"
      ],
      "correctIndex": 0
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Jak nazywa się punkt przecięcia dwusiecznych kątów w trójkącie?",
      "answer": "środek okręgu wpisanego"
    },
    {
      "id": "e4",
      "type": "text",
      "question": "Podaj wzór na pole trójkąta równoramiennego z bokiem podstawy a i wysokością h.",
      "answer": "½ a·h"
    }
  ],
  "nextLabel": "Trójkąty podobne",
  "nextLink": "/lessons/planimetria-3"
},
{
  "slug": "planimetria-3",
  "title": "Trójkąty podobne i cechy podobieństwa",
  "type": "theory",
  "cke": ["korzysta z cech podobieństwa trójkątów"],
  "steps": [
    "Trójkąty podobne mają równe kąty i proporcjonalne boki.",
    "Cechy podobieństwa trójkątów:",
    "Cecha bbb: trójkąty są podobne, jeśli stosunki długości odpowiadających boków są równe.",
    "Cecha bkb: trójkąty są podobne, jeśli dwa boki mają równe proporcje i kąty między nimi są równe.",
    "Cecha kkk: trójkąty są podobne, jeśli wszystkie kąty są równe.",
    "Własności: pola podobnych trójkątów mają się jak kwadraty skali podobieństwa, a obwody jak sama skala podobieństwa."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/planimetria-3/zadania"
},
{
  "slug": "planimetria-3/zadania",
  "title": "Ćwiczenia: Trójkąty podobne",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Która cecha podobieństwa NIE istnieje?",
      "options": [
        "bbb",
        "bkb",
        "kkk",
        "kbk"
      ],
      "correctIndex": 3
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Wskaż skalę podobieństwa, jeśli bok w jednym trójkącie ma długość 4 cm, a w drugim 10 cm.",
      "answer": "2,5"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Jeśli dwa trójkąty podobne mają stosunek boków 1:3, to w jakim stosunku są ich pola?",
      "answer": "1:9"
    }
  ],
  "nextLabel": "Twierdzenie Talesa",
  "nextLink": "/lessons/planimetria-4"
},
{
  "slug": "planimetria-4",
  "title": "Twierdzenie Talesa",
  "type": "theory",
  "cke": ["stosuje twierdzenie Talesa"],
  "steps": [
    "Twierdzenie Talesa mówi o proporcjach w trójkątach i odcinkach powstałych przez równoległe linie.",
    "Jeśli ramiona kąta A są przecięte prostymi równoległymi BD i CE, to zachodzi:",
    "|AB|/|AD| = |BC|/|DE| oraz |AB|/|AC| = |AD|/|AE|.",
    "Twierdzenie Talesa umożliwia dowodzenie podobieństwa trójkątów oraz wyznaczanie długości odcinków w figurach geometrycznych."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/planimetria-4/zadania"
},
{
  "slug": "planimetria-4/zadania",
  "title": "Ćwiczenia: Twierdzenie Talesa",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Twierdzenie Talesa dotyczy:",
      "options": [
        "stosunków w prostokątach",
        "stosunków w trapezach",
        "stosunków odcinków powstałych przez równoległe proste przecinające ramiona kąta",
        "kątów wpisanych w okrąg"
      ],
      "correctIndex": 2
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Uzupełnij: Jeśli proste równoległe dzielą ramiona kąta, to odpowiednie odcinki są …",
      "answer": "proporcjonalne"
    }
  ],
  "nextLabel": "Okrąg",
  "nextLink": "/lessons/planimetria-5"
},
{
  "slug": "planimetria-5",
  "title": "Okrąg: własności, długości cięciw, stycznych, łuku i wycinka",
  "type": "theory",
  "cke": ["wyznacza promienie i średnice okręgów, długości cięciw okręgów oraz odcinków stycznych, w tym z wykorzystaniem twierdzenia Pitagorasa"],
  "steps": [
    "Okrąg to zbiór punktów w równej odległości (r) od środka.",
    "Cięciwa – odcinek łączący dwa punkty okręgu; najdłuższą cięciwą jest średnica.",
    "Średnica: d = 2r.",
    "Styczna do okręgu – prosta mająca jeden punkt wspólny z okręgiem i prostopadła do promienia poprowadzonego do punktu styczności.",
    "Długość łuku okręgu: L = (α/360°)·2πr, gdzie α to kąt środkowy odpowiadający łukowi.",
    "Pole wycinka koła: P = (α/360°)·πr²."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/planimetria-5/zadania"
},
{
  "slug": "planimetria-5/zadania",
  "title": "Ćwiczenia: Okrąg",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Najdłuższa cięciwa okręgu to:",
      "options": [
        "promień",
        "średnica",
        "łuk",
        "styczna"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Oblicz długość łuku okręgu o promieniu 5 cm i kącie środkowym 72°.",
      "answer": "2π"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Podaj wzór na pole wycinka koła o kącie α i promieniu r.",
      "answer": "(α/360°)·πr²"
    }
  ],
  "nextLabel": "Kąty w okręgu",
  "nextLink": "/lessons/planimetria-6"
},
{
  "slug": "planimetria-6",
  "title": "Kąty w okręgu — wpisane, środkowe i między styczną a cięciwą",
  "type": "theory",
  "steps": [
    "Kąt środkowy – wierzchołek w środku okręgu, ramiona przechodzą przez dwa punkty okręgu.",
    "Kąt wpisany – wierzchołek leży na okręgu, ramiona przechodzą przez dwa inne punkty okręgu.",
    "Zależność: kąt środkowy jest dwa razy większy od kąta wpisanego opartego na tym samym łuku.",
    "Kąty wpisane oparte na tym samym łuku są równe.",
    "Kąt między styczną a cięciwą jest równy kątowi wpisanemu opartemu na tym samym łuku."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/planimetria-6/zadania"
},
{
  "slug": "planimetria-6/zadania",
  "title": "Ćwiczenia: Kąty w okręgu",
  "type": "exercises",
  "exercises": [
    {
      "id": "e1",
      "type": "mcq",
      "question": "Kąt środkowy oparty na tym samym łuku co kąt wpisany jest:",
      "options": [
        "równy kątowi wpisanemu",
        "dwa razy większy od kąta wpisanego",
        "dwa razy mniejszy od kąta wpisanego",
        "prostopadły do kąta wpisanego"
      ],
      "correctIndex": 1
    },
    {
      "id": "e2",
      "type": "text",
      "question": "Jaką miarę ma kąt wpisany oparty na średnicy okręgu?",
      "answer": "90°"
    },
    {
      "id": "e3",
      "type": "text",
      "question": "Uzupełnij: Kąt między styczną a cięciwą jest równy …",
      "answer": "kątowi wpisanemu opartemu na tym samym łuku"
    }
  ],
  "nextLabel": "Podsumowanie",
  "nextLink": "/lessons/planimetria-summary"
}
]