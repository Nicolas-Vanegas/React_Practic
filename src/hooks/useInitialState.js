import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  //useEffect el cual me va a permitir ir a la fake API a traer nuestra información para entonces pasarsela a setVideos la cual actualiza la información de la variable videos. Explicación: Hacemos el llamado, transformamos a json y luego la mandamos al state
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
