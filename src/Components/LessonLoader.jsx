import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lessons } from "../Data/Lessons";
import TheorySection from "./TheorySection";
import ExercisesSection from "./ExerciseSection";
import { LiczbyRzeczywiste } from "../Data/Lekcje/Dzial1";

export default function LessonLoader() {
  const { slug: routeSlug, '*': rest } = useParams();
  const slug = routeSlug ? routeSlug + (rest ? `/${rest}` : '') : rest;
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const found = lessons.find((l) => l.slug === slug);
    setLesson(found || null);
  }, [slug]);

  if (!lesson) return <p className="p-6">Loading...</p>;

  // Render theory
  if (lesson.type === "theory") {
    return (
      <TheorySection
        title={lesson.title}
        steps={lesson.steps}
        nextLabel={lesson.nextLabel}
        nextLink={lesson.nextLink}
        topics={LiczbyRzeczywiste}
      />
    );
  }

  // Render exercises
  if (lesson.type === "exercises") {
    return (
      <ExercisesSection
        title={lesson.title}
        exercises={lesson.exercises}
        nextLabel={lesson.nextLabel}
        nextLink={lesson.nextLink}
        onFinish={(result) => {
          // optional: persist result or update progress
          console.log("exercises finished", result);
        }}
      />
    );
  }

}
