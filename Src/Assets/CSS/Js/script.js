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

    if (nome === null || nome === ""){
        
        alert("Formulario cancelado!")
        return
    }

    let nota = prompt("De 1 a 10, que nota voce da para nosso site? ")

    if (nota === null){
        
        alert("Formulario cancelado!")
        return
    }

    while(nota < 1 || nota > 10 || isNaN(nota)){
        
        alert("Apenas numeros de 1 a 10!")
        nota = prompt("De 1 a 10, que nota voce da para nosso site? ")
    }

    let gostou = prompt ("Oque voce mais gostou no site? ")

    if (gostou === null || gostou === ""){
        
        alert("Formulario cancelado!")
        return
    }

    let melhoria = prompt("Oque voce melhoraria no site? ")

    if (melhoria === null || melhoria === ""){
        
        alert("Formulario cancelado!")
        return
    }

    let recomendaria = prompt("Voce recomendaria nosso site para alguem? (sim/nao) ")

    recomendaria = recomendaria.toLowerCase()

    if (recomendaria === null || recomendaria === ""){
        
        alert("Formulario cancelado!")
        return
    }

    while(recomendaria != "sim" && recomendaria != "nao"){
        
        alert("Apenas respostas de sim ou nao!")
        recomendaria = prompt("Voce recomendaria nosso site para alguem? (sim/nao) ")
    }

    console.log("RESPOSTAS DO FORMULARIO!")
    console.log(`Nome: ${nome}`)
    console.log(`Nota: ${nota}`)
    console.log(`Oque voce mais gostou: ${gostou}`)
    console.log(`Oque voce melhoraria: ${melhoria}`)
    console.log(`Recomendaria: ${recomendaria}`)
}