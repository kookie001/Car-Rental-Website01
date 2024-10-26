document.getElementById('booking-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const carId = document.getElementById('carId').value;
    const response = await fetch(`${apiUrl}/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ carId })
    });

    const result = await response.json();
    alert(result.message);
});
