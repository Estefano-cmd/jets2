function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var celular=document.getElementById("row_phone"+no);
 /* var ws = document.getElementById("ws"+no); */
 
	
 var celular_data=celular.innerHTML;

 celular.innerHTML="<input type='text' id='celular_text"+no+"' value='"+celular_data+"'>";

 /* var ws_data = document.getElementById("celular_text"+no).value;
 ws.innerHTML="<input type='text' id='boton_text"+no+"' value='"+ws_data+"'>"; */
}

function save_row(no)
{
 var name_val=document.getElementById("celular_text"+no).value;
 var boton = document.querySelectorAll(".row_botton"+no +" a");

 document.getElementById("row_phone"+no).innerHTML=name_val;
 //document.getElementById("row_botton"+no).innerHTML="<a type='submit' class='btn btn-primary href='https://api.whatsapp.com/send?phone=+59177089466&text=Estudiante%20iscrito%20a%20los%20JETS,%20sus%20datos%20son:%0ARegistro:%20565350%0ACI:%207807074%0ACelular:%20"+boton_val+">ok</a>";

boton.forEach(function (element, index) {
    element.href = "https://api.whatsapp.com/send?phone=+59177089466&text=Estudiante%20inscrito%20a%20los%20JETS,%20sus%20datos%20son:%0ARegistro:%20565350%0ACI:%207807074%0ACelular:%20"+name_val;
});

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}