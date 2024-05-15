import CardsMoov from './components/MOOV/Cards';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import './App.css';
import CardsGrid from './components/GRID/Cards';
import CardsDigitalSport from './components/DIGITALSPORT/Cards';
export default function App() {
  return (
    <div>
      <div className="mb-10">
        <NavBar></NavBar>
      </div>
      <div className="elementoHeroe">
        {' '}
        <Hero></Hero>
      </div>

      <div className="elemento bg-black">
        <CardsMoov></CardsMoov>
        <CardsGrid></CardsGrid>
        <CardsDigitalSport></CardsDigitalSport>
      </div>
    </div>
  );
}
