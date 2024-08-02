'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 80;

let isDrawing = false;
let hue = 0;
let direction = true;

const startDrawing = function (e) {
  isDrawing = true;

  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
};

const draw = function (e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 80 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
};

const stopDrawing = function () {
  if (!isDrawing) return;
  isDrawing = false;
  ctx.closePath();
};

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
