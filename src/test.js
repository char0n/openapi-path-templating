import parse from './parse/index.js';

/**
 * Test if a string is a path template.
 *
 * @param {string} str
 * @param {Object} [options={}] - An object.
 * @param {boolean} [options.strict=true] - A boolean indicating presence of at least one `template-expression` AST node.
 * @returns {boolean}
 */
const test = (str, { strict = false } = {}) => {
  try {
    const parseResult = parse(str);

    if (!parseResult.result.success) return false;
    if (!strict) return true;

    const parts = [];
    parseResult.ast.translate(parts);
    return parts.some(([type]) => type === 'template-expression')
  } catch {
    return false;
  }
};

export default test;

