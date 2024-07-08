let inputText = document.getElementById("input-text");
const resultDiv = document.getElementById("result");
const btnCheck = document.getElementById("check-btn");

function inverterPalavra(palavra) {
    let invertida = palavra.split('').reverse().join('');
    return invertida;
}

btnCheck.addEventListener('click', () => {
    if(inputText.value == "") {
        alert("Please input a value")
    }else {
        let palavrainvertida = inverterPalavra(inputText.value);
        if(palavrainvertida.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() == inputText.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()) {
            resultDiv.innerHTML = `${inputText.value} is a palindrome.`;
        }else if(palavrainvertida.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() != inputText.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()) {
            resultDiv.innerHTML = `${inputText.value} is not a palindrome.`
        }
    }
}); 