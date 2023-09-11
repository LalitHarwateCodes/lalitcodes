import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Maintext from './components/Maintext';
import './styles/App.css';

function App() {
  return (
    <main>
     <Navbar />
     <Maintext/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      </main>
  );
}

export default App;
