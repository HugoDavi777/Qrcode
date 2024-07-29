function geraQRcode(){
    // //Objeto em javaSript
    // var aluno={
    //     nome: "Hugo",
    //     matricula: 548135181,
    //     email: "hugo.batista@gmail.com"
    // }
    // alert(aluno.nome +"  "+ aluno.email+"  "+ aluno.matricula)
    var inputText = document.querySelector("input");
    
    if(inputText.value == ""){
        alert("Preencha o campo com o texto que deseja transformar em QRCode");
    }else{
        //gerar o QRcode
        var imgQRcode = document.querySelector(".qrcode");
        imgQRcode.innerHTML = "";

        var btnSalvar =document.querySelector("#btnSalvar")
        btnSalvar.style.display = "block"

        var config = {
            text: inputText.value,
            width:150,
            height:150
        }
        
        new QRCode(imgQRcode , config)
        
    }
}
function salvarQRcode(){
    var a = document.createElement("a");
    var img = document.querySelector("img");

    a.href = img.src;
    a.download = "qrcode.png";
    a.click();
}