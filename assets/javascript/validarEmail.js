export default function email(campo) {
    const email = campo.value.toLowerCase()

    const pontoAntesArroba = email.indexOf(".", email);
    const pontoFinal = email.lastIndexOf(".", email);

    if (email.includes(".") && pontoAntesArroba > 0 && pontoFinal < email.length - 1) {
    } else {
        campo.setCustomValidity("Esse email não é válido.");
    }
}