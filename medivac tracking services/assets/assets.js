// Initialize Leaflet map
var map = L.map('map').setView([0, 0], 2); // Default to world view, adjust zoom level as needed

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define the marker icon
var markerIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // URL to marker icon image
    iconSize: [25, 41], // Size of the icon [width, height]
    iconAnchor: [12, 41], // Point of the icon which corresponds to marker's location [x, y]
    popupAnchor: [1, -34] // Point from which the popup should open relative to the iconAnchor [x, y]
});

// Example marker data (replace with your actual asset data)
var assetData = [
    { name: 'Monitor 1', latlng: [51.505, -0.09] }, // Example London coordinates
    { name: 'Infusion Pump 1', latlng: [40.7128, -74.0060] }, // Example New York coordinates
    // Add more asset data as needed
];

// Add markers for each asset
assetData.forEach(asset => {
    // Create a marker at the specified latitude and longitude with the custom icon
    var marker = L.marker(asset.latlng, { icon: markerIcon });

    // Bind a popup with the asset name to the marker
    marker.bindPopup(asset.name);

    // Add the marker to the map
    marker.addTo(map);
});