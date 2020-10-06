import React, { useState, useEffect } from 'react';
import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';
//Se crea esta constante para pasarle a la función useInitialState la url del api para que se pueda usar con cualquier api.
const API = 'http://localhost:3000/initalState/';
const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className='App'>
      <Header />
      <Search />
      {/* si mylist, que es la lista de videos del api es mayor a 0, osea que tiene elementos, va a mostrar esa mondá */}
      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {/* Iteramos los videos que hay en trends en el api y por cada item vamos a generar un Carouselitem. */}
      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de platzi video'>
        <Carousel>
          {initialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
