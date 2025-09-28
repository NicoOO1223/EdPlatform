// data/lessons.js

import { LiczbyRzeczywiste } from "./Lekcje/Dzial1";
import { WyrazeniaAlgebraiczne } from "./Lekcje/Dzial2";
import { RównaniaINierówności } from "./Lekcje/Dzial3";
import { Funkcje } from "./Lekcje/Dzial4";
import { Trygonometria } from "./Lekcje/Dzial5";
import { Planimetria } from "./Lekcje/Dzial6";
import { GeometriaAnalityczna } from "./Lekcje/Dzial7";
import { Stereometria } from "./Lekcje/Dzial8";
import { Ciagi } from "./Lekcje/Dzial9";

export const lessons = [
  
  // DZIAL 1 Liczby rzeczywiste
...LiczbyRzeczywiste,
  // Dzial 2 Zbiory, Wartosc bezwzgledna i nierownosci
...WyrazeniaAlgebraiczne,
  // Dzial 3 Rownania i nierownosci
...RównaniaINierówności,
  // Dzial 4 Funkcje
...Funkcje,
  // Dzial 5 Trygonometria
...Trygonometria,
  // Dzial 6 Planimetria
...Planimetria,
  // Dzial 7 Geometria Analityczna
...GeometriaAnalityczna,
  // Dzial 8 Stereometria
...Stereometria,
  // Dzial 9 Ciagi
...Ciagi,
  // Dzial ?? - Statystyka, Prawdopodobienstwo, Kombinatoryka, Rachunek rozniczkowy, optymalizacja
];