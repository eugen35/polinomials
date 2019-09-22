/** @module helpers */

/**
 * @function split - function to split number-letters
 * @returns {Object} parts
 * @returns {string} parts.numberStr
 * @returns {string} parts.letters
 * @param {string} a - number-letters
 */
export function split(a) {
  const firstLetterPos = a.search(/[a-zA-Z]/);
  if (0 <= firstLetterPos) return {numberStr: a.slice(0, firstLetterPos), letters: a.slice(firstLetterPos)}; // Если буквы встречаются
  return {numberStr: a, letters: ''};
}

/**
 * @function sort - function to sort letters (number with sign remain in its place)
 * @returns {string} sorted argument
 * @param {string} a - argument (may be unsorted)
 */
export function sort(a) {
  const parts = split(a);
  return parts.numberStr + parts.letters.split('').sort().join('');
}