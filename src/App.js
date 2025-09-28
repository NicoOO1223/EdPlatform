import logo from './logo.svg';
import './App.css';
import 'katex/dist/katex.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Lessons from "./Pages/ContentOverview";
import topicsRoutes from './Components/TopicRoutes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Lessons />} />
         {topicsRoutes.map(({ path, element }, idx) => (
           <Route key={idx} path={path} element={element} />
          ))}
      </Routes>
    </Router>
  );
}

export default App;
