/** @module some */



/**
 * @function split - function to split number-letters
 * @returns {Object}
 * @param {string} a - number-letters
 */
export function split (a) {
  const firstLetterPos = a.search(/[a-zA-Z]/);
  if (0 <= firstLetterPos) return {numberStr: a.slice(0, firstLetterPos), letters: a.slice(firstLetterPos)}; // Если буквы встречаются
  return {numberStr: a, letters:''};
}

/**
 * @function sum - function to addition and subtraction
 * @returns {string} sum
 * @param {string} a - term a
 * @param {string} b - term b
 */
export function sum (a,b) {
  const partsOfA = split(a);
  const partsOfB = split(b);
  if (partsOfA.letters !== partsOfB.letters) throw (new Error('Sum: Letters (variables) of terms are not equal. Addition (subtraction) is impossible!'));
  return '' + ((parseFloat(partsOfA.numberStr) + parseFloat(partsOfB.numberStr))) + partsOfA.letters;
}

/**
 * @function sort - function to sort letters (number with sign remain in its place)
 * @returns {string} sorted argument
 * @param {string} a - argument (may be unsorted)
 */
export function sort (a) {
  const parts = split(a);
  return parts.numberStr + parts.letters.split('').sort().join('');
}

/**
 * @function multiply - function to multiply
 * @returns {string} multiplyResult
 * @param {string} a - multiplier a
 * @param {string} b - multiplier b
 */
export function multiply (a,b) {
  const partsOfA = split(a);
  const partsOfB = split(b);
  if ('0' === partsOfA.numberStr || '0' === partsOfB.numberStr) return '0';
  return sort('' + (parseFloat(partsOfA.numberStr) * parseFloat(partsOfB.numberStr)) + partsOfA.letters+partsOfB.letters);
}

/**
 * @function divide - function to divide
 * @returns {string} quotient - quotient from division
 * @param {string} numerator - multiplier numerator
 * @param {string} denominator - multiplier denominator
 */
export function divide (numerator,denominator) {
  const numberOfDenominator = parseFloat(denominator);
  if (0 === numberOfDenominator) throw (new Error('Divide: Division by zero!'));
  if (1 === numberOfDenominator) return numerator;

  const numberOfNumerator = parseFloat(numerator);
  if (0 === numberOfNumerator) return '0';

  const lettersOfA = numerator.split(numberOfNumerator)[1];
  const lettersOfB = denominator.split(numberOfDenominator)[1];
  return sort('' + (numberOfNumerator * numberOfDenominator) + lettersOfA + lettersOfB);
}