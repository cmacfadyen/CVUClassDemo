document.getElementById("correct").addEventListener("click", changeToGreen());

function changeToGreen()
{
  //"this" refers to the object that called the method
  this.style.backgroundColor = "green";
}
