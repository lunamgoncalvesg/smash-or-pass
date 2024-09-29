const Card = ({ pokemon }) => {
    return (
      <>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
      </>
    );
  };
  
  export default Card;  