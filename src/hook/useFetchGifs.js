import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    // el uso de corchetes es debido a que desestrucutra un array
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async () => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading( false );
  }

  useEffect( () => {
    getImages();
  }, []);
  

    return{
        images,
        isLoading
    }
}
