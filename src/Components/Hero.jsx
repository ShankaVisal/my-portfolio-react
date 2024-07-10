import React, { useState, useEffect } from "react";
import '../App.css';
import './Hero.css'
import Bg from '../assets/banner111.jpg';

function Hero() {
  const names = ["Developer", "Designer", "Freelancer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentName, setCurrentName] = useState(names[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % names.length;
        setCurrentName(names[nextIndex]);
        return nextIndex;
      });
    }, 1000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="home" id="home" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, I'm</div>
          <div className="text-2">
            <p className="jello">S</p>
            <p className="jello">h</p>
            <p className="jello">a</p>
            <p className="jello">n</p>
            <p className="jello">k</p>
            <p className="jello">a</p>&nbsp;<p className="jello">V</p>
            <p className="jello">i</p>
            <p className="jello">s</p>
            <p className="jello">a</p>
            <p className="jello">l</p>
          </div>
          <br />
          <div className="text-3">
            I'm a <span className="ani-3">{currentName}</span>
          </div>
          <a
            href="https://drive.google.com/file/d/1Dt7_dzsXeJElZ8oyIT_jR5-0xn--LE1j/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
