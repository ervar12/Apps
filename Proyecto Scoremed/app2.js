function calcular() {
    // Get the input values
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value); // Add more input fields as needed

    // Calculate the result
    const coefficient = 2; // Replace with your desired coefficient
    const result = (input1 % coefficient) + (input2 * coefficient); // Add more calculations as needed
   // sessionStorage.setItem('result', result);
    // Display the result
    document.getElementById('result').textContent = `RESULTADO: ${result}`;
}

document.getElementById('calculate-button').addEventListener('click', calcular);
