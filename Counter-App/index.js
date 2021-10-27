let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

let count = !JSON.parse(localStorage.getItem('count'))
    ? 0
    : JSON.parse(localStorage.getItem('count'));

let previousEntries = !localStorage.getItem('previousEntries')
    ? 'Previous entries: '
    : localStorage.getItem('previousEntries');

countEl.innerText = count;
saveEl.innerText = previousEntries;

const increment = () => {
    count++;
    countEl.innerText = count;
}

const save = () => {
    localStorage.setItem('count', count);
    saveEl.innerHTML += count + " - ";
    localStorage.setItem('previousEntries', saveEl.innerHTML);
}