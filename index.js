// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Specify Only the Lower Number of Matches</h1>`;

/** TODO:
 * Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
 
 let haStr = 'Hazzzzah';
 let haRegex = /change/; // Change this line
 let result = haRegex.test(haStr);
 */

function extractHa(haStr) {
  let haRegex = /Haz{4,}ah/;
  return haRegex.test(haStr);
}

console.log(extractHa('Hazzah'));
console.log(extractHa('Hazzzah'));
console.log(extractHa('Hazzzzah'));
console.log(extractHa('Hazzzzzah'));
console.log(extractHa('Hazzzzzzah'));
console.log(extractHa('Ha' + 'z'.repeat(30) + 'ah'));
