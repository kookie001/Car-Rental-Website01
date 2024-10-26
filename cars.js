const apiUrl = 'https://your-api-gateway-url.execute-api.us-east-1.amazonaws.com/prod';

async function fetchAvailableCars() {
    const response = await fetch(`${apiUrl}/cars`);
    const cars = await response.json();
    const carList = document.getElementById('available-cars');
    carList.innerHTML = cars.map(car => `<li>${car.name}</li>`).join('');
}

document.addEventListener('DOMContentLoaded', fetchAvailableCars);
