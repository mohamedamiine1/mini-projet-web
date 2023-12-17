function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateForm() {
    var cinInput = document.getElementById("cin");
    var nomInput = document.getElementById("nom");
    var prenomInput = document.getElementById("prenom");
    var emailInput = document.getElementById("email");

    if (!/^\d{8}$/.test(cinInput.value)) {
        alert("Le numéro de cin doit contenir exactement 8 chiffres.");
        return false;
    }

    if (!/^[A-Za-z]+$/.test(nomInput.value)) {
        alert("Le nom doit contenir uniquement des caractères alphabétiques.");
        return false;
    }

    if (!/^[A-Za-z]+$/.test(prenomInput.value)) {
        alert("Le prénom doit contenir uniquement des caractères alphabétiques.");
        return false;
    }
    
    if (!isValidEmail(emailInput.value)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return false;
    }

    return true;
}
