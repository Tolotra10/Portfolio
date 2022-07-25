import Home from "./components/Portfolio";
import {Routes,Route} from 'react-router-dom';
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <div className="Bar">
        <Navigation/>
      </div>
      <div className="Routes">
        <Routes>
          <Route path="/" element={<Portfolio/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/experiences" element={<Experiences/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
