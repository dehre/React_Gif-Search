import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 

  // MAP THE IMAGES TO REACT COMPONENTS
  const result = props.data;
  let gifs = result.map(function(gif){
    return <Gif url={gif.images.fixed_height.url} key={gif.id}/>
  });

  // RENDER THE IMAGES
  return(
    <ul className="gif-list">
      {result.length? gifs : <NoGifs/>}
    </ul> 
  );
}

export default GifList;
