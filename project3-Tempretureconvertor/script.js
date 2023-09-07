function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
    const selectedUnit = document.getElementById('unitSelector').value;
    let result;

    if (isNaN(inputTemperature)) {
        alert('Please enter a valid number.');
        return;
    }

    if (selectedUnit === 'celsius') {
        result = `${inputTemperature}°C is ${((inputTemperature * 9/5) + 32).toFixed(2)}°F`;
    } else if (selectedUnit === 'fahrenheit') {
        result = `${inputTemperature}°F is ${((inputTemperature - 32) * 5/9).toFixed(2)}°C`;
    } else if (selectedUnit === 'kelvin') {
        result = `${inputTemperature}K is ${(inputTemperature - 273.15).toFixed(2)}°C`;
    }

    document.getElementById('result').textContent = result;
}
