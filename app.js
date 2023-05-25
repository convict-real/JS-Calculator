function hasLetters(text) {
    return /[a-zA-Z]/.test(text);
}

function hasOperators(text) {
    return /[+\-*/]/.test(text);
}

function hasCharacters(text) {
    return /[''""(){}]/.test(text);
}

document.addEventListener("DOMContentLoaded", function () {
    var calculationText = document.getElementById("calculation-text");
    var calculationInput = document.getElementById("calculation-input");
    var calculationButton = document.getElementById("calculation-button");

    calculationButton.addEventListener("click", function () {
        var input = calculationInput.value;

        if (input === "") {
            calculationText.textContent = "A calculation must be entered";
            return;
        }

        if (hasLetters(input)) {
            calculationText.textContent = "The input must not contain letters";
            return;
        }

        if (!hasOperators(input)) {
            calculationText.textContent = "The input must have an operator";
            return;
        }

        if (hasCharacters(input)) {
            calculationText.textContent = "The input contains invalid characters";
            return;
        }

        try {
            var result = eval(input);
            calculationText.textContent = "The result of " + input + " is " + result;
        } catch (error) {
            calculationText.textContent = error.message;
        }
    });
});
