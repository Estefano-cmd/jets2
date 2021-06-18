function Login() {
  var usu = document.getElementById("exampleInputEmail1").value;
  var pass = document.getElementById("exampleInputPassword1").value;

  if (usu == "565350" && pass == "6247749") {
    window.location = "../html/menu.html";
    console.log("1");
  }
  if (usu == "560021" && pass == "7807074"){
    window.location = "../html/menu_doc.html"
    console.log("2");
  }
}
