export default {
  preprocessing: function(obj, line) {
    if (isTag(line)) {
      if (isEnding(line)) {
        obj.endTagName = extractTagName(line);
      } else {
        obj.openTagName = extractTagName(line);
      }
    }
  },
  extractTagName: extractTagName,
  isTag: isTag,
  isEnding: isEnding
};

function extractTagName(line) {
  let matches = line.match(/^\<\/?([a-z0-9\-]+)/i);
  return matches && matches[1];
}

function isTag(tag) {
  return /^<(.+)>$/i.test(tag);
}

function isEnding(tag) {
  return /^\<\//.test(tag);
}
