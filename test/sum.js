import {expect} from 'chai';
import {sum} from "../src/some";

// http://qaru.site/questions/14477/how-to-deal-with-floating-point-number-precision-in-javascript
function multFloats(a,b){
  var atens = Math.pow(10,String(a).length - String(a).indexOf('.') - 1),
    btens = Math.pow(10,String(b).length - String(b).indexOf('.') - 1);
  return (a * atens) * (b * btens) / (atens * btens);
}

function sumFloats(a,b){
  var atens = Math.pow(10,String(a).length - String(a).indexOf('.') - 1),
    btens = Math.pow(10,String(b).length - String(b).indexOf('.') - 1);
  const mtens=atens > btens ? atens : btens;
  return ((a * mtens) + (b * mtens)) / mtens;
}


describe("Sum - используется для сложения - вычитания", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  // this.timeout(15000);

  it('Сложение',() => expect(sum('2b','3b')).to.equal('5b'));
  //it('Сложение дробных',() => expect(sum('2.040b','3.1b')).to.equal('5.14b'));
  //it.only('Сложение дробных',() => expect('' + (2.04 + 3.1)).to.equal('5.14'));
  it.only('Сложение дробных',() => {
    //console.log(multFloats(2.04,3.1));
    console.log(sumFloats(2.04,3.1));

    expect(2.04 + 3.1).to.equal(5.14);});

  it('Вычитание',() => {
    const s = sum('-2b','3b');
    expect(s).to.equal('1b');
  });

  it('Сложение только цифр',() => {
    const s = sum('2','3');
    expect(s).to.equal('5');
  });

  it('Вычитание только цифр',() => {
    const s = sum('2','3');
    expect(s).to.equal('5');
  });

  it('Ошибка, если сложить нельзя',() => {
    // Вызывать что-то что будет бросать ошибку должен сам expect().to.throw(),
    // т.е. внутрь его должна быть передана функция, а не её результат
    // для этого мы и оборачиваем её в анонимную функцию
    // @see https://www.chaijs.com/api/bdd/#method_throw
    expect(()=>sum('2a','3с')).to.throw('Sum: Letters (variables) of terms are not equal. Addition (subtraction) is impossible');
  });

});




