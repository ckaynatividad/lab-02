// const colors = ['red','white','blue'];

// const random = getRandomNum(colors.length);
// console.log(colors[random]);
// example

import { answers } from './answers.js';

const getRandomNum = (max)=>{
  return Math.floor(Math.random() * max);
}

const answer = document.getElementById('answer');

const btn = document.getElementById('btn');
const questbox = document.getElementById('question-box');
const bg = document.getElementById('bg');
bg.volume = 0.9;
bg.play();


btn.addEventListener('click', ()=>{ 
  const bell = document.getElementById('audio');
  bell.play();
  answer.classList.remove('animated');
  void answer.offsetWidth;
  answer.classList.add('animated');
  const quest = document.getElementById('question');
  quest.value = ' ';
  const randomAns = getRandomNum(answers.length);
  return answer.textContent = answers[randomAns];
});
