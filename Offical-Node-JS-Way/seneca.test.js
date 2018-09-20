/* global test expect describe */
/* eslint-disable prefer-arrow-callback */

// First require (e.g., load) our seneca.js module
const seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', () => {
  test('isValidEmail returns true for simple mySeneca address', () => {
    expect(seneca.isValidEmail('somebody@myseneca.ca')).toBe(true);
  });

  test('Returns true for a staff email address', () => {
    expect(seneca.isValidEmail('david.humphrey@senecacollege.ca')).toBe(true);
  });

  test('Returns false for a invalid mySeneca address', () => {
    expect(seneca.isValidEmail('someone@hotmail.ca')).toBe(false);
  });

  test('Returns false for a malformed mySeneca address', () => {
    expect(seneca.isValidEmail('  rmgervais@senecacollege.ca')).toBe(false);
  });

  test('Returns false for invalid argument being passed', () => {
    expect(seneca.isValidEmail(123)).toBe(false);
  });

  test('Returns false for an array argument being passed', () => {
    expect(seneca.isValidEmail([1, 'rmgervais@myseneca.ca'])).toBe(false);
  });
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', () => {
  test('formatSenecaEmail returns the formatted email address', () => {
    expect(seneca.formatSenecaEmail('rmgervais')).toBe('rmgervais@myseneca.ca');
  });

  test('Returns a thrown error due to name being null', () => {
    expect(seneca.formatSenecaEmail()).toBe('Error: Invalid Argument');
  });
});

