
import React from 'react';

interface Childprops {
  onClick: () => void;
}

const Child: React.FC<Childprops> = ({ onClick }) => {
  return (
    <>
      <input type="text" />
      <button onClick={onClick}>Click me</button>
    </>
  );
};

export default Child;
