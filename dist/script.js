const { body } = document;
// let count = 0;
// const ourMemory = {
//   [count]: Array(10000).fill('*'),
// };

function changeBackground(number) {
  // count++;
  // ourMemory[count] = Array(10000).fill('*');
  // Check if background is already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // RESET CSS Class
  body.className = '';
  // Switch Statement
  switch (number) {
    case '1':
      return previousBackground === 'background-toggle--1'
        ? false
        : body.classList.add('background-toggle--1');
    case '2':
      return previousBackground === 'background-toggle--2'
        ? false
        : body.classList.add('background-toggle--2');
    case '3':
      return previousBackground === 'background-toggle--3'
        ? false
        : body.classList.add('background-toggle--3');
    default:
      break;
  }
}
