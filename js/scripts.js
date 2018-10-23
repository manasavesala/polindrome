var palindrome = function(word){
  alert(word.split("").reverse().join(""));
  return word == word.split("").reverse().join("");
};


$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputWord = $("#word").val();
    $("#output").text(palindrome(inputWord));

  });
});
