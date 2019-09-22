import {expect} from 'chai';
import {reduce} from "../src/helpers";

describe("Reduce", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  // this.timeout(15000);
  it('Нет букв',() => expect(reduce('','')).to.equal(''));
  it('Нет числителя',() => expect(reduce('','baz')).to.equal('/baz'));
  it('Нет знаменателя',() => expect(reduce('baz','')).to.equal('baz'));
  it('Одинаковые числитель и знаменатель',() => expect(reduce('b','b')).to.equal(''));
  it('Нечего сокращать',() => expect(reduce('abc','xyz')).to.equal('abc/xyz'));
  it('В знаменателе ничего не останется',() => expect(reduce('ab','a')).to.equal('b'));
  it('В числителе ничего не останется',() => expect(reduce('a','ab')).to.equal('/b'));
  it('В знаменателе что-то останется',() => expect(reduce('abc','az')).to.equal('bc/z'));
  it('Что-то сократится',() => expect(reduce('abxxxzzc','xxyzz')).to.equal('abxc/y'));
});




