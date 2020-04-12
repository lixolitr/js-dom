const link = document.querySelector('a');
link.textContent = "Mozilla Developer Network";
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = "Bllaa-blaa pargraph text content";
sect.appendChild(para); 

const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

// linkPara.remove();

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('formatted');

$('.click-me').click(() => $('img').toggle(3000));

// for (let i = 0; i < 10; i++){
//     let para2 = document.createElement('p');
//     para2.textContent = `Para ${i} Bllaa-blaa pargraph text content`;
//     sect.appendChild(para2);
// }

// [...Array(10)].forEach( (_, i) => {
//     let para2 = document.createElement('p');
//     para2.textContent = `Para ${i+1} Bllaa-blaa pargraph text content`;
//     sect.appendChild(para2);
// }); 


