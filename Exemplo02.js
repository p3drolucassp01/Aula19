import React, { useState, useEffect } from "react";

const LocalStorageSync = () => {
  const [name, setName] = useState(() => localStorage.getItem("name") || "");

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]); // Atualiza o localStorage sempre que o nome muda

  return (
    <div>
      <h1>Digite seu nome:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Seu nome armazenado é: {name}</p>
    </div>
  );
};

export default LocalStorageSync;
