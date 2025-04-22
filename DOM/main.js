// create a new Html Element
const body = document.querySelector('body');
const heading1 = document.createElement('h1');
const heading3 = document.createElement('h3');
const p = document.createElement('p');
const image = document.createElement('img');

// adding value to the elements
heading1.innerHTML = "Qisas Al-Quraan"
heading3.innerHTML = "Qisatu Muusa (Calayhi Salaam)"
p.innerHTML = `Nabi Muuse Calayhi salaam ayaa dhashay xiligii ay kusoo beegantay in carurta reer bani israaiil ee wiilal ah ee dasha in la gawraco kaas oo ahaa amarka fircoon.`;
image.src = "https://amwcdn.com/featured/27823/conversions/ded2cfd8a1-full-webp.webp";
image.width = "400";

// Adding Style to the elements.
heading1.style.backgroundColor = "white";
heading1.style.color = "black";
heading1.style.padding = "10px";
heading1.style.textAlign = "center";
body.style.backgroundColor = "black";
body.style.color = "white";
p.style.width = "300px";

// adding the elements to the body;
body.appendChild(heading1);
body.appendChild(heading3);
body.appendChild(p);
body.appendChild(image);