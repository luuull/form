document.getElementById("button").addEventListener("click", validacaoFormulario)


function validacaoFormulario(){
    if (document.getElementById("name").value != "" && document.getElementById("mail").value != "" && document.getElementById("assunto").value != "") {
        alert("♡")
    }else{
        alert("🢧 Preencha os campos🢦")
    }
}
