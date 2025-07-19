const { isValidPassword } = require('./passwordChecker');

describe('Password Validation', () => {
  test('should accept a strong password', () => {
    expect(isValidPassword('abcD$123')).toBe(true);
  });

  test('should reject short passwords', () => {
    expect(isValidPassword('a$1B')).toBe(false);
  });

  test('should reject passwords without special characters', () => {
    expect(isValidPassword('abcd1234')).toBe(false);
  });

  test('should reject passwords without numbers', () => {
    expect(isValidPassword('abcd$efg')).toBe(false);
  });

  test('should reject passwords containing "IPL"', () => {
    expect(isValidPassword('abc$123IPL')).toBe(false);
    expect(isValidPassword('abc$123ipl')).toBe(false);
  });
});
