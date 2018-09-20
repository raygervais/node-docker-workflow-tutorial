/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 * @param {email} email address to be validated
 * @return {boolean} Indicating successful validation (true), or false.
 */
exports.isValidEmail = function isValidEmail(email) {
  return /^\w+([.-]?\w+)*@\w*(seneca)\w*(.ca)/.test(email);
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 * @param {name} name is the argument / username
 * @return {String} String containing the formatted email address.
 */
exports.formatSenecaEmail = function formatSenecaEmail(name) {
  if (name != null) {
    name.trim();
    return name.concat('@myseneca.ca');
  }

  return 'Error: Invalid Argument';
};
