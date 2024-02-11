// Wait for the DOM to load before initializing the map
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Leaflet map
    var map = L.map('map').setView([0, 0], 2); // Default to world view, adjust zoom level as needed

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Example disease outbreak data (replace with actual data)
    var diseaseOutbreaks = [
        { name: 'Outbreak 1', latlng: [51.5, -0.1] }, // Example outbreak location 1
        { name: 'Outbreak 2', latlng: [40.71, -74.006] } // Example outbreak location 2
        // Add more disease outbreak data as needed
    ];

    // Add markers for disease outbreaks
    diseaseOutbreaks.forEach(outbreak => {
        L.marker(outbreak.latlng).bindPopup(outbreak.name).addTo(map);
    });
});