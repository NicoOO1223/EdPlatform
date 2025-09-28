import { useState } from "react";
import { Link } from "react-router-dom";
import topics from "../Data/Topics";

const LessonsOverview = () => {
  const [expanded, setExpanded] = useState([]);

  const toggleExpanded = (index) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

   return (
    <div className="flex bg-gray-50 min-h-screen">

      {/* Main content */}
      <div className="flex-grow w-full px-8 py-10 font-rubik max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">📚 Lekcje</h1>
        </div>

        {topics.map((topic, index) => (
          <div
            key={index}
            className="mb-6 min-w-[80%] mx-auto transform transition hover:scale-[1.01]"
          >
            {/* Topic Header */}
            <div
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex justify-between items-center cursor-pointer"
              onClick={() => toggleExpanded(index)}
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{topic.title}</h2>
                  {/* Chevron made from a simple span */}
                  <span
                    className={`inline-block transform transition-transform duration-300 text-gray-500 ${
                      expanded.includes(index) ? "rotate-90 text-indigo-600" : ""
                    }`}
                  >
                    ▶
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${topic.color} h-3 rounded-full transition-all duration-700`}
                      style={{ width: `${topic.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {topic.progress}% ukończono
                  </p>
                </div>
              </div>
            </div>
                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expanded.includes(index)
                        ? "max-h-[500px] opacity-100 mt-0"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`bg-gray-50 rounded-b-xl p-5 border-l-4 flex flex-col md:flex-row md:items-start md:justify-between gap-6`}
                      // Use a solid tailwind color instead of var() hack
                      style={{ borderColor: topic.color.includes("to-") ? topic.color.split("to-")[1] : "#4f46e5" }}
                    >
                      {/* Lessons list */}
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 flex-1">
                        {topic.lessons.map((lesson, i) => (
                          <li key={i}>📘 {lesson}</li>
                        ))}
                      </ul>

                      {/* Action buttons */}
                      <div className="flex flex-col justify-end items-end gap-3 shrink-0">
                      {topic.progress < 100 ? (
                        <Link
                          to={`/lessons/${topic.slug}`}
                          className={`inline-block bg-gradient-to-r ${topic.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm font-semibold`}
                        >
                          {topic.progress === 0 ? "Zacznij" : "Kontynuuj"}
                        </Link>
                      ) : (
                        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm font-medium shadow-sm">
                          ✅ Ukończyłeś ten dział!
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsOverview;
