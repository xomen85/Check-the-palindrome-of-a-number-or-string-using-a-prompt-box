 function myPalin(str){
  const len = string.length;
  //use the for loop to divide the words into half
  for(let i= 0; i < len / 2; i++){
    //validate if the first and last words are the same
    if(string[i] !== string[len -1 - i]){
      alert("It is not a palindrome");
    }
  }
  alert("It is a palindrome!");
}
const string = prompt('Enter a string or number ');
const value = myPalin(string);
console.log(value);