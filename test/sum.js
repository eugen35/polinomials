import {expect} from 'chai';
import {sum} from "../src/simpleLettersMath";

describe("Sum - используется для сложения - вычитания", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  // this.timeout(15000);

  it('Сложение',() => expect(sum('2b','3b')).to.equal('5b'));

  it('Сложение дробных с буквами',() => expect(sum('2.040b','3.1b')).to.equal(''+(2.040+3.1)+'b'));
  it('Сложение дробных без букв',() => expect(sum('2.04','-3.10')).to.equal(''+(2.04-3.10)));

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




