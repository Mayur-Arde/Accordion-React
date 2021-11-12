import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showInfo, setShowInfo ] = useState(false);
  
  return (
    <article className="question">
      <header>
        {title}
        <button className="btn" onClick={()=> setShowInfo(!showInfo)}>{showInfo? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      <p>{showInfo &&  info }</p>
    </article>
  );
};

export default Question;
