const coordsOutputRef = document.querySelector('.js-coords');
let mouseCounter = 0;
const throttledFunction = _.throttle(() => {
  mouseCounter += 1;
  coordsOutputRef.textContent = `quantity of function ${mouseCounter}`;
}, 300);

window.addEventListener('mousemove', throttledFunction);

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
const debouncedFunction = _.debounce(event => {
  inputCounter += 1;
  outputRef.textContent = `${event.target.value}
  quantity of function ${inputCounter}`;
}, 300);
let inputCounter = 0;

inputRef.addEventListener('input', debouncedFunction);
