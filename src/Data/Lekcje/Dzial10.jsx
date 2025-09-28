export const StatystykaIPrawdopodobienstwo = [
{
  "slug": "statystyka-1",
  "title": "Podstawy statystyki — średnia, mediana i dominanta",
  "type": "theory",
  "steps": [
    "Statystyka pomaga zrozumieć dane liczbowe, wyciągać z nich wnioski i opisywać je w prosty sposób. Miary centralne, takie jak średnia, mediana i dominanta, pokazują 'typową' wartość w zbiorze danych.",
    "Średnia arytmetyczna: x̄ = (x₁ + x₂ + … + xₙ) / n. Jest to suma wszystkich wartości podzielona przez ich liczbę. Intuicyjnie odpowiada pytaniu: 'Gdyby każdy miał tyle samo, ile by to było?'.",
    "Średnia ważona: x̄ = (w₁·x₁ + w₂·x₂ + … + wₙ·xₙ) / (w₁ + w₂ + … + wₙ). Używamy jej, gdy niektóre wartości mają większe znaczenie niż inne, np. średnia ocen w dzienniku, gdzie poszczególne przedmioty mogą mieć różne wagi.",
    "Mediana — wartość środkowa w uporządkowanym zbiorze danych. Dzieli dane na dwie równe części: połowa wyników jest mniejsza lub równa medianie, a połowa większa. Intuicyjnie: 'osoba w środku kolejki'.",
    "Dla n nieparzystych: mediana = x₍ₙ₊₁₎/₂, a dla n parzystych: mediana = (x₍ₙ/₂₎ + x₍ₙ/₂₊₁₎) / 2.",
    "Dominanta (moda) — wartość, która występuje najczęściej. Intuicyjnie: 'najpopularniejszy wynik'. Np. w klasie większość uczniów dostała ocenę 4, więc 4 jest dominantą."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/statystyka-1/zadania"
},
{
  "slug": "prawdopodobienstwo-1",
  "title": "Wprowadzenie do rachunku prawdopodobieństwa",
  "type": "theory",
  "steps": [
    "Rachunek prawdopodobieństwa zajmuje się analizą zdarzeń losowych — sytuacji, których wyników nie możemy przewidzieć ze 100% pewnością.",
    "Przykład: rzut kostką. Nie wiemy, jaka liczba wypadnie, ale wiemy, jakie są wszystkie możliwe wyniki (1–6).",
    "Prawdopodobieństwo klasyczne: P(A) = |A| / |Ω|, gdzie |A| to liczba korzystnych wyników, a |Ω| — wszystkich możliwych wyników.",
    "Intuicyjnie: jeśli masz 10 kul, z czego 3 są czerwone, to szansa wylosowania czerwonej to 3/10.",
    "Prawdopodobieństwo zawsze mieści się w przedziale od 0 do 1: P(A)=0 oznacza zdarzenie niemożliwe, a P(A)=1 — zdarzenie pewne."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/prawdopodobienstwo-1/zadania"
},
{
  "slug": "prawdopodobienstwo-2",
  "title": "Własności prawdopodobieństwa i zdarzenia przeciwne",
  "type": "theory",
  "steps": [
    "P(Ω) = 1 — prawdopodobieństwo zdarzenia pewnego zawsze wynosi 1, np. 'jutro będzie jakiś dzień tygodnia'.",
    "P(∅) = 0 — zdarzenie niemożliwe ma prawdopodobieństwo 0, np. wyrzucenie liczby 7 na standardowej kostce.",
    "Zdarzenie przeciwne ¬A to sytuacja, w której A nie zachodzi. Zależność: P(¬A) = 1 - P(A). Intuicyjnie: jeśli prawdopodobieństwo deszczu wynosi 30%, to szansa, że nie będzie padać, to 70%.",
    "Jeśli A ⊂ B, to P(A) ≤ P(B). Jeśli jedno zdarzenie zawiera się w drugim, jego szansa wystąpienia nie może być większa.",
    "Dla dowolnych zdarzeń A i B: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Intuicja: dodajemy oba prawdopodobieństwa, ale odejmujemy wspólną część, żeby jej nie liczyć dwa razy."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/prawdopodobienstwo-2/zadania"
},
{
  "slug": "prawdopodobienstwo-3",
  "title": "Reguły dodawania i mnożenia",
  "type": "theory",
  "steps": [
    "Reguła dodawania: jeśli zdarzenia A i B są rozłączne (nie mogą wystąpić jednocześnie), to P(A ∪ B) = P(A) + P(B). Przykład: rzut kostką — szansa wylosowania 1 lub 6 wynosi 1/6 + 1/6 = 2/6.",
    "Jeśli zdarzenia nie są rozłączne, korzystamy z ogólnego wzoru: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
    "Reguła mnożenia: jeśli zdarzenia są niezależne, to P(A ∩ B) = P(A) · P(B). Intuicja: szansa wyrzucenia dwóch szóstek w dwóch rzutach kostką wynosi 1/6 · 1/6 = 1/36.",
    "W kontekście kombinatoryki: jeśli pierwszy wybór można zrobić na a₁ sposobów, drugi na a₂ sposobów, a trzeci na a₃ sposobów, to liczba wszystkich możliwych wyników wynosi: a₁ · a₂ · a₃."
  ],
  "nextLabel": "Zadania",
  "nextLink": "/lessons/prawdopodobienstwo-3/zadania"
}
]