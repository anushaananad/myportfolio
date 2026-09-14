import ResponsiveAppBar from './components/layout/Appbar'
import About from './components/home/About'
import Header from './components/home/Header'
import Background from './components/home/Education';
import Projects from './components/home/Projects';
import Contact from './components/home/Contact';
import WorkExperience from './components/home/Experience';
import Footer from './components/layout/Footer';
import { useEffect } from 'react';
import Certifications from './components/home/Certification';
import Chicken from './components/home/Chicken';

function App () {
  useEffect(() => {
    
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

  }, [])
  return (
    <div className="app">

      <ResponsiveAppBar />
      <Header />
      <Chicken />
      <About />
      <Background />
      <WorkExperience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
