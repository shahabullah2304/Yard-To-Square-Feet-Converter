const converterForm = document.getElementById('converterForm');
const resultDiv = document.getElementById('result');

converterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const yards = parseFloat(document.getElementById('yards').value);
    const squareFeet = yards * 9; // 1 yard = 3 feet, so 1 yard^2 = 3^2 = 9 feet^2

    resultDiv.innerHTML = `<p>${yards} yards is equal to ${squareFeet} square feet.</p>`;
});