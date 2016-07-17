import Compiler from '../compiler';
import Tags from '../tags';
import Attributes from '../attributes';

describe('Compiler', function() {
  it('compile without preprocessors', function() {
    let
      compiler = new Compiler(),
      result = compiler.compile('<div></div>');

    expect(result).to.be.a('array');
    expect(result).to.have.lengthOf(2);

    expect(result[0]).to.be.a('object');
    expect(Object.keys(result[0])).to.have.lengthOf(0);

    expect(result[1]).to.be.a('object');
    expect(Object.keys(result[1])).to.have.lengthOf(0);
  });

  it('compile with tag preprocessor', function() {
    let
      compiler = new Compiler({
        preprocessors: [Tags]
      }),
      result = compiler.compile('<div></div>');

    expect(result).to.be.a('array');
    expect(result).to.have.lengthOf(2);

    expect(result[0]).to.be.a('object');
    expect(result[0]).to.have.property('openTagName').and.equal('div');

    expect(result[1]).to.be.a('object');
    expect(result[1]).to.have.property('closeTagName').and.equal('div');
  });

  it('compile with attributes preprocessor', function() {
    let
      compiler = new Compiler({
        preprocessors: [Attributes]
      }),
      result = compiler.compile('<div class="test"></div>');

    expect(result).to.be.a('array');
    expect(result).to.have.lengthOf(2);

    expect(result[0]).to.be.a('object');
    expect(result[0]).to.have.property('attributes').and.to.be.a('array').to.have.lengthOf(1);
    expect(result[0].attributes[0]).to.have.deep.property('name', 'class');
    expect(result[0].attributes[0]).to.have.deep.property('value', 'test');
  });

  // Testing private functions
  it('testing private extractLines() function', function() {
    let result = Compiler.privates.extractLines(`<div></div>`);

    expect(result).to.be.a('array');
    expect(result).to.have.lengthOf(2);
    expect(result[0]).equal('<div>');
    expect(result[1]).equal('</div>');
  });

  it('testing private translate() function', function() {
    let result = Compiler.privates.translate(['<div>', '</div>']);

    expect(result).to.be.a('array');
    expect(result).to.have.lengthOf(2);
    expect(result[0]).to.be.a('object');
    expect(result[1]).to.be.a('object');
  });

  it('testing private clean() function', function() {
    let clean = Compiler.privates.clean;

    expect(clean('  <div>  ')).equal('<div>');
    expect(clean('  </div>  ')).equal('</div>');
  });
});
