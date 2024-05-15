document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('http://localhost:3000/getuser')  // URL to your backend endpoint
        .then(response => response.json())
        .then(data => {
            document.getElementById('userName').textContent = data.name;
            document.getElementById('userEmail').textContent = data.email;
            document.getElementById('userLocation').textContent = data.location;
        })
        .catch(error => console.error('Error fetching data: ', error));
});
