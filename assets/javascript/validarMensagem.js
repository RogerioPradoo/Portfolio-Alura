export default function mensagem(campo) {
    if (campo == "" || campo.length > 300 || campo == " ") {
        campo.setCustomValidity("Essa mensagem não é válido.");
    }
}