// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import {fetchTopAlbums, fetchNewAlbums} from "./api/api"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Section title="Top Albums" fetchAlbums={fetchTopAlbums} />
      <Section title="New Albums" fetchAlbums={fetchNewAlbums} />
    </div>
  );
}

export default App;
