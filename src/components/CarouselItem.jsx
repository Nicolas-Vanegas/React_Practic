import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

//Estos props se hacen para que cada carouselItem tenga sus propias variables de los elementos dependiendo de que item se esté iterando.
const CarouselItem = ({ title, year, contentRating, duration, cover }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

//Debemos instalar prop-types primero e importarlo, Nos sirve para definir el tipo de dato de los props. tienes que pasar el nombre "propTypes con la p en minúscula"
CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
};

export default CarouselItem;
