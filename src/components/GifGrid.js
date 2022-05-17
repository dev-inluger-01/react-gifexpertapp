import React,{useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import {getGifs} from '../helpers/getGifs';

export const GifGrid = ({category}) => {

// const [images, setImages] = useState([])

const {data:images, loading } =useFetchGifs(category);


// // cuando se lanza el component por primera vez,lanza la peticion para obtener los gifs y los almacena en las imagenes
// useEffect(()=>{
//   getGifs(category)
//     .then(setImages);
// },[category]);





  return (

    <>
    <h3 className='animate__animated animate__fadeIn'>{category}</h3>

     {loading && <p>Loading</p>}

    {/* {loading ? 'Cargando...' : 'Data Cargada'} */}
    <div className='card-grid'>
        {
         images.map(img => (
              <GifGridItem 
               key={img.id} 
                //img={img}
                {...img}
                />
         )) 
        }
    </div>
    </>

  )
}
