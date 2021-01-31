import React from 'react';
import './LangSelect.css';
import En from '../../images/en.jpg'
import Ru from '../../images/ru.png'

function LangSelect({ onLangSelect }) {
  function handleChange(e) {
    onLangSelect(e.target.value);
  }

  return (
    <select id="LangSelect" onChange={handleChange}>
      <option value="en">En</option>
      <option value="ru">Ru</option>
    </select>

    // <ul className="LangSelect" >
    //   <button onClick={handleChange} className="en-icon" value="en"><img className="en-icon" src={En} /></button>
    //   <button onClick={handleChange} className="en-icon" value="ru"><img className="en-icon" src={Ru} /></button>
    // </ul>
  );
}

export default LangSelect;