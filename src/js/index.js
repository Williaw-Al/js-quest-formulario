const botaoEnviar = document.querySelector("#btn-enviar")
const inputsDoFormulario = document.querySelectorAll(".formulario-item")

botaoEnviar.addEventListener("click", ()=>{
    inputsDoFormulario.forEach(function (caixaDeInput){
        caixaDeInput.classList.remove("campo-preenchido")
        caixaDeInput.classList.remove("campo-obrigatorio")
        const idNameDoInput = caixaDeInput.id
        const labelDoInput = document.querySelector(`label[for = ${idNameDoInput}`)

        if(caixaDeInput.value != ""){
            campoPreenchido(caixaDeInput, labelDoInput);
        }else{
            campoObrigatorio(caixaDeInput, labelDoInput);
        }
    })
})

function campoPreenchido(caixaDeInput, labelDoInput){
    caixaDeInput.classList.add("campo-preenchido")
    labelDoInput.innerHTML = ""
}

function campoObrigatorio(caixaDeInput, labelDoInput){
    caixaDeInput.classList.add("campo-obrigatorio")
    labelDoInput.innerHTML = `<p class="texto-campo-obrigatorio">campo obrigatório</p>`
}