document.getElementById('drive-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fuel = parseFloat(document.getElementById('fuel').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
    const distance = (fuel / consumption) * 100;
    document.getElementById('result').textContent = `You can drive ${distance.toFixed(2)} km.`;
});