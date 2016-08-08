var getfirst = function(first)
{
  return first.charAt(0);
};

var getlast = function(last)
{
	return last.slice(-1);
};

var input = prompt("Enter a sentence:").toUpperCase();

alert(getfirst(input) + getlast(input));
