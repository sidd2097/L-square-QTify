// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Section/>
    </div>
  );
}

export default App;
