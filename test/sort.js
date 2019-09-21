import {expect} from 'chai';
import {sort} from "../src/some";

describe("Sort - используется для умножения", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  // this.timeout(15000);

  it('Сортировка',() => expect(sort('-34faza')).to.equal('-34aafz'));
  it('Сортировка если только цифры',() => expect(sort('-34')).to.equal('-34'));

});




