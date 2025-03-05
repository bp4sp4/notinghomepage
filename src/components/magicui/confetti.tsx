"use client";

import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

export default function ConfettiFireworks() {
  const [triggered, setTriggered] = useState(false);

  const handleFireworks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("triggerPoint");
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !triggered) {
          handleFireworks();
          setTriggered(true); // Ensure fireworks only trigger once
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggered]);

  return (
    <div>
      <div id="triggerPoint">
        <h1>끝까지 봐주셔서 감사합니다</h1>
      </div>
    </div>
  );
}
