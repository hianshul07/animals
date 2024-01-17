import AnimalShow from './AnimalShow';
import { useState } from 'react';
import './App.css'

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
};
const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className='app'>
      <button onClick={handleClick}>Add animals </button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
};

export default App;
