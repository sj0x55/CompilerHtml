import Tags from './tags';
import Attributes from './attributes';

// todo
let registeredDirectives = [
  'test',
  'directive'
];

export default {
  preprocessing: function(obj, line) {
    if (Tags.isTag(line) && !Tags.isEnding(line)) {
      let
        attrs = Attributes.extractAttributes(line),
        directives = [];

      attrs.forEach((attr) => {
        attr = Attributes.prepareAttribute(attr);

        if (isDirective(attr.name)) {
          directives.push();
        }
      });

      obj.diretives = directives;
    }
  }
};

function isDirective(directive) {
  return registeredDirectives.indexOf(directive) !== -1;
}
