import Tags from './tags';

export default {
  preprocessing: function(obj, line) {
    if (Tags.isTag(line) && !Tags.isEnding(line)) {
      obj.attrs = extractAttributes(line);
    }
  },
  extractAttributes: extractAttributes,
  prepareAttribute: prepareAttribute
};

function extractAttributes(line) {
  let
    regex = /\s([a-z0-9\-]+(\=\"[a-z0-9\-\=\{\}\(\)\.\']+\")?)/ig,
    matches = [],
    match;

  while (match = regex.exec(line)) {
    matches.push(match[1]);
  }

  return matches;
}

function prepareAttribute(rawAttr) {
  let
    matches = rawAttr.split('='),
    name,
    value;

  if (matches) {
    name = matches[0];
    value = matches[1] && matches[1].replace(/^\"(.+)\"$/, '$1');
  }

  return {name: name, value: value};
}
