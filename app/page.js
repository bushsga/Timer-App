'use client';
import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    setRunning(true);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    setRunning(false);
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    setTime(0);
  };

  return (
  <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-gray-200">
     <h1 className="text-3xl font-bold mb-4">Timer App</h1>
     <div className="text-6xl font-bold">{time}s</div>
     <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={startTimer}>Start</button>
     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={stopTimer}>Stop</button>
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={resetTimer}>Reset</button>
  </div>
  );
}
