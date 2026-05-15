function validacao(){
    
    let usuarioCorreto = "admin"
    let senhaCorreta = "123456"
    let acessoPermitido = false

    while (acessoPermitido === false){

        let usuarioDigitado = prompt("Digite seu usuario: ")
        let senhaDigitada = prompt("Digite sua senha: ")

        if (usuarioDigitado === null || senhaDigitada === null){    
        alert("login cancelado")
        return

        }if (usuarioDigitado === "" || senhaDigitada === ""){
        alert("Por favor preencha todos os campos!")

        }else if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta){
        alert("Login realizado com sucesso, seja Bem-vindo!")
        acessoPermitido = true

        }else {
        alert("Usuario ou senha incorretos! Tente novamente.")
        }
    }
}


function formulario(){

    console.log("FORMULARIO DE AVALIACAO")
    
    let nome = prompt("Qual e o seu nome? ")


}