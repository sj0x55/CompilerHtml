import Tags from './tags';
export default Compiler;

/**
 * @param {Object} conf
 * @return void
 */
function Compiler(conf) {
  conf = conf || {};
  this.preprocessors = conf.preprocessors;
}

/**
 * @param {String} template
 * @return {Object}
 */
Compiler.prototype.compile = function compile(template) {
  let lines = template && extractLines(template);

  if (lines) {
    lines = lines
      .map(line => clean(line))
      .filter(line => line);

    return lines.length && translate(lines, this.preprocessors) || {};
  }
};

/**
 * Extracted all single tags and line contents from template
 *
 * @param {String} template
 * @return {Array}
 */
function extractLines(template) {
  return template && template.match(/(\<[^>]+\>)|[^><]+/ig);
}

/**
 * Translate raw template lines to objects
 *
 * @param {Array} lines
 * @param {Array} preprocessors
 * @return {Array}
 */
function translate(lines, preprocessors) {
  return lines.map((line) => {
    let obj = {};

    // Apply all preprocesors
    if (preprocessors) preprocessors.forEach((preprocessor) => {
      preprocessor.preprocessing(obj, line);
    });

    return obj;
  });
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

// Needs for test
if (process.env.NODE_ENV) {
  Compiler.privates = {
    extractLines: extractLines,
    translate: translate,
    clean: clean
  };
}
