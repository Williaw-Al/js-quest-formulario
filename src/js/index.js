const botaoEnviar = document.querySelector("#btn-enviar")
const inputsDoFormulario = document.querySelectorAll(".formulario-item")

botaoEnviar.addEventListener("click", (e)=>{
    e.preventDefault()

    inputsDoFormulario.forEach(input => {
        if (input.value){
            input.classList.add("campo-preenchido")
            input.nextElementSibling.classList.remove("mostrar")
        }else{
            input.classList.remove("campo-preenchido")
            input.classList.add("campo-obrigatorio")
            input.nextElementSibling.classList.add("mostrar")
        }
    })
})