import {expect} from 'chai';
import {reduction} from "../src/helpers";

describe("divideLetters", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  // this.timeout(15000);
  it('Нет букв',() => expect(reduction('','')).to.equal(''));
  it('Нет числителя',() => expect(reduction('','baz')).to.equal('/baz'));
  it('Нет знаменателя',() => expect(reduction('baz','')).to.equal('baz'));
  it('Одинаковые числитель и знаменатель',() => expect(reduction('b','b')).to.equal(''));
  it('Нечего сокращать',() => expect(reduction('abc','xyz')).to.equal('abc/xyz'));
  it('В знаменателе ничего не останется',() => expect(reduction('ab','a')).to.equal('b'));
  it('В числителе ничего не останется',() => expect(reduction('a','ab')).to.equal('/b'));
  it('В знаменателе что-то останется',() => expect(reduction('abc','az')).to.equal('bc/z'));
  it('Что-то сократится',() => expect(reduction('abxxxzzc','xxyzz')).to.equal('abxc/y'));
});




