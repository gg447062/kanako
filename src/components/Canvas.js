'use client';
import { useEffect, useState } from 'react';

export default function Canvas() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  function setup() {
    const canvas = document.getElementById('canvas');
    const imageCanvas = document.getElementById('imagecanvas');

    canvas.height = window.innerHeight * 2;
    canvas.width = window.innerWidth;
    imageCanvas.height = window.innerHeight * 2;
    imageCanvas.width = window.innerWidth;

    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const imageCanvas = document.getElementById('imagecanvas');
    const imageCtx = imageCanvas.getContext('2d');
    const image = new Image(width, height);
    image.src = '/image20.png';
    image.addEventListener('load', (e) => {
      imageCtx.drawImage(image, 0, 0, width, height);
    });
    const image2 = new Image(width, height);
    image2.src = '/image5.png';
    image2.addEventListener('load', (e) => {
      imageCtx.drawImage(image2, 0, height, width, height);
    });

    ctx.fillStyle = 'hsl(155, 100%, 22%)';
    ctx.strokeStyle = 'hsl(20, 100, 0, 0)';

    // top shape
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.lineTo(width, height / 2);
    ctx.lineTo(width * 0.85, height / 2);
    ctx.quadraticCurveTo(
      width * 0.82,
      height * 0.35,
      width * 0.75,
      height * 0.45
    );
    ctx.quadraticCurveTo(width * 0.7, height * 0.3, width * 0.6, height * 0.5);
    ctx.lineTo(width * 0.4, height * 0.5);
    ctx.quadraticCurveTo(width * 0.3, height * 0.2, width * 0.2, height * 0.5);
    ctx.lineTo(0, height * 0.5);
    ctx.fill();

    //bottom shape
    ctx.beginPath();
    ctx.moveTo(0, height * 0.7);
    ctx.lineTo(width * 0.16, height * 0.7);
    ctx.quadraticCurveTo(width * 0.3, height, width * 0.34, height * 0.7);
    ctx.quadraticCurveTo(
      width * 0.4,
      height * 0.8,
      width * 0.42,
      height * 0.64
    );
    ctx.lineTo(width * 0.6, height * 0.6);
    ctx.quadraticCurveTo(width * 0.65, height * 0.8, width * 0.7, height * 0.6);
    ctx.quadraticCurveTo(width * 0.75, height * 0.8, width * 0.8, height * 0.6);
    ctx.lineTo(width, height * 0.5);
    ctx.lineTo(width, height);
    ctx.quadraticCurveTo(width * 0.85, height * 1.5, width * 0.6, height * 1.1);
    ctx.quadraticCurveTo(width * 0.38, height * 2, width * 0.04, height * 1.2);
    ctx.lineTo(0, height * 1.24);
    ctx.fill();

    // bottom right

    ctx.beginPath();
    ctx.moveTo(width, height * 2);
    ctx.lineTo(width * 0.7, height * 2);
    ctx.quadraticCurveTo(width * 0.74, height * 1.4, width, height * 1.6);
    ctx.fill();
  }

  useEffect(() => {
    setup();
    draw();
  });
  return (
    <div>
      <canvas
        id="imagecanvas"
        height={800}
        width={1200}
        style={{ position: 'absolute', zIndex: -10 }}
        //   style={{ width: `${width}px`, height: `${height}px` }}
      ></canvas>
      <canvas
        id="canvas"
        height={800}
        width={1200}
        style={{ position: 'absolute', zIndex: 0 }}
        //   style={{ width: `${width}px`, height: `${height}px` }}
      ></canvas>
    </div>
  );
}