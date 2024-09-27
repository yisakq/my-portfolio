import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Academics from './sections/Academics';
import Designs from './sections/Designs';
import Connect from './sections/Connect';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Technologies from './sections/Technologies';

function App() {
  return (
    <div className="App bg-primary w-full">
      <div className="fixed top-6 left-8 right-8 z-10 ">
        <Navbar />
      </div>
      <main className='relative max-container padding-x pt-20 '>
     
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
      <Designs/>
      <Technologies/>
      <Academics/>
      <Connect/>
      
    
      </main>
      <Footer/>

    </div>
  );
}

export default App;
