// Components/TopicRoutes.js
import LessonLoader from "./LessonLoader";

const topicsRoutes = [
  {
    path: "/lessons/:slug/*", 
    element: <LessonLoader />,
  },
];

export default topicsRoutes;
