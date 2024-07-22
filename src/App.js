import React from 'react';
import Navbar from './components/NavBars';
import About from './components/AboutMe';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Socials from './components/Socials';
import ContactDetails from './components/ContactDetails';
import ScrollButton from './components/ScrollButton';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Education />
      <Experience/>
      <Projects />
      <Skills/>
      <Hobbies />
      <Socials />
      <ContactDetails />
      <ScrollButton />
    </div>
  );
}

export default App;
