"use strict";
const btn = document.querySelector(".dugme");

const div = document.querySelector(`.div`);

const renderError = (msg) => {
  div.innerHTML = `ERORR: ${msg}`;
};

const req = () => {
  let i = Number(document.querySelector("input").value);
  fetch(`https://www.reddit.com/r/javascript.json`)
    .then((response) => response.json())
    .then(
      (data) =>
        (div.innerHTML = `<a href="${data.data.children[i].data.url}"> ✔ ${data.data.children[i].data.title}</a>`)
    )
    .catch((err) => renderError(err));

  div.style.opacity = 1;
};

btn.addEventListener(`click`, req);

const asc = document.querySelector(`.asc`);
const desc = document.querySelector(`.desc`);
const arr = `Aleksandar`;

asc.addEventListener(`click`, () => {
  document.querySelector(`.text`).innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    document.querySelector(`.text`).innerHTML += `${arr[i]}`;
  }
});

desc.addEventListener(`click`, () => {
  document.querySelector(`.text`).innerHTML = ``;
  for (let i = arr.length - 1; i >= 0; i--) {
    document.querySelector(`.text`).textContent += `${arr[i]}`;
  }
});
