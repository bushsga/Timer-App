'use client';
import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

 const startTimer = () => {
  setRunning(true);
  let elapsedTime = 0;
  setIntervalId(setInterval(() => {
    elapsedTime += 1;
    setTime(elapsedTime);
  }, 1000));
 };

  const stopTimer = () => {
    setRunning(false);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    setTime(0);
  };

const pad = (number) => {
  return number < 10 ? '0' + number : number;
};

  return (
  <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-cover bg-center h-screen" style={{ backgroundImage: "url(https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.jpg?s=1024x1024&w=is&k=20&c=fRP4Bq5z7bvi5Oiu3Az-NdOcIh1PdM5dj1hC5m52t94=)"}}>
       
       <h1 className="text-3xl font-bold mb-4 text-yellow-800">Timer App</h1>
       <div className="flex flex-col items-center">
        <div className="time-container mt-40">
          <div className="timer-circle w-64 h-64 rounded-full bg-white border-2 border-black flex justify-center items-center">
            <span className="timer-time text-4xl font-bold">{pad(Math.floor(time / 3600))}:{pad(Math.floor((time % 3600) / 60))}:{pad(time % 60)}</span>
          </div>
        </div>
        <div className="timer-buttons flex justify-center mt-4">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={startTimer}>Start</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={stopTimer}>Stop</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={resetTimer}>Reset</button>
        </div>
       </div>
  </div>
  );
}

