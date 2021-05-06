/* Variadic function -- Returns the greatest common divisor of a list of arguments */
Math.gcd = function () {
  if (arguments.length == 2) {
    if (arguments[1] == 0)
      return arguments[0];
    else
      return Math.gcd(arguments[1], arguments[0] % arguments[1]);
  } else if (arguments.length > 2) {
    var result = Math.gcd(arguments[0], arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      result = Math.gcd(result, arguments[i]);
    return result;
  }
};
