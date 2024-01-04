import logo from './logo.svg';
import './css/App.css';
import Navigation from './components/Nav.js';
import EducationSection from './components/Education.js';
import ExperienceSection from './components/Experience.js';
import ProjectSection from './components/Project.js';
import AboutSection from './components/About.js';
import BackgroundButton from './components/DayNight.js';

function Footer() {
  return <p>Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a></p>;

}
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <BackgroundButton />

      <Navigation />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
