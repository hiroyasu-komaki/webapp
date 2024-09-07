document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for the date button
    document.getElementById('dateButton').addEventListener('click', function() {
        var daysToAdd = parseInt(document.getElementById('daysInput').value, 10);
        
        // Check if the input is a valid number
        if (isNaN(daysToAdd)) {
            document.getElementById('dateDisplay').innerText = 'Invalid number of days';
            return;
        }

        // Send a POST request to the API server
        fetch('http://localhost:3001/api/add_days', {  // Specify the API server's port
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ days: daysToAdd })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('dateDisplay').innerText = data.new_date;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('dateDisplay').innerText = 'An error occurred';
        });
    });

    // Add event listener for the register form
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        const response = await fetch('http://localhost:3002/register', {  // Specify the auth server's port
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const result = await response.text();
        document.getElementById('message').innerText = result;
    });

    // Add event listener for the login form
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const response = await fetch('http://localhost:3002/login', {  // Specify the auth server's port
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const result = await response.text();
        document.getElementById('message').innerText = result;
    });

    // Add event listener for the logout button
    document.getElementById('logoutButton').addEventListener('click', async () => {
        const response = await fetch('http://localhost:3002/logout', {  // Specify the auth server's port
            method: 'POST'
        });

        const result = await response.text();
        document.getElementById('message').innerText = result;
    });
});
