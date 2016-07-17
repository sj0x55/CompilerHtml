import Attributes from '../attributes';

describe('Attributes', function() {
  it('test preprocessor', function() {
    let result = {};
    Attributes.preprocessing(result, '<div class="test">');

    expect(result).to.be.a('object');
    expect(result).to.have.property('attributes').and.to.be.a('array').to.have.lengthOf(1);
    expect(result.attributes[0]).to.have.deep.property('name', 'class');
    expect(result.attributes[0]).to.have.deep.property('value', 'test');
  });

  // Testing private functions
  it('testing private extractAttributes() function', function() {
    let result = Attributes.privates.extractAttributes('<div class="test">');

    expect(result).to.be.a('array').to.have.lengthOf(1);
    expect(result[0]).to.have.deep.property('name', 'class');
    expect(result[0]).to.have.deep.property('value', 'test');
  });

  it('testing private prepareAttribute() function', function() {
    let result = Attributes.privates.prepareAttribute('class="test"');

    expect(result).to.be.a('object');
    expect(result).to.have.property('name').to.equal('class');
    expect(result).to.have.property('value').to.equal('test');
  });
});
