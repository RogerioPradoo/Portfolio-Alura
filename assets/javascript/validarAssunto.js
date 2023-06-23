export default function assunto(campo) {
    if (campo == "" || campo.length > 50 || campo == " ") {
        campo.setCustomValidity("Esse assunto não é válido.");
    }
}