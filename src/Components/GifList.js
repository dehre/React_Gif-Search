import React from 'react';
import Gif from './Gif';

const GifList = props => { 

  // MAP THE IMAGES TO REACT COMPONENTS
  const result = props.data;
  let gifs = result.map(function(gif){
    return <Gif url={gif.images.fixed_height.url} key={gif.id}/>
  });

  // RENDER THE IMAGES
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
