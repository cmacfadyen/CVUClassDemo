document.getElementById("correct").addEventListener("click", changeToGreen());

function changeToRed()
{
  //"this" refers to the object that called the method
  this.style.color = "green";
}
