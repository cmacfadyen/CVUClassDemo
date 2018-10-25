document.getElementsByClass("wrong").addEventListener("click", changeToRed());

function changeToRed()
{
  //"this" refers to the object that called the method
  this.style.color = "red";
}
