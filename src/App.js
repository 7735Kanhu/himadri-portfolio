import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProfilePage from './components/intro';
import About from './components/About';
import WorkExperience from './components/Work';
import Project from './components/Project';
import Skill from './components/Skill';
import Certification from './components/Certification';
import Education from './components/Education';
import Achievement from './components/Achivement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} refs={{
        aboutRef,
        experienceRef,
        projectRef,
        skillRef,
        educationRef,
        contactRef
      }} />
      <ProfilePage />
      <section ref={aboutRef}><About /></section>
      <section ref={experienceRef}><WorkExperience /></section>
      <section ref={projectRef}><Project /></section>
      <section ref={skillRef}><Skill /></section>
      <Certification/>
      <section ref={educationRef}><Education /></section>
      <Achievement />
      <section ref={contactRef}><Contact /></section>
      <Footer/>
    </div>
  );
}

export default App;
