import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function ExercisesSection({ title, exercises = [], nextLabel, nextLink, onFinish }) {
  const total = exercises.length || 0;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});
  const [showSolution, setShowSolution] = useState({});
  const [showCorrectAnswer, setShowCorrectAnswer] = useState({}); // ✅ NEW STATE
  const [finished, setFinished] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setCurrent(0);
    setAnswers({});
    setChecked({});
    setShowSolution({});
    setShowCorrectAnswer({});
    setFinished(false);
  }, [exercises]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [current]);

  const progressPercent = total ? Math.round(((current + 1) / total) * 100) : 0;

  function evaluateQuestion(q, value) {
    if (!q) return false;

    const normalizeToken = (tok) => {
      if (tok == null) return "";
      const s = String(tok).trim();
      if (s === "") return "";
      const maybeNum = Number(s.replace(",", "."));
      if (!Number.isNaN(maybeNum) && isFinite(maybeNum)) {
        return String(maybeNum);
      }
      return s.toLowerCase().replace(/\s+/g, " ");
    };

    const arraysEqualAsMultisets = (a, b) => {
      if (a.length !== b.length) return false;
      const count = (arr) => {
        const map = new Map();
        arr.forEach((x) => map.set(x, (map.get(x) || 0) + 1));
        return map;
      };
      const ma = count(a);
      const mb = count(b);
      if (ma.size !== mb.size) return false;
      for (const [k, v] of ma.entries()) {
        if (mb.get(k) !== v) return false;
      }
      return true;
    };

    if (q.type === "mcq") return value === q.correctIndex;

    if (q.type === "multi") {
      const setU = new Set(value || []);
      const setC = new Set(q.correctIndices || []);
      if (setU.size !== setC.size) return false;
      for (const v of setC) if (!setU.has(v)) return false;
      return true;
    }

    if (q.type === "text") {
      const expectedRaw = (q.answer || "").toString().trim();
      const givenRaw = (value || "").toString().trim();
      if (expectedRaw === "") return givenRaw === "";
      const treatAsList = q.normalizeAnswers === true || /[,;]/.test(expectedRaw);
      if (treatAsList) {
        const splitRe = /[,;]+/;
        const expectedTokens = expectedRaw.split(splitRe).map(normalizeToken).filter((t) => t !== "");
        const givenTokens = givenRaw.split(splitRe).map(normalizeToken).filter((t) => t !== "");
        return arraysEqualAsMultisets(expectedTokens, givenTokens);
      }
      const exp = normalizeToken(expectedRaw);
      const giv = normalizeToken(givenRaw);
      return exp === giv;
    }

    return false;
  }

  function handleSelectMCQ(id, idx) {
    setAnswers(p => ({ ...p, [id]: idx }));
  }

  function handleToggleMulti(id, idx) {
    setAnswers(p => {
      const cur = new Set(p[id] || []);
      if (cur.has(idx)) cur.delete(idx);
      else cur.add(idx);
      return { ...p, [id]: Array.from(cur) };
    });
  }

  function handleTextChange(id, val) {
    setAnswers(p => ({ ...p, [id]: val }));
  }

  function handleCheck() {
  const q = exercises[current];
  const userVal = answers[q.id];
  const correct = evaluateQuestion(q, userVal);

  setChecked(p => ({ ...p, [q.id]: true }));
  setShowSolution(p => ({ ...p, [q.id]: true }));

  return correct;
}

  function handleShowAnswer() {
    const q = exercises[current];
    setShowSolution(p => ({ ...p, [q.id]: true }));
    setShowCorrectAnswer(p => ({ ...p, [q.id]: true }));
    setChecked(p => ({ ...p, [q.id]: true }));
  }

  function handleContinue() {
    const q = exercises[current];
    if (!checked[q.id]) {
      handleCheck();
      return;
    }
    if (current < total - 1) {
      setCurrent(c => c + 1);
    } else {
      handleFinish();
    }
  }

  function handleFinish() {
    let score = 0;
    exercises.forEach((q) => {
      if (evaluateQuestion(q, answers[q.id]) || showCorrectAnswer[q.id]) score++;
    });
    const percent = total ? Math.round((score / total) * 100) : 0;
    setFinished(true);
    onFinish?.({ score, total, percent });
  }

  const currentScore = exercises.reduce((acc, q) => {
    return acc + (evaluateQuestion(q, answers[q.id]) || showCorrectAnswer[q.id] ? 1 : 0);
  }, 0);

  const q = exercises[current] || null;

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-4">
          <Link to="/" className="p-1 rounded hover:bg-gray-100">✕</Link>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xl px-4">
              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full transition-all duration-300 ${progressPercent === 100 ? "bg-green-600" : "bg-purple-600"}`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
              <span className="text-sm font-semibold text-gray-700">{current + 1}/{total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="pt-20 pb-32 max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-md p-8 text-gray-800">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{title}</h1>

          {!q && <div className="py-8 text-center text-gray-600">Brak pytań w zestawie.</div>}

          {q && (
            <div ref={contentRef}>
              <div className="text-lg font-medium mb-3">{current + 1}. {q.question}</div>
              <div className="space-y-3">
                {q.type === "mcq" && q.options.map((opt, idx) => {
                  const selected = answers[q.id] === idx;
                  const fb = showSolution[q.id];
                  const isCorrect = showCorrectAnswer[q.id] && q.correctIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => !checked[q.id] && handleSelectMCQ(q.id, idx)}
                      className={`w-full text-left px-4 py-2 rounded-lg border flex items-center justify-between transition 
                        ${answers[q.id] === idx ? "bg-gray-900 text-white" : "bg-white"} 
                        ${showCorrectAnswer[q.id] && q.correctIndex === idx ? "ring-2 ring-green-200" : ""}`}
                      disabled={checked[q.id]}
                    >
                      <span>{opt}</span>
                      {answers[q.id] === idx && <span className="text-xs opacity-80">Wybrano</span>}
                    </button>
                  );
                })}

                {q.type === "multi" && q.options.map((opt, idx) => {
                  const sel = (answers[q.id] || []).includes(idx);
                  const fb = showSolution[q.id];
                  const correct = fb && (q.correctIndices || []).includes(idx);
                  return (
                    <label key={idx} className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg border 
                      ${sel ? "bg-gray-100" : "bg-white"} 
                      ${correct ? "ring-2 ring-green-200" : ""}`}>
                      <input type="checkbox" checked={sel} onChange={() => handleToggleMulti(q.id, idx)} className="form-checkbox" />
                      <span className="text-sm">{opt}</span>
                    </label>
                  );
                })}

                {q.type === "text" && (
                  <input
                    type="text"
                    value={answers[q.id] || ""}
                    onChange={(e) => handleTextChange(q.id, e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Twoja odpowiedź"
                  />
                )}
              </div>

              {showSolution[q.id] && (
              <div className="mt-4">
                {evaluateQuestion(q, answers[q.id]) ? (
                  <div className="inline-flex items-center gap-2 text-green-700 bg-green-50 px-3 py-1 rounded">
                    ✅ Poprawna odpowiedź
                  </div>
                ) : showCorrectAnswer[q.id] ? (
                  <div className="inline-flex items-center gap-2 text-green-700 bg-green-50 px-3 py-1 rounded">
                    
                  </div>
                ) : (
                  <div className="inline-flex items-start gap-2 text-red-700 bg-red-50 px-3 py-2 rounded">
                    <div>❌ Niepoprawna</div>
                  </div>
                )}
              </div>
        )}
            </div>
          )}

          {finished && (
            <div className="mt-8 flex items-center justify-between">
              <div className="text-green-600 font-bold">🎉 Skończyłeś ćwiczenia!</div>
              <div className="text-gray-700">Wynik: {currentScore}/{total}</div>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrent(c => Math.max(c - 1, 0))}
            disabled={current === 0}
            className={`px-5 py-3 rounded-full text-lg font-semibold shadow-md transition
              ${current === 0 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
          >
            ←
          </button>

          <div className="flex-1 flex justify-center">
            {!finished ? (
              <>
                {!showSolution[q?.id] ? (
                  <button
                    onClick={handleCheck}
                    className="w-full md:w-1/2 bg-gray-900 text-white text-lg font-semibold py-3 rounded-full shadow-xl hover:brightness-105 transition"
                  >
                    Sprawdź
                  </button>
                ) : evaluateQuestion(q, answers[q.id]) || showCorrectAnswer[q.id] ? (
                  <button
                    onClick={handleContinue}
                    className="w-full md:w-1/2 bg-green-600 text-white text-lg font-semibold py-3 rounded-full shadow-xl hover:bg-green-700 transition"
                  >
                    {current < total - 1
                      ? "Kontynuuj →"
                      : nextLink
                      ? `${nextLabel || "Dalej"} →`
                      : "Zakończ"}
                  </button>
                ) : (
                  <div className="flex gap-3 w-full md:w-2/3">
                    <button
                      onClick={() => {
                        setAnswers(p => ({ ...p, [q.id]: "" }));
                        setChecked(p => ({ ...p, [q.id]: false }));
                        setShowSolution(p => ({ ...p, [q.id]: false }));
                      }}
                      className="flex-1 bg-purple-500 text-white text-lg font-semibold py-3 rounded-full shadow-xl hover:bg-purple-600 transition"
                    >
                      Spróbuj ponownie
                    </button>
                    <button
                      onClick={handleShowAnswer}
                      className="flex-1 bg-gray-900 text-white text-lg font-semibold py-3 rounded-full shadow-xl hover:brightness-105 transition"
                    >
                      Zobacz odpowiedź
                    </button>
                  </div>
                )}
              </>
            ) : nextLink ? (
              <Link
                to={nextLink}
                className="w-full md:w-1/2 bg-green-600 text-white text-lg font-semibold py-3 rounded-full shadow-xl hover:bg-green-700 transition flex items-center justify-center"
              >
                {nextLabel || "Następny temat"} →
              </Link>
            ) : (
              <div className="w-full md:w-1/2 text-center text-gray-700 py-3 rounded-full">
                Skończono
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
