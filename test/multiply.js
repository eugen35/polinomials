import {expect} from 'chai';
import {multiply} from "../src/some";

describe("Multiply - используется для умножения", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  // this.timeout(15000);

  it('Умножение - по две одинаковых буквы',() => expect(multiply('2bb','3bb')).to.equal('6bbbb'));

  it('Умножение - требуется сортировка',() => expect(multiply('2b','3ab')).to.equal('6abb'));

  it('Умножение с разными знаками', () => expect(multiply('2b','-3bz')).to.equal('-6bbz') );

  it('Умножение дробных', () => expect(multiply('-2.5b','0.5bz')).to.equal('-1.25bbz') );

  it('Умножение дробных если в конце дробного числа 0', () => expect(multiply('-2.50b','0.5bz')).to.equal('-1.25bbz') );

  it('Умножение с минусами',() => expect(multiply('-2b','-3bb')).to.equal('6bbb') );

  it('Умножение чисел',() => expect(multiply('-2','3')).to.equal('-6') );

  it('Умножение дробных чисел',() => expect(multiply('-0.010','0.20')).to.equal('-0.002') );

  it('Умножение числа на 0',() => expect(multiply('-2','0')).to.equal('0') );

  it('Умножение числа на число с переменной',() => expect(multiply('3','-3zs')).to.equal('-9sz') );

  it('Умножение 0 на число с переменной',() => expect(multiply('0','-3zs')).to.equal('0') );

});




