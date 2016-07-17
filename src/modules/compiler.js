import Tags from './tags';

export default Compiler;

/**
 * Compiler module
 *
 * @param {Object} conf
 * @return void
 */
function Compiler(conf) {
  Compiler.preprocessors = conf.preprocessors;
}

/**
 * Compile template extraxted all lines
 *
 * @param {String} template
 * @return {Object}
 */
Compiler.compile = function(template) {
  let lines = template && template.match(/(\<[^>]+\>)|[^><]+/ig);

  if (lines) {
    lines = lines
      .map(line => clean(line))
      .filter(line => line);

    return lines.length && translate(lines) || {};
  }
};

/**
 * Translate raw template lines to objects
 *
 * @param {Array} lines
 * @return {Array}
 */
function translate(lines) {
  return lines.map((line) => preprocessingToObject(line));
}

/**
 * Translate a raw line templateused registered preprocessors
 *
 * @param {String} line
 * @return {Object}
 */
function preprocessingToObject(line) {
  let obj = {};

  Compiler.preprocessors.forEach((preprocessor) => {
    preprocessor.preprocessing(obj, line);
  });

  return obj;
}

/**
 * Clean raw template's line removed unwanted spaces etc...
 *
 * @param {String} line
 * @return {String}
 */
function clean(line) {
  return line && line.trim() || null;
}

// TODO Needs later
// function searchTagEnding(tags, tag, startFrom) {
//   let nestingLevel = 0;
//   let endingTagIndex;
//   let searchedTagName = Tag.extractTagName(tag);
//
//   for (let i = startFrom; i < tags.length; i++) {
//     let processedTagName = Tag.extractTagName(tags[i]);
//
//     if (searchedTagName === processedTagName) {
//       nestingLevel++;
//     } else if ('/'.concat(searchedTagName) === processedTagName && --nestingLevel === 0) {
//       return i;
//     }
//   }
// }
