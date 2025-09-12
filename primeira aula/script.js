const lcond = document.querySelector('#lCond');
const input = document.querySelector('input');
const p = document.querySelector('p');
const prodAdd = document.querySelector('#prodAdd');
const lista = document.querySelectorAll('li');
const prodAcomp = document.querySelector('#prodAcomp');

lcond.addEventListener('mouseover', () => {
    lcond.style.backgroundColor = 'red';
})

lcond.addEventListener('mouseout', () => {
    lcond.style.backgroundColor = '';
})

input.addEventListener('input', () => {
    p.textContent = "sua busca: " + input.value;
})

prodAdd.addEventListener('mousemove', () => {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    let cor = `rgb(${r}, ${g}, ${b})`;
    prodAdd.style.backgroundColor = cor;
})

lista.forEach((item) => {
    console.log(item)
    item.addEventListener('click', (ev) => {
        console.log(ev);
        
        const li = ev.target;
        const ul = li.parentElement;
        if (ul === prodAcomp) {
            prodAdd.appendChild(li);
        }
        else {
            prodAcomp.appendChild(li);
        }

    })
})