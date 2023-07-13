'use client';
import styles from '../app/styles/home.module.css';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

class Particle {
  constructor(x, y, directionX, directionY, size, img, ctx) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.img = img;
    this.ctx = ctx;
    this.s = size;
    this.w = 240;
    this.h = 230;
  }

  reset(x, y, directionX, directionY, size) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.s = size;
    this.w = 197;
    this.h = 293;
  }

  draw() {
    this.ctx.save();
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w / this.s,
      this.h / this.s
    );
  }

  update() {
    this.x += this.directionX;
    if (this.y < -100) {
      this.directionY *= -1.2;
    }
    this.y += this.directionY;
    this.draw();
  }
}

export default function Canvas() {
  const [w, setWidth] = useState(1200);
  const [h, setHeight] = useState(800);
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();
  const [img, setImg] = useState();
  const timestamp = useRef(0);
  const emitted = useRef(0);
  const maxParticles = 20;
  let particleArray = [];
  const deadParticles = [];

  function setup() {
    const _canvas = document.getElementById('canvas');
    _canvas.height = window.innerHeight;
    _canvas.width = window.innerWidth;
    const _img = document.createElement('img');
    _img.src = '/tear2.png';
    setImg(_img);
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    setCanvas(_canvas);
    setCtx(_canvas.getContext('2d'));
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function emitParticles() {
    const newX = getRandomInt(-2, -20);
    const newSize = getRandomInt(8, 10);

    if (!deadParticles.length) {
      particleArray.push(
        new Particle(w - 100, 100, newX, -10, newSize, img, ctx)
      );
    } else {
      const currentDead = deadParticles.pop();

      currentDead.reset(w - 100, 100, newX, -10, newSize);
      particleArray.push(currentDead);
    }
  }

  function animate() {
    timestamp.current++;
    if (emitted.current < maxParticles && !(timestamp.current % 4)) {
      emitParticles();
      emitted.current++;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particleArray.length; i++) {
      const currentParticle = particleArray[i];
      if (currentParticle.y > canvas.height) {
        deadParticles.push(currentParticle);
        particleArray = particleArray
          .slice(0, i)
          .concat(particleArray.slice(i + 1));
      } else {
        currentParticle.update();
      }
    }
    if (particleArray.length > 0) {
      window.requestAnimationFrame(animate);
    } else return;
  }

  function handleClick() {
    timestamp.current = -1;
    emitted.current = 0;
    animate();
  }

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <canvas
        className={styles.canvas}
        id="canvas"
        height={800}
        width={1200}
        style={{ zIndex: 50 }}
      ></canvas>
      <Image
        className={styles.imageFive}
        onClick={handleClick}
        src="/top_circle.png"
        alt="abstract-shape"
        width={200}
        height={200}
        style={{
          top: 50,
          left: w - 180,
        }}
      ></Image>
    </div>
  );
}
