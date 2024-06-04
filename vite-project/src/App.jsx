import { useState } from 'react';
import CardsMoov from './components/MOOV/Cards';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import './App.css';
import CardsGrid from './components/GRID/Cards';
import CardsDigitalSport from './components/DIGITALSPORT/Cards';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="mb-10">
        <NavBar onSearchChange={handleSearchChange}></NavBar>
      </div>
      <div className="elementoHeroe">
        <Hero></Hero>
      </div>
      <div className="flex lg:ml-auto max-lg:w-full">
        <div className="flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent">
          <input
            type="text"
            placeholder="Search something..."
            className="w-full text-sm bg-transparent rounded outline-none pr-2"
            onChange={handleSearchChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="cursor-pointer fill-gray-400"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div>
      </div>
      <div className="elemento bg-black mt-20">
        <br />
        <br />
        <br />
        <h1 className="text-4xl font-bold text-center text-white mb-20">
          Todos Los Lanzamientos
        </h1>

        <CardsMoov searchTerm={searchTerm}></CardsMoov>
        <CardsGrid searchTerm={searchTerm}></CardsGrid>
        <CardsDigitalSport searchTerm={searchTerm}></CardsDigitalSport>
      </div>
    </div>
  );
}
