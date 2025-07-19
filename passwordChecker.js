function isValidPassword(password) {
  const minLength = /.{8,}/;
  const specialChar = /[^a-zA-Z0-9]/;
  const hasNumber = /[0-9]/;
  const containsIPL = /ipl/i;

  return (
    minLength.test(password) &&
    specialChar.test(password) &&
    hasNumber.test(password) &&
    !containsIPL.test(password)
  );
}

module.exports = { isValidPassword };
