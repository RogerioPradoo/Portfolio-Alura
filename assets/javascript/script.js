import msg from "./validarMensagem.js";
import assunto from "./validarAssunto.js";
import email from "./validarEmail.js";
import nome from "./validarNome.js";


const camposFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-form]');
document.getElementById("button").disabled = true;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "assunto": e.target.elements["assunto"].value,
        "mensagem": e.target.elements["mensagem"].value
    }

    console.log(listaRespostas)
})


camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", e => e.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort',
    'customError'
]


const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooShort: "Por favor, preencha um nome válido.",
        customError: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um nome válido.",
        customError: "Por favor, preencha um email válido."
    },
    assunto: {
        valueMissing: "O campo assunto não pode estar vazio.",
        tooShort: "Por favor, preencha o campo assunto.",
        customError: "Por favor, preencha um assunto válido."
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
        tooShort: "Por favor, preencha o campo mensagem.",
        customError: "Por favor, preencha um mensagem válido."
    }
}


function verificaCampo(campo) {
    let mensagemRecebida = "";
    campo.setCustomValidity('');
    if (campo.name == "nome" && campo.value.length >= 0) {
        nome(campo);
    }

    if (campo.name == "email" && campo.value != "") {
        email(campo);
    }

    if (campo.name == "assunto" && campo.value != "") {
        assunto(campo);
    }

    if (campo.name == "mensagem" && campo.value != "") {
        msg(campo);
    }


    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagemRecebida = mensagens[campo.name][erro];
            console.log(mensagemRecebida);
        }
    }
    )


    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagemRecebida;
    } else {
        mensagemErro.textContent = "";
        document.getElementById("button").disabled = false;
    }
}