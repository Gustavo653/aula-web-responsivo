document.getElementById("btnEnviar").addEventListener("click", function(event) {
    event.preventDefault();

    const isValid = executeDefaultValidations() && executeCustomValidations();    
        
    if (isValid) {
        alert("Formulário enviado com sucesso!");
        clearInputs();
    }
});

function getInputValue(inputId) {
    return document.getElementById(inputId).value;
}

function clearInputs(formId) {
    document.getElementById("formContato").reset();
}

function executeDefaultValidations() {
    const form = document.getElementById("formContato");

    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    return true;
}

function executeCustomValidations() {
    const nome = getInputValue("nome");
    const email = getInputValue("email");
    const mensagem = getInputValue("mensagem");

    if (nome.length > 512) {
        alert("O nome deve ter no máximo 512 caracteres.");
        return false;
    }
    
    if (email.length > 64) {
        alert("O e-mail deve ter no máximo 64 caracteres.");
        return false;
    }
    
    if (mensagem.length > 1024) {
        alert("A mensagem deve ter no máximo 1024 caracteres.");
        return false;
    }

    return true;
}