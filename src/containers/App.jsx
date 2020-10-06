import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  //useEffect el cual me va a permitir ir a la fake API a traer nuestra información para entonces pasarsela a setVideos la cual actualiza la información de la variable videos. Explicación: Hacemos el llamado, transformamos a json y luego la mandamos al state
  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  // console.log(videos);

  return (
    <div className='App'>
      <Header />
      <Search />
      {/* si mylist, que es la lista de videos del api es mayor a 0, osea que tiene elementos, va a mostrar esa mondá */}
      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      {/* Iteramos los videos que hay en trends en el api y por cada item vamos a generar un Carouselitem. */}
      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de platzi video'>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
