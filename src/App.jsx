import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Badges from './components/sections/Badges';
import Contact from './components/sections/Contact';
import ProjectDetails from './pages/ProjectDetails';

function PortfolioHome() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Badges />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route
        path="/projects/:projectId"
        element={
          <>
            <Navbar />
            <ProjectDetails />
          </>
        }
      />
    </Routes>
  );
}

export default App;
