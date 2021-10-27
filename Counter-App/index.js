let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

let count = !JSON.parse(localStorage.getItem('count'))
    ? 0
    : JSON.parse(localStorage.getItem('count'));

let previousEntries = !localStorage.getItem('previousEntries')
    ? 'Previous entries: '
    : localStorage.getItem('previousEntries');

countEl.textContent = count;
saveEl.textContent = previousEntries;

const increment = () => {
    count++;
    countEl.textContent = count;
}

const save = () => {
    localStorage.setItem('count', count);
    saveEl.innerHTML += !localStorage.getItem('previousEntries')
        ? count
        : " - " + count;

    localStorage.setItem('previousEntries', saveEl.innerHTML);
}