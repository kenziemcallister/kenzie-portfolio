//app.jsx holds everything we are displaying onto the page. react is combination of html and javascript
import './App.css';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';

function App() { //functions define components that can take parameters and do stuff with them. will return html
  return ( 
    <>
      <Hero/>
      <Footer/>
    </>
  );
}

export default App;
