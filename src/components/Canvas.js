'use client';
import { useEffect, useState } from 'react';

export default function Canvas() {
  const [w, setWidth] = useState(1200);
  const [h, setHeight] = useState(800);
  const [canvas, setCanvas] = useState();

  function setup() {
    const _canvas = document.getElementById('canvas');
    const video = document.querySelector('video');
    const offset = video.clientHeight - window.innerHeight;
    _canvas.height = window.innerHeight * 2 + offset;
    _canvas.width = window.innerWidth;

    setHeight(window.innerHeight + offset);
    setWidth(window.innerWidth);
    setCanvas(_canvas);
  }

  function draw() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#669966';
    ctx.fillStyle = '#99cc99';

    // top shape
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w, 0);
    ctx.lineTo(w, h * 0.5);
    ctx.lineTo(w * 0.88, h * 0.5);
    ctx.bezierCurveTo(
      //right
      w * 0.86,
      h * 0.44,
      //left
      w * 0.82,
      h * 0.38,
      w * 0.78,
      h * 0.46
    );
    ctx.bezierCurveTo(w * 0.74, h * 0.4, w * 0.68, h * 0.4, w * 0.68, h * 0.5);
    ctx.lineTo(w * 0.4, h * 0.5);
    ctx.bezierCurveTo(w * 0.38, h * 0.32, w * 0.22, h * 0.32, w * 0.2, h * 0.5);
    ctx.lineTo(0, h * 0.5);
    ctx.fill();

    //bottom shape
    ctx.beginPath();
    ctx.moveTo(0, h * 0.7);
    ctx.lineTo(w * 0.16, h * 0.7);
    ctx.quadraticCurveTo(w * 0.3, h, w * 0.34, h * 0.7);
    ctx.quadraticCurveTo(w * 0.4, h * 0.8, w * 0.42, h * 0.64);
    ctx.lineTo(w * 0.6, h * 0.6);
    ctx.quadraticCurveTo(w * 0.65, h * 0.8, w * 0.7, h * 0.6);
    ctx.quadraticCurveTo(w * 0.75, h * 0.8, w * 0.8, h * 0.6);
    ctx.lineTo(w, h * 0.5);
    ctx.lineTo(w, h);
    ctx.quadraticCurveTo(w * 0.85, h * 1.5, w * 0.6, h * 1.1);
    ctx.quadraticCurveTo(w * 0.38, h * 2, w * 0.04, h * 1.2);
    ctx.lineTo(0, h * 1.24);
    ctx.fill();

    // bottom right

    ctx.beginPath();
    ctx.moveTo(w, h * 2);
    ctx.lineTo(w * 0.7, h * 2);
    ctx.quadraticCurveTo(w * 0.74, h * 1.4, w, h * 1.6);
    ctx.fill();
  }

  useEffect(() => {
    setup();
    draw();
  });

  return <canvas id="canvas" h={800} w={1200} style={{ zIndex: -5 }}></canvas>;
}
