import React, { useState } from 'react';

export default function Navi({ getNameData, fullName, children }) {
  const [name, setName] = useState('');
  const [toggleInput, setToggleInput] = useState(false);

  const onInputChange = (e) => {
    setName(e.target.value);
    getNameData(e.target.value);
  };

  return (
    <div>
      <h3>fullName: {fullName} </h3>
      <button onClick={() => setToggleInput(!toggleInput)}>Toggle Input</button>
      {toggleInput ? (
        <>
          <input onChange={(event) => onInputChange(event)} type="text" />
          <p>{name} </p>
        </>
      ) : (
        'inut area is close'
      )}
      <div className='slot-area'>
        {children}
      </div>
    </div>
  );
}
