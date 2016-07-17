export default Tags;

function Tags() {}

/**
 * Extracted open and close tag names
 *
 * @param {Object} obj
 * @param {String} line
 * @return void
 */
Tags.preprocessing = function(obj, line) {
  if (this.isTag(line)) {
    if (this.isEnding(line)) {
      obj.closeTagName = extractTagName(line);
    } else {
      obj.openTagName = extractTagName(line);
    }
  } else {
    obj.content = line;
  }
};

/**
 * Needs to know if tag, some elements from template can not be tag
 *
 * @param {String} tag
 * @return {Boolean}
 */
Tags.isTag = function(tag) {
  return /^<(.+)>$/i.test(tag);
};

/**
 * Needs to know if tag is ending
 *
 * @param {String} tag
 * @return {Boolean}
 */
Tags.isEnding = function(tag) {
  return /^\<\//.test(tag);
};

/**
 * Extract just tag name from full html string tag
 *
 * @param {String} line
 * @return {String}
 */
function extractTagName(line) {
  let matches = line.match(/^\<\/?([a-z0-9\-]+)/i);
  return matches && matches[1];
}


// Needs for test
if (process.env.NODE_ENV) {
  Tags.privates = {
    extractTagName: extractTagName
  };
}
