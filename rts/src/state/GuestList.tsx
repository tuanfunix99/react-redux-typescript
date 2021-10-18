import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  
  const [guests, setGuests] = useState<string[]>([]);

  const onClickHandler = () => {
      setName('');
      setGuests([...guests, name]);
  }

  const displayList = () => {
      if(guests.length > 0){
          return guests.map((gs, key) => {
              return <li key={key}>{gs}</li>
          })
      }
  }

  return (
    <>
      <div>Guest List</div>
      { displayList() }
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={onClickHandler}>Click me</button>
    </>
  );
};

export default GuestList;
