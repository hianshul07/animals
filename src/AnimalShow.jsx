import { useState } from 'react';
import './AnimalShow.css';
import bird from './assets/svgs/bird.svg';
import cat from './assets/svgs/cat.svg';
import cow from './assets/svgs/cow.svg';
import dog from './assets/svgs/dog.svg';
import gator from './assets/svgs/gator.svg';
import heart from './assets/svgs/heart.svg';
import horse from './assets/svgs/horse.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' src={svgMap[type]} alt={type} />
      <img
        className='heart'
        alt='heart'
        src={heart}
        style={{ width: 40 + 10 * clicks }}
      />
    </div>
  );
};

export default AnimalShow;
