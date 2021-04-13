import React, { useState, useEffect } from "react";

//ctrl + alt + l - json format

function App() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [ifSent, setIfSent] = useState(false);

  const objectToAdd = {
    name: name,
    surname: surname,
    age: age,
    language: [
      {name: "English", level: "native"}
    ]
  }

  const sendData = () => {
    console.log("Wysyłam dane: ");
    console.log(objectToAdd);

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(objectToAdd)
    };

    fetch('http://localhost:5000/form', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log("Response from server");
          console.log(data)
          setIfSent(true);
        });
  }


  const handleAddName = e => {
    setName(e.target.value);
  }

  const handleAddSurname = e => {
    setSurname(e.target.value);
  }

  const handleAddAge = e => {
    setAge(e.target.value);
  }

  const handleSend = e => {
    e.preventDefault();
    sendData();
  }

  return (
    <div className="App">
        <h1>First app with request</h1>
      <form onSubmit={handleSend}>
        <input type="text" placeholder="Podaj imie" onChange={handleAddName} value={name}/>
        <input type="text" placeholder="Podaj nazwisko" onChange={handleAddSurname} value={surname}/>
        <input type="numeric" placeholder="Podaj wiek" onChange={handleAddAge} value={age}/>
        <button>Wyślij</button>
      </form>
      {ifSent && <p>Wysłano</p>}
    </div>
  );
}

export default App;
