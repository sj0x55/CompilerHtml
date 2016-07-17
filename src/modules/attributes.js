import Tags from './tags';

export default Attributes;

function Attributes() {}

/**
 * Extracted attributes from tag
 *
 * @param {Object} obj
 * @param {String} line
 * @return void
 */
Attributes.preprocessing = function(obj, line) {
  if (Tags.isTag(line) && !Tags.isEnding(line)) {
    obj.attributes = this.extractAttributes(line);
  }
};

/**
 * Extracted attributes from tag
 *
 * @param {String} line
 * @return {Array}
 */
Attributes.extractAttributes = function(line) {
  let
    regex = /\s([a-z0-9\-]+(\=\"[a-z0-9\-\=\{\}\(\)\.\']+\")?)/ig,
    matches = [],
    match;

  while (match = regex.exec(line)) {
    matches.push(this.prepareAttribute(match[1]));
  }

  return matches;
};

/**
 * Convert string attribute to object
 *
 * @param {String} rawAttr
 * @return {Object}
 */
Attributes.prepareAttribute = function(rawAttr) {
  let
    matches = rawAttr && rawAttr.split('='),
    name,
    value;

  if (matches) {
    name = matches[0];
    value = matches[1] && matches[1].replace(/^\"(.+)\"$/, '$1');
  }

  return {name: name, value: value};
};


// Needs for test
if (process.env.NODE_ENV) {
  Attributes.privates = {};
}
