var modal = document.getElementById("infoModal");
var modalContent = document.getElementById("modalContent");
var btn = document.getElementById("button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function() {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
