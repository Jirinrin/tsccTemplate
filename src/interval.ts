export function flickerP() {
  const p = document.querySelector('p');
  let flickerState = false;
  setInterval(() => {
    flickerState =  !flickerState;
    p.style.color = flickerState ? 'red' : 'black';
  }, 300);
}
