import IDENTIFIERS from 'apg-js/src/apg-lib/identifiers.js';
import { charsToString } from 'apg-js/src/apg-lib/utilities.js';

const pathLiteral = (state, chars, phraseIndex, phraseLength, data) => {
  if (state === IDENTIFIERS.SEM_PRE) {
    data.push(['path-literal', charsToString(chars, phraseIndex, phraseLength)]);
  } else if (state === IDENTIFIERS.SEM_POST) {
    /* not used in this example */
  }
  return IDENTIFIERS.SEM_OK;
};

export default pathLiteral;
