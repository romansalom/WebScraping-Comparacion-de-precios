import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import '../DIGITALSPORT/styles/digitalSportCards.css';

export default function CardsDigitalSport({ searchTerm }) {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [initialSlide, setInitialSlide] = useState(0);
  const filteredProductos = productos.filter((producto) =>
    producto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const url = 'http://localhost:3000/digital';

    axios
      .get(url)
      .then((response) => {
        setProductos(response.data);
        setIsLoading(false);
        setInitialSlide(0);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const settings = {
    initialSlide: initialSlide,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(filteredProductos.length, 4), // Mostrar el número mínimo de tarjetas o máximo 4
    slidesToScroll: Math.min(filteredProductos.length, 2), // Desplazar el número mínimo de tarjetas o máximo 2
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(filteredProductos.length, 2),
          slidesToScroll: Math.min(filteredProductos.length, 1),
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(filteredProductos.length, 1),
          slidesToScroll: Math.min(filteredProductos.length, 1),
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const truncateTitle = (title) => {
    if (title.length > 25) {
      return title.slice(0, 23) + '...';
    }
    return title;
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Digital Sports Drops
              </h1>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
            </div>
          </div>
          <div className="slider-container">
            {isLoading ? (
              <div className="loading">Cargando...</div>
            ) : (
              <Slider {...settings}>
                {filteredProductos.map((producto, index) => (
                  <div key={index} className="p-4">
                    <div className="card-container w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <img
                        className="card-image p-8 rounded-lg"
                        src={producto.imageUrl}
                        alt="product image"
                      />
                      <div className="card-content px-5 pb-5">
                        <a href="/">
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {truncateTitle(producto.title)}
                          </h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                          {/* Add any additional content here */}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-gray-900 dark:text-white">
                            {producto.price}
                          </span>
                          <a
                            href="/"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Ver más
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
