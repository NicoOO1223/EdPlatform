import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import topics from "../Data/Topics";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function TopicSidebar() {
  const { slug: routeSlug, "*": rest } = useParams();
  const slug = routeSlug ? routeSlug + (rest ? `/${rest}` : "") : rest;

  const currentTopic = topics.find((t) => slug?.startsWith(t.slug));
  const [expanded, setExpanded] = useState(false);

  if (!currentTopic) return null;

  return (
    <div className="relative">
      {/* Accordion Header */}
      <button
        className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 font-semibold hover:bg-gray-200 transition"
        onClick={() => setExpanded(!expanded)}
      >
        Lekcje
        {expanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {/* Expandable List */}
      {expanded && (
        <div className="mt-2 max-h-72 overflow-y-auto border border-gray-200 rounded-lg bg-white shadow">
          <ul className="divide-y divide-gray-200 text-sm">
            {currentTopic.lessons.map((lessonTitle, index) => {
              const lessonSlug = `${currentTopic.slug}/lesson-${index + 1}`;
              const isActive = slug === lessonSlug;

              return (
                <li key={lessonSlug}>
                  <Link
                    to={`/${lessonSlug}`}
                    className={`block px-4 py-2 ${
                      isActive
                        ? "bg-purple-600 text-white font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {lessonTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
