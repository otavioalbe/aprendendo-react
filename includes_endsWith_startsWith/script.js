

// includes
// endsWith
// startsWith

let nomes = ['Mateus','Lucas','João'];

nomes.includes('Lucas'); // true
nomes.includes('Luca'); // false


let nome = 'Lucas'; // Cuidado! Case Sensitive

nome.endsWith('s'); // true
nome.endsWith('cas'); // true
nome.endsWith('m'); // false

nome.startsWith('L'); // true
nome.startsWith('u'); // false