'use strict';

const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('invisible');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.add('invisible');
});
