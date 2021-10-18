import { useState, useRef, useEffect } from "react";

const users = [
    {
        name: 'tuan',
        age: 22
    },
    {
        name: 'thanh',
        age: 20
    },
    {
        name: 'anh',
        age: 21
    }
]

const FindUser: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number} | undefined>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
      if(inputRef.current){
          inputRef.current?.focus();
      }
  }, [])

  const onSearchHandler = () => {
      const user = users.find(u => u.name === name);
      setName('');
      setUser(user);
  }

  const displayUser = () => {
      if(user) {
          return (
              <h4>{user.name} {user.age}</h4>
          )
      }
      return <h4>Not found</h4>
  }

  return (
    <>
      <input ref={inputRef} type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={onSearchHandler}>Find</button>
      {displayUser()}
    </>
  );
};

export default FindUser;
