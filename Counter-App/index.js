let countEl = document.getElementById('count-el');

let count = !JSON.parse(localStorage.getItem('count'))
    ? 0
    : JSON.parse(localStorage.getItem('count'));

countEl.innerText = count;

const increment = () => {
    count++;
    countEl.innerText = count;
}

const save = () => {
    localStorage.setItem('count', count);
}