import React, { useState, useEffect } from "react";

const AnimatedCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []); // Executa apenas uma vez na montagem do componente

  return (
    <div>
      <h1>Contador: {count}</h1>
    </div>
  );
};

export default AnimatedCounter;
