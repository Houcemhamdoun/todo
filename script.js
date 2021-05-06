function ajoutertodo() {
  var name = document.getElementById("Name").value;
  var content = document.getElementById("Content").value;
  var li = document.createElement("li");
  var n = document.createTextNode(name);
  var c= document.createTextNode(content);
  li.appendChild(n);
  li.appendChild(c);
  if (name&&content == '') {
    alert("il faut ecrire quelque chose");
  } else {
    document.querySelector("ul").appendChild(li);
  }
  document.getElementById("Name").value = "";
  document.getElementById("Content").value = "";
}