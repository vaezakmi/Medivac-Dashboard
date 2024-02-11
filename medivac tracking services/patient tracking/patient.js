// Wait for the DOM to load before initializing the map
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Leaflet map
    var map = L.map('map').setView([0, 0], 2); // Default to world view, adjust zoom level as needed

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Define the marker icon for patients
    var patientIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });

    // Example patient movement data (replace with actual data)
    var patientMovement = [
        { name: 'Patient A', movements: [[51.505, -0.09], [51.51, -0.1], [51.49, -0.1]] }, // Example movements for Patient A (London)
        { name: 'Patient B', movements: [[40.7128, -74.0060], [40.71, -74], [40.72, -74]] }, // Example movements for Patient B (New York)
        // Add more patient movement data as needed
    ];

    // Add polylines for patient movements
    patientMovement.forEach(patient => {
        var polyline = L.polyline(patient.movements, { color: 'red' }).addTo(map);
        L.marker(patient.movements[0], { icon: patientIcon }).bindPopup(patient.name).addTo(map);
    });
});