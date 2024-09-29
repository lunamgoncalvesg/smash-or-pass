const PassDiv = ({ passedList }) => {
    return (
      <div className="passedList">
        {passedList.map((pokemon, idx) => (
          <h3 key={idx}>{pokemon.name}</h3>
        ))}
      </div>
    );
  };
  
  export default PassDiv;  