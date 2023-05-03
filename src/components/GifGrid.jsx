/* eslint-disable no-unused-vars */
//import { useState, useEffect } from "react"
import { GifItem } from "./GifItem";
//import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hook/useFetchGifs";



// eslint-disable-next-line react/prop-types, no-unused-vars
export const GifGrid = ({ category }) => {

  // el uso de llaves es debido a que desestrucutra un objeto
  // esta linea de codigo hace todo el trabajo de las lineas de abajo
  const { images, isLoading } = useFetchGifs( category );  

return (    
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      

        <div className="card-grid">
          {  // hago desestructuracion de images
            images.map( ( image ) =>(                          
                <GifItem 
                  key = {image.id}
                  { ...image} // aqui estoy esparciendo todos los props de image
                  /* title = {image.title}
                  url= {image.url} */
                
                />
            ))
          }
        </div>        
    </>        
  )
}
