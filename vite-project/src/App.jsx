import Cards from './components/Cards';
import Hero from './components/Hero';
import NavBar from './components/Navbar';

export default function App() {
  return (
    <div>
      <div className="mb-10">
        <NavBar></NavBar>
      </div>

      <Hero></Hero>
      <Cards></Cards>
    </div>
  );
}
