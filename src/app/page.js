"use client"
import './globals.css';
import SmashDiv from '/components/SmashDiv';
import PassDiv from '/components/PassDiv';
import Card from '/components/Card';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [smashedList, setSmashedList] = useState([]);
  const [passedList, setPassedList] = useState([]);
  const [randomized, setRandomized] = useState([]);

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => {
        let random;
        do {
          random = Math.floor(Math.random() * 1025) + 1; //no usar data.count porque esta mal en la api
        } while (randomized.includes(random));
        setRandomized([...randomized, random]);
        return fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
      })
      .then((res) => res.json())
      .then((pokemon) => {
        setRandomPokemon(pokemon);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  /*useEffect((event) => {
    const handleKey = (event) => (event.key === 's' ? handleSmash() : handlePass());
    window.addEventListener('keydown', handleKey);
  }, []); //si toco me tira como si al llamar random fuese false*/    

  const handleSmash = () => {
    if (!smashedList.includes(randomPokemon) && !passedList.includes(randomPokemon)) {
      setSmashedList([...smashedList, randomPokemon]);
      fetchPokemon();
    }
  };

  const handlePass = () => {
    if (!smashedList.includes(randomPokemon) && !passedList.includes(randomPokemon)) {
      setPassedList([...passedList, randomPokemon]);
      fetchPokemon();
    }
  };

  return (
    <>
      {randomPokemon && <Card pokemon={randomPokemon} />}
      <button onClick={handleSmash}>smash</button>
      <button onClick={handlePass}>pass</button>
      <SmashDiv smashedList={smashedList} />
      <PassDiv passedList={passedList} />
    </>
  );
};

export default Home;
