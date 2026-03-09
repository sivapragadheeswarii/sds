import React, { useEffect, useState } from "react";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="glass p-8 rounded-xl hover:scale-105 transition duration-300">
      <h3 className="text-4xl font-bold text-primary">{count}+</h3>
      <p className="text-muted mt-2">{label}</p>
    </div>
  );
};

export default Counter;