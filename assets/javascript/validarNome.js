export default function nome(campo) {
    if (campo == "" || campo.length > 50 || campo == " ") {
        campo.setCustomValidity('Esse nome não é válido.');
    }
}