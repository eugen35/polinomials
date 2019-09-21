import {expect} from 'chai';
import {sum} from "../src/some";

describe("Sum - используется для сложения - вычитания", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  // this.timeout(15000);

  it('Сложение',() => {
    const s = sum('2b','3b');
    expect(s).to.equal('5b');
  });

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




