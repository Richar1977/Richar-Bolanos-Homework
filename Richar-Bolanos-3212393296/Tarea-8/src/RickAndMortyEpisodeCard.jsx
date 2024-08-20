import React from 'react';

function RickAndMortyEpisodeCard( props ) {
  return (
    <div className="episode-card">
      <h2>{props.name}</h2>
      <p>Episodio: {props.episode}</p>
      <p>Fecha de emisión: {props.air_date}</p>
    </div>
  );
}

export default RickAndMortyEpisodeCard;