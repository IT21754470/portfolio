import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Features from './Components/Features.jsx'
import Projects from './Components/Projects.jsx'
import Resume from './Components/Resume/Resume.jsx'

import Contact from './Components/contact.jsx'
import Footer from './Components/Footer.jsx'


function App() {
  return (
 <div >
  <Navbar/>
  <Hero/>
  <Features/>
  <Projects/>
<Resume/>

<Contact/>
<Footer/>

 </div>
  );
}

export default App;
