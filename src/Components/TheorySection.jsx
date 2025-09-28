import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; // ✅ Added useParams
import { ChevronDown, ChevronUp } from "lucide-react";
import { lessons } from "../Data/Lessons"; // ✅ Import lessons

export default function TheorySection({ title, steps = [], nextLabel, nextLink, topics = [] }) {
  const { slug } = useParams(); // ✅ Get slug from URL
  const [currentStep, setCurrentStep] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const stepRefs = useRef([]);
  const navigate = useNavigate();

  function renderStepContent(step) {
  if (typeof step === "string") {
    // Split by [img ...] tags
    const parts = step.split(/\[img ([^\]]+)\]/g);

    return parts.map((part, i) => {
      // If part is an img tag
      if (part.startsWith("src=")) {
        // Parse attributes
        const attrs = {};
        part.split(" ").forEach(attr => {
          const [key, val] = attr.split("=");
          if (key && val) attrs[key] = val.replace(/['"]/g, "");
        });
        return (
          <div key={i} className="flex justify-center my-4">
            <img
              src={attrs.src}
              style={{
                width: attrs.width || "100%",
                height: attrs.height || "auto"
              }}
              className="rounded-lg shadow-md"
            />
          </div>
        );
      } else {
        // Plain text
        return <p key={i}>{part}</p>;
      }
    });
  }

  if (step.type === "image") {
    return (
      <div className="flex justify-center my-4">
        <img
          src={step.content}
          style={{
            width: step.width || "100%",
            height: step.height || "auto"
          }}
          className="rounded-lg shadow-md"
        />
      </div>
    );
  }

  return null;
}

  // ✅ Find current lesson based on slug
  const lesson = lessons.find((l) => l.slug === slug);

  useEffect(() => {
    setCurrentStep(0);
    stepRefs.current = [];
    setNavOpen(false); // ✅ Close CKE dropdown when navigating to a new lesson
  }, [steps]);

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  };

  useEffect(() => {
    if (stepRefs.current[currentStep]) {
      stepRefs.current[currentStep].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentStep]);

  const isComplete = currentStep === steps.length - 1;
  const progressPercent = steps.length ? Math.round(((currentStep + 1) / steps.length) * 100) : 0;
  const streak = 1;

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-4">
          <Link to="/" className="p-1 rounded hover:bg-gray-100">✕</Link>

          {/* Progress bar */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xl px-4">
              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-purple-600 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Streak */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
              <span className="text-sm font-semibold text-gray-700">{streak}</span>
            </div>
          </div>
        </div>
      </div>

      {/* LEFT NAVIGATION */}
      <div
        className="absolute top-24 z-40"
        style={{
          left: "calc(50% - 640px)",
          width: "220px",
        }}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setNavOpen((prev) => !prev)}
          className="flex items-center justify-between w-full bg-white border rounded-xl px-4 py-2 shadow-sm hover:bg-gray-50 transition"
        >
          <span className="font-semibold text-gray-800">Wymagania CKE</span>
          {navOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Dropdown */}
        <div
          className={`absolute top-12 left-0 w-full bg-white shadow-md rounded-b-xl border border-t-0 transition-all duration-300 overflow-hidden ${
            navOpen
              ? "max-h-[420px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-3 space-y-3 max-h-[420px] overflow-y-auto">
            {lesson?.cke && lesson.cke.length > 0 ? (
              <ul className="list-disc list-inside space-y-2">
                {lesson.cke.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 leading-relaxed hover:text-gray-900 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm italic">
                Brak wymagań CKE dla tej lekcji.
              </p>
)}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="pt-20 pb-32 max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-md p-8 text-gray-800">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">{title}</h1>

          <div className="space-y-6">
            {steps.slice(0, currentStep + 1).map((step, i) => (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className="text-lg leading-relaxed whitespace-pre-line"
              >
                {renderStepContent(step)}

              </div>
            ))}
</div>


          {isComplete && (
            <div className="mt-8 flex items-center justify-between">
              <span className="text-green-600 font-bold">🎉 Skończyłeś ten rozdział!</span>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-5 flex justify-center">
          {!isComplete ? (
            <button
              onClick={handleContinue}
              className="w-full max-w-3xl md:max-w-2xl bg-gray-900 text-white text-lg font-semibold py-3 rounded-full shadow-xl hover:brightness-105 transition"
            >
              Kontynuuj →
            </button>
          ) : nextLink && nextLabel ? (
            <Link
              to={nextLink}
              className="w-full max-w-3xl md:max-w-2xl bg-green-600 text-white text-lg font-semibold py-3 rounded-full shadow-xl hover:bg-green-700 transition flex items-center justify-center"
            >
              {nextLabel} →
            </Link>
          ) : (
            <div className="w-full max-w-3xl md:max-w-2xl text-center text-gray-700 py-3 rounded-full">
              Skończono
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
