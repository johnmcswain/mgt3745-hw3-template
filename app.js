// BEHAVIOR and DATA. Follow context/STANDARDS.md.
// Pattern: load (read what persists), save (write what persists), render (draw current state).

const KEY = 'entries';   // rename to match your feature
const form = document.querySelector('#entry-form');

function load() {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
}

function save(entries) {
  localStorage.setItem(KEY, JSON.stringify(entries));
}

function render(entries) {
  const list = document.querySelector('#entry-list');
  list.innerHTML = '';
  for (const text of entries) {
    const li = document.createElement('li');
    li.textContent = text;   // textContent, never innerHTML, for anything a user typed
    list.appendChild(li);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const entries = load();
  entries.push(document.querySelector('#entry-text').value);
  save(entries);
  render(entries);
  form.reset();
});

render(load());
