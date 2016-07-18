import Tags from './tags';
import Attributes from './attributes';
export default Directives;

function Directives() {}

/**
 * Extracted directives list from tag
 *
 * @param {Object} obj
 * @param {String} line
 * @return void
 */
Directives.preprocessing = function(obj, line) {
  if (Tags.isTag(line) && !Tags.isEnding(line)) {
    let
      attrs = Attributes.extractAttributes(line),
      directives = [];

    attrs.forEach((attr) => {
      if (hasDirective.call(this, attr.name)) {
        directives.push(attr.name);
      }
    });

    obj.directives = directives;
  }
};

/**
 * Set registered directives
 *
 * @param {Array} list
 * @return void
 */
Directives.setDirectives = function(list) {
  this.registeredDirectives = list;
};

/**
 * Needs to know if directive has been registered
 *
 * @param {String} directive
 * @return {Boolean}
 */
function hasDirective(directive) {
  return this.registeredDirectives.indexOf(directive) !== -1;
}

// Needs for test
if (process.env.NODE_ENV === 'test') {
  Directives.privates = {
    hasDirective: hasDirective.bind(Directives)
  };
}
