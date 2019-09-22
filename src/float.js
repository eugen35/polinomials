/**
 * @module float
 * @see http://qaru.site/questions/14477/how-to-deal-with-floating-point-number-precision-in-javascript
 * @todo /1/ Сто пудов есть НОРМАЛЬНАЯ БИБЛИОТЕКА ДЛЯ ЭТОГО!!! - Нужно только поискать!
 * @todo /1/ И ещё мне кажется, что при делении возникнет проблема в этом подходе!
 */

/**
 * @function multFloats - function to multiply, чтобы кол-во нулей и неточностей в конце не появлялось, как при операциях с дробными
 * @returns {number}
 * @param {number} a
 * @param {number} b
 */
export function multFloats(a,b){
  var atens = Math.pow(10,String(a).length - String(a).indexOf('.') - 1),
    btens = Math.pow(10,String(b).length - String(b).indexOf('.') - 1);
  return (a * atens) * (b * btens) / (atens * btens);
}

/**
 * @function sumFloats - function to sum, чтобы кол-во нулей и неточностей в конце не появлялось, как при операциях с дробными
 * @returns {number}
 * @param {number} a
 * @param {number} b
 */
export function sumFloats(a,b){
  var atens = Math.pow(10,String(a).length - String(a).indexOf('.') - 1),
    btens = Math.pow(10,String(b).length - String(b).indexOf('.') - 1);
  const mtens=atens > btens ? atens : btens;
  return ((a * mtens) + (b * mtens)) / mtens;
}