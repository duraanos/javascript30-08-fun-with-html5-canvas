'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

const startDrawing = function (e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
};

const draw = function (e) {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
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
