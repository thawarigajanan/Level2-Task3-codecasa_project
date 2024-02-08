function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        result = (inputTemperature * 9/5) + 32;
        document.getElementById('result').innerText = `${inputTemperature} Celsius is ${result.toFixed(2)} Fahrenheit.`;
    } else {
        result = (inputTemperature - 32) * 5/9;
        document.getElementById('result').innerText = `${inputTemperature} Fahrenheit is ${result.toFixed(2)} Celsius.`;
    }
}