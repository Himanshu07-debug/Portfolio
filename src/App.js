import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import WorkExperience from './components/WorkExperience';
import Skill from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ProjectMapper from './components/ProjectMapper';

const App = () => {

  return (
    <div className='wrapper'>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skill />
        <ProjectMapper />
        <ContactMe />
      </div>
      <Footer />

    </div>
  )

}

export default App;
