import {expect} from 'chai';
import {split} from "../src/helpers";

describe("Split - разделяем число и буквы", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  // this.timeout(15000);
  it('Split',() => expect(split('2b')).to.deep.equal({numberStr:'2', letters:'b', denominatorLetters:''}));
  it('Split',() => expect(split('-2baz')).to.deep.equal({numberStr:'-2', letters:'baz', denominatorLetters:''}));
  it('Split',() => expect(split('-2.03baz')).to.deep.equal({numberStr:'-2.03', letters:'baz', denominatorLetters:''}));
  it('Split',() => expect(split('-2.0300baz')).to.deep.equal({numberStr:'-2.0300', letters:'baz', denominatorLetters:''}));
  it('Split',() => expect(split('2.0300baz')).to.deep.equal({numberStr:'2.0300', letters:'baz', denominatorLetters:''}));
  it('Split - если нет букв',() => expect(split('2.0300')).to.deep.equal({numberStr:'2.0300', letters:'', denominatorLetters:''}));
  it('Split - если нет букв и цифра начинается с нуля',() => expect(split('-0.0300')).to.deep.equal({numberStr:'-0.0300', letters:'', denominatorLetters:''}));
});




