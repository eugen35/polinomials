import {expect} from 'chai';
import {divide, multiply} from "../src/some";

describe("Divide - используется для деления", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  // this.timeout(15000);

  it('Ошибка, если деление на ноль',() => {
    // Вызывать что-то что будет бросать ошибку должен сам expect().to.throw(),
    // т.е. внутрь его должна быть передана функция, а не её результат
    // для этого мы и оборачиваем её в анонимную функцию
    // @see https://www.chaijs.com/api/bdd/#method_throw
    expect(()=>divide('2a','0')).to.throw('Divide: Division by zero!');
  });

  it('Ошибка, если деление нуля на ноль',() => expect( () => divide('0','0')).to.throw('Divide: Division by zero!') );

  it('Деление 0 на что-либо',() => expect(divide('0','2b')).to.equal('0') );

  it('Деление 0 на 1',() => expect(divide('0','1')).to.equal('0') );

  it('Деление чего-либо на 1',() => expect(divide('-3bz','1')).to.equal('-3bz') );

});




