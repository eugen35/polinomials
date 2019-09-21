/** @module some */

/**
 * @function split - function to split number-letters
 * @returns {Object}
 * @param {string} a - number-letters
 */
export function split (a) {
  const firstLetterPos = a.search(/[a-zA-Z]/);
  return {numberStr: a.slice(0, firstLetterPos), letters: a.slice(firstLetterPos)};
}

/**
 * @function sum - function to addition and subtraction
 * @returns {string} sum
 * @param {string} a - term a
 * @param {string} b - term b
 */
export function sum (a,b) {
  const numberOfA = parseFloat(a);
  const numberOfB = parseFloat(b);
  const lettersOfA = a.split(numberOfA)[1];
  const lettersOfB = b.split(numberOfB)[1];
  if (lettersOfA !== lettersOfB) throw (new Error('Sum: Letters (variables) of terms are not equal. Addition (subtraction) is impossible!'));
  const sum = '' + (numberOfA + numberOfB) + lettersOfA;
  return sum;
}

/**
 * @function sort - function to sort letters (number with sign remain in its place)
 * @returns {string} sorted argument
 * @param {string} a - argument (may be unsorted)
 */
export function sort (a) {
  const number = parseFloat(a);
  const letters = a.split(number)[1];
  return ''+number+letters.split('').sort().join('');
}

/**
 * @function multiply - function to multiply
 * @returns {string} multiplyResult
 * @param {string} a - multiplier a
 * @param {string} b - multiplier b
 */
export function multiply (a,b) {
  const numberOfA = parseFloat(a);
  const numberOfB = parseFloat(b);
  if (0 === numberOfA || 0 === numberOfB) return '0';
  const lettersOfA = a.split(numberOfA)[1];
  const lettersOfB = b.split(numberOfB)[1];
  return sort('' + (numberOfA * numberOfB) + lettersOfA + lettersOfB);
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