function calculateEMI() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterestRate = parseFloat(document.getElementById('rate').value);
    const months = parseInt(document.getElementById('months').value);

    if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(months)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const monthlyInterestRate = annualInterestRate / (12 * 100);
    const emi = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

    document.getElementById('emi-result').textContent = `EMI: ₹${emi.toFixed(2)}`;
}
