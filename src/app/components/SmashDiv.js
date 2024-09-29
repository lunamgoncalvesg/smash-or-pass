const SmashDiv = ({ smashedList }) => {
    return (
      <div className="smashedList">
        {smashedList.map((pokemon, idx) => (
          <h3 key={idx}>{pokemon.name}</h3>
        ))}
      </div>
    );
  };
  
  export default SmashDiv;  