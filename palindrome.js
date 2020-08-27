

function isPalindrome(s) {
    return s.toLowerCase() == s.toLowerCase().split("").reverse().join("") ? true : false;
}

var name=prompt("Enter the string:","");
if(isPalindrome(name))
{
  alert("String is palindrome");
}
else
{
  alert("String is not a palindrome ");
}
