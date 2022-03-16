import React, { useState, useEffect } from "react";
import Head from "./components/Greeter";

const App = () => {
  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const [loaded, setLoaded] = useState(false);
  const handleClick = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  if (loaded === false) {
    return (
      <button onClick={handleClick}>
        <h1>website loading...</h1>
      </button>
    );
  }
  return (
    <div>
      <Head
        phrase="Hello im"
        name="Hunter"
        phrase2="Greetings im"
        name2="Jon"
        phrase3="Welcome im"
        name3="Kaley"
      />
      <input onChange={handleUsernameChange} />
      <p>you are logging in as {username}</p>
    </div>
  );
};

export default App;
