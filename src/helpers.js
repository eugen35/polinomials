/** @module helpers */

/**
 * @function split - function to split number-letters
 * @returns {Object} parts
 * @returns {string} parts.numberStr
 * @returns {string} parts.letters - letters of numerator
 * @returns {string} parts.denominatorLetters - letters of denominator
 * @param {string} a - number-letters
 */
export function split(a) {
  const aArr = a.split('/');
  const firstLetterPos = aArr[0].search(/[a-zA-Z]/);
  let numberStr = '';
  let letters = '';
  if (0 <= firstLetterPos) { // Если буквы встречаются в числителе
    numberStr = aArr[0].slice(0, firstLetterPos);
    letters = aArr[0].slice(firstLetterPos);
  } else {
    numberStr = a;
  }
  return {numberStr, letters, denominatorLetters: aArr[1] || '' };
}

/**
 * @function sort - function to sort letters (number with sign remain in its place)
 * @returns {string} sorted argument
 * @param {string} a - argument (may be unsorted)
 */
export function sort(a) {
  const parts = split(a);
  return parts.numberStr + parts.letters.split('').sort().join('') + ('' === parts.denominatorLetters ? '': ('/' + parts.denominatorLetters.split('').sort().join('')));
}

/**
 * @function reduce - function to divide letters
 * @returns {string} quotient - quotient from division
 * @param {string} numerator - only lettersPart of numerator
 * @param {string} denominator - only lettersPart of denominator
 * Можно сделать ещё так, что если какую букву не нашёл, то снова не искать... Но для этого ещё одна переменная и одно сравнение нужно, - будет ли быстрее?
 */
export function reduce(numerator, denominator) {
  if ('' === denominator) return numerator;
  if ('' === numerator) return '/' + denominator;
  let prevNumerator = numerator;
  let curNumerator = numerator;
  let remainingDenominator = denominator;
  for (let i=0;i<denominator.length;i++){
    curNumerator = curNumerator.replace(denominator[i],'');
    if (prevNumerator !== curNumerator) {
      remainingDenominator = remainingDenominator.replace(denominator[i],'');
      prevNumerator = curNumerator;
    }
  }
  if ('' === remainingDenominator) return curNumerator;
  return curNumerator + '/' + remainingDenominator;
}