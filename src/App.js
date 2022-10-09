import "./App.css";
import Home from "./components/Home";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavBar />
        <Routes basename="/">
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="/skills" element={<SkillsPage />}></Route>
          {/* <Route path = '/projects' element={<ProjectsPage />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
