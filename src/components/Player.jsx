import { useRef, useState } from "react";

export default function Player() {
  const[playerName,setPlayerName]=useState()
  const refPlayerName=useRef()
  

  function handleButton(){  
    setPlayerName(refPlayerName.current.value)
    refPlayerName.current.value=""
  }
  return (
    <section id="player">
      <h2>Welcome {playerName?playerName:"unknown entity"}</h2>
      <p>
        <input ref={refPlayerName} type="text"/>
        <button onClick={handleButton}>Set Name</button>
      </p>
    </section>
  );
}
