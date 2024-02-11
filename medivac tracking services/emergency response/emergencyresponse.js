// Wait for the DOM to load before initializing the map
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Leaflet map
    var map = L.map('map').setView([0, 0], 2); // Default to world view, adjust zoom level as needed

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Example evacuation routes (replace with actual data)
    var evacuationRoutes = [
        [[51.505, -0.09], [51.51, -0.1], [51.49, -0.1]], // Example evacuation route 1
        [[40.7128, -74.0060], [40.71, -74], [40.72, -74]] // Example evacuation route 2
        // Add more evacuation routes as needed
    ];

    // Example medical supply locations (replace with actual data)
    var medicalSupplyLocations = [
        { name: 'Medical Supply Station 1', latlng: [51.5, -0.1] }, // Example location 1
        { name: 'Medical Supply Station 2', latlng: [40.71, -74.006] } // Example location 2
        // Add more medical supply locations as needed
    ];

    // Add polylines for evacuation routes
    evacuationRoutes.forEach(route => {
        L.polyline(route, { color: 'blue' }).addTo(map);
    });

    // Add markers for medical supply locations
    medicalSupplyLocations.forEach(location => {
        L.marker(location.latlng).bindPopup(location.name).addTo(map);
    });
});