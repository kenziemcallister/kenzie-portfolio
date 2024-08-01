//app.jsx holds everything we are displaying onto the page. react is combination of html and javascript
import './App.css';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';

function App() { //functions define components that can take parameters and do stuff with them. will return html
  return ( 
    <>
      <Hero/>
      <Skills/>
      <Footer/>
    </>
  );
}

export default App;
