//Problem 2 : Check whether a string is palindrome or not.
let str = "abba"
let str1="";

for(let i=str.length-1; i>=0; i++)
{
    str1=str[i]+str1 
}
if(str==str1)
{
    console.log("is palindrome");
}
else{
    console.log("not a palindrome");
}